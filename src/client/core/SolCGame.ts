import type { SolCNet } from "./SolCNet.js";
import type { SolInput } from "./SolInput.js";
import type { SolRender } from "./SolRender.js";

export class SolCGame {
    constructor(private input: SolInput, private net: SolCNet, private render: SolRender){

    }

    async start(){
        
    }
}