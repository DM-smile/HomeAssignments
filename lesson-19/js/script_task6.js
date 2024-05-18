"use strict"
// ===== BEGIN ===== //
function transferElement(event) {
   const mainList = document.querySelector('.main-list')
   const selectedList = document.querySelector('.selected-list')
   const target = event.target
   if (target.closest('.main-list') && target.classList.contains('item__button')) {
      selectedList.append(target.closest('.item'))
      target.style.backgroundImage = 'url("../img/arrow-red.png")'
   }
   else if (target.closest('.selected-list') && target.classList.contains('item__button')) {
      mainList.append(target.closest('.item'))
      target.style.backgroundImage = 'url("../img/arrow-green.png")'
   }
}

const mainHtml = document.querySelector('main')
mainHtml.addEventListener('click', transferElement)