import * as THREE from "../js/three.module.js";

export default function calaverita({ x, y , z}){

//calaverita
 var calaverita = new THREE.TetrahedronGeometry(1.418, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh73 = new THREE.Mesh(calaverita,mat02);
   //scene.add(mesh73);
   mesh73.position.set(5.577,1.494,0);

   //ojo izquierdo 
 var ojoi = new THREE.TetrahedronGeometry(0.319, 20);
   var mat03 = new THREE.MeshLambertMaterial({
       color:0x000000, side:THREE.DoubleSide, 
       
   });

   var mesh74 = new THREE.Mesh(ojoi,mat03);
   //scene.add(mesh74);
   mesh74.position.set(5.148,1.742,1.111);

   //ojo derecho 
 var ojod = new THREE.TetrahedronGeometry(0.319, 20);
 
   var mesh75 = new THREE.Mesh(ojod,mat03);
   //scene.add(mesh75);
   mesh75.position.set(5.884,1.742,1.150);

   //frente
 var frente = new THREE.BoxGeometry(1.263,0.502,0.097);
   var mat04 = new THREE.MeshLambertMaterial({
       color:0xFF1493
, side:THREE.DoubleSide, 
       
   });

   var mesh76 = new THREE.Mesh(frente,mat04);
   //scene.add(mesh76);
   mesh76.position.set(5.539,2.336,1.167);
   mesh76.rotation.x = 31.18 
 
   //nariz derecha
   var narizder = new THREE.TetrahedronGeometry(0.100, 20);

   var mesh77 = new THREE.Mesh(narizder,mat03);
   //scene.add(mesh77);
   mesh77.position.set(5.454,1.367,1.396);

//nariz izquierda
   var narizizq = new THREE.TetrahedronGeometry(0.100, 20);
   
   var mesh78 = new THREE.Mesh(narizizq,mat03);
   //scene.add(mesh78);
   mesh78.position.set(5.627,1.367,1.396);

   const Calaverita= new THREE.Group();
   Calaverita.add(mesh73,mesh74,mesh75,mesh76,mesh77,mesh78);
   Calaverita.position.set(x,y,z);
   
   return Calaverita;
   }