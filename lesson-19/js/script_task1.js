"use strict"
// ===== BEGIN ===== //
function onClick(e) {
   let el = e.target
   if (el.tagName === 'DIV') {
      while (el.nextElementSibling !== null) {
         el = el.nextElementSibling
         el.style.backgroundColor = 'red'
      }
      el = e.target
      while (el.previousElementSibling !== null) {
         el.style.background = 'none'
         el = el.previousElementSibling
      }
   }
}
document.querySelector('.main').onclick = onClick