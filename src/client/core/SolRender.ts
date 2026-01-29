import * as THREE from 'three';

export class SolRender {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        100,
        window.innerHeight / window.innerWidth,
        1,
        3000
    );
    cameraYaw = new THREE.Group();
    cameraPitch = new THREE.Group();
    constructor(){

    }
}