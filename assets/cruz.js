import * as THREE from "../js/three.module.js";

export default function cruz({x,y,z}){

    //cruz horizontal
    var cruzhor = new THREE.BoxGeometry(0.155,0.861,0.190);
var texture=new THREE.TextureLoader().load("./assets/metal.jpg");
var mat01= new THREE.MeshLambertMaterial({map:texture});
   var mesh01 = new THREE.Mesh(cruzhor,mat01);
   //scene.add(mesh01);
   mesh01.position.set(-4.551,2,0.000);
   mesh01.rotation.z = 1.5708;

   //cruz vertical
    var cruzver = new THREE.BoxGeometry(0.155,1.2,0.190);
   var mesh02 = new THREE.Mesh(cruzver,mat01);
   //scene.add(mesh02);
   mesh02.position.set(-4.551,1.847,0);

     const cruz = new THREE.Group();
       cruz.add(mesh01,mesh02);
       cruz.position.set(x,y,z);
   
   
       return cruz;
   }
   