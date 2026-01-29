import { ClientLoop } from "./ClientLoop.js";
import type { SolCNet } from "./SolCNet.js";
import type { SolInput } from "./SolInput.js";
import type { SolRender } from "./SolRender.js";

export class SolCGame {
    loop: ClientLoop;
    constructor(private input: SolInput, private net: SolCNet, private render: SolRender) {
        this.loop = new ClientLoop(this);
    }

    async start() {
        
        this.loop.start();
    }

    preUpdate(dt: number, time: number) {
        console.log("tick");
    }

    step(dt: number, time: number) {

    }

    noRecoveryStep() {

    }

    postUpdate(dt: number, time: number) {

    }
}