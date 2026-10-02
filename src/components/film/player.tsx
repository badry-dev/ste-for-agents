import { useEffect, useRef, useState, type ReactNode } from "react";
import { Captions, List, Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { SCENES, TOTAL, captionAt, frameAt, offsetOf } from "@/film/timeline";
import { Stage } from "@/components/film/stage";

function formatTime(seconds: number): string {
  const whole = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(whole / 60);
  const rest = whole % 60;
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
}

export function FilmPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wantPlay = useRef(false);
  const pending = useRef<number | null>(null);
  const rateRef = useRef(1);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(true);
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const [rate, setRate] = useState(1);

  const scene = SCENES[sceneIndex];
  const frame = frameAt(scene, started ? time : 0);
  const caption = captionAt(scene, time);
  const global = offsetOf(sceneIndex) + time;

  useEffect(() => {
    rateRef.current = rate;
    if (audioRef.current) audioRef.current.playbackRate = rate;
  }, [rate]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const seekTo = pending.current;
    const run = () => {
      audio.playbackRate = rateRef.current;
      if (seekTo != null && Number.isFinite(audio.duration)) {
        audio.currentTime = Math.min(seekTo, Math.max(0, audio.duration - 0.05));
      }
      pending.current = null;
      if (wantPlay.current) {
        void audio.play().catch(() => {
          wantPlay.current = false;
          setPlaying(false);
        });
      }
    };
    if (audio.readyState >= 1) run();
    else audio.addEventListener("loadedmetadata", run, { once: true });
    return () => audio.removeEventListener("loadedmetadata", run);
  }, [sceneIndex]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (motion.matches) video.pause();
      else void video.play().catch(() => undefined);
    };
    apply();
    motion.addEventListener("change", apply);
    return () => motion.removeEventListener("change", apply);
  }, [scene.broll]);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (finished) {
      pending.current = 0;
      wantPlay.current = true;
      setFinished(false);
      setStarted(true);
      setTime(0);
      if (sceneIndex !== 0) setSceneIndex(0);
      else {
        audio.currentTime = 0;
        void audio.play().catch(() => {
          wantPlay.current = false;
          setPlaying(false);
        });
      }
      return;
    }
    if (!audio.paused) {
      wantPlay.current = false;
      audio.pause();
      return;
    }
    wantPlay.current = true;
    setStarted(true);
    void audio.play().catch(() => {
      wantPlay.current = false;
      setPlaying(false);
    });
  }

  function goTo(index: number) {
    const next = Math.max(0, Math.min(SCENES.length - 1, index));
    pending.current = 0;
    wantPlay.current = true;
    setFinished(false);
    setStarted(true);
    setTime(0);
    setChaptersOpen(false);
    if (next === sceneIndex) {
      pending.current = null;
      const audio = audioRef.current;
      if (!audio) return;
      audio.currentTime = 0;
      void audio.play().catch(() => {
        wantPlay.current = false;
        setPlaying(false);
      });
      return;
    }
    setSceneIndex(next);
  }

  function seekGlobal(value: number) {
    let acc = 0;
    for (let i = 0; i < SCENES.length; i += 1) {
      const span = SCENES[i].duration;
      if (value <= acc + span || i === SCENES.length - 1) {
        const local = Math.max(0, Math.min(span - 0.05, value - acc));
        pending.current = local;
        setFinished(false);
        setStarted(true);
        setTime(local);
        if (i !== sceneIndex) setSceneIndex(i);
        else {
          pending.current = null;
          if (audioRef.current) audioRef.current.currentTime = local;
        }
        return;
      }
      acc += span;
    }
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
      if (event.code === "Space" && target.tagName !== "BUTTON") {
        event.preventDefault();
        toggle();
      } else if (event.code === "ArrowRight") {
        event.preventDefault();
        goTo(sceneIndex + 1);
      } else if (event.code === "ArrowLeft") {
        event.preventDefault();
        if (time > 2) seekGlobal(offsetOf(sceneIndex));
        else goTo(sceneIndex - 1);
      } else if (event.key === "c" || event.key === "C") {
        setCaptionsOn((value) => !value);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <main className="flex h-dvh flex-col overflow-hidden bg-ink text-paper">
      <div className="caution-stripe" aria-hidden="true" />
      <header className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <p className="font-mono text-xs tracking-widest text-amber">STE for agents</p>
          <p className="truncate font-mono text-xs text-paper-dim">
            {String(sceneIndex + 1).padStart(2, "0")} {scene.chapter}
          </p>
        </div>
        <p className="shrink-0 font-mono text-xs text-paper-dim">Issue 9</p>
      </header>

      <section className="relative min-h-0 flex-1" aria-label="Film picture">
        <video
          ref={videoRef}
          key={scene.broll}
          className="absolute inset-0 h-full w-full object-cover"
          src={`/broll/${scene.broll}.mp4`}
          muted
          loop
          playsInline
          autoPlay
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/70" />
        <div className="relative flex h-full min-h-0 flex-col">
          <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto px-4 py-3">
            <Stage view={started ? frame.view : { kind: "question" }} />
          </div>
          {captionsOn && started ? (
            <p
              className="mx-4 mb-3 max-h-24 overflow-auto bg-ink/85 px-3 py-2 text-center text-sm text-pretty text-paper"
              aria-live="polite"
            >
              {caption.text}
            </p>
          ) : null}
          {!started ? (
            <div className="flex justify-center px-4 pb-4">
              <button
                type="button"
                onClick={toggle}
                className="flex min-h-11 items-center gap-3 bg-amber px-5 py-3 font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                <Play className="h-5 w-5 fill-current" aria-hidden="true" />
                Play the film
                <span className="font-mono text-xs">{formatTime(TOTAL)}</span>
              </button>
            </div>
          ) : null}
        </div>
      </section>

      <div className="border-t border-line bg-ink">
        {chaptersOpen ? (
          <div className="flex gap-2 overflow-x-auto px-3 pt-3">
            {SCENES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                className={
                  index === sceneIndex
                    ? "min-h-11 shrink-0 bg-paper px-3 font-mono text-xs text-ink"
                    : "min-h-11 shrink-0 border border-line bg-ink-2 px-3 font-mono text-xs text-paper"
                }
                aria-current={index === sceneIndex ? "true" : undefined}
              >
                {String(index + 1).padStart(2, "0")} {item.chapter}
              </button>
            ))}
          </div>
        ) : null}
        <label className="block px-3 pt-3">
          <span className="sr-only">Seek in the film</span>
          <input
            className="w-full accent-amber"
            type="range"
            min={0}
            max={TOTAL}
            step={0.1}
            value={Math.min(global, TOTAL)}
            onChange={(event) => seekGlobal(Number(event.target.value))}
            suppressHydrationWarning
          />
        </label>
        <div className="flex items-center gap-1 px-2 pb-3">
          <Control label="Previous chapter" onClick={() => goTo(sceneIndex - 1)}>
            <SkipBack className="h-5 w-5" aria-hidden="true" />
          </Control>
          <button
            type="button"
            onClick={toggle}
            aria-label={finished ? "Play again" : playing ? "Pause" : "Play"}
            className="flex h-12 w-12 items-center justify-center bg-amber text-ink transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            {playing && !finished ? (
              <Pause className="h-5 w-5 fill-current" aria-hidden="true" />
            ) : (
              <Play className="h-5 w-5 fill-current" aria-hidden="true" />
            )}
          </button>
          <Control label="Next chapter" onClick={() => goTo(sceneIndex + 1)}>
            <SkipForward className="h-5 w-5" aria-hidden="true" />
          </Control>
          <p className="ml-2 font-mono text-xs tabular-nums text-paper-dim">
            {formatTime(global)} / {formatTime(TOTAL)}
          </p>
          <span className="flex-1" />
          <Control
            label={captionsOn ? "Hide captions" : "Show captions"}
            pressed={captionsOn}
            onClick={() => setCaptionsOn((value) => !value)}
          >
            <Captions className="h-5 w-5" aria-hidden="true" />
          </Control>
          <button
            type="button"
            onClick={() => setRate((value) => (value === 1 ? 1.25 : 1))}
            aria-label={`Playback speed ${rate === 1 ? "1" : "1.25"} times. Change speed.`}
            className="flex min-h-11 min-w-11 items-center justify-center px-2 font-mono text-xs text-paper transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            {rate === 1 ? "1×" : "1.25×"}
          </button>
          <Control
            label={chaptersOpen ? "Hide chapters" : "Show chapters"}
            pressed={chaptersOpen}
            onClick={() => setChaptersOpen((value) => !value)}
          >
            <List className="h-5 w-5" aria-hidden="true" />
          </Control>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={scene.audio}
        preload="auto"
        onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
        onPlay={() => setPlaying(true)}
        onPause={() => {
          if (!wantPlay.current) setPlaying(false);
        }}
        onEnded={() => {
          if (sceneIndex < SCENES.length - 1) {
            wantPlay.current = true;
            pending.current = 0;
            setTime(0);
            setSceneIndex(sceneIndex + 1);
          } else {
            wantPlay.current = false;
            setFinished(true);
            setPlaying(false);
          }
        }}
      />
    </main>
  );
}

function Control({
  label,
  onClick,
  pressed,
  children,
}: {
  label: string;
  onClick: () => void;
  pressed?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
      className={
        pressed
          ? "flex h-11 w-11 items-center justify-center text-amber transition-transform duration-150 ease-out active:scale-[0.96]"
          : "flex h-11 w-11 items-center justify-center text-paper transition-transform duration-150 ease-out active:scale-[0.96]"
      }
    >
      {children}
    </button>
  );
}
