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



//intro
const tl = gsap.timeline({defaults: {ease:'pawer1,out'}})
tl.to('.text', {y:'0%', duration: 1, stagger: 0.35});   //stagger mostra um a um
tl.to('.slider',{ y:'-1300', duration: 2 , delay: 0.5});
tl.to('.intro', {y: '-100%', duration:1 }, '-=1');




//section what we do
function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-title', 
        triggerHook:0

    })
    .setPin('.about-title')
    .addTo(controller)
}

splitScroll()

//three js

let controls;
let container;
let camera;
let render;
let scene;
let house;

function init(){
    container = document.querySelector('.scene');
    
    //create scene
    scene = new THREE.Scene();

    const fov = 30;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;

    //camera setup

    camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(0, 0, 5);

    

    const ambient = new THREE.AmbientLight(0x404040, 20);
    
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 100);
    light.position.set(10, 10, 500);
    scene.add(light);

    //renderer

    render = new THREE.WebGLRenderer({ antialias: true, alpha:true});
    render.setSize(container.clientWidth, container.clientHeight);
    render.setPixelRatio(window.devicePixelRatio);

    container.appendChild(render.domElement);
    //load model

    let loader = new THREE.GLTFLoader();
    loader.load('./3D/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        house = gltf.scene.children[0];
        animate();
        
        
    });

}

function animate(){
    requestAnimationFrame(animate);
    house.rotation.z += 0.002;
    render.render(scene, camera);
}
init();


//responsive

function onWindowResize(){
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    render.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);

//footer animation 

let tl2 = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2}});

        let flagPoles = CSSRulePlugin.getRule(".card:before")//para os pontos usa-se esta pluggin

        tl2.to('h2', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',opacity:1, y:0, duration: 2.2})
          .to('.form', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity:1, y:0},"-=2" )
          .from('.card', {scaleY:0, stagger: .2},"-=2")
          .from(flagPoles, {stagger:1, opacity:0, transform:'translateY(100px)'}, "-=2")
          .to('title, .desc', {stagger: .1, duration: 1.2, opacity:1, y:0},"-=2")
          .to('footer', {opacity:1},"-=2")


