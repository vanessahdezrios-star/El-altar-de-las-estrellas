import * as THREE from "../js/three.module.js";

export default function Mole({ x, y, z }) {

    // Pollo
    var pollo = new THREE.SphereGeometry(0.335, 20, 20);
    var mat1 = new THREE.MeshLambertMaterial({ 
        color:0x5E3A32, side:THREE.DoubleSide }); 
    var mesh50 = new THREE.Mesh(pollo, mat1);
    //scene.add(mesh50);
    mesh50.position.set(-0.52, 0.52, -0.015);

    // Hueso
    var hueso = new THREE.BoxGeometry(0.107, 0.696, 0.105);
    var mat2 = new THREE.MeshLambertMaterial({ 
        color:0xFFFFFF, side:THREE.DoubleSide });
    var mesh51 = new THREE.Mesh(hueso, mat2);
    //scene.add(mesh51);
    mesh51.position.set(0, 0.515, 0);
    mesh51.rotation.z = 1.5708;

    // Hueso 1
    var hueso1 = new THREE.SphereGeometry(0.1, 20, 20);
    var mesh52 = new THREE.Mesh(hueso1, mat2);
    //scene.add(mesh52);
    mesh52.position.set(0.385, 0.484, -0.102);

    // Hueso 2
    var hueso2 = new THREE.SphereGeometry(0.1, 20, 20);
    var mesh53 = new THREE.Mesh(hueso2, mat2);
    //scene.add(mesh53);
    mesh53.position.set(0.385, 0.484, 0.1);

    // Plato
    var plato = new THREE.CylinderGeometry(1, 0.5, 0.6, 25);
    var texture=new THREE.TextureLoader().load("./assets/plato.jpg");
    var mat3= new THREE.MeshLambertMaterial({map:texture});
    var mesh54 = new THREE.Mesh(plato, mat3);
    //scene.add(mesh54);
    mesh54.position.set(-0.2, 0.1, 0);

    const Mole= new THREE.Group(); 
    Mole.add(mesh50,mesh51,mesh52,mesh53,mesh54); 
    Mole.position.set(x,y,z); return Mole; 
}
