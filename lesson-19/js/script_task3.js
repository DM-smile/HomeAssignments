"use strict"
// ===== BEGIN ===== //
const mainElement = document.getElementsByTagName('main')[0]
const numberLists = 5
for (let i = 0; i < numberLists; i++) {
   const randNumEl = 1 + Math.floor(Math.random() * (10))
   const newOlElement = document.createElement('ol')
   for (let li = 0; li < randNumEl; li++) {
      const randElValue = 1 + Math.floor(Math.random() * (100))
      const liElement = document.createElement('li')
      liElement.innerText = randElValue
      newOlElement.append(liElement)
   }
   mainElement.append(newOlElement)
}
const buttonPaint = document.createElement('span')
const buttonReset = document.createElement('span')
buttonPaint.innerText = 'ФАРБУВАТИ'
buttonReset.innerText = 'ОНОВИТИ'
mainElement.append(buttonPaint)
mainElement.append(buttonReset)

function countListElements() {
   const olElements = document.querySelectorAll('ol')
   for (const el of olElements) {
      if (el.childElementCount % 2 !== 0) {
         el.style.backgroundColor = 'red'
         el.style.color = 'black'
      } else {
         el.style.backgroundColor = 'green'
         el.style.color = 'white'
      }
   }
}
buttonPaint.onclick = countListElements
buttonReset.onclick = () => window.location.href = 'task3.html'