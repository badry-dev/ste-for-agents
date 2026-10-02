import type { ReactNode } from "react";
import type { View } from "@/film/timeline";

const SECTIONS: { n: string; name: string; count: string }[] = [
  { n: "01", name: "Words", count: "14" },
  { n: "02", name: "Noun groups", count: "2" },
  { n: "03", name: "Verbs", count: "7" },
  { n: "04", name: "Sentences", count: "5" },
  { n: "05", name: "Procedures", count: "5" },
  { n: "06", name: "Description", count: "6" },
  { n: "07", name: "Safety", count: "3" },
  { n: "08", name: "Punctuation", count: "7" },
  { n: "09", name: "Practice", count: "4" },
];

const PLACES: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "System prompt",
    body: "It is a procedure. Short sentences. Name the actor. No slogan.",
  },
  {
    n: "02",
    title: "Tool description",
    body: "The model selects a tool from this text. If two tools share a verb, it will guess.",
  },
  {
    n: "03",
    title: "Handoff",
    body: "The next agent did not hear the meeting. Write the facts, the names, and the next action.",
  },
  {
    n: "04",
    title: "Test",
    body: "Write a pass condition you can check.",
  },
];

const STEPS = [
  "Read the merged changes.",
  "Write one note for each change.",
  "Use the same component name that the code uses.",
];

export function Stage({ view }: { view: View }) {
  return (
    <div key={view.kind} className="film-card w-full max-w-xl">
      {renderView(view)}
    </div>
  );
}

function renderView(view: View) {
  switch (view.kind) {
    case "question":
      return (
        <Hero
          kicker="An explainer"
          title="What if the next reader cannot ask?"
          deck="The instruction has one chance. There is no follow-up question."
        />
      );
    case "readers":
      return (
        <Plate kicker="Same constraint">
          <h2 className="text-2xl font-medium leading-tight text-balance text-paper sm:text-3xl">
            The reader who cannot ask
          </h2>
          <ul className="mt-4 grid gap-2">
            <Reader
              on
              label="Technician"
              text="Maintenance text. Often not their first language."
            />
            <Reader
              on={view.show === 2}
              label="AI agent"
              text="A model. It cannot ask which meaning you chose."
            />
          </ul>
        </Plate>
      );
    case "standard":
      return (
        <Hero
          kicker="ASD-STE100"
          title="Simplified Technical English"
          deck="A controlled language. This film shows how to use it when you write for agents."
        />
      );
    case "identity":
      return (
        <Plate kicker="The specification">
          <p className="font-mono text-xs tracking-widest text-amber">ASD-STE100</p>
          <h2 className="mt-2 text-2xl font-medium leading-tight text-balance text-paper sm:text-3xl">
            Controlled technical English
          </h2>
          {view.maintainer ? (
            <p className="mt-3 text-pretty text-paper-dim">
              ASD maintains it. ASD is the Aerospace and Defence Industries Association of Europe.
            </p>
          ) : (
            <p className="mt-3 text-pretty text-paper-dim">
              One approved meaning for each word in the dictionary. One action in each instruction.
            </p>
          )}
        </Plate>
      );
    case "origin":
      return (
        <Plate kicker="Where it comes from">
          <ol className="grid gap-3">
            <li className="border-l-2 border-amber pl-3">
              <p className="font-mono text-xs text-amber">1980s</p>
              <p className="mt-1 text-paper">
                Simplified English, written for aircraft maintenance manuals.
              </p>
            </li>
            <li className={view.edition ? "border-l-2 border-amber pl-3" : "border-l-2 border-line pl-3"}>
              <p className="font-mono text-xs text-amber">15 January 2025</p>
              <p className="mt-1 text-paper">
                {view.edition ? "Issue 9. This is the current edition." : "The specification is still revised."}
              </p>
            </li>
          </ol>
        </Plate>
      );
    case "goals":
      return (
        <Plate kicker="The goal">
          <ul className="grid gap-3">
            <Goal n="01" text="Each word has one approved meaning." />
            <Goal n="02" text="Each instruction has one action." />
            <Goal n="03" text="The reader follows the text without a guess." />
          </ul>
        </Plate>
      );
    case "parts":
      return (
        <Plate kicker="Structure">
          <h2 className="text-2xl font-medium text-paper">Two parts</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <Stat n="Part 1" label="Writing rules" />
            <Stat n="Part 2" label="Dictionary" />
          </div>
        </Plate>
      );
    case "sections":
      return (
        <Plate kicker="Part 1 · 53 rules">
          <h2 className="text-xl font-medium text-paper">Nine sections</h2>
          <ol className="mt-3 grid grid-cols-3 gap-2">
            {SECTIONS.map((section) => (
              <li key={section.n} className="bg-ink-2 px-2 py-2">
                <p className="font-mono text-xs text-amber">{section.n}</p>
                <p className="mt-1 text-sm leading-tight text-paper">{section.name}</p>
                <p className="font-mono text-xs text-paper-dim">{section.count}</p>
              </li>
            ))}
          </ol>
        </Plate>
      );
    case "dictionary":
      return (
        <Plate kicker="Part 2 · Dictionary">
          <h2 className="text-xl font-medium text-paper">Approved words, and the rest</h2>
          {view.detail ? (
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Stat n="875" label="Approved words" />
              <Stat n="~1,274" label="Not approved, each with an alternative" />
            </div>
          ) : (
            <p className="mt-3 text-pretty text-paper-dim">
              The dictionary gives the words you may use, and a replacement for the words you may not.
            </p>
          )}
        </Plate>
      );
    case "technical":
      return (
        <Plate kicker="Technical names">
          <h2 className="text-xl font-medium leading-tight text-balance text-paper">
            A project name is allowed. Then it stays the same name.
          </h2>
          <p className="mt-3 text-pretty text-paper-dim">
            Computer science is one category in the specification. Define the name once. Do not add a second name for the same thing.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {["agent", "token", "repository"].map((word) => (
              <li key={word} className="bg-ink-2 px-3 py-2 font-mono text-sm text-paper">
                {word}
              </li>
            ))}
          </ul>
          <p className="mt-3 font-mono text-xs text-paper-dim">Examples you would define. Not a dictionary entry.</p>
        </Plate>
      );
    case "rules-intro":
      return (
        <Hero
          kicker="From the manual to the repo"
          title="Six rules that move into software"
          deck="Same limits. A shorter sentence. A named actor. One verb."
        />
      );
    case "rule-name":
      return (
        <Rule n="01" title="One name for one thing.">
          <p className="text-pretty text-ink/80">Pick one verb. Use that verb every time.</p>
          {view.avoid ? (
            <p className="mt-3 bg-ink px-3 py-3 font-mono text-sm text-paper">
              Do not rotate check, verify, and validate for the same action.
            </p>
          ) : null}
        </Rule>
      );
    case "rule-length":
      return (
        <Rule n="02" title="Keep the sentence short.">
          <ul className="grid gap-2">
            <Limit on label="Procedure" value="20 words" />
            <Limit on={view.phase >= 2} label="Description" value="25 words" />
            <Limit on={view.phase >= 3} label="Also" value="One instruction in one sentence" />
          </ul>
        </Rule>
      );
    case "rule-voice":
      return (
        <Rule n="03" title="Active voice. Name the actor.">
          {view.phase >= 2 ? <Good text="The agent reads the file." /> : null}
          {view.phase >= 3 ? <Bad text="The file is read." /> : null}
          {view.phase < 2 ? (
            <p className="text-ink/80">Say who does the action. A passive sentence hides the actor.</p>
          ) : null}
        </Rule>
      );
    case "rule-tense":
      return (
        <Rule n="04" title="Use a simple verb form.">
          {view.phase >= 2 ? <Good text="The service received the request." /> : null}
          {view.phase >= 3 ? <Bad text="The service has received the request." /> : null}
          {view.phase < 2 ? (
            <p className="text-ink/80">Write the simple past. Do not use the present perfect.</p>
          ) : null}
        </Rule>
      );
    case "rule-if":
      return (
        <Rule n="05" title="Put the condition before the command.">
          {view.phase >= 2 ? <Good text="If the test fails, read the log." /> : (
            <p className="text-ink/80">The reader sees the test first, then the action.</p>
          )}
        </Rule>
      );
    case "rule-verb":
      return (
        <Rule n="06" title="Use a verb for the action.">
          {view.phase >= 2 ? <Good text="Examine the log." /> : null}
          {view.phase >= 3 ? <Bad text="Perform an examination of the log." /> : null}
          {view.phase < 2 ? (
            <p className="text-ink/80">Do not hide the action inside a noun.</p>
          ) : null}
        </Rule>
      );
    case "places":
      return (
        <Plate kicker="Where to use it">
          <h2 className="text-xl font-medium text-paper">Four places in an agent system</h2>
          <ol className="mt-3 grid gap-2">
            {PLACES.map((place, index) => {
              const on = view.active === index + 1;
              const dim = view.active !== 0 && !on;
              return (
                <li
                  key={place.n}
                  className={
                    on
                      ? "border-l-2 border-amber bg-ink-2 px-3 py-2"
                      : "border-l-2 border-line px-3 py-2"
                  }
                >
                  <p className={dim ? "text-paper-dim" : "text-paper"}>
                    <span className="font-mono text-xs text-amber">{place.n} </span>
                    {place.title}
                  </p>
                  {on ? <p className="mt-1 text-sm text-pretty text-paper-dim">{place.body}</p> : null}
                  {on && place.n === "04" ? (
                    <ul className="mt-2 grid gap-1 font-mono text-sm text-paper">
                      <li>The agent writes the file.</li>
                      <li>The agent does not delete other files.</li>
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </Plate>
      );
    case "bad":
      return (
        <Plate kicker="Before">
          <h2 className="text-xl font-medium text-paper">Ordinary technical English</h2>
          {view.show ? (
            <p className="mt-3 text-pretty leading-relaxed text-paper">
              You should <Mark>leverage</Mark> available tooling to <Mark>facilitate</Mark> a full check of
              user input <Mark>prior to</Mark> starting the next process, and make sure bad payloads are
              handled <Mark>in an appropriate way</Mark>.
            </p>
          ) : (
            <p className="mt-3 text-paper-dim">A prompt a team might ship today.</p>
          )}
        </Plate>
      );
    case "good":
      return (
        <article className="bg-paper text-ink shadow-2xl">
          <div className="h-1 bg-signal" />
          <div className="px-5 py-4 sm:px-6 sm:py-5">
            <p className="font-mono text-xs tracking-widest text-signal">In the spirit of STE</p>
            <h2 className="mt-2 text-xl font-medium leading-tight text-balance">
              Same prompt. Three sentences.
            </h2>
            <ol className="mt-3 grid gap-2">
              {GOOD_LINES.slice(0, view.lines).map((line, index) => (
                <li key={line} className="flex gap-3 bg-ink/5 px-3 py-2">
                  <span className="font-mono text-xs text-signal">0{index + 1}</span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
            {view.lines === 0 ? (
              <p className="mt-3 text-sm text-ink/70">The lines follow as the narrator reads them.</p>
            ) : null}
          </div>
        </article>
      );
    case "why":
      return (
        <Plate kicker="What changed">
          <h2 className="text-xl font-medium leading-tight text-balance text-paper">
            The second text names the action, the condition, and the stop.
          </h2>
          <p className="mt-3 text-pretty text-paper-dim">The first text hides all three.</p>
          <p className="mt-4 font-mono text-xs text-paper-dim">
            A rewrite in the spirit of the rules. Not a certified check against the licensed dictionary.
          </p>
        </Plate>
      );
    case "pattern":
      return <Pattern step={view.step} />;
    case "close":
      return (
        <Hero
          kicker={view.line === 4 ? "The same reader" : "The point"}
          title={CLOSE[view.line - 1]}
          deck={
            view.line === 4
              ? "A technician on the line cannot ask. An AI agent cannot either."
              : undefined
          }
          note={
            view.line === 4
              ? "ASD-STE100 Issue 9, 15 January 2025. 53 rules. 875 approved words. About 1,274 words that are not approved. This film is not an ASD publication. The examples are original."
              : undefined
          }
        />
      );
    default:
      return null;
  }
}

const GOOD_LINES = [
  "Examine the user input before the next task.",
  "If the input is not valid, write an error in the log.",
  "Do not start the next task.",
];

const CLOSE = [
  "STE does not make a model smarter.",
  "It removes the sentence that lets the model choose the wrong meaning.",
  "Write the next instruction as if the reader cannot ask.",
  "Write as if they cannot ask.",
];

function Pattern({ step }: { step: 0 | 1 | 2 | 3 | 4 | 5 | 6 }) {
  return (
    <article className="max-h-full overflow-auto bg-paper text-ink shadow-2xl">
      <div className="h-1 bg-amber" />
      <div className="px-5 py-4 sm:px-6 sm:py-5">
        <p className="font-mono text-xs tracking-widest text-ink/60">Copy this pattern</p>
        <h2 className="mt-2 text-xl font-medium leading-tight text-balance">
          Instructions for an agent
        </h2>
        {step >= 1 ? (
          <Block label="Role" text="You are the release agent for this repository." />
        ) : null}
        {step >= 2 ? (
          <Block label="Goal" text="You prepare the release notes from the merged changes." />
        ) : null}
        {step >= 3 ? (
          <div className="mt-3">
            <p className="font-mono text-xs tracking-widest text-signal">Steps</p>
            <ol className="mt-1 grid gap-1">
              {STEPS.map((line, index) => (
                <li key={line} className="flex gap-2 text-sm">
                  <span className="font-mono text-xs text-signal">{index + 1}</span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
        {step >= 4 ? (
          <Block label="Stop" text="If a change has no description, stop and ask." />
        ) : null}
        {step >= 5 ? (
          <Block label="Glossary" text="One name. One meaning. Do not add a second name." />
        ) : null}
        {step >= 6 ? (
          <p className="mt-3 text-xs leading-relaxed text-ink/70">
            This pattern is not the official dictionary. The dictionary is licensed with the specification. This film teaches the writing rules. It does not copy the word list.
          </p>
        ) : null}
      </div>
    </article>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-3">
      <p className="font-mono text-xs tracking-widest text-signal">{label}</p>
      <p className="mt-1 text-sm text-pretty">{text}</p>
    </div>
  );
}

function Hero({
  kicker,
  title,
  deck,
  note,
}: {
  kicker: string;
  title: string;
  deck?: string;
  note?: string;
}) {
  return (
    <div className="bg-ink/80 px-5 py-5 backdrop-blur-sm sm:px-6">
      <p className="font-mono text-xs tracking-widest text-amber">{kicker}</p>
      <h2 className="mt-3 text-3xl font-medium leading-tight text-balance text-paper sm:text-4xl">
        {title}
      </h2>
      {deck ? <p className="mt-3 max-w-lg text-pretty text-paper-dim">{deck}</p> : null}
      {note ? <p className="mt-4 text-xs leading-relaxed text-paper-dim">{note}</p> : null}
    </div>
  );
}

function Plate({ kicker, children }: { kicker: string; children: ReactNode }) {
  return (
    <article className="max-h-full overflow-auto bg-ink/80 px-5 py-4 text-paper shadow-2xl backdrop-blur-sm sm:px-6 sm:py-5">
      <p className="font-mono text-xs tracking-widest text-amber">{kicker}</p>
      <div className="mt-3">{children}</div>
    </article>
  );
}

function Rule({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <article className="bg-paper text-ink shadow-2xl">
      <div className="h-1 bg-amber" />
      <div className="px-5 py-4 sm:px-6 sm:py-5">
        <p className="font-mono text-xs tracking-widest text-ink/60">Rule {n} of 06</p>
        <h2 className="mt-2 text-xl font-medium leading-tight text-balance sm:text-2xl">{title}</h2>
        <div className="mt-3">{children}</div>
      </div>
    </article>
  );
}

function Reader({ on, label, text }: { on: boolean; label: string; text: string }) {
  return (
    <li className={on ? "border-l-2 border-amber bg-ink-2 px-3 py-3" : "border-l-2 border-line px-3 py-3"}>
      <p className={on ? "font-medium text-paper" : "text-paper-dim"}>{label}</p>
      {on ? <p className="mt-1 text-sm text-pretty text-paper-dim">{text}</p> : null}
    </li>
  );
}

function Goal({ n, text }: { n: string; text: string }) {
  return (
    <li className="flex gap-3 border-l-2 border-amber pl-3">
      <span className="font-mono text-xs text-amber">{n}</span>
      <span className="text-paper">{text}</span>
    </li>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="bg-ink-2 px-3 py-3">
      <p className="font-mono text-2xl text-amber">{n}</p>
      <p className="mt-1 text-sm text-pretty text-paper">{label}</p>
    </div>
  );
}

function Limit({ on, label, value }: { on: boolean; label: string; value: string }) {
  return (
    <li className={on ? "flex items-baseline justify-between gap-3 bg-ink px-3 py-2 text-paper" : "flex items-baseline justify-between gap-3 border border-line bg-paper px-3 py-2 text-ink"}>
      <span className="font-mono text-xs">{label}</span>
      <span className="text-sm">{value}</span>
    </li>
  );
}

function Good({ text }: { text: string }) {
  return (
    <p className="bg-signal px-3 py-2 text-paper">
      <span className="font-mono text-xs tracking-widest">Write </span>
      {text}
    </p>
  );
}

function Bad({ text }: { text: string }) {
  return (
    <p className="mt-2 bg-ink px-3 py-2 text-paper-dim">
      <span className="font-mono text-xs tracking-widest text-amber">Not </span>
      {text}
    </p>
  );
}

function Mark({ children }: { children: ReactNode }) {
  return <span className="text-amber underline decoration-amber decoration-2 underline-offset-2">{children}</span>;
}
