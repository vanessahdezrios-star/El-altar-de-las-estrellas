import * as THREE from "../js/three.module.js";

export default function calaca({x,y,z}){

   //pierna izquierda


 var pieizq = new THREE.BoxGeometry(0.195,0.861,0.190);
   var mat01 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh01 = new THREE.Mesh(pieizq,mat01);
   //scene.add(mesh01);
   mesh01.position.set(0.147,0.698,0.000);

  //huesos

 var hueso1 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh02 = new THREE.Mesh(hueso1,mat02);
   //scene.add(mesh02);
   mesh02.position.set(0.228,1.132,0.000);

   //2


 var hueso2 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh03 = new THREE.Mesh(hueso2,mat02);
   //scene.add(mesh03);
   mesh03.position.set(0.228,0.230,0.000);

     //3


 var hueso3 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh04 = new THREE.Mesh(hueso3,mat02);
   //scene.add(mesh04);
   mesh04.position.set(0.034,0.236,0.000);


   //4


 var hueso4 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh05 = new THREE.Mesh(hueso4,mat02);
   //scene.add(mesh05);
   mesh05.position.set(0.072,1.132,0.000);

   //pierna izquierda arriba


 var pieizqa = new THREE.BoxGeometry(0.195,0.861,0.190);
   var mat01 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh06 = new THREE.Mesh(pieizq,mat01);
   //scene.add(mesh06);
   mesh06.position.set(0.147,2.100,0.000);

  //huesos


 var hueso1 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh07 = new THREE.Mesh(hueso1,mat02);
   //scene.add(mesh07);
   mesh07.position.set(0.228,2.534,0.000);

   //2


 var hueso2 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh08 = new THREE.Mesh(hueso2,mat02);
   //scene.add(mesh08);
   mesh08.position.set(0.228,1.632,0.000);

     //3


 var hueso3 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh09 = new THREE.Mesh(hueso3,mat02);
   //scene.add(mesh09);
   mesh09.position.set(0.034,1.638,0.000);


   //4

 var hueso4 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh10 = new THREE.Mesh(hueso4,mat02);
   //scene.add(mesh10);
   mesh10.position.set(0.072,2.534,0.000);

   

//pierna der


 var pieder = new THREE.BoxGeometry(0.195,0.861,0.190);
   var mat01 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh11 = new THREE.Mesh(pieder,mat01);
   //scene.add(mesh11);
   mesh11.position.set(0.647,0.698,0.000);

  //huesos


 var hueso1 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh12 = new THREE.Mesh(hueso1,mat02);
   //scene.add(mesh12);
   mesh12.position.set(0.728,1.132,0.000);

   //2


 var hueso2 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh13 = new THREE.Mesh(hueso2,mat02);
   //scene.add(mesh13);
   mesh13.position.set(0.728,0.230,0.000);

     //3


 var hueso3 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh14 = new THREE.Mesh(hueso3,mat02);
   //scene.add(mesh14);
   mesh14.position.set(0.534,0.236,0.000);


   //4


 var hueso4 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh15 = new THREE.Mesh(hueso4,mat02);
   //scene.add(mesh15);
   mesh15.position.set(0.572,1.132,0.000);


   //pierna derecha arriba

 var piedera = new THREE.BoxGeometry(0.195,0.861,0.190);
   var mat01 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh16 = new THREE.Mesh(piedera,mat01);
   //scene.add(mesh16);
   mesh16.position.set(0.647,2.100,0.000);

  //huesos


 var hueso1 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh17 = new THREE.Mesh(hueso1,mat02);
   //scene.add(mesh17);
   mesh17.position.set(0.728,2.534,0.000);

   //2


 var hueso2 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh18 = new THREE.Mesh(hueso2,mat02);
   //scene.add(mesh18);
   mesh18.position.set(0.728,1.632,0.000);

     //3

 var hueso3 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh19 = new THREE.Mesh(hueso3,mat02);
   //scene.add(mesh19);
   mesh19.position.set(0.534,1.638,0.000);


   //4


 var hueso4 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh20 = new THREE.Mesh(hueso4,mat02);
   //scene.add(mesh20);
   mesh20.position.set(0.572,2.534,0.000);

 //cadera 


 var cadera1 = new THREE.TetrahedronGeometry(0.320, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh21 = new THREE.Mesh(cadera1,mat02);
   //scene.add(mesh21);
   mesh21.position.set(0.180,3.100,0.000);


   //Cadera 2
 

 var cadera2 = new THREE.TetrahedronGeometry(0.320, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh22 = new THREE.Mesh(cadera2,mat02);
   //scene.add(mesh22);
   mesh22.position.set(0.700,3.100,0.127);

   //torso
    

    var torso = new THREE.BoxGeometry(0.155,1.755,0.190);
   var mat01 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });



   var mesh23 = new THREE.Mesh(torso,mat01);
   //scene.add(mesh03);
   mesh23.position.set(0.419,4.404,0.000);
   

   //brazo izquierdo 
    //scene.add(brazoizq);

    var brazoizq = new THREE.BoxGeometry(0.155,0.861,0.190);
   var mat01 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh24 = new THREE.Mesh(brazoizq,mat01);
   //scene.add(mesh24);
   mesh24.position.set(-0.385,4.118,0.000);

   //huesos
//scene.add(hueso1);

 var hueso1 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh25 = new THREE.Mesh(hueso1,mat02);
   //scene.add(mesh25);
   mesh25.position.set(-0.484,4.571,0.000);

   //2

//scene.add(hueso1);

 var hueso2 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh26 = new THREE.Mesh(hueso2,mat02);
   //scene.add(mesh26);
   mesh26.position.set(-0.305,4.571,0.000);

     //3
//scene.add(hueso1);

 var hueso3 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh27 = new THREE.Mesh(hueso3,mat02);
   //scene.add(mesh27);
   mesh27.position.set(-0.484,3.647,0.000);


   //4
//scene.add(hueso1);

 var hueso4 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh28 = new THREE.Mesh(hueso4,mat02);
   //scene.add(mesh28);
   mesh28.position.set(-0.295,3.647,0.000);

//brazo derecho
    //scene.add(brazoder);

    var brazoder = new THREE.BoxGeometry(0.155,0.861,0.190);
   var mat01 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh29 = new THREE.Mesh(brazoder,mat01);
   //scene.add(mesh29);
   mesh29.position.set(1.185, 4.118, 0.000);

   //huesos
//scene.add(hueso1);

 var hueso1 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh30 = new THREE.Mesh(hueso1,mat02);
   //scene.add(mesh30);
   mesh30.position.set(1.284, 4.571, 0.000);

   //2

//scene.add(hueso1);

 var hueso2 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh31 = new THREE.Mesh(hueso2,mat02);
   //scene.add(mesh31);
   mesh31.position.set(1.105, 4.571, 0.000);

     //3

//scene.add(hueso1);

 var hueso3 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh32 = new THREE.Mesh(hueso3,mat02);
   //scene.add(mesh32);
   mesh32.position.set(1.284, 3.647, 0.000);


   //4

//scene.add(hueso1);

 var hueso4 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh33 = new THREE.Mesh(hueso4,mat02);
   //scene.add(mesh33);
   mesh33.position.set(1.095, 3.647, 0.000);


   //Cabeza
   
//scene.add(cabeza);

 var cabeza = new THREE.TetrahedronGeometry(0.526, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh34 = new THREE.Mesh(cabeza,mat02);
   //scene.add(mesh34);
   mesh34.position.set(0.419,5.204,0.127);

//ojo 1

//scene.add(ojo1);

 var ojo1 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0x000000, side:THREE.DoubleSide, 
       
   });

   var mesh35 = new THREE.Mesh(ojo1,mat02);
   //scene.add(mesh35);
   mesh35.position.set(0.223,5.260,0.601);

//ojo 
   
//scene.add(ojo2);

 var ojo2 = new THREE.TetrahedronGeometry(0.127, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0x000000, side:THREE.DoubleSide, 
       
   });

   var mesh36 = new THREE.Mesh(ojo2,mat02);
   //scene.add(mesh36);
   mesh36.position.set(0.565,5.260,0.601);

   //fosa 1

//scene.add(fosa1);

 var fosa1 = new THREE.TetrahedronGeometry(0.030, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0x000000, side:THREE.DoubleSide, 
       
   });

   var mesh37 = new THREE.Mesh(fosa1,mat02);
   //scene.add(mesh37);
   mesh37.position.set(0.370,5.146,0.671);

//fosa 2

//scene.add(fosa2);

 var fosa2 = new THREE.TetrahedronGeometry(0.030, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0x000000, side:THREE.DoubleSide, 
       
   });

   var mesh38 = new THREE.Mesh(fosa2,mat02);
   //scene.add(mesh38);
   mesh38.position.set(0.425,5.146,0.671);

   //boca

//scene.add(boca);

 var boca = new THREE.TetrahedronGeometry(0.105, 20);
   var mat02 = new THREE.MeshLambertMaterial({
       color:0x000000, side:THREE.DoubleSide, 
       
   });

   var mesh39 = new THREE.Mesh(boca,mat02);
   //scene.add(mesh39);
   mesh39.position.set(0.412,4.990,0.550);

   //costillas 

    //scene.add(costilla1);

    var costilla1 = new THREE.BoxGeometry(0.155,0.861,0.190);
   var mat01 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh40 = new THREE.Mesh(costilla1,mat01);
   //scene.add(mesh40);
   mesh40.position.set(0.391,4.404,0.000);
   mesh40.rotation.z = 1.5708

   
    //scene.add(costilla2);

    var costilla2 = new THREE.BoxGeometry(0.155,0.861,0.190);
   var mat01 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh41 = new THREE.Mesh(costilla2,mat01);
   //scene.add(mesh41);
   mesh41.position.set(0.403,3.978,0.000);
   mesh41.rotation.z = 1.5708

    //scene.add(costilla3);

    var costilla3 = new THREE.BoxGeometry(0.155,0.861,0.190);
   var mat01 = new THREE.MeshLambertMaterial({
       color:0xFFFFFF, side:THREE.DoubleSide, 
       
   });

   var mesh42 = new THREE.Mesh(costilla3,mat01);
   //scene.add(mesh42);
   mesh42.position.set(0.403,3.554,0.000);
   mesh42.rotation.z = 1.5708

  const calaca = new THREE.Group();
    calaca.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24,mesh25,mesh26,mesh27,mesh28,mesh29,mesh30,mesh31,mesh32,mesh33,mesh34,mesh35,mesh36,mesh37,mesh38,mesh39,mesh40,mesh41,mesh42);
    calaca.position.set(x,y,z);


    return calaca;
}


