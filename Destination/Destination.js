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

/*animation three*/

const section = document.querySelector("section.book");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({alpha: true , antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
section.appendChild( renderer.domElement );

const ambient = new THREE.AmbientLight( 0x222222 ); 
scene.add( ambient );

const Light = new THREE.DirectionalLight( 0xffffff, 0.5 );
Light.position.set(0,0,6);
scene.add( Light );

const loader = new THREE.TextureLoader()

const urls = [
    "../imagens/edge.png", "../imagens/spine.png",
     "../imagens/top.png", "../imagens/bottom.png",
     "../imagens/front.png", "../imagens/back.png"
]

const materials = urls.map(url=>{
    return new THREE.MeshLambertMaterial({
        map: loader.load(url)
    })
})

const geometry = new THREE.BoxGeometry(3.5, 5, 0.5);
const cube = new THREE.Mesh( geometry, materials );
scene.add( cube );

camera.position.z = 6;

let currentTimeline = window.pageYOffset / 3000;
let aimTimeline = window.pageYOffset / 3000;

function animate() {
	requestAnimationFrame( animate );

    currentTimeline += (aimTimeline - currentTimeline) * 0.1;
    
    
    const rx = currentTimeline * -0.5 + 0.5;
    const ry = (currentTimeline * 0.9 + 0.1) * Math.PI * 2;


    cube.rotation.set(rx, ry, 0)

	renderer.render( scene, camera );
}
animate();

window.addEventListener("scroll", function(){
    aimTimeline = window.pageYOffset / 3000
})

 
        function Resize() {
            camera.aspect = section.clientWidth / section.clientHeight;
             camera.updateProjectionMatrix();
         
             renderer.setSize(section.clientWidth, section.clientHeight);
             
         }
         
         window.addEventListener('resize', Resize);