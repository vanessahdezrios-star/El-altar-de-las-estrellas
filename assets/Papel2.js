import * as THREE from "../js/three.module.js";

export default function Papel({ x, y , z}){

//----Papel Picado----
var box1 = new THREE.BoxGeometry(3,3,0.1); 
var texture=new THREE.TextureLoader().load("./assets/2.png");
var mat2= new THREE.MeshLambertMaterial({map:texture});
var papel = new THREE.Mesh(box1, mat2);
papel.position.set(0, 4, 0);
//scene.add(papel);

const Papel= new THREE.Group();
Papel.add(papel);
Papel.position.set(x,y,z);

return Papel;
}
