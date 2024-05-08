"use strict"
// ===== BEGIN ===== //
function createTable(rowsNum, colsNum, min = 10, max = 99) {
   const tableElement = document.createElement('table')
   for (let r = 0; r < rowsNum; r++) {
      const rowElement = document.createElement('tr')
      for (let c = 0; c < colsNum; c++) {
         const colElement = document.createElement('td')
         const randNum = min + Math.floor(Math.random() * (max - min + 1))
         colElement.innerText = randNum
         rowElement.append(colElement)
      }
      tableElement.append(rowElement)
   }
   return tableElement
}
const mainBlock = document.querySelector('main')
const table = createTable(3, 4)
mainBlock.append(table)