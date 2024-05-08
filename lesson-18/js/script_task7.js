"use strict"
// ===== BEGIN ===== //
function getTotalPrice() {
   const allElementPrice = document.querySelectorAll('input[type=checkbox], input[type = radio], select option')
   let totalPrice = 0
   allElementPrice.forEach((el) => {
      if (el.checked || el.selected) totalPrice += parseFloat(el.value)
   })
   const infoBlock = document.querySelector('#the_total_cost p')
   infoBlock.innerText = `$${totalPrice}`

}

const buttonForResult = document.getElementById('get_result')
buttonForResult.onclick = () => {
   getTotalPrice()
   buttonForResult.innerText = `Перерахувати`
}