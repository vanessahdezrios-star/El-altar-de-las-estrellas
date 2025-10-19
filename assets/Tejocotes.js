import * as THREE from "../js/three.module.js";

export default function Tejo({ x, y , z}){

//----TEJOCOTES----
 var cyl1 = new THREE.CylinderGeometry(3,1,0.8);
     var texture=new THREE.TextureLoader().load("./assets/plato.jpg");
var mathueso= new THREE.MeshLambertMaterial({map:texture});
    var plato= new THREE.Mesh(cyl1,mathueso);
    //scene.add(plato);
    plato.position.set(-10,1,0);

var sph1 = new THREE.SphereGeometry(0.5);
var matnaranja = new THREE.MeshLambertMaterial({ 
    color: 0xFFA500, side:THREE.DoubleSide,
});
var sph1 = new THREE.SphereGeometry(0.6, 16, 16);
var matnaranja = new THREE.MeshStandardMaterial({ color: 0xFFA500 });

var tejo1 = new THREE.Mesh(sph1, matnaranja);
tejo1.position.set(-10, 1.9, 0);
//scene.add(tejo1);

var tejo2 = new THREE.Mesh(sph1, matnaranja);
tejo2.position.set(-8.8, 1.9, 0.8);
//scene.add(tejo2);

var tejo3 = new THREE.Mesh(sph1, matnaranja);
tejo3.position.set(-10.5, 1.9, -0.7);
//scene.add(tejo3);

var tejo4 = new THREE.Mesh(sph1, matnaranja);
tejo4.position.set(-9.0, 1.9, -1.0);
//scene.add(tejo4);

var tejo5 = new THREE.Mesh(sph1, matnaranja);
tejo5.position.set(-11.0, 1.9, 0.6);
//scene.add(tejo5);

var tejo6 = new THREE.Mesh(sph1, matnaranja);
tejo6.position.set(-9.5, 1.9, 1.2);
//scene.add(tejo6);

var tejo7 = new THREE.Mesh(sph1, matnaranja);
tejo7.position.set(-10.2, 1.9, -1.2);
//scene.add(tejo7);

var tejo8 = new THREE.Mesh(sph1, matnaranja);
tejo8.position.set(-8.9, 1.9, -0.5);
//scene.add(tejo8);

var tejo9 = new THREE.Mesh(sph1, matnaranja);
tejo9.position.set(-10.8, 1.9, 1.0);
//scene.add(tejo9);

var tejo10 = new THREE.Mesh(sph1, matnaranja);
tejo10.position.set(-9.7, 1.9, -1.5);
//scene.add(tejo10);

var tejo11 = new THREE.Mesh(sph1, matnaranja);
tejo11.position.set(-11.2, 1.9, -0.8);
//scene.add(tejo11);

var tejo12 = new THREE.Mesh(sph1, matnaranja);
tejo12.position.set(-8.7, 1.9, 0.2);
//scene.add(tejo12);

const Tejocotes= new THREE.Group();
Tejocotes.add(plato,tejo1,tejo2,tejo3,tejo4,tejo5,tejo6,tejo7,tejo8,tejo9,tejo10,tejo11,tejo12);
Tejocotes.position.set(x,y,z);

return Tejocotes;
}