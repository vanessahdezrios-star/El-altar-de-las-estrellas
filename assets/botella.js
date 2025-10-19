import * as THREE from "../js/three.module.js";

export default function Botella({ x, y, z }) {

    var botella = new THREE.BoxGeometry(0.94, 2.163, 0.688);
    var texture=new THREE.TextureLoader().load("./assets/bot.jpg");
     var mat2= new THREE.MeshLambertMaterial({map:texture});
    var mesh65 = new THREE.Mesh(botella, mat2);
    mesh65.position.set(0, 1.0815, 0);
    //scene.add(mesh65);

    var cubo1 = new THREE.BoxGeometry(0.598, 0.232, 0.542);
    var mesh66 = new THREE.Mesh(cubo1, mat2);
    mesh66.position.set(0, 2.28, 0);
    //scene.add(mesh66);

    var cubo2 = new THREE.BoxGeometry(0.439, 0.232, 0.542);
    var mesh67 = new THREE.Mesh(cubo2, mat2);
    mesh67.position.set(0, 2.512, 0);
    //scene.add(mesh67);

    var cubo3 = new THREE.BoxGeometry(0.173, 0.405, 0.225);
    var mesh68 = new THREE.Mesh(cubo3, mat2);
    mesh68.position.set(0, 2.7175, 0);
    //scene.add(mesh68);

    var tapa = new THREE.SphereGeometry(0.17, 20, 20);
    var mat3 = new THREE.MeshLambertMaterial({ 
        color: 0xA0522D, side: THREE.DoubleSide }); 
    var mesh69 = new THREE.Mesh(tapa, mat3);
    mesh69.position.set(0, 3.0275, 0);
    //scene.add(mesh69);
    
    const Bottle = new THREE.Group();
    Bottle.add(mesh65, mesh66, mesh67, mesh68, mesh69);
    Bottle.position.set(x, y, z);

    return Bottle;
}
