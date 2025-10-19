import * as THREE from "../js/three.module.js";

export default function Dulces({ x, y, z }) {

    // PALETA
    var sph1 = new THREE.SphereGeometry(0.5, 16, 16);
    var matpalo = new THREE.MeshLambertMaterial({
        color: 0xFF4DA6,side: THREE.DoubleSide});
    var cabeza = new THREE.Mesh(sph1, matpalo);
    cabeza.position.set(0, 1.2, 0);
    //scene.add(cabeza;

    var cyl1 = new THREE.CylinderGeometry(0.1, 0.1, 1.2, 16);
    var matpalo2 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF,side: THREE.DoubleSide});
    var palo = new THREE.Mesh(cyl1, matpalo2);
    palo.position.set(0, 0.3, 0);
    //scene.add(palo);

    const dulce = new THREE.Group();
    dulce.add(cabeza, palo);
    dulce.position.set(x, y, z);
       
    return dulce;
}
