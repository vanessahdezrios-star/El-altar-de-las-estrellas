import * as THREE from "../js/three.module.js";

export default function Mand({ x, y, z }) {

    // mandarina
    var mand = new THREE.SphereGeometry(1.3, 20, 20);
    var mat2 = new THREE.MeshLambertMaterial({ 
        color: 0xFFA500, side: THREE.DoubleSide });
    var mesh60 = new THREE.Mesh(mand, mat2);
    mesh60.position.set(0, 1, -1); 
    //scene.add(mesh60);

    // tronco
    var tronco = new THREE.BoxGeometry(0.252, 1, 0.245);
        var mat3 = new THREE.MeshLambertMaterial({
        color: 0x008000, side: THREE.DoubleSide });
    var mesh61 = new THREE.Mesh(tronco, mat3);
    mesh61.position.set(0, 2, -1);
    mesh61.rotation.z = -19.36;
    //scene.add(mesh61);

    const mandarina = new THREE.Group();
    mandarina.add(mesh60, mesh61);
    mandarina.position.set(x, y, z);

    return mandarina;
}
