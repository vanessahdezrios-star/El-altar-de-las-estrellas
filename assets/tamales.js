import * as THREE from "../js/three.module.js";

export default function tamales({x,y,z}){

    //plato
    var plato = new THREE.CylinderGeometry(1, 0.8,0.1, 50);
    var texture=new THREE.TextureLoader().load("./assets/plato.jpg");
   var mat01= new THREE.MeshLambertMaterial({map:texture});
   var mesh86 = new THREE.Mesh(plato,mat01);
   //scene.add(mesh86);
   mesh86.position.set(-0.2,0.1,0);


// tamal 1
var tamal1 = new THREE.BoxGeometry(0.3, 0.2, 0.7);
var mat01 = new THREE.MeshLambertMaterial({
    color: 0x6B8E23, side: THREE.DoubleSide,
});

var mesh02 = new THREE.Mesh(tamal1, mat01);
//scene.add(mesh02);
mesh02.position.set(-0.675, 0.15, 0);


// tamal 2
var tamal2 = new THREE.BoxGeometry(0.3, 0.2, 0.7);
var mat01 = new THREE.MeshLambertMaterial({
    color: 0x6B8E23, side: THREE.DoubleSide,
});

var mesh03 = new THREE.Mesh(tamal2, mat01);
//scene.add(mesh03);
mesh03.position.set(-0.325, 0.15, 0);

// tamal 3
var tamal3 = new THREE.BoxGeometry(0.3, 0.2, 0.7);
var mat01 = new THREE.MeshLambertMaterial({
    color: 0x6B8E23, side: THREE.DoubleSide,
});


var mesh04 = new THREE.Mesh(tamal3, mat01);
//scene.add(mesh04);
mesh04.position.set(0.025, 0.15, 0);


// tamal 4
var tamal4 = new THREE.BoxGeometry(0.3, 0.2, 0.7);
var mat01 = new THREE.MeshLambertMaterial({
    color: 0x6B8E23, side: THREE.DoubleSide,
});

var mesh05 = new THREE.Mesh(tamal4, mat01);
//scene.add(mesh05);
mesh05.position.set(0.375, 0.15, 0);


  const TM = new THREE.Group();
           TM.add(mesh86,mesh02,mesh03,mesh04,mesh05);
           TM.position.set(x,y,z);
       
       
           return TM;
       }