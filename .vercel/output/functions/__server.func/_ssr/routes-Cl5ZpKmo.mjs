import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Pause, i as Play, n as SkipForward, o as List, r as SkipBack, s as Captions } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cl5ZpKmo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SCENES = [
	{
		id: "reader",
		chapter: "The reader",
		audio: "/narration/01-reader.mp3",
		broll: "hangar",
		duration: 20.32,
		captions: [
			{
				t: .1,
				text: "What if the next reader of your instructions cannot ask you what you meant?"
			},
			{
				t: 4.62,
				text: "In aircraft maintenance, that reader is a technician."
			},
			{
				t: 8.19,
				text: "In software today, that reader is often an AI agent."
			},
			{
				t: 12.51,
				text: "This film explains Simplified Technical English, ASD-STE100, and how to use it when you write for agents."
			}
		],
		frames: [
			{
				t: .1,
				view: { kind: "question" }
			},
			{
				t: 4.62,
				view: {
					kind: "readers",
					show: 1
				}
			},
			{
				t: 8.19,
				view: {
					kind: "readers",
					show: 2
				}
			},
			{
				t: 12.51,
				view: { kind: "standard" }
			}
		]
	},
	{
		id: "standard",
		chapter: "The standard",
		audio: "/narration/02-what.mp3",
		broll: "hangar",
		duration: 32.87,
		captions: [
			{
				t: .1,
				text: "ASD-STE100 is a controlled language for technical English."
			},
			{
				t: 6.28,
				text: "The Aerospace and Defence Industries Association of Europe maintains it."
			},
			{
				t: 10.88,
				text: "It began in the 1980s as Simplified English for aircraft maintenance manuals."
			},
			{
				t: 16.36,
				text: "The current edition is Issue 9, dated 15 January 2025."
			},
			{
				t: 21.8,
				text: "The goal is simple."
			},
			{
				t: 23.3,
				text: "Each word has one approved meaning."
			},
			{
				t: 25.93,
				text: "Each instruction has one action."
			},
			{
				t: 28.35,
				text: "A reader who is not a native speaker of English can follow the text without a guess."
			}
		],
		frames: [
			{
				t: .1,
				view: {
					kind: "identity",
					maintainer: false
				}
			},
			{
				t: 6.28,
				view: {
					kind: "identity",
					maintainer: true
				}
			},
			{
				t: 10.88,
				view: {
					kind: "origin",
					edition: false
				}
			},
			{
				t: 16.36,
				view: {
					kind: "origin",
					edition: true
				}
			},
			{
				t: 21.8,
				view: { kind: "goals" }
			}
		]
	},
	{
		id: "parts",
		chapter: "Two parts",
		audio: "/narration/03-parts.mp3",
		broll: "cards",
		duration: 37.03,
		captions: [
			{
				t: .08,
				text: "The specification has two parts."
			},
			{
				t: 2.64,
				text: "Part 1 has 53 writing rules, in nine sections."
			},
			{
				t: 6.88,
				text: "The sections run from word choice, through verbs and sentences, to procedures, safety text, and punctuation."
			},
			{
				t: 14.27,
				text: "Part 2 is a dictionary."
			},
			{
				t: 16.17,
				text: "It approves 875 words."
			},
			{
				t: 19.05,
				text: "It also lists about 1,274 words that are not approved, and it gives an approved alternative for each one."
			},
			{
				t: 26.71,
				text: "You may also use a technical name, when it fits a category in the specification."
			},
			{
				t: 31.55,
				text: "Computer science is one of those categories."
			},
			{
				t: 34.41,
				text: "Then you must use that same name every time."
			}
		],
		frames: [
			{
				t: .08,
				view: { kind: "parts" }
			},
			{
				t: 2.64,
				view: { kind: "sections" }
			},
			{
				t: 14.27,
				view: {
					kind: "dictionary",
					detail: false
				}
			},
			{
				t: 16.17,
				view: {
					kind: "dictionary",
					detail: true
				}
			},
			{
				t: 26.71,
				view: { kind: "technical" }
			}
		]
	},
	{
		id: "rules",
		chapter: "Six rules",
		audio: "/narration/04-rules.mp3",
		broll: "cables",
		duration: 46.64,
		captions: [
			{
				t: .14,
				text: "Six rules move cleanly into software work."
			},
			{
				t: 3.36,
				text: "Use one name for one thing."
			},
			{
				t: 5.58,
				text: "Do not call the same action check, then verify, then validate."
			},
			{
				t: 10.22,
				text: "Keep a procedure to 20 words."
			},
			{
				t: 12.56,
				text: "Keep a description to 25 words."
			},
			{
				t: 15.09,
				text: "Write one instruction in one sentence."
			},
			{
				t: 17.73,
				text: "Use the active voice, and name the actor."
			},
			{
				t: 20.41,
				text: "Write: the agent reads the file."
			},
			{
				t: 23.07,
				text: "Do not write: the file is read."
			},
			{
				t: 25.77,
				text: "Use a simple verb form."
			},
			{
				t: 27.41,
				text: "Write: the service received the request."
			},
			{
				t: 30.25,
				text: "Do not write: the service has received the request."
			},
			{
				t: 33.87,
				text: "Put the condition before the command."
			},
			{
				t: 36.11,
				text: "Write: if the test fails, read the log."
			},
			{
				t: 39.49,
				text: "Use a verb for the action."
			},
			{
				t: 41.1,
				text: "Write: examine the log."
			},
			{
				t: 43.24,
				text: "Do not write: perform an examination of the log."
			}
		],
		frames: [
			{
				t: .14,
				view: { kind: "rules-intro" }
			},
			{
				t: 3.36,
				view: {
					kind: "rule-name",
					avoid: false
				}
			},
			{
				t: 5.58,
				view: {
					kind: "rule-name",
					avoid: true
				}
			},
			{
				t: 10.22,
				view: {
					kind: "rule-length",
					phase: 1
				}
			},
			{
				t: 12.56,
				view: {
					kind: "rule-length",
					phase: 2
				}
			},
			{
				t: 15.09,
				view: {
					kind: "rule-length",
					phase: 3
				}
			},
			{
				t: 17.73,
				view: {
					kind: "rule-voice",
					phase: 1
				}
			},
			{
				t: 20.41,
				view: {
					kind: "rule-voice",
					phase: 2
				}
			},
			{
				t: 23.07,
				view: {
					kind: "rule-voice",
					phase: 3
				}
			},
			{
				t: 25.77,
				view: {
					kind: "rule-tense",
					phase: 1
				}
			},
			{
				t: 27.41,
				view: {
					kind: "rule-tense",
					phase: 2
				}
			},
			{
				t: 30.25,
				view: {
					kind: "rule-tense",
					phase: 3
				}
			},
			{
				t: 33.87,
				view: {
					kind: "rule-if",
					phase: 1
				}
			},
			{
				t: 36.11,
				view: {
					kind: "rule-if",
					phase: 2
				}
			},
			{
				t: 39.49,
				view: {
					kind: "rule-verb",
					phase: 1
				}
			},
			{
				t: 41.1,
				view: {
					kind: "rule-verb",
					phase: 2
				}
			},
			{
				t: 43.24,
				view: {
					kind: "rule-verb",
					phase: 3
				}
			}
		]
	},
	{
		id: "places",
		chapter: "Four places",
		audio: "/narration/05-places.mp3",
		broll: "lab",
		duration: 37.83,
		captions: [
			{
				t: .18,
				text: "Use these rules in four places."
			},
			{
				t: 2.56,
				text: "First, the system prompt. It is a procedure."
			},
			{
				t: 6.16,
				text: "Use short sentences, and name the actor. Do not add a slogan."
			},
			{
				t: 10.68,
				text: "Second, the tool description. The model selects a tool from that text."
			},
			{
				t: 15.38,
				text: "If two tools share a verb, the model will guess."
			},
			{
				t: 18.85,
				text: "Third, the message between agents."
			},
			{
				t: 21.47,
				text: "The next agent did not hear your meeting."
			},
			{
				t: 23.99,
				text: "Write the facts, the names, and the next action."
			},
			{
				t: 27.43,
				text: "Fourth, the test of expected behavior."
			},
			{
				t: 30.37,
				text: "Write the pass condition as an instruction you can check."
			},
			{
				t: 33.75,
				text: "The agent writes the file. The agent does not delete other files."
			}
		],
		frames: [
			{
				t: .18,
				view: {
					kind: "places",
					active: 0
				}
			},
			{
				t: 2.56,
				view: {
					kind: "places",
					active: 1
				}
			},
			{
				t: 10.68,
				view: {
					kind: "places",
					active: 2
				}
			},
			{
				t: 18.85,
				view: {
					kind: "places",
					active: 3
				}
			},
			{
				t: 27.43,
				view: {
					kind: "places",
					active: 4
				}
			}
		]
	},
	{
		id: "rewrite",
		chapter: "A rewrite",
		audio: "/narration/06-rewrite.mp3",
		broll: "cables",
		duration: 33.99,
		captions: [
			{
				t: .08,
				text: "Here is a prompt in ordinary technical English."
			},
			{
				t: 3.38,
				text: "You should leverage available tooling to facilitate a full check of user input prior to starting the next process, and make sure bad payloads are handled in an appropriate way."
			},
			{
				t: 14.46,
				text: "Here is the same prompt in the spirit of Simplified Technical English."
			},
			{
				t: 18.87,
				text: "Examine the user input before the next task."
			},
			{
				t: 21.97,
				text: "If the input is not valid, write an error in the log."
			},
			{
				t: 25.65,
				text: "Do not start the next task."
			},
			{
				t: 27.89,
				text: "The second text names the action, the condition, and the stop."
			},
			{
				t: 31.97,
				text: "The first text hides all three."
			}
		],
		frames: [
			{
				t: .08,
				view: {
					kind: "bad",
					show: false
				}
			},
			{
				t: 3.38,
				view: {
					kind: "bad",
					show: true
				}
			},
			{
				t: 14.46,
				view: {
					kind: "good",
					lines: 0
				}
			},
			{
				t: 18.87,
				view: {
					kind: "good",
					lines: 1
				}
			},
			{
				t: 21.97,
				view: {
					kind: "good",
					lines: 2
				}
			},
			{
				t: 25.65,
				view: {
					kind: "good",
					lines: 3
				}
			},
			{
				t: 27.89,
				view: { kind: "why" }
			}
		]
	},
	{
		id: "pattern",
		chapter: "A pattern",
		audio: "/narration/07-pattern.mp3",
		broll: "lab",
		duration: 42.55,
		captions: [
			{
				t: .02,
				text: "Copy this pattern when you write for an agent."
			},
			{
				t: 2.86,
				text: "Role. You are the release agent for this repository."
			},
			{
				t: 7.64,
				text: "Goal. You prepare the release notes from the merged changes."
			},
			{
				t: 12.74,
				text: "Steps. One command each."
			},
			{
				t: 15.02,
				text: "Read the merged changes."
			},
			{
				t: 16.76,
				text: "Write one note for each change."
			},
			{
				t: 19,
				text: "Use the same component name that the code uses."
			},
			{
				t: 21.97,
				text: "Stop rule. If a change has no description, stop and ask."
			},
			{
				t: 26.65,
				text: "Glossary. One name, one meaning."
			},
			{
				t: 29.49,
				text: "Do not add a second name for the same thing."
			},
			{
				t: 32.39,
				text: "This pattern is not the official dictionary."
			},
			{
				t: 35.03,
				text: "The dictionary is a licensed part of the specification."
			},
			{
				t: 38.53,
				text: "This film teaches the writing rules. It does not copy the word list."
			}
		],
		frames: [
			{
				t: .02,
				view: {
					kind: "pattern",
					step: 0
				}
			},
			{
				t: 2.86,
				view: {
					kind: "pattern",
					step: 1
				}
			},
			{
				t: 7.64,
				view: {
					kind: "pattern",
					step: 2
				}
			},
			{
				t: 12.74,
				view: {
					kind: "pattern",
					step: 3
				}
			},
			{
				t: 21.97,
				view: {
					kind: "pattern",
					step: 4
				}
			},
			{
				t: 26.65,
				view: {
					kind: "pattern",
					step: 5
				}
			},
			{
				t: 32.39,
				view: {
					kind: "pattern",
					step: 6
				}
			}
		]
	},
	{
		id: "close",
		chapter: "The point",
		audio: "/narration/08-close.mp3",
		broll: "hangar",
		duration: 16.39,
		captions: [
			{
				t: .14,
				text: "Simplified Technical English does not make a model smarter."
			},
			{
				t: 4.06,
				text: "It removes the sentence that lets the model choose the wrong meaning."
			},
			{
				t: 8.02,
				text: "Write the next instruction as if the reader cannot ask you a question."
			},
			{
				t: 12.31,
				text: "A technician on the line cannot. An AI agent cannot either."
			}
		],
		frames: [
			{
				t: .14,
				view: {
					kind: "close",
					line: 1
				}
			},
			{
				t: 4.06,
				view: {
					kind: "close",
					line: 2
				}
			},
			{
				t: 8.02,
				view: {
					kind: "close",
					line: 3
				}
			},
			{
				t: 12.31,
				view: {
					kind: "close",
					line: 4
				}
			}
		]
	}
];
var TOTAL = SCENES.reduce((sum, scene) => sum + scene.duration, 0);
function frameAt(scene, time) {
	let frame = scene.frames[0];
	for (const candidate of scene.frames) if (candidate.t <= time + .04) frame = candidate;
	return frame;
}
function captionAt(scene, time) {
	let caption = scene.captions[0];
	for (const candidate of scene.captions) if (candidate.t <= time + .04) caption = candidate;
	return caption;
}
function offsetOf(index) {
	let sum = 0;
	for (let i = 0; i < index; i += 1) sum += SCENES[i].duration;
	return sum;
}
var SECTIONS = [
	{
		n: "01",
		name: "Words",
		count: "14"
	},
	{
		n: "02",
		name: "Noun groups",
		count: "2"
	},
	{
		n: "03",
		name: "Verbs",
		count: "7"
	},
	{
		n: "04",
		name: "Sentences",
		count: "5"
	},
	{
		n: "05",
		name: "Procedures",
		count: "5"
	},
	{
		n: "06",
		name: "Description",
		count: "6"
	},
	{
		n: "07",
		name: "Safety",
		count: "3"
	},
	{
		n: "08",
		name: "Punctuation",
		count: "7"
	},
	{
		n: "09",
		name: "Practice",
		count: "4"
	}
];
var PLACES = [
	{
		n: "01",
		title: "System prompt",
		body: "It is a procedure. Short sentences. Name the actor. No slogan."
	},
	{
		n: "02",
		title: "Tool description",
		body: "The model selects a tool from this text. If two tools share a verb, it will guess."
	},
	{
		n: "03",
		title: "Handoff",
		body: "The next agent did not hear the meeting. Write the facts, the names, and the next action."
	},
	{
		n: "04",
		title: "Test",
		body: "Write a pass condition you can check."
	}
];
var STEPS = [
	"Read the merged changes.",
	"Write one note for each change.",
	"Use the same component name that the code uses."
];
function Stage({ view }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "film-card w-full max-w-xl",
		children: renderView(view)
	}, view.kind);
}
function renderView(view) {
	switch (view.kind) {
		case "question": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
			kicker: "An explainer",
			title: "What if the next reader cannot ask?",
			deck: "The instruction has one chance. There is no follow-up question."
		});
		case "readers": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, {
			kicker: "Same constraint",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-medium leading-tight text-balance text-paper sm:text-3xl",
				children: "The reader who cannot ask"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reader, {
					on: true,
					label: "Technician",
					text: "Maintenance text. Often not their first language."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reader, {
					on: view.show === 2,
					label: "AI agent",
					text: "A model. It cannot ask which meaning you chose."
				})]
			})]
		});
		case "standard": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
			kicker: "ASD-STE100",
			title: "Simplified Technical English",
			deck: "A controlled language. This film shows how to use it when you write for agents."
		});
		case "identity": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, {
			kicker: "The specification",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-widest text-amber",
					children: "ASD-STE100"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-medium leading-tight text-balance text-paper sm:text-3xl",
					children: "Controlled technical English"
				}),
				view.maintainer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-pretty text-paper-dim",
					children: "ASD maintains it. ASD is the Aerospace and Defence Industries Association of Europe."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-pretty text-paper-dim",
					children: "One approved meaning for each word in the dictionary. One action in each instruction."
				})
			]
		});
		case "origin": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			kicker: "Where it comes from",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-l-2 border-amber pl-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-amber",
						children: "1980s"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-paper",
						children: "Simplified English, written for aircraft maintenance manuals."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: view.edition ? "border-l-2 border-amber pl-3" : "border-l-2 border-line pl-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-amber",
						children: "15 January 2025"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-paper",
						children: view.edition ? "Issue 9. This is the current edition." : "The specification is still revised."
					})]
				})]
			})
		});
		case "goals": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			kicker: "The goal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Goal, {
						n: "01",
						text: "Each word has one approved meaning."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Goal, {
						n: "02",
						text: "Each instruction has one action."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Goal, {
						n: "03",
						text: "The reader follows the text without a guess."
					})
				]
			})
		});
		case "parts": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, {
			kicker: "Structure",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-medium text-paper",
				children: "Two parts"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-2 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					n: "Part 1",
					label: "Writing rules"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					n: "Part 2",
					label: "Dictionary"
				})]
			})]
		});
		case "sections": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, {
			kicker: "Part 1 · 53 rules",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-medium text-paper",
				children: "Nine sections"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 grid grid-cols-3 gap-2",
				children: SECTIONS.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "bg-ink-2 px-2 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-amber",
							children: section.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-tight text-paper",
							children: section.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-paper-dim",
							children: section.count
						})
					]
				}, section.n))
			})]
		});
		case "dictionary": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, {
			kicker: "Part 2 · Dictionary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-medium text-paper",
				children: "Approved words, and the rest"
			}), view.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-2 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					n: "875",
					label: "Approved words"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					n: "~1,274",
					label: "Not approved, each with an alternative"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-pretty text-paper-dim",
				children: "The dictionary gives the words you may use, and a replacement for the words you may not."
			})]
		});
		case "technical": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, {
			kicker: "Technical names",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-medium leading-tight text-balance text-paper",
					children: "A project name is allowed. Then it stays the same name."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-pretty text-paper-dim",
					children: "Computer science is one category in the specification. Define the name once. Do not add a second name for the same thing."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [
						"agent",
						"token",
						"repository"
					].map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "bg-ink-2 px-3 py-2 font-mono text-sm text-paper",
						children: word
					}, word))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-xs text-paper-dim",
					children: "Examples you would define. Not a dictionary entry."
				})
			]
		});
		case "rules-intro": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
			kicker: "From the manual to the repo",
			title: "Six rules that move into software",
			deck: "Same limits. A shorter sentence. A named actor. One verb."
		});
		case "rule-name": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Rule, {
			n: "01",
			title: "One name for one thing.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-pretty text-ink/80",
				children: "Pick one verb. Use that verb every time."
			}), view.avoid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 bg-ink px-3 py-3 font-mono text-sm text-paper",
				children: "Do not rotate check, verify, and validate for the same action."
			}) : null]
		});
		case "rule-length": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {
			n: "02",
			title: "Keep the sentence short.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Limit, {
						on: true,
						label: "Procedure",
						value: "20 words"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Limit, {
						on: view.phase >= 2,
						label: "Description",
						value: "25 words"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Limit, {
						on: view.phase >= 3,
						label: "Also",
						value: "One instruction in one sentence"
					})
				]
			})
		});
		case "rule-voice": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Rule, {
			n: "03",
			title: "Active voice. Name the actor.",
			children: [
				view.phase >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Good, { text: "The agent reads the file." }) : null,
				view.phase >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bad, { text: "The file is read." }) : null,
				view.phase < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-ink/80",
					children: "Say who does the action. A passive sentence hides the actor."
				}) : null
			]
		});
		case "rule-tense": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Rule, {
			n: "04",
			title: "Use a simple verb form.",
			children: [
				view.phase >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Good, { text: "The service received the request." }) : null,
				view.phase >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bad, { text: "The service has received the request." }) : null,
				view.phase < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-ink/80",
					children: "Write the simple past. Do not use the present perfect."
				}) : null
			]
		});
		case "rule-if": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {
			n: "05",
			title: "Put the condition before the command.",
			children: view.phase >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Good, { text: "If the test fails, read the log." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-ink/80",
				children: "The reader sees the test first, then the action."
			})
		});
		case "rule-verb": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Rule, {
			n: "06",
			title: "Use a verb for the action.",
			children: [
				view.phase >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Good, { text: "Examine the log." }) : null,
				view.phase >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bad, { text: "Perform an examination of the log." }) : null,
				view.phase < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-ink/80",
					children: "Do not hide the action inside a noun."
				}) : null
			]
		});
		case "places": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, {
			kicker: "Where to use it",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-medium text-paper",
				children: "Four places in an agent system"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 grid gap-2",
				children: PLACES.map((place, index) => {
					const on = view.active === index + 1;
					const dim = view.active !== 0 && !on;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: on ? "border-l-2 border-amber bg-ink-2 px-3 py-2" : "border-l-2 border-line px-3 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: dim ? "text-paper-dim" : "text-paper",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-amber",
									children: [place.n, " "]
								}), place.title]
							}),
							on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-pretty text-paper-dim",
								children: place.body
							}) : null,
							on && place.n === "04" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-2 grid gap-1 font-mono text-sm text-paper",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The agent writes the file." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The agent does not delete other files." })]
							}) : null
						]
					}, place.n);
				})
			})]
		});
		case "bad": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, {
			kicker: "Before",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-medium text-paper",
				children: "Ordinary technical English"
			}), view.show ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-pretty leading-relaxed text-paper",
				children: [
					"You should ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { children: "leverage" }),
					" available tooling to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { children: "facilitate" }),
					" a full check of user input ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { children: "prior to" }),
					" starting the next process, and make sure bad payloads are handled ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { children: "in an appropriate way" }),
					"."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-paper-dim",
				children: "A prompt a team might ship today."
			})]
		});
		case "good": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "bg-paper text-ink shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 bg-signal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-4 sm:px-6 sm:py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-signal",
						children: "In the spirit of STE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-xl font-medium leading-tight text-balance",
						children: "Same prompt. Three sentences."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-3 grid gap-2",
						children: GOOD_LINES.slice(0, view.lines).map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 bg-ink/5 px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-signal",
								children: ["0", index + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line })]
						}, line))
					}),
					view.lines === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-ink/70",
						children: "The lines follow as the narrator reads them."
					}) : null
				]
			})]
		});
		case "why": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Plate, {
			kicker: "What changed",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-medium leading-tight text-balance text-paper",
					children: "The second text names the action, the condition, and the stop."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-pretty text-paper-dim",
					children: "The first text hides all three."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-mono text-xs text-paper-dim",
					children: "A rewrite in the spirit of the rules. Not a certified check against the licensed dictionary."
				})
			]
		});
		case "pattern": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pattern, { step: view.step });
		case "close": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
			kicker: view.line === 4 ? "The same reader" : "The point",
			title: CLOSE[view.line - 1],
			deck: view.line === 4 ? "A technician on the line cannot ask. An AI agent cannot either." : void 0,
			note: view.line === 4 ? "ASD-STE100 Issue 9, 15 January 2025. 53 rules. 875 approved words. About 1,274 words that are not approved. This film is not an ASD publication. The examples are original." : void 0
		});
		default: return null;
	}
}
var GOOD_LINES = [
	"Examine the user input before the next task.",
	"If the input is not valid, write an error in the log.",
	"Do not start the next task."
];
var CLOSE = [
	"STE does not make a model smarter.",
	"It removes the sentence that lets the model choose the wrong meaning.",
	"Write the next instruction as if the reader cannot ask.",
	"Write as if they cannot ask."
];
function Pattern({ step }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-h-full overflow-auto bg-paper text-ink shadow-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 bg-amber" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 py-4 sm:px-6 sm:py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-widest text-ink/60",
					children: "Copy this pattern"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-xl font-medium leading-tight text-balance",
					children: "Instructions for an agent"
				}),
				step >= 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					label: "Role",
					text: "You are the release agent for this repository."
				}) : null,
				step >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					label: "Goal",
					text: "You prepare the release notes from the merged changes."
				}) : null,
				step >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-signal",
						children: "Steps"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-1 grid gap-1",
						children: STEPS.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-signal",
								children: index + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line })]
						}, line))
					})]
				}) : null,
				step >= 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					label: "Stop",
					text: "If a change has no description, stop and ask."
				}) : null,
				step >= 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					label: "Glossary",
					text: "One name. One meaning. Do not add a second name."
				}) : null,
				step >= 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs leading-relaxed text-ink/70",
					children: "This pattern is not the official dictionary. The dictionary is licensed with the specification. This film teaches the writing rules. It does not copy the word list."
				}) : null
			]
		})]
	});
}
function Block({ label, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs tracking-widest text-signal",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-pretty",
			children: text
		})]
	});
}
function Hero({ kicker, title, deck, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-ink/80 px-5 py-5 backdrop-blur-sm sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-widest text-amber",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-medium leading-tight text-balance text-paper sm:text-4xl",
				children: title
			}),
			deck ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-lg text-pretty text-paper-dim",
				children: deck
			}) : null,
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs leading-relaxed text-paper-dim",
				children: note
			}) : null
		]
	});
}
function Plate({ kicker, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-h-full overflow-auto bg-ink/80 px-5 py-4 text-paper shadow-2xl backdrop-blur-sm sm:px-6 sm:py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs tracking-widest text-amber",
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3",
			children
		})]
	});
}
function Rule({ n, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "bg-paper text-ink shadow-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 bg-amber" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 py-4 sm:px-6 sm:py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs tracking-widest text-ink/60",
					children: [
						"Rule ",
						n,
						" of 06"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-xl font-medium leading-tight text-balance sm:text-2xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children
				})
			]
		})]
	});
}
function Reader({ on, label, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: on ? "border-l-2 border-amber bg-ink-2 px-3 py-3" : "border-l-2 border-line px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: on ? "font-medium text-paper" : "text-paper-dim",
			children: label
		}), on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-pretty text-paper-dim",
			children: text
		}) : null]
	});
}
function Goal({ n, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-3 border-l-2 border-amber pl-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-xs text-amber",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-paper",
			children: text
		})]
	});
}
function Stat({ n, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-ink-2 px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-2xl text-amber",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-pretty text-paper",
			children: label
		})]
	});
}
function Limit({ on, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: on ? "flex items-baseline justify-between gap-3 bg-ink px-3 py-2 text-paper" : "flex items-baseline justify-between gap-3 border border-line bg-paper px-3 py-2 text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-xs",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm",
			children: value
		})]
	});
}
function Good({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "bg-signal px-3 py-2 text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-xs tracking-widest",
			children: "Write "
		}), text]
	});
}
function Bad({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-2 bg-ink px-3 py-2 text-paper-dim",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-xs tracking-widest text-amber",
			children: "Not "
		}), text]
	});
}
function Mark({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-amber underline decoration-amber decoration-2 underline-offset-2",
		children
	});
}
function formatTime(seconds) {
	const whole = Math.max(0, Math.floor(seconds));
	return `${Math.floor(whole / 60)}:${(whole % 60).toString().padStart(2, "0")}`;
}
function FilmPlayer() {
	const audioRef = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	const wantPlay = (0, import_react.useRef)(false);
	const pending = (0, import_react.useRef)(null);
	const rateRef = (0, import_react.useRef)(1);
	const [sceneIndex, setSceneIndex] = (0, import_react.useState)(0);
	const [time, setTime] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [started, setStarted] = (0, import_react.useState)(false);
	const [finished, setFinished] = (0, import_react.useState)(false);
	const [captionsOn, setCaptionsOn] = (0, import_react.useState)(true);
	const [chaptersOpen, setChaptersOpen] = (0, import_react.useState)(false);
	const [rate, setRate] = (0, import_react.useState)(1);
	const scene = SCENES[sceneIndex];
	const frame = frameAt(scene, started ? time : 0);
	const caption = captionAt(scene, time);
	const global = offsetOf(sceneIndex) + time;
	(0, import_react.useEffect)(() => {
		rateRef.current = rate;
		if (audioRef.current) audioRef.current.playbackRate = rate;
	}, [rate]);
	(0, import_react.useEffect)(() => {
		const audio = audioRef.current;
		if (!audio) return;
		const seekTo = pending.current;
		const run = () => {
			audio.playbackRate = rateRef.current;
			if (seekTo != null && Number.isFinite(audio.duration)) audio.currentTime = Math.min(seekTo, Math.max(0, audio.duration - .05));
			pending.current = null;
			if (wantPlay.current) audio.play().catch(() => {
				wantPlay.current = false;
				setPlaying(false);
			});
		};
		if (audio.readyState >= 1) run();
		else audio.addEventListener("loadedmetadata", run, { once: true });
		return () => audio.removeEventListener("loadedmetadata", run);
	}, [sceneIndex]);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => {
			if (motion.matches) video.pause();
			else video.play().catch(() => void 0);
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
				audio.play().catch(() => {
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
		audio.play().catch(() => {
			wantPlay.current = false;
			setPlaying(false);
		});
	}
	function goTo(index) {
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
			audio.play().catch(() => {
				wantPlay.current = false;
				setPlaying(false);
			});
			return;
		}
		setSceneIndex(next);
	}
	function seekGlobal(value) {
		let acc = 0;
		for (let i = 0; i < SCENES.length; i += 1) {
			const span = SCENES[i].duration;
			if (value <= acc + span || i === SCENES.length - 1) {
				const local = Math.max(0, Math.min(span - .05, value - acc));
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
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
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
			} else if (event.key === "c" || event.key === "C") setCaptionsOn((value) => !value);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex h-dvh flex-col overflow-hidden bg-ink text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "caution-stripe",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-amber",
						children: "STE for agents"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate font-mono text-xs text-paper-dim",
						children: [
							String(sceneIndex + 1).padStart(2, "0"),
							" ",
							scene.chapter
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "shrink-0 font-mono text-xs text-paper-dim",
					children: "Issue 9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-0 flex-1",
				"aria-label": "Film picture",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						className: "absolute inset-0 h-full w-full object-cover",
						src: `/broll/${scene.broll}.mp4`,
						muted: true,
						loop: true,
						playsInline: true,
						autoPlay: true
					}, scene.broll),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full min-h-0 flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex min-h-0 flex-1 items-center justify-center overflow-auto px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, { view: started ? frame.view : { kind: "question" } })
							}),
							captionsOn && started ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-4 mb-3 max-h-24 overflow-auto bg-ink/85 px-3 py-2 text-center text-sm text-pretty text-paper",
								"aria-live": "polite",
								children: caption.text
							}) : null,
							!started ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center px-4 pb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: toggle,
									className: "flex min-h-11 items-center gap-3 bg-amber px-5 py-3 font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
											className: "h-5 w-5 fill-current",
											"aria-hidden": "true"
										}),
										"Play the film",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs",
											children: formatTime(TOTAL)
										})
									]
								})
							}) : null
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-line bg-ink",
				children: [
					chaptersOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto px-3 pt-3",
						children: SCENES.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => goTo(index),
							className: index === sceneIndex ? "min-h-11 shrink-0 bg-paper px-3 font-mono text-xs text-ink" : "min-h-11 shrink-0 border border-line bg-ink-2 px-3 font-mono text-xs text-paper",
							"aria-current": index === sceneIndex ? "true" : void 0,
							children: [
								String(index + 1).padStart(2, "0"),
								" ",
								item.chapter
							]
						}, item.id))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block px-3 pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Seek in the film"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full accent-amber",
							type: "range",
							min: 0,
							max: TOTAL,
							step: .1,
							value: Math.min(global, TOTAL),
							onChange: (event) => seekGlobal(Number(event.target.value)),
							suppressHydrationWarning: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 px-2 pb-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Control, {
								label: "Previous chapter",
								onClick: () => goTo(sceneIndex - 1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, {
									className: "h-5 w-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: toggle,
								"aria-label": finished ? "Play again" : playing ? "Pause" : "Play",
								className: "flex h-12 w-12 items-center justify-center bg-amber text-ink transition-transform duration-150 ease-out active:scale-[0.96]",
								children: playing && !finished ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
									className: "h-5 w-5 fill-current",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
									className: "h-5 w-5 fill-current",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Control, {
								label: "Next chapter",
								onClick: () => goTo(sceneIndex + 1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, {
									className: "h-5 w-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "ml-2 font-mono text-xs tabular-nums text-paper-dim",
								children: [
									formatTime(global),
									" / ",
									formatTime(TOTAL)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Control, {
								label: captionsOn ? "Hide captions" : "Show captions",
								pressed: captionsOn,
								onClick: () => setCaptionsOn((value) => !value),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Captions, {
									className: "h-5 w-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setRate((value) => value === 1 ? 1.25 : 1),
								"aria-label": `Playback speed ${rate === 1 ? "1" : "1.25"} times. Change speed.`,
								className: "flex min-h-11 min-w-11 items-center justify-center px-2 font-mono text-xs text-paper transition-transform duration-150 ease-out active:scale-[0.96]",
								children: rate === 1 ? "1×" : "1.25×"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Control, {
								label: chaptersOpen ? "Hide chapters" : "Show chapters",
								pressed: chaptersOpen,
								onClick: () => setChaptersOpen((value) => !value),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									className: "h-5 w-5",
									"aria-hidden": "true"
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				ref: audioRef,
				src: scene.audio,
				preload: "auto",
				onTimeUpdate: (event) => setTime(event.currentTarget.currentTime),
				onPlay: () => setPlaying(true),
				onPause: () => {
					if (!wantPlay.current) setPlaying(false);
				},
				onEnded: () => {
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
				}
			})
		]
	});
}
function Control({ label, onClick, pressed, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		"aria-pressed": pressed,
		onClick,
		className: pressed ? "flex h-11 w-11 items-center justify-center text-amber transition-transform duration-150 ease-out active:scale-[0.96]" : "flex h-11 w-11 items-center justify-center text-paper transition-transform duration-150 ease-out active:scale-[0.96]",
		children
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmPlayer, {});
}
//#endregion
export { Home as component };
