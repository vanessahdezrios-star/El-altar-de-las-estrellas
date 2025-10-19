import * as THREE from "../js/three.module.js";

export default function Carlos({ x, y , z}){

//----MARCO DE FOTOS CARLOS----
var marcoplane = new THREE.BoxGeometry(6, 8, 0.5); 
var texture=new THREE.TextureLoader().load("./assets/mad.jpg");
var mat2= new THREE.MeshLambertMaterial({map:texture});
var marco = new THREE.Mesh(marcoplane, mat2);
marco.position.set(0, 4, 0);
//scene.add(marco);

var fotoplane= new THREE.PlaneGeometry(5, 7);
var textureC=new THREE.TextureLoader().load("./assets/carlos.jpg");
var materialC= new THREE.MeshLambertMaterial({map:textureC});
var foto = new THREE.Mesh(fotoplane, materialC);
foto.position.set(0, 4, 0.26); 
//scene.add(foto);

var box1 = new THREE.BoxGeometry(2, 7, 0.3);
    var soporte = new THREE.Mesh(box1, mat2);
    soporte.position.set(0, -0.5, -2); 
    soporte.rotation.x = 0.5; 
    //scene.add(soporte);

const MarcoPic= new THREE.Group();
MarcoPic.add(marco,foto,soporte);
MarcoPic.position.set(x,y,z);

return MarcoPic;
}
