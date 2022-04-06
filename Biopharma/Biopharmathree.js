// models three.js

let camera1;
let renderer1;
let scene1;
let phone1;

let container1 = document.querySelector('.img2');

function initial(){



//create scene

scene1 = new THREE.Scene();

const fov = 3;
const aspect = container1.clientWidth / container1.clientHeight;
const near = 0.5;
const far = 1200;


//camera setup
camera1 = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera1.position.set(0, 15,900);





const ambient = new THREE.AmbientLight(0x404040, 50);
scene1.add(ambient);

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(-900,-200,100);
scene1.add(light);
const light1 = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(-400,-600,400);
scene1.add(light1);

//renderer
renderer1 = new THREE.WebGLRenderer({ antialias: true, alpha:true });
renderer1.setSize(container1.clientWidth, container1.clientHeight);
renderer1.setPixelRatio(window.devicePixelRatio);


container1.appendChild(renderer1.domElement);


//load model

let loader1 = new THREE.GLTFLoader();
loader1.load('../3DD/scene.gltf', function(gltf){
    
    scene1.add(gltf.scene);
    phone1 = gltf.scene.children[0];
    animat();

});
}

function animat(){
    requestAnimationFrame(animat);
    phone1.rotation.z += 0.005;
    
    
    renderer1.render(scene1, camera1);

}


initial();

function Resize() {
   camera1.aspect = container1.clientWidth/container1.clientHeight;
    camera1.updateProjectionMatrix();

    renderer1.setSize(container1.clientWidth, container1.clientHeight);
    
}

window.addEventListener('resize', Resize);



