import { Display } from "./Display.js";
import { SolCGame } from "./SolCGame.js";
import { SolCNet } from "./SolCNet.js";
import { SolInput } from "./SolInput.js";
import { SolRender } from "./SolRender.js";

console.log("HelloWorld");

//@ts-ignore
let canvas = game;
if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "game";
    canvas.style.pointerEvents = "all";
    canvas.style.zIndex = "1";
    document.appendChild(canvas);
}
const solInput = new SolInput(canvas);
const solNet = new SolCNet();
const solRender = new SolRender();
const solGame = new SolCGame(solInput, solNet, solRender);

solGame.start();

const uiCanvas = document.getElementById("ui") as HTMLCanvasElement;
const ctx = uiCanvas?.getContext("2d");
const display: Display | null = (uiCanvas && ctx) ? new Display(uiCanvas, ctx) : null;
if (display) {
    display.run();
}
