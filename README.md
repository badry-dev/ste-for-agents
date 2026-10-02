# STE for Agents

**STE for Agents** is a short, interactive explainer film about ASD-STE100
Simplified Technical English and how its writing principles can make
instructions for AI agents clearer. It connects the standard's focus on one
meaning per word and one action per instruction with practical writing for
system prompts, tool descriptions, agent handoffs, and tests.

The film is an educational introduction, not an official ASD publication or a
certified check against the licensed ASD-STE100 dictionary. Its examples are
original. Refer to the official specification for authoritative rules and
word-list decisions.

## The film

The film is approximately 4 minutes 28 seconds long and has eight chapters:

1. **The reader** — why instructions must work for readers who cannot ask a
   follow-up question.
2. **The standard** — what ASD-STE100 is, where it came from, and its goal.
3. **Two parts** — the writing rules and dictionary, plus the role of
   consistent technical names.
4. **Six rules** — use one name consistently, keep sentences short, use the
   active voice, use simple verb forms, put conditions before commands, and
   express actions with verbs.
5. **Four places** — apply clear writing to system prompts, tool descriptions,
   agent handoffs, and tests.
6. **A rewrite** — turn a vague instruction into short, explicit actions with
   a condition and a stop rule.
7. **A pattern** — organize agent instructions into a role, goal, steps, stop
   rule, and glossary.
8. **The point** — reduce ambiguity for the next reader.

The narration and captions are synchronized with illustrated cards and
looping background footage. The player follows the system's reduced-motion
preference by pausing the background video.

## Use the player

- Select **Play the film** to start. The player advances through the chapters
  automatically.
- Use the play/pause, previous chapter, and next chapter controls, or drag the
  timeline to seek.
- Open the chapter list to jump directly to a chapter.
- Toggle captions on or off. Captions are on by default.
- Change playback speed between **1×** and **1.25×**.
- Keyboard shortcuts: **Space** toggles playback, **← / →** moves between
  chapters (← returns to the current chapter's start if playback is more than
  two seconds in), and **C** toggles captions.

## Run locally

Use Node.js 22 and npm.

```sh
npm ci
npm run dev
```

Open `http://localhost:8080` in a browser. The development server binds to
`0.0.0.0:8080`.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/components/film/player.tsx` | Playback state, audio/video synchronization, controls, seeking, and keyboard shortcuts. |
| `src/components/film/stage.tsx` | Renders the visual cards for each timed scene. |
| `src/film/timeline.ts` | Scene order, narration and caption timings, visual states, and chapter durations. |
| `src/routes/` | TanStack Start document shell and application route. |
| `src/styles.css` | Global styles and Tailwind CSS setup. |
| `public/narration/` | Narration audio tracks, one per chapter. |
| `public/broll/` | Looping background video assets. |
| `scripts/` | Build, migration, preview, PWA, and test-support scripts. |
| `server/` | Server middleware used by the PWA and install experience. |

To update the film's sequence, timing, or captions, edit `src/film/timeline.ts`.
Keep each scene's audio path, duration, captions, and visual frame timings in
sync. The visual states for those frames are implemented in
`src/components/film/stage.tsx`. Replace or add media in `public/narration/`
and `public/broll/`, then update the corresponding paths in the timeline.

## Validation and build

Run the checks available in the project:

```sh
npm test
npm run typecheck
npm run lint
npm run build
```

`npm test` runs the Node-based script and library tests. `npm run build`
creates the production build and then runs the database migration script.
Migrations are applied when `DATABASE_URL` is configured and pending migration
files are present; without `DATABASE_URL`, the migration script skips the
remote database.

Other useful scripts:

| Command | Purpose |
| --- | --- |
| `npm run build:dev` | Build with Vite's development mode. |
| `npm run check:auth` | Check the repository's authentication invariants. |
| `npm run db:migrate` | Apply pending migrations when `DATABASE_URL` is set. |
| `npm run preview:restart` | Restart the local production preview. |
| `npm run preview:stop` | Stop the local production preview. |

The production build is configured for Vercel in `vite.config.ts`. The Vercel
install command omits development dependencies; the project scripts provide
the configured Vite and deployment workflow.

## Technology

- React 19 and TypeScript
- TanStack Start and TanStack Router
- Vite 8
- Tailwind CSS 4
- Lucide icons

