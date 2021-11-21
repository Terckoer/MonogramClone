//DOM
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

// SLIDER DOM
const $slider = document.getElementById('slider');
const $buttonRight = document.getElementById('button-right');
const $buttonLeft = document.getElementById('button-left');
const $firstLastSlide = document.querySelectorAll('.container-section-4-one')[3];

//SLIDER REVIEWS
const $sliderTwo =document.getElementById('slider-two');
const $buttonRightTwo = document.getElementById('button-right-two');
const $buttonLeftTwo = document.getElementById('button-left-two');
const $firstLastSlideTwo = document.querySelectorAll('.container-section-7-one')[3];


let arr = [];
for(let i=0;i<=1;i+=0.05){
  arr.push(i);
}

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


/* Buttons para el primer slider */

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

//Termina

/* Buttons para el segundo slider*/

const nextTwo = () =>{
  let $lastSlide = document.querySelectorAll('.container-section-7-one')[0]; 
  $sliderTwo.style.marginLeft = '-100vw';
  $sliderTwo.style.transition = 'all 0.5s';
  setTimeout(function(){
    $sliderTwo.style.transition = 'none';
    $sliderTwo.insertAdjacentElement('beforeend', $lastSlide);
    $sliderTwo.style.marginLeft ='0vw';
  },500);
}

const previousTwo = () =>{
  let $lastSlide = document.querySelectorAll('.container-section-7-one')[3]; 
  $sliderTwo.style.marginLeft = '100vw';
  $sliderTwo.style.transition = 'all 0.5s';
  setTimeout(function (){
    $sliderTwo.style.transition = 'none';
    $sliderTwo.insertAdjacentElement('afterbegin', $lastSlide);
    $sliderTwo.style.marginLeft ='0vw';
  },500);
}

$buttonRightTwo.addEventListener('click', () => nextTwo());
$buttonLeftTwo.addEventListener('click', () => previousTwo());



//

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

let subiendo = false;
const hideOnScroll6 = (entries, observer) =>{
  let intersection = entries[0].intersectionRatio;
  if(intersection>0.015){
    const $left20 = document.getElementById('id-left-20');
    const $left10 = document.getElementById('id-left-10');
    const $midTop = document.getElementById('id-mid-top');
    const $midBottom = document.getElementById('id-mid-bottom');
    const $right20 = document.getElementById('id-right-20');
    const $texts = document.getElementById('id-s3-texts');
    const $parts = document.getElementById('id-s3-parts');
    if(intersection<0.95){
      if(subiendo){
        
          $texts.style.transform = 'translateY(-15vh)';
          $texts.style.transition = 'all 0.3s ease';
          $parts.style.transform = 'translateY(5vh)';
          $parts.style.transition = 'all 0.3s ease';
          subiendo = false;
      }else{

        $left20.style.transition = 'all 0.5s ease';
        $left20.style.transform = `translateX(${-100+(100*intersection)}vw)`;
        $left10.style.transition = 'all 0.5s ease';
        $left10.style.transform = `translateY(${50-((100*intersection)/2)}vw)`;
        $midTop.style.transition = 'all 0.5s ease';
        $midTop.style.transform = `translateY(${-75+((100*intersection)/4)*3}vw)`;
        $midBottom.style.transition = 'all 0.5s ease';
        $midBottom.style.transform = `translateY(${100-(100*intersection)}vw)`;
        $right20.style.transition = 'all 0.5s ease';
        $right20.style.transform = `translateX(${100-(100*intersection)}vw)`; 
        console.log("Gaaaaa!!: "+(intersection))
      }
    }
    else{
      $left20.style.transition = 'all 0.5s ease';
      $left20.style.transform = `translateX(${0}vw)`;
      $left10.style.transition = 'all 0.5s ease';
      $left10.style.transform = `translateY(${0}vw)`;
      $midTop.style.transition = 'all 0.5s ease';
      $midTop.style.transform = `translateY(${0}vw)`;
      $midBottom.style.transition = 'all 0.5s ease';
      $midBottom.style.transform = `translateY(${0}vw)`;
      $right20.style.transition = 'all 0.5s ease';
      $right20.style.transform = `translateX(${0}vw)`;
      setTimeout(function(){
        $texts.style.transform = 'translateY(10vh)';
        $texts.style.transition = 'all 0.3s ease';
        $parts.style.transform = 'translateY(-20vh)';
        $parts.style.transition = 'all 0.3s ease';
      },500);
      subiendo=true;
    }
  }
}


let isBlueActive = false;

const showNewImageColor = (entries, observer) =>{
  let interseccion = entries[0].intersectionRatio;
  if(interseccion>0.1 ){
    const $overflow = document.getElementById('id-overflow');
    console.log(interseccion)
    if(interseccion<0.94 && !isBlueActive){
      $overflow.style.width = `${interseccion*100}%`;
      $overflow.style.transition = 'all 0.1s linear';
    }else{
      $overflow.style.width = `${100}%`;
      $overflow.style.transition = 'all 0.1s linear';
    }  
  }else{
    const $overflow = document.getElementById('id-overflow');
    if(!isBlueActive){
      $overflow.style.width = `${0}%`;
      $overflow.style.transition = 'all 0.1s linear';
    }
  }
}

const showNewImageColorBlue = (entries, observer) =>{
  let interseccion = entries[0].intersectionRatio;
  isBlueActive = true;
  if(interseccion>0.001){
    const $overflow = document.getElementById('id-100-vh');
    const $overflow2 = document.getElementById('id-section-6-img');
    const $overflowTexts = document.getElementById('id-section-6-texts');
    
    
      $overflow.style.background = `rgba(26, 36, 86,${interseccion})`;
      $overflow2.style.background = `rgba(26, 36, 86,${interseccion})`;
      $overflowTexts.style.transform = `scale(${0.8+(0.2*interseccion)}) translateY(${(25*interseccion)}vh)`;
      $overflowTexts.style.opacity = `${0+interseccion*2}`;
      $overflowTexts.style.transition = 'scale 0.3s linear';
  }else{
    isBlueActive = false;
  }
}

const keepFixedTheTool = (entries, observer) =>{
  let interseccion = entries[0].intersectionRatio;
  if(interseccion>0.005){
    const $lorem = document.getElementById('id-lorem');

      if(interseccion>0.95){
        $lorem.style.transform = `translateX(-${89.5}vw)`;
        $lorem.style.transition = 'all 0.5s linear';
      }else{
        $lorem.style.transform = `translateX(-${interseccion*89.5}vw)`;
        $lorem.style.transition = 'all 0.5s linear';
      }
  }else{
    const $lorem = document.getElementById('id-lorem');
    $lorem.style.transform = `translateX(${interseccion*89.5}vw)`;
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
  rootMargin:'2000px 0px 0px 0px',
  threshold:arr
});


const observerOverflow = new IntersectionObserver(showNewImageColor, {
  root:null,
  rootMargin:'0px 0px 1px 0px',
  threshold:arr
});


const observerOverflowBlue = new IntersectionObserver(showNewImageColorBlue, {
  root:null,
  rootMargin:'0px 0px 1px 0px',
  threshold:arr
});

//Tools
const observerKeepFixedTheTool = new IntersectionObserver(keepFixedTheTool, {
  root:null,
  rootMargin:'1900px 0px -100px 0px',
  threshold:arr
});


//ELEMENTS TO
const $texts =document.getElementById('id-three-hidden');
const $texts2 =document.getElementById('id-three-hidden-two');
const $texts3 =document.getElementById('id-three-hidden-three');
const $texts4 =document.getElementById('id-three-hidden-four');
const $texts5 =document.getElementById('id-three-hidden-five');
const $texts6 =document.getElementById('id-s3-observed');
const $overflowContent =document.getElementById('id-100-vh');
const $overflowContentBlue =document.getElementById('id-section-6-img');
const $observerKeepFixedTheTool =document.getElementById('id-tool-container-icons');

//OBSERVING ELEMENTS
observer.observe($texts);
observer2.observe($texts2);
observer3.observe($texts3);
observer4.observe($texts4);
observer5.observe($texts5);
observer6.observe($texts6);//THIS IS THE UNION
observerOverflow.observe($overflowContent);
observerOverflowBlue.observe($overflowContentBlue);
observerKeepFixedTheTool.observe($observerKeepFixedTheTool);


console.log("Si estoy entrando al script" + vh);
