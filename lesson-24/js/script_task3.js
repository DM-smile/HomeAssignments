"use strict"
// ===== BEGIN ===== //
const htmlEl = document.querySelector('main')
htmlEl.style = 'font-size: 20px'

const username = prompt("Ваше ім'я?")
const usersList = new Map()
if (!localStorage.getItem(username)) {
   localStorage.setItem(username, 1)
} else {
   let count = parseInt(localStorage.getItem(username))
   localStorage.setItem(username, count + 1)
}

const redner = (htmlBlock) => {
   for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      const val = localStorage.getItem(key)
      usersList.set(key, val)
   }

   for (const [key, val] of usersList) {
      htmlBlock.append(`${key} - кількість відвідувань: ${val}`)
      htmlBlock.append(document.createElement('br'))
   }
}

redner(htmlEl)

console.log(usersList)

// ===== clear ===== //
const reset = document.createElement('button')
reset.style = 'margin-bottom: 30px'
reset.innerText = 'clear local storage'
const btnReset = () => {
   localStorage.clear()
   location.reload()
}
htmlEl.prepend(reset, document.createElement('br'))
reset.addEventListener('click', btnReset)