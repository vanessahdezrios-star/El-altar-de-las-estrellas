import * as THREE from "../js/three.module.js";

export default function calabaza({ x, y, z }) {

    // calabaza
    var calabaza = new THREE.SphereGeometry(1.48, 20, 20);
    var mat2 = new THREE.MeshLambertMaterial({ 
        color: 0xFFA500, side: THREE.DoubleSide }); 
    var mesh55 = new THREE.Mesh(calabaza, mat2);
    mesh55.position.set(0, 1, -1);
    //scene.add(mesh55);

    // ojo derecho
    var ojoder = new THREE.SphereGeometry(0.3, 20, 20);
    var mat3 = new THREE.MeshLambertMaterial({ 
        color: 0x000000, side: THREE.DoubleSide }); 
    var mesh56 = new THREE.Mesh(ojoder, mat3);
    mesh56.position.set(-0.476, 2, 0.48);
    //scene.add(mesh56);

    // ojo izquierdo
    var ojoizq = new THREE.SphereGeometry(0.3, 20, 20);
    var mesh57 = new THREE.Mesh(ojoizq, mat3);
    mesh57.position.set(0.4, 2, 0.53);
    //scene.add(mesh57);

    // boca
    var boca= new THREE.SphereGeometry(0.3, 20, 20);
    var mesh58 = new THREE.Mesh(boca, mat3);
    mesh58.position.set(-0.026, 1, 0.6);
    //scene.add(mesh58);

    // tronco
    var tronco = new THREE.BoxGeometry(0.252, 1, 0.245);
        var mat4 = new THREE.MeshLambertMaterial({ 
            color: 0x008000, side: THREE.DoubleSide }); 
    var mesh59 = new THREE.Mesh(tronco, mat4);
    mesh59.position.set(0, 3, -1);
    //scene.add(mesh59);

    const Calabaza = new THREE.Group();
    Calabaza.add(mesh55, mesh56, mesh57, mesh58, mesh59);
    Calabaza.position.set(x, y, z);

    return Calabaza;
}
