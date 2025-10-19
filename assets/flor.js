import * as THREE from "../js/three.module.js";

export default function Flor({ x, y, z }) {

    // Pétalos
    var sph1 = new THREE.SphereGeometry(0.3, 16, 16);
    var matnarnaja = new THREE.MeshLambertMaterial({
        color: 0xFFA500, side: THREE.DoubleSide
    });
    var petalo1= new THREE.Mesh(sph1, matnarnaja);
    petalo1.position.set(0, 0.15, 0.35);
    //scene.add(petalo1);

    var petalo2= new THREE.Mesh(sph1, matnarnaja);
    petalo2.position.set(0.35, 0.15, 0);
    //scene.add(petalo2);

    var petalo3= new THREE.Mesh(sph1, matnarnaja);
    petalo3.position.set(-0.35, 0.15, 0);
    //scene.add(petalo3);

    var petalo4= new THREE.Mesh(sph1, matnarnaja);
    petalo4.position.set(0, 0.15, -0.35);
    //scene.add(petalo4);

    // Centro
    var sph2 = new THREE.SphereGeometry(0.25, 16, 16);
    var matama= new THREE.MeshLambertMaterial({
        color: 0xFFD700, side: THREE.DoubleSide
    });

    var centro = new THREE.Mesh(sph2, matama);
    centro.position.set(0, 0.25, 0);
    //scene.add(centro);

    const Flor= new THREE.Group();
    Flor.add(petalo1,petalo2,petalo3,petalo4,centro);
    Flor.position.set(x, y, z);

    return Flor;
}
