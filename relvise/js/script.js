"use strict";

let itemArr = []
for (let i=1; i<=3; i++) {
  itemArr.push(document.getElementById("item" + i))
}
for (let i=0; i<3; i++){
  let item = itemArr[i];
  let text = item.querySelector(".item-servise__text");
  let title = item.querySelector(".item-servise__title");
  let img = item.querySelector(".item-servise__icon img");

  item.onmouseover = function(){
    text.style.color = 'white';
    title.style.color = 'white';
    img.src = 'img/services/' + (i + 1) + 'white.svg';
    item.style.background = "#0D5C63";
    item.style.transition = "0.8s"   ;
  }
  item.onmouseout = function(){
    text.style.color = null;
    title.style.color = null;
    img.src = 'img/services/' + (i + 1) + '.svg';
    item.style.background = null;
  }
}

let textArr = []
for (let i=1; i<=2; i++) {
  textArr.push(document.querySelector('.we__text' + i))
}
for(let i=0; i<2; i++){
  textArr[i].onclick = function(){
    let text = textArr[i];
    text.classList.toggle('we__text-visible');
  }
}


let contactArr = []
for (let i=1; i<=3; i++) {
  contactArr.push(document.getElementById("contact" + i))
}
for (let i=0; i<3; i++){
  let contact = contactArr[i];
  let mail = contact.querySelector(".contacts__mails");
  let titleCont = contact.querySelector(".contacts__title");
  let button = contact.querySelector(".contacts__button");
  let buttonA = contact.querySelector(".contacts__button a");
  let imgCont = contact.querySelector(".contacts__icon img");

  contact.onmouseover = function(){
    mail.style.color = 'white';
    titleCont.style.color = 'white';
    button.style.color = 'white';
    buttonA.style.color = 'white';
    imgCont.src = 'img/contacts/' + 'contacts' + (i + 1) + 'white.svg';
    contact.style.background = "#252B42";
    contact.style.padding = "80px 0px";
    contact.style.margin = "0px";
    contact.style.transition = "0.8s";
  }
  contact.onmouseout = function(){
    mail.style.color = null;
    titleCont.style.color = null;
    button.style.color = null;
    buttonA.style.color = null;
    imgCont.src = 'img/contacts/' + 'contacts' + (i + 1) + '.svg';
    contact.style.background = null;
    contact.style.padding = null;
    contact.style.margin = null;
  }
}




 


