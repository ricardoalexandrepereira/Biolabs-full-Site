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



    