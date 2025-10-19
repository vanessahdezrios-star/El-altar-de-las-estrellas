import * as THREE from "../js/three.module.js";

export default function Uvas({ x, y , z}){

// uva 1
var uva1 = new THREE.SphereGeometry(0.2, 20, 20);
var texture=new THREE.TextureLoader().load("./assets/uva.jpg");
var mat2= new THREE.MeshLambertMaterial({map:texture});
var mesh79 = new THREE.Mesh(uva1, mat2);
//scene.add(mesh79);
mesh79.position.set(0, 0.127, 0);

// uva 2
var uva2 = new THREE.SphereGeometry(0.2, 20, 20);
var mesh80 = new THREE.Mesh(uva2, mat2);
//scene.add(mesh80);
mesh80.position.set(-0.174, 0.416, 0);

// uva 3
var uva3 = new THREE.SphereGeometry(0.2, 20, 20);
var mesh81 = new THREE.Mesh(uva3, mat2);
//scene.add(mesh81);
mesh81.position.set(0.134, 0.416, 0);

// uva 4
var uva4 = new THREE.SphereGeometry(0.2, 20, 20);
var mesh82 = new THREE.Mesh(uva4, mat2);
//scene.add(mesh82);
mesh82.position.set(-0.36, 0.712, 0);

// uva 5
var uva5 = new THREE.SphereGeometry(0.2, 20, 20);
var mesh83 = new THREE.Mesh(uva5, mat2);
//scene.add(mesh83);
mesh83.position.set(-0.057, 0.712, 0);

// uva 6
var uva6 = new THREE.SphereGeometry(0.2, 20, 20);
var mesh84 = new THREE.Mesh(uva6, mat2);
//scene.add(mesh84);
mesh84.position.set(0.243, 0.712, 0);

// tallo
var tallo = new THREE.BoxGeometry(0.101, 0.344, 0.088);
var mat3 = new THREE.MeshLambertMaterial({ 
    color: 0x006847, side: THREE.DoubleSide });
var mesh85 = new THREE.Mesh(tallo, mat3);
//scene.add(mesh85);
mesh85.position.set(0, 0.987, 0);
mesh85.rotation.z = 18.49;

const Uvas= new THREE.Group();
   Uvas.add(mesh79,mesh80,mesh81,mesh82,mesh83,mesh84,mesh85);
   Uvas.position.set(x,y,z);
   
   return Uvas;
   }