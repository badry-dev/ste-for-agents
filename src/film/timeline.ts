export type View =
  | { kind: "question" }
  | { kind: "readers"; show: 1 | 2 }
  | { kind: "standard" }
  | { kind: "identity"; maintainer: boolean }
  | { kind: "origin"; edition: boolean }
  | { kind: "goals" }
  | { kind: "parts" }
  | { kind: "sections" }
  | { kind: "dictionary"; detail: boolean }
  | { kind: "technical" }
  | { kind: "rules-intro" }
  | { kind: "rule-name"; avoid: boolean }
  | { kind: "rule-length"; phase: 1 | 2 | 3 }
  | { kind: "rule-voice"; phase: 1 | 2 | 3 }
  | { kind: "rule-tense"; phase: 1 | 2 | 3 }
  | { kind: "rule-if"; phase: 1 | 2 }
  | { kind: "rule-verb"; phase: 1 | 2 | 3 }
  | { kind: "places"; active: 0 | 1 | 2 | 3 | 4 }
  | { kind: "bad"; show: boolean }
  | { kind: "good"; lines: 0 | 1 | 2 | 3 }
  | { kind: "why" }
  | { kind: "pattern"; step: 0 | 1 | 2 | 3 | 4 | 5 | 6 }
  | { kind: "close"; line: 1 | 2 | 3 | 4 };

export type Caption = { t: number; text: string };
export type Frame = { t: number; view: View };

export type Scene = {
  id: string;
  chapter: string;
  audio: string;
  broll: "hangar" | "cards" | "lab" | "cables";
  duration: number;
  captions: Caption[];
  frames: Frame[];
};

export const SCENES: Scene[] = [
  {
    id: "reader",
    chapter: "The reader",
    audio: "/narration/01-reader.mp3",
    broll: "hangar",
    duration: 20.32,
    captions: [
      { t: 0.1, text: "What if the next reader of your instructions cannot ask you what you meant?" },
      { t: 4.62, text: "In aircraft maintenance, that reader is a technician." },
      { t: 8.19, text: "In software today, that reader is often an AI agent." },
      {
        t: 12.51,
        text: "This film explains Simplified Technical English, ASD-STE100, and how to use it when you write for agents.",
      },
    ],
    frames: [
      { t: 0.1, view: { kind: "question" } },
      { t: 4.62, view: { kind: "readers", show: 1 } },
      { t: 8.19, view: { kind: "readers", show: 2 } },
      { t: 12.51, view: { kind: "standard" } },
    ],
  },
  {
    id: "standard",
    chapter: "The standard",
    audio: "/narration/02-what.mp3",
    broll: "hangar",
    duration: 32.87,
    captions: [
      { t: 0.1, text: "ASD-STE100 is a controlled language for technical English." },
      { t: 6.28, text: "The Aerospace and Defence Industries Association of Europe maintains it." },
      { t: 10.88, text: "It began in the 1980s as Simplified English for aircraft maintenance manuals." },
      { t: 16.36, text: "The current edition is Issue 9, dated 15 January 2025." },
      { t: 21.8, text: "The goal is simple." },
      { t: 23.3, text: "Each word has one approved meaning." },
      { t: 25.93, text: "Each instruction has one action." },
      {
        t: 28.35,
        text: "A reader who is not a native speaker of English can follow the text without a guess.",
      },
    ],
    frames: [
      { t: 0.1, view: { kind: "identity", maintainer: false } },
      { t: 6.28, view: { kind: "identity", maintainer: true } },
      { t: 10.88, view: { kind: "origin", edition: false } },
      { t: 16.36, view: { kind: "origin", edition: true } },
      { t: 21.8, view: { kind: "goals" } },
    ],
  },
  {
    id: "parts",
    chapter: "Two parts",
    audio: "/narration/03-parts.mp3",
    broll: "cards",
    duration: 37.03,
    captions: [
      { t: 0.08, text: "The specification has two parts." },
      { t: 2.64, text: "Part 1 has 53 writing rules, in nine sections." },
      {
        t: 6.88,
        text: "The sections run from word choice, through verbs and sentences, to procedures, safety text, and punctuation.",
      },
      { t: 14.27, text: "Part 2 is a dictionary." },
      { t: 16.17, text: "It approves 875 words." },
      {
        t: 19.05,
        text: "It also lists about 1,274 words that are not approved, and it gives an approved alternative for each one.",
      },
      { t: 26.71, text: "You may also use a technical name, when it fits a category in the specification." },
      { t: 31.55, text: "Computer science is one of those categories." },
      { t: 34.41, text: "Then you must use that same name every time." },
    ],
    frames: [
      { t: 0.08, view: { kind: "parts" } },
      { t: 2.64, view: { kind: "sections" } },
      { t: 14.27, view: { kind: "dictionary", detail: false } },
      { t: 16.17, view: { kind: "dictionary", detail: true } },
      { t: 26.71, view: { kind: "technical" } },
    ],
  },
  {
    id: "rules",
    chapter: "Six rules",
    audio: "/narration/04-rules.mp3",
    broll: "cables",
    duration: 46.64,
    captions: [
      { t: 0.14, text: "Six rules move cleanly into software work." },
      { t: 3.36, text: "Use one name for one thing." },
      { t: 5.58, text: "Do not call the same action check, then verify, then validate." },
      { t: 10.22, text: "Keep a procedure to 20 words." },
      { t: 12.56, text: "Keep a description to 25 words." },
      { t: 15.09, text: "Write one instruction in one sentence." },
      { t: 17.73, text: "Use the active voice, and name the actor." },
      { t: 20.41, text: "Write: the agent reads the file." },
      { t: 23.07, text: "Do not write: the file is read." },
      { t: 25.77, text: "Use a simple verb form." },
      { t: 27.41, text: "Write: the service received the request." },
      { t: 30.25, text: "Do not write: the service has received the request." },
      { t: 33.87, text: "Put the condition before the command." },
      { t: 36.11, text: "Write: if the test fails, read the log." },
      { t: 39.49, text: "Use a verb for the action." },
      { t: 41.1, text: "Write: examine the log." },
      { t: 43.24, text: "Do not write: perform an examination of the log." },
    ],
    frames: [
      { t: 0.14, view: { kind: "rules-intro" } },
      { t: 3.36, view: { kind: "rule-name", avoid: false } },
      { t: 5.58, view: { kind: "rule-name", avoid: true } },
      { t: 10.22, view: { kind: "rule-length", phase: 1 } },
      { t: 12.56, view: { kind: "rule-length", phase: 2 } },
      { t: 15.09, view: { kind: "rule-length", phase: 3 } },
      { t: 17.73, view: { kind: "rule-voice", phase: 1 } },
      { t: 20.41, view: { kind: "rule-voice", phase: 2 } },
      { t: 23.07, view: { kind: "rule-voice", phase: 3 } },
      { t: 25.77, view: { kind: "rule-tense", phase: 1 } },
      { t: 27.41, view: { kind: "rule-tense", phase: 2 } },
      { t: 30.25, view: { kind: "rule-tense", phase: 3 } },
      { t: 33.87, view: { kind: "rule-if", phase: 1 } },
      { t: 36.11, view: { kind: "rule-if", phase: 2 } },
      { t: 39.49, view: { kind: "rule-verb", phase: 1 } },
      { t: 41.1, view: { kind: "rule-verb", phase: 2 } },
      { t: 43.24, view: { kind: "rule-verb", phase: 3 } },
    ],
  },
  {
    id: "places",
    chapter: "Four places",
    audio: "/narration/05-places.mp3",
    broll: "lab",
    duration: 37.83,
    captions: [
      { t: 0.18, text: "Use these rules in four places." },
      { t: 2.56, text: "First, the system prompt. It is a procedure." },
      { t: 6.16, text: "Use short sentences, and name the actor. Do not add a slogan." },
      { t: 10.68, text: "Second, the tool description. The model selects a tool from that text." },
      { t: 15.38, text: "If two tools share a verb, the model will guess." },
      { t: 18.85, text: "Third, the message between agents." },
      { t: 21.47, text: "The next agent did not hear your meeting." },
      { t: 23.99, text: "Write the facts, the names, and the next action." },
      { t: 27.43, text: "Fourth, the test of expected behavior." },
      { t: 30.37, text: "Write the pass condition as an instruction you can check." },
      { t: 33.75, text: "The agent writes the file. The agent does not delete other files." },
    ],
    frames: [
      { t: 0.18, view: { kind: "places", active: 0 } },
      { t: 2.56, view: { kind: "places", active: 1 } },
      { t: 10.68, view: { kind: "places", active: 2 } },
      { t: 18.85, view: { kind: "places", active: 3 } },
      { t: 27.43, view: { kind: "places", active: 4 } },
    ],
  },
  {
    id: "rewrite",
    chapter: "A rewrite",
    audio: "/narration/06-rewrite.mp3",
    broll: "cables",
    duration: 33.99,
    captions: [
      { t: 0.08, text: "Here is a prompt in ordinary technical English." },
      {
        t: 3.38,
        text: "You should leverage available tooling to facilitate a full check of user input prior to starting the next process, and make sure bad payloads are handled in an appropriate way.",
      },
      { t: 14.46, text: "Here is the same prompt in the spirit of Simplified Technical English." },
      { t: 18.87, text: "Examine the user input before the next task." },
      { t: 21.97, text: "If the input is not valid, write an error in the log." },
      { t: 25.65, text: "Do not start the next task." },
      { t: 27.89, text: "The second text names the action, the condition, and the stop." },
      { t: 31.97, text: "The first text hides all three." },
    ],
    frames: [
      { t: 0.08, view: { kind: "bad", show: false } },
      { t: 3.38, view: { kind: "bad", show: true } },
      { t: 14.46, view: { kind: "good", lines: 0 } },
      { t: 18.87, view: { kind: "good", lines: 1 } },
      { t: 21.97, view: { kind: "good", lines: 2 } },
      { t: 25.65, view: { kind: "good", lines: 3 } },
      { t: 27.89, view: { kind: "why" } },
    ],
  },
  {
    id: "pattern",
    chapter: "A pattern",
    audio: "/narration/07-pattern.mp3",
    broll: "lab",
    duration: 42.55,
    captions: [
      { t: 0.02, text: "Copy this pattern when you write for an agent." },
      { t: 2.86, text: "Role. You are the release agent for this repository." },
      { t: 7.64, text: "Goal. You prepare the release notes from the merged changes." },
      { t: 12.74, text: "Steps. One command each." },
      { t: 15.02, text: "Read the merged changes." },
      { t: 16.76, text: "Write one note for each change." },
      { t: 19.0, text: "Use the same component name that the code uses." },
      { t: 21.97, text: "Stop rule. If a change has no description, stop and ask." },
      { t: 26.65, text: "Glossary. One name, one meaning." },
      { t: 29.49, text: "Do not add a second name for the same thing." },
      { t: 32.39, text: "This pattern is not the official dictionary." },
      { t: 35.03, text: "The dictionary is a licensed part of the specification." },
      { t: 38.53, text: "This film teaches the writing rules. It does not copy the word list." },
    ],
    frames: [
      { t: 0.02, view: { kind: "pattern", step: 0 } },
      { t: 2.86, view: { kind: "pattern", step: 1 } },
      { t: 7.64, view: { kind: "pattern", step: 2 } },
      { t: 12.74, view: { kind: "pattern", step: 3 } },
      { t: 21.97, view: { kind: "pattern", step: 4 } },
      { t: 26.65, view: { kind: "pattern", step: 5 } },
      { t: 32.39, view: { kind: "pattern", step: 6 } },
    ],
  },
  {
    id: "close",
    chapter: "The point",
    audio: "/narration/08-close.mp3",
    broll: "hangar",
    duration: 16.39,
    captions: [
      { t: 0.14, text: "Simplified Technical English does not make a model smarter." },
      { t: 4.06, text: "It removes the sentence that lets the model choose the wrong meaning." },
      { t: 8.02, text: "Write the next instruction as if the reader cannot ask you a question." },
      { t: 12.31, text: "A technician on the line cannot. An AI agent cannot either." },
    ],
    frames: [
      { t: 0.14, view: { kind: "close", line: 1 } },
      { t: 4.06, view: { kind: "close", line: 2 } },
      { t: 8.02, view: { kind: "close", line: 3 } },
      { t: 12.31, view: { kind: "close", line: 4 } },
    ],
  },
];

export const TOTAL = SCENES.reduce((sum, scene) => sum + scene.duration, 0);

export function frameAt(scene: Scene, time: number): Frame {
  let frame = scene.frames[0];
  for (const candidate of scene.frames) {
    if (candidate.t <= time + 0.04) frame = candidate;
  }
  return frame;
}

export function captionAt(scene: Scene, time: number): Caption {
  let caption = scene.captions[0];
  for (const candidate of scene.captions) {
    if (candidate.t <= time + 0.04) caption = candidate;
  }
  return caption;
}

export function offsetOf(index: number): number {
  let sum = 0;
  for (let i = 0; i < index; i += 1) sum += SCENES[i].duration;
  return sum;
}
