
// States
// const $positionOne = document.querySelector(".container-section-2-one");
// const $positionFour = document.querySelector(".container-section-2-four");
// const $positionSix = document.querySelector(".container-section-2-six");

// let scroll = 0;
// let scrollFour = 0;
// let scrollSix = 0;
// let firstTime = true;
// let firstTimeFour = true;
// let firstTimeSix = true;

// const imageFixedOne = () => {
//     let topOne = $positionOne.getBoundingClientRect().top;
//     console.log(scroll);
  
    
//       if (topOne <= 0) {
//         if (firstTime === true) {
//           scroll = window.scrollY;
//           firstTime = false;
//         }
//         $positionOne.style.position = "fixed";
//         $positionOne.style.top = "0";
//         $positionOne.style.left = "0";
//         $positionOne.style.width = "50%";
//         $positionOne.style.zIndex = "50";
//       }
//       if (scroll >= window.scrollY) {
//         $positionOne.style.position = "relative";
//         $positionOne.style.width = "100%";
//         $positionOne.style.top = "0";
//         $positionOne.style.left = "0";
//       }
    
//   };
  
//   const imageFixedFour = () => {
//     let topFour = $positionFour.getBoundingClientRect().top;
  
//     if (topFour <= 0) {
//       if (firstTimeFour === true) {
//         scrollFour = window.scrollY; // Obtengo donde empieza el scroll
//         firstTimeFour = false;
//       }
//       isFourActive = true;
//     }
//     if (scrollFour >= window.scrollY) {
//       isFourGoingUp = true;
//       isFourActive = false;
//     } // Esto se ejecuta en cuanto se detecta que se pasa >>
//     if (scroll >= window.scrollY) {
//       isFourGoingUp = false;
//     }
//   };
  
//   const imageFixedSix = () => {
//     let topSix = $positionSix.getBoundingClientRect().top;
//     //console.log(topSix + " Gaaa!!");
//     if (topSix <= 0) {
//       //console.log(topSix + " Yaa entre y " + topSix + " es < 0");
//       if (firstTimeSix === true) {
//         scrollSix = window.scrollY; // Obtengo donde empieza el scroll
//         firstTimeSix = false;
//       }
//       isSixActive = true;
//     }
//     if (scrollSix >= window.scrollY) {
//       isSixGoingUp = true;
//       isSixActive = false;
  
//     } // Esto se ejecuta en cuanto se detecta que se pasa >>
//     if(scrollFour>= window.scrollY){
//       isSixGoingUp = false;
//     }
//   };
  