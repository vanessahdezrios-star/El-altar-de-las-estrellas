import * as THREE from "../js/three.module.js";

export default function Tequis({ x, y , z}){

//----BOTELLA DE TEQUILA----
 var box1= new THREE.BoxGeometry(2.5,5,2.5);
 var texture=new THREE.TextureLoader().load("./assets/bottle.jpg");
var mat2= new THREE.MeshLambertMaterial({map:texture});
    var base= new THREE.Mesh(box1,mat2);
    base.position.set(8,2.5,0);
    //scene.add(base);
    
var cyl2= new THREE.CylinderGeometry(0.5,0.5,1.6);
     var matred= new THREE.MeshLambertMaterial({
        color:0xBA0404, side:THREE.DoubleSide
    });
    var tapa= new THREE.Mesh(cyl2,matred);
    //scene.add(tapa);
    tapa.position.set(8,5.5,0);

var plane1= new THREE.PlaneGeometry(2.5,2,2);
var texture=new THREE.TextureLoader().load("./assets/wisky.jpg");
var material= new THREE.MeshLambertMaterial({map:texture});
var logo=new THREE.Mesh(plane1,material);
logo.position.set(8,2.5,1.28);

//----VASO TEQUILERO----
var cyl3 = new THREE.CylinderGeometry(0.5, 0.5, 1.2, 32);
var mathueso= new THREE.MeshLambertMaterial({
        color:0xF5EBE6, side:THREE.DoubleSide
    });
var vaso = new THREE.Mesh(cyl3, mathueso);
vaso.position.set(5, 0.6, 0);
//scene.add(vaso);

const Tequila= new THREE.Group();
Tequila.add(base,tapa,logo,vaso);
Tequila.position.set(x,y,z);

return Tequila;


}