import { SolWorld } from "#/common/core/SolWorld.js";
import { Actor } from "../Actor.js";

export class Component {
    
    constructor(private owner: Actor, private world: SolWorld){}
}