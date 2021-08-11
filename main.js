const navBar = document.getElementById('navBar')
const toggleBtn = document.getElementById('toggleId')
const closeBtn = document.getElementById('closeId')

toggleBtn.addEventListener('click', ()=>{
    navBar.classList.toggle('show')
})

closeBtn.addEventListener('click', ()=>{
    navBar.classList.remove('show')

})

const nav = document.querySelectorAll('.navLink');
function takeAction(){
    navBar.classList.remove('show')
}
nav.forEach(n=>n.addEventListener('click',takeAction))

// Header Slider.
let clientSwiper = new Swiper(".reviewContent", {
  cssMode: true,
  loop: true,
  autoplay: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  mausehold: true,
 
});




let swiper = new Swiper(".homeWrapper", {
    cssMode: true,
    loop: true,
    autoplay: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    mausehold: true,
   
  });




  function boxShadow (){
    const scrollHeader = document.getElementById('header')
    if(this.scrollY >= 85)
    
        scrollHeader.classList.add('headerActive')
    
    else
        scrollHeader.classList.remove('headerActive')
    
}
window.addEventListener('scroll', boxShadow)



// SCROLL REAVEAL==============================================>

const sr = ScrollReveal({
  origin:'top',
  distance: '50px',
  duration:2000,
  reset:true

});

sr.reveal(`.introSection,`,{
  interval:200
});

sr.reveal(`.aboutText, `,{
  origin:'left',
  interval:200
});



