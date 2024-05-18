"use strict"
// ===== BEGIN ===== //

// create HTML
function createHtml(num) {
   const mainBlock = document.querySelector('main')
   for (let i = 0; i < num; i++) {
      const label = document.createElement('label')
      const el = document.createElement('input')
      label.setAttribute('for', `input-${i + 1}`)
      label.innerText = `Value ${i + 1}`
      el.setAttribute('id', `input-${i + 1}`)
      el.setAttribute('type', `number`)
      mainBlock.append(label)
      mainBlock.append(el)
   }
}
window.onload = createHtml(5)

function autofill(event) {
   let target = event.target
   let targetValue = parseFloat(event.target.value)
   const initialValue = targetValue
   while (target.previousElementSibling !== null) {
      if (target.previousElementSibling.tagName === 'INPUT') {
         targetValue--
         target.previousElementSibling.value = targetValue
      }
      target = target.previousElementSibling
   }
   target = event.target
   targetValue = initialValue
   while (target.nextElementSibling !== null) {
      if (target.nextElementSibling.tagName === 'INPUT') {
         targetValue++
         target.nextElementSibling.value = targetValue
      }
      target = target.nextElementSibling
   }
}
const mainHtml = document.querySelector('main')
mainHtml.addEventListener('input', autofill)

