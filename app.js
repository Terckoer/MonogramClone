//DOM
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

// SLIDER DOM
let $slider = document.getElementById('slider');
const $buttonRight = document.getElementById('button-right');
const $buttonLeft = document.getElementById('button-left');
const $firstLastSlide = document.querySelectorAll('.container-section-4-one')[3];


/* Functions */

const textHidden = () => {
  const current = window.scrollY;
  const $fonts = document.querySelector(".hidden-text");
  if(current>1000){

  }else{
    $fonts.style.transform = `scale(${1 - 0.0005 * current},${
      1 - 0.0005 * current
    }) translateY(${current * 1.1}px)`;
    $fonts.style.opacity = `${1 - 0.0025 * current}`;
    $fonts.style.transition = `all 25ms `;
  }
};

const imageOpacity = () => {
  const $image = document.querySelector(".bg-image");
  const current = window.scrollY;
  const $buttons = document.querySelector(".main-container-buttons");
  if (current > 10) {
    $buttons.style.transform = `scale(0.8, 0.8)`;
    $buttons.style.opacity = "0";
    $buttons.style.transition = "500ms";
  } else {
    $buttons.style.transform = `scale(1, 1)`;
    $buttons.style.opacity = "1";
    $buttons.style.transition = "500ms";
  }

  if (current > vh * 2) {
    $image.style.backgroundColor = `rgba(0,0,0,0)`;
  } else {
    $image.style.backgroundColor = `rgba(0,0,0,${0.9 - 0.0008 * current})`;
  }
};

let count=0;

const revealTexts = () =>{
  const $h3 = document.getElementById('first-turn');
  const $p = document.getElementById('second-turn');
  let windowHeight = window.innerHeight;
  const $top = $h3.getBoundingClientRect().top;

    if($top < windowHeight-350){
      $h3.style.top = '-8rem';
      $h3.style.transition = 'all 0.4s ease';
      $p.style.bottom = '0';
    }else{
      $p.style.bottom = '-8rem';
      $p.style.transition = 'all 0.4s ease';
      $h3.style.top = '0';
    }

}

const next = () =>{
  let $lastSlide = document.querySelectorAll('.container-section-4-one')[0]; 
  $slider.style.marginLeft = '-120vw';
  $slider.style.transition = 'all 0.5s';
  setTimeout(function(){
  $slider.style.transition = 'none';
    $slider.insertAdjacentElement('beforeend', $lastSlide);
    $slider.style.marginLeft ='-52vw';
  },400);
}

const previous = () =>{
  let $lastSlide = document.querySelectorAll('.container-section-4-one')[3]; 
  $slider.style.marginLeft = '16vw';
  $slider.style.transition = 'all 0.5s';
  setTimeout(function (){
    $slider.style.transition = 'none';
    $slider.insertAdjacentElement('afterbegin', $lastSlide);
    $slider.style.marginLeft ='-52vw';
  },500);
}

$buttonRight.addEventListener('click', () => next());
$buttonLeft.addEventListener('click', () => previous());


document.addEventListener("scroll", function () {
  textHidden();
  imageOpacity();
  revealTexts();
  
});


//OBSERVERS FUNCTIONS
const hideOnScroll = (entries, observer) =>{
  if(entries[0].intersectionRatio>0){
    const $texts = document.getElementById('id-first-hidden');
    const $image = document.getElementById('id-first-hidden-1');
    let intersectionRate = entries[0].intersectionRatio;
    let brillo = intersectionRate*5<0.42?0:intersectionRate*5;
    let escala = (1.0-intersectionRate*1.5)<0?0:1.0-intersectionRate*1.5;
    $texts.style.opacity = (1.0-brillo)+'';
    $image.style.opacity = (1.0-brillo)+'';
    $image.style.transition = 'all 0.3s ease';
    $texts.style.transition = 'all 0.3s ease';
    $image.style.transform = `scale(${escala}) translateX(${intersectionRate*500}px)`;
    $texts.style.transform = `scale(${escala}) translateX(-${intersectionRate*500}px)`;
  }else{
    const $texts = document.getElementById('id-first-hidden');
    const $image = document.getElementById('id-first-hidden-1');
    $texts.style.opacity ='1';
    $image.style.opacity ='1';
    
  }
}

const hideOnScroll2 = (entries, observer) =>{
  if(entries[0].intersectionRatio>0){
    const $texts = document.getElementById('id-first-hidden-1-two');
    const $image = document.getElementById('id-first-hidden-two');
    let intersectionRate = entries[0].intersectionRatio;
    let brillo = intersectionRate*5<0.42?0:intersectionRate*5;
    let escala = (1.0-intersectionRate*1.5)<0?0:1.0-intersectionRate*1.5;
    $texts.style.opacity = (1.0-brillo)+'';
    $image.style.opacity = (1.0-brillo)+'';
    $image.style.transition = 'all 0.3s ease';
    $texts.style.transition = 'all 0.3s ease';
    $image.style.transform = `scale(${escala}) translateX(${intersectionRate*500}px)`;
    $texts.style.transform = `scale(${escala}) translateX(-${intersectionRate*500}px)`;
  }else{
    const $texts = document.getElementById('id-first-hidden-1-two');
    const $image = document.getElementById('id-first-hidden-two');
    $texts.style.opacity = '1';
    $image.style.opacity = '1';
  }
}


const hideOnScroll3 = (entries, observer) =>{
  if(entries[0].intersectionRatio>0){
    const $texts = document.getElementById('id-first-hidden-three');
    const $image = document.getElementById('id-first-hidden-1-three');
    let intersectionRate = entries[0].intersectionRatio;
    let brillo = intersectionRate*5<0.42?0:intersectionRate*5;
    let escala = (1.0-intersectionRate*1.5)<0?0:1.0-intersectionRate*1.5;
    $texts.style.opacity = (1.0-brillo)+'';
    $image.style.opacity = (1.0-brillo)+'';
    $image.style.transition = 'all 0.3s ease';
    $texts.style.transition = 'all 0.3s ease';
    $image.style.transform = `scale(${escala}) translateX(${intersectionRate*500}px)`;
    $texts.style.transform = `scale(${escala}) translateX(-${intersectionRate*500}px)`;
  }else{
    const $texts = document.getElementById('id-first-hidden-three');
    const $image = document.getElementById('id-first-hidden-1-three');
    $texts.style.opacity = '1';
    $image.style.opacity = '1';
  }
}

const hideOnScroll4 = (entries, observer) =>{
  if(entries[0].intersectionRatio>0){
    const $texts = document.getElementById('id-first-hidden-four');
    const $image = document.getElementById('id-first-hidden-1-four');
    let intersectionRate = entries[0].intersectionRatio;
    let brillo = intersectionRate*5<0.42?0:intersectionRate*5;
    let escala = (1.0-intersectionRate*1.5)<0?0:1.0-intersectionRate*1.5;
    $texts.style.opacity = (1.0-brillo)+'';
    $image.style.opacity = (1.0-brillo)+'';
    $image.style.transition = 'all 0.3s ease';
    $texts.style.transition = 'all 0.3s ease';
    $image.style.transform = `scale(${escala}) translateX(-${intersectionRate*500}px)`;
    $texts.style.transform = `scale(${escala}) translateX(${intersectionRate*50}px)`;
  }else{
    const $texts = document.getElementById('id-first-hidden-1-four');
    const $image = document.getElementById('id-first-hidden-four');
    $texts.style.opacity = '1';
    $image.style.opacity = '1';
  }
}


const hideOnScroll5 = (entries, observer) =>{
  if(entries[0].intersectionRatio>0){
    const $texts = document.getElementById('id-first-hidden-five');
    const $image = document.getElementById('id-first-hidden-1-five');
    let intersectionRate = entries[0].intersectionRatio;
    let brillo = intersectionRate*5<0.42?0:intersectionRate*5;
    let escala = (1.0-intersectionRate*1.5)<0?0:1.0-intersectionRate*1.5;
    $texts.style.opacity = (1.0-brillo)+'';
    $image.style.opacity = (1.0-brillo)+'';
    $image.style.transition = 'all 0.3s ease';
    $texts.style.transition = 'all 0.3s ease';
    $image.style.transform = `scale(${escala}) translateX(${intersectionRate*200}px)`;
    $texts.style.transform = `scale(${escala}) translateX(-${intersectionRate*200}px)`;
  }else{
    const $texts = document.getElementById('id-first-hidden-five');
    const $image = document.getElementById('id-first-hidden-1-five');
    $texts.style.opacity = '1';
    $image.style.opacity = '1';
  }
}


const hideOnScroll6 = (entries, observer) =>{
  if(entries[0].intersectionRatio>0){
    const $left20 = document.getElementById('id-left-20');
    let intersectionRate = entries[0].intersectionRatio;
    let brillo = intersectionRate*2000>800?0:intersectionRate*1000;
    //let escala = (1.0-intersectionRate*1.5)<0?0:1.0-intersectionRate*1.5;
    $left20.style.transition = 'all 0.5s ease';
    $left20.style.transform = `translateX(-${brillo}px)`;
    console.log("Gaaaaa!!: "+(intersectionRate))
  }else{
    const $left20 = document.getElementById('id-left-20');
    $left20.style.transition = 'all 0.5s ease';
    $left20.style.transform = `translateX(-${1000}px)`;
    
  }
}


//OBSERVERS
const observer = new IntersectionObserver(hideOnScroll, {
  root:null,
  rootMargin:'0px 0px 0px 0px',
  threshold:[0.05, 0.1, 0.15, 0.2]
});

const observer2 = new IntersectionObserver(hideOnScroll2, {
  root:null,
  rootMargin:'0px 0px -20% 0px',
  threshold:[0.05, 0.1, 0.15, 0.2]
});

const observer3 = new IntersectionObserver(hideOnScroll3, {
  root:null,
  rootMargin:'0px 0px -20% 0px',
  threshold:[0.05, 0.1, 0.15, 0.2]
});

const observer4 = new IntersectionObserver(hideOnScroll4, {
  root:null,
  rootMargin:'0px 0px 5% 0px',
  threshold:[0.05, 0.1, 0.15, 0.2]
});

const observer5 = new IntersectionObserver(hideOnScroll5, {
  root:null,
  rootMargin:'0px 0px 0px 0px',
  threshold:[0.05, 0.1, 0.15, 0.2]
});

const observer6 = new IntersectionObserver(hideOnScroll6, {
  root:null,
  rootMargin:'0px 0px 0px 0px',
  threshold:[0.15, 0.25, 0.35, 0.50]
});


//ELEMENTS TO
const $texts =document.getElementById('id-three-hidden');
const $texts2 =document.getElementById('id-three-hidden-two');
const $texts3 =document.getElementById('id-three-hidden-three');
const $texts4 =document.getElementById('id-three-hidden-four');
const $texts5 =document.getElementById('id-three-hidden-five');
const $texts6 =document.getElementById('id-three-hidden-five-2');


//OBSERVING ELEMENTS
observer.observe($texts);
observer2.observe($texts2);
observer3.observe($texts3);
observer4.observe($texts4);
observer5.observe($texts5);
observer6.observe($texts6);



console.log("Si estoy entrando al script" + vh);
