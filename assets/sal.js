import * as THREE from "../js/three.module.js";

export default function Sal({ x, y, z }) {

    // BASE
    var cyl1 = new THREE.CylinderGeometry(0.6, 0.6, 0.3, 32);
    var matbase = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF,side: THREE.DoubleSide});
    var base = new THREE.Mesh(cyl1, matbase);
    base.position.set(0, 0, 0);
    //scene.add(base);

    // SAL
    var sph1 = new THREE.SphereGeometry(0.55, 16, 16, 0, 6.28, 0, 1.57);
    var matsal = new THREE.MeshLambertMaterial({
        color: 0xF9F9F9,side: THREE.DoubleSide});
    var sales = new THREE.Mesh(sph1, matsal);
    sales.position.set(0, 0.15, 0);
    //scene.add(sales);

    const sal = new THREE.Group();
    sal.add(base, sales);
    sal.position.set(x, y, z);;
       
       
           return sal;
       }
