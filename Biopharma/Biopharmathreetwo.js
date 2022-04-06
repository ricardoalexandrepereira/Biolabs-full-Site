let camera2;
let renderer2;
let scene2;
let phone2;

let container2 = document.querySelector('.img3');

function initial2(){



//create scene

scene2 = new THREE.Scene();

const fov = 3;
const aspect = container1.clientWidth / container1.clientHeight;
const near = 0.5;
const far = 1200;


//camera setup
camera2 = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera2.position.set(2, 0,150);





const ambient = new THREE.AmbientLight(0x404040, 50);
scene2.add(ambient);

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(-900,-200,100);
scene2.add(light);
const light2 = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(-400,-600,400);
scene2.add(light2);

//renderer
renderer2 = new THREE.WebGLRenderer({ antialias: true, alpha:true });
renderer2.setSize(container2.clientWidth, container2.clientHeight);
renderer2.setPixelRatio(window.devicePixelRatio);


container2.appendChild(renderer2.domElement);


//load model

let loader2 = new THREE.GLTFLoader();
loader2.load('../3DDD/scene.gltf', function(gltf){
    
    scene2.add(gltf.scene);
    phone2 = gltf.scene.children[0];
    animat2();

});
}

function animat2(){
    requestAnimationFrame(animat2);
    phone2.rotation.z += 0.010;
    
    
    
    renderer2.render(scene2, camera2);

}


initial2();

function Resize() {
   camera2.aspect = container2.clientWidth/container2.clientHeight;
    camera2.updateProjectionMatrix();

    renderer2.setSize(container2.clientWidth, container2.clientHeight);
    
}

window.addEventListener('resize', Resize);