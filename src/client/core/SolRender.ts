import * as THREE from 'three';
import { EffectComposer, RenderPass } from 'three/examples/jsm/Addons.js';

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
    sun = new THREE.DirectionalLight("white", 1);

    private renderer: THREE.WebGLRenderer;
    private composer: EffectComposer;
    private renderPass: RenderPass;

    constructor(private canvas: HTMLElement) {
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
        this.composer = new EffectComposer(this.renderer)
        this.renderPass = new RenderPass(this.scene, this.camera);
    }
}