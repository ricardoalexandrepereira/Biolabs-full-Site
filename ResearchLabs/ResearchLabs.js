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


/*animação research*/

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        start:"center center",
        end:"bottom top",
        markers:false,
        scrub : true,
        pin : true
    }
})
tl1.from(".box", { opacity : 0 })
tl1.from(".text1", { x : innerWidth * 2})
tl1.from(".text2", { x : innerWidth * 2 })
tl1.fromTo(".text3", { x : -1500},{x:200})
tl1.fromTo(".text0", { x : -1500},{x:200})




let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".box2",
        start:"center center",
        end:"bottom top",
        markers:false,
        scrub : true,
        pin : true
    }
})
tl2.from(".box2", { opacity : 0 })
tl2.from(".text4", { y : innerWidth * 1 })
tl2.from(".text5", { y : innerWidth * 1 })
tl2.fromTo(".text6", { x : 1000 },{x:-250})
tl2.fromTo(".text7", { x : 1000},{x:-300})

/*inside content*/

let tl = gsap.timeline({
    scrollTrigger: {
        trigger:'.front-page',
        start:'0%',
        end:'100%',
       // markers:true,
        scrub:true,
        pin:true
    }
})

tl.fromTo('.front-page', { clipPath:'circle(5%)'}, { clipPath:'circle(100%)'})
tl.fromTo('.fa-solid.fa-bong',{scale: 1.5}, {scale:0})
tl.fromTo('.title',{opacity: 0}, {opacity:1})
tl.fromTo('.sub-title',{opacity: 0}, {opacity:1})
/*inside content*/


/*second page*/
gsap.to(".boxc",{
    scrollTrigger:{
       trigger:".boxc",
       start:"20px 80%",
       end:"top 200px",
       scrub:1,
       },              
       x:700,           
       opacity:1,
       duration:3,
         
})                


gsap.to(".boxghostc",{
    scrollTrigger:{
       trigger:".boxc",
       start:"20px 80%",
       end:"top 100px",
       scrub:true,
       },              
       x:1280,           
       duration:3,
       
         
})                

gsap.to(".boxd",{
    scrollTrigger:{
       trigger:".boxd",
       start:"20px 80%",
       end:"top 100px",
       scrub:1,
       },              
       x:700,
       opacity:1,             
       duration:3,
         
})                


gsap.to(".boxghostd",{
    scrollTrigger:{
       trigger:".boxd",
       start:"20px 80%",
       end:"top 100px",
       scrub:true,
       },              
       x:1280,           
          
       duration:3,
       
         
})    
gsap.to(".boxe",{
    scrollTrigger:{
       trigger:".boxe",
       start:"20px 80%",
       end:"top 100px",
       scrub:1,
       },              
       x:700,           
       opacity:1,
       duration:3,
         
})                


gsap.to(".boxghoste",{
    scrollTrigger:{
       trigger:".boxe",
       start:"20px 80%",
       end:"top 100px",
       scrub:true,
       },              
       x:1280,           
         
       duration:3,
       
         
})                      
/*second page*/