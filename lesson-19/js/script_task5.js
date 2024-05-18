"use strict"
// ===== BEGIN ===== //

function targetItem(e) {
   if (e.target.closest('.item')) {
      e.target.closest('.item').classList.toggle('chose')
   }
}
addEventListener('click', targetItem)