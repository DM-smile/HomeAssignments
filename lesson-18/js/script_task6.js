"use strict"
// ===== BEGIN ===== //
const mainBlock = document.querySelector('main')
// створення поля інпут для введення кількості оцінок
const inputForEnterTheNumber = document.createElement('input')
inputForEnterTheNumber.setAttribute('type', 'number')
inputForEnterTheNumber.setAttribute('id', 'numberOfGrades')
inputForEnterTheNumber.setAttribute('placeholder', 'Введіть кількість оцінок')
mainBlock.append(inputForEnterTheNumber)

// створення кнопки "get table"
const createTableButton = document.createElement('button')
createTableButton.innerText = 'get table'
createTableButton.setAttribute('title', 'Сформувати таблицю')
createTableButton.setAttribute('id', 'buttonTable')
mainBlock.append(createTableButton)

// формування таблиці
function createTable(numberValue, colsNum = 3,) {
   if (numberValue < 2) {
      numberValue = 2
      alert('Мінімальне значення для створення таблиці: 2\nСтворено 2 елемента!')
   } else if (numberValue > 20) {
      numberValue = 20
      alert('Максимальне значення для створення таблиці: 20\nСтворено 20 елементів!')
   }
   let counterInputs = 0
   const tableElement = document.createElement('table')
   while (counterInputs < numberValue) {
      const rowElement = document.createElement('tr')
      for (let i = 0; i < colsNum; i++) {
         if (counterInputs < numberValue) {
            const colElement = document.createElement('td')
            rowElement.append(colElement)
            const inputElement = document.createElement('input')
            inputElement.setAttribute('placeholder', 'Введіть оцінку')
            inputElement.setAttribute('class', 'inputRating')
            colElement.append(inputElement)
            counterInputs++
         }
      }
      tableElement.append(rowElement)
   }
   return tableElement
}

// створення кнопки "get sum"
const showResultButton = document.createElement('button')
showResultButton.innerText = 'get sum'
showResultButton.setAttribute('title', 'Показати результат')
showResultButton.setAttribute('id', 'buttonShowResult')

// додавання до дерева створених елементів
let tableExist = false
document.getElementById('buttonTable').onclick = () => {
   if (!tableExist) {
      const numberValue = document.getElementById('numberOfGrades').value
      const table = createTable(numberValue)
      mainBlock.append(table)
      mainBlock.append(showResultButton)
      document.getElementById('buttonShowResult').onclick = getAveRating
      tableExist = true
   } else alert('Таблиця вже створена!\nЗаповніть дані або оновіть сторінку!')
}

// показ результату
function getAveRating() {
   const collectionRatings = document.querySelectorAll('.inputRating')
   let collectionSum = 0
   collectionRatings.forEach((el) => collectionSum += parseFloat(el.value))
   const ave = collectionSum / collectionRatings.length
   const resultBanner = document.createElement('div')
   resultBanner.setAttribute('class', 'banner')
   resultBanner.innerText = `Середнє значення оцінок:\n${ave.toFixed(1)}`
   mainBlock.append(resultBanner)
}









