"use strict"
// ===== BEGIN ===== //
const mainEl = document.querySelector('main')
const addButton = document.createElement('button')
addButton.innerText = 'Додати справу до списку'
mainEl.append(addButton)
const runButton = document.createElement('button')
runButton.innerText = 'Готово'
mainEl.append(runButton)
const clearButton = document.createElement('button')
clearButton.innerText = 'Очистити всі дані'

const hEl = document.createElement('h3')
hEl.innerText = 'Список справ:'

const olEl = document.createElement('ol')
mainEl.append(olEl)


const createItemList = (main) => {
   main.prepend(hEl)
   const numItems = localStorage.length
   const value = prompt('Додати задачу:')
   if (value !== '' && value !== null) {
      localStorage.setItem(`task${numItems + 1}`, value)
   }
}
const renderItemList = (list = olEl) => {
   list.innerText = ''
   for (let i = 0; i < localStorage.length; i++) {
      const listItem = document.createElement('li')
      listItem.innerText = localStorage.getItem(localStorage.key(i))
      list.append(listItem)
   }
}

const numItems = localStorage.length
let intervalId
const removeButtons = (el1, el2, el3, main) => {
   el1.remove()
   el2.remove()
   main.prepend(el3)
   renderItemList()
   setInterval(runCheckTask, 5000)
}

const clearAll = () => {
   localStorage.clear()
   location.reload()
}

addButton.addEventListener('click', () => {
   createItemList(mainEl)
   renderItemList()
})

const runCheckTask = (data = localStorage) => {
   const taskNum = data.length
   const randNum = Math.floor(Math.random() * (taskNum))
   const currentCheckTask = data.getItem(data.key(randNum))
   if (taskNum === 0) {
      alert('Всі справи виконано!')
      clearAll()
   }
   else {
      if (confirm(`Ви вже виконали задачу "${currentCheckTask}"?`)) {
         data.removeItem(data.key(randNum))
         renderItemList()
      }
   }
}

window.onload = renderItemList()
runButton.addEventListener('click', () => removeButtons(addButton, runButton, clearButton, mainEl))
clearButton.addEventListener('click', clearAll)