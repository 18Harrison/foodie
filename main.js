import *as bootstrap from 'bootstrap';
import './style.scss';

import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

let options = {
  strings: ['Food .....', 'Drinks ...'],
  typeSpeed: 40,
  showCursor : false,
  backSpeed : 6,
  loop:true,
};

var typed = new Typed('.element', options);

let toDown = {
  distance: '50px',
  origin: 'top',
  opacity :0,
  duration : 800,
  interval : 300
};

ScrollReveal().reveal('.toDown', toDown);

let toRight = {
  distance: '50px',
  origin: 'left',
  opacity :0,
  duration : 800,
  interval : 300
};

ScrollReveal().reveal('.toRight', toRight);

let toLeft = {
  distance: '50px',
  origin: 'right',
  opacity :0,
  duration : 800,
  interval : 300
};

ScrollReveal().reveal('.toLeft', toLeft);

let menus = [
  {
    id : 1,
    img : "./public/img/img/plate1.png",
    name : "Barbecue Salad",
    price : "$22.2"
  },
  {
    id : 2,
    img : "./public/img/img/plate2.png",
    name : "Barbecue with fish",
    price : "$22.6"
  },
  {
    id : 3,
    img : "./public/img/img/plate3.png",
    name : "Spanish Salad",
    price : "$23.2"
  }
]

let menuRows =document.querySelector(".menuRow")

menus.forEach(menu=>{
  let col = document.createElement("div")
  col.classList.add("col-8","col-md-4" ,"col-lg-3")
  col.innerHTML= `
  <div class=" card aniCard mb-4 ">
  <img src="${menu.img}" class="aniImg w-75 mt-3" style="margin:0 auto" alt="">
  <div class=" card-body">
    <p class=" fw-bold">${menu.name}</p>
    <p class=" text-mute" style="font-size: 13px;">Special delicous dish</p>
    <div class=" d-flex justify-content-between">
      <p class=" fw-bold">${menu.price}</p>
      <button class=" btn btn-primary btn-sm">
        <i class=" bi bi-list-check"></i>
      </button>
    </div>
  </div>
</div>
  `
menuRows.append(col)

})







