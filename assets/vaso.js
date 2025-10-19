import * as THREE from "../js/three.module.js";

export default function vaso({x,y,z}){

//Vaso
var vaso = new THREE.CylinderGeometry (1, 0.7, 2, 96);
    var mat01 = new THREE.MeshLambertMaterial({
        color:0xABABAB, side: THREE.DoubleSide,
        transparent:true,
        opacity:0.6,
    });

     var mesh01 = new THREE.Mesh(vaso,mat01);
    //scene.add(mesh01);
    mesh01.position.set(-3,2,0);

    ///agua
    var agua= new THREE.CylinderGeometry (0.8, 0.4, 1.5, 96);
    var mat01 = new THREE.MeshLambertMaterial({
        color:0x87CEEB, side: THREE.DoubleSide,
    });

     var mesh02 = new THREE.Mesh(agua,mat01);
    //scene.add(mesh02);
    mesh02.position.set(-3,2,0); 

    const VS = new THREE.Group();
           VS.add(mesh01,mesh02);
           VS.position.set(x,y,z);
       
       
           return VS;
       }