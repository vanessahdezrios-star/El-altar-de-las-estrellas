import * as THREE from "../js/three.module.js";

export default function vela({ x, y , z}){

//----VELA----
var cyl1= new THREE.CylinderGeometry(0.5,0.5,2.5);
var texture=new THREE.TextureLoader().load("./assets/cera.jpg");
var mathueso= new THREE.MeshLambertMaterial({map:texture});
var base= new THREE.Mesh(cyl1,mathueso);
base.position.set(0,2,0);

var con1 = new THREE.ConeGeometry(0.3,1,16);
var matama = new THREE.MeshLambertMaterial({ 
    color: 0xFFD000, side:THREE.DoubleSide
});
var luz = new THREE.Mesh(con1,matama);
luz.position.set(0,3.75,0);

var fuego = new THREE.PointLight(0xFFD580, 2, 6);
fuego.position.set(0,3,0);

const vela= new THREE.Group();
vela.add(base,luz,fuego);
vela.position.set(x,y,z);

return vela;
}
