import { Actor } from "../actors/Actor.js";
import { SolPhysics } from "./SolPhysics.js";

export class SolWorld {
    actors: Actor[] = [];
    physics = new SolPhysics();

    preStep(dt: number, time: number) { }
    step(dt: number, time: number) { }
    postStep(dt: number, time: number) { }
}