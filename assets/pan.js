import * as THREE from "../js/three.module.js";

export default function PanDeMuerto({ x, y, z }) {

    // PAN
    var sph1 = new THREE.SphereGeometry(1.5, 32, 32, 0, 6.28, 0, 1.57);
    var texture = new THREE.TextureLoader().load("./assets/pan1.jpg");
    var matpan = new THREE.MeshLambertMaterial({ map: texture });
    var pan = new THREE.Mesh(sph1, matpan);
    pan.position.set(0, 0, 0);
    //scene.add(pan);

    // CENTRO
    var sph2 = new THREE.SphereGeometry(0.4, 16, 16);
    var texture1 = new THREE.TextureLoader().load("./assets/pan.jpg");
    var matpan1 = new THREE.MeshLambertMaterial({ map: texture1});
    var centro = new THREE.Mesh(sph2, matpan1);
    centro.position.set(0, 1.3, 0);
    //scene.add(centro);

    // HUESITO 1
    var cyl1 = new THREE.CylinderGeometry(0.15, 0.15, 2.2, 16);
    var huesito1 = new THREE.Mesh(cyl1, matpan1);
    huesito1.rotation.z = 1.57;
    huesito1.position.set(0, 1.1, 0);
    //scene.add(huesito1);

    // HUESITO 2
    var cyl2 = new THREE.CylinderGeometry(0.15, 0.15, 2.2, 16);
    var huesito2 = new THREE.Mesh(cyl2, matpan1);
    huesito2.rotation.x = 1.57;
    huesito2.position.set(0, 1.1, 0);
    //scene.add(huesito2);


    // Grupo final
    var muerto = new THREE.Group();
    muerto.add(pan, centro, huesito1, huesito2);
    muerto.position.set(x, y, z);

    return muerto;
}

