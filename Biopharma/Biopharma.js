//active 
$(document).on('click', 'ul li',function(){
    $(this).addClass('active').siblings().removeClass('active')
})

//nav
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
       
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{ 
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }

        });
        //burger animation
        burger.classList.toggle('toggle')
    });

}
navSlide()



// models three.js

let camera;
let renderer;
let scene;
let phone;
let container = document.querySelector('.img1');

function init(){
    


//create scene

scene = new THREE.Scene();

const fov = 1;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 500;


//camera setup
camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.set(-0.3, -0.20,20);





const ambient = new THREE.AmbientLight(0x404040, 4);
scene.add(ambient);

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(-900,-200,100);
scene.add(light);
const light2 = new THREE.DirectionalLight(0xffffff, 2);
light2.position.set(-200,-800,200);
scene.add(light2);

//renderer
renderer = new THREE.WebGLRenderer({ antialias: true, alpha:true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);


container.appendChild(renderer.domElement);


//load model

let loader = new THREE.GLTFLoader();
loader.load('../3DDD/scene.gltf', function(gltf){
    scene.add(gltf.scene);
    phone = gltf.scene.children[0];
    animate();

});
}

function animate(){
    requestAnimationFrame(animate);
    phone.rotation.z += 0.002;
    
    renderer.render(scene, camera);

}


init();

function Resize() {
   camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
    
}

window.addEventListener('resize', Resize);


let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".img1",
        start:"center bottom",
        end:"center center",
        markers:false,
        scrub : true,
        
        
    }
})
tl5.fromTo(".txtimg1", { x : -1000},{x:0})



let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".img2",
        start:"center bottom",
        end:"center center",
        markers:false,
        scrub : true,
        
        
    }
})

tl6.fromTo("#txtimg2", { x : -1000},{x:0})
tl6.fromTo("#txtimg1", { x : 1000},{x:0})


let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".img3",
        start:"center bottom",
        end:"center center",
        markers:false,
        scrub : true,
        
        
    }
})

tl7.fromTo(".txtimg3", { x : 1000},{x:0})

let tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".img4",
        start:"center bottom",
        end:"center center",
        markers:false,
        scrub : true,
        
        
    }
})

tl8.fromTo(".vector", { x : -1500},{x:-500},-2)
tl8.fromTo("#text1", { x : 1000},{x:0})
tl8.fromTo("#text2", { x : 1000},{x:0})
tl8.fromTo("#text3", { x : 1000},{x:0})
tl8.fromTo("#text4", { x : 1000},{x:0})
tl8.fromTo("#text5", { opacity:0},{opacity:1},-1)

/*main efect*/  

let tl9 = gsap.timeline({
    

        start:"center bottom",
        end:"center center",
        markers:false,
        scrub : true,
        duration:.6
        
        
    }
)

tl9.fromTo(".pageinfo", {opacity:0},{opacity:1})
tl9.fromTo(".maincontent", { opacity:0},{opacity:1})

/*main efect*/ 







