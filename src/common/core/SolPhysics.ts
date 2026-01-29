import RAPIER from "@dimforge/rapier3d";
import { SOL_PHYS } from "./SolConstants.js";

export class SolPhysics {
    world = new RAPIER.World(SOL_PHYS.GRAVITY);
}