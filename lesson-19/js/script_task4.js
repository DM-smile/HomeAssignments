"use strict"
// ===== BEGIN ===== //

//create HTML
for (let tbl = 0; tbl < 3; tbl++) {
   const mainHtml = document.querySelector('main')
   const wrapperTable = document.createElement('div')
   wrapperTable.setAttribute('class', 'wrapper-table')
   const tableHtml = document.createElement('table')
   tableHtml.setAttribute('id', `tbl-${tbl + 1}`)
   const labelTableHtml = document.createElement('label')
   labelTableHtml.setAttribute('for', 'tbl')
   labelTableHtml.innerText = `Table #${tbl + 1}`
   const spanHtml = document.createElement('span')
   spanHtml.innerText = `Table #${tbl + 1}`
   wrapperTable.append(labelTableHtml)
   wrapperTable.append(tableHtml)
   mainHtml.append(wrapperTable)
   const counter = document.createElement('span')
   counter.setAttribute('class', 'counter')
   counter.innerText = `Counter click: 0`
   wrapperTable.append(counter)
   for (let tr = 0; tr < 3; tr++) {
      const trHtml = document.createElement('tr')
      tableHtml.append(trHtml)
      for (let td = 0; td < 3; td++) {
         const tdHtml = document.createElement('td')
         tdHtml.innerText = 10 + Math.floor(Math.random() * (99 - 10 + 1))
         trHtml.append(tdHtml)
         tdHtml.style.border = '2px solid green'
         tdHtml.style.padding = '3px'
         tdHtml.style.fontSize = '50px'
         tdHtml.style.cursor = 'pointer'
         wrapperTable.style.margin = '10px'
         wrapperTable.style.display = 'inline-block'
         wrapperTable.style.transition = 'all 0.4s'
      }
   }
}

// add border function
function addBorder(e) {
   if (e.target.tagName === 'TD') {
      let targetWrapper = e.target.closest('.wrapper-table')
      targetWrapper.style.outline = '10px solid red'
      while (targetWrapper.nextElementSibling !== null) {
         targetWrapper.nextElementSibling.style.outline = '0 solid red'
         targetWrapper = targetWrapper.nextElementSibling
      }
      targetWrapper = e.target.closest('.wrapper-table')
      while (targetWrapper.previousElementSibling !== null) {
         targetWrapper.previousElementSibling.style.outline = '0 solid red'
         targetWrapper = targetWrapper.previousElementSibling
      }
   }
}

// counter function
function counter(e) {
   if (e.target.tagName === 'TD') {
      const counter = e.target.closest('.wrapper-table').lastElementChild
      let count = parseInt(counter.dataset.clicks) || 0
      count++
      counter.dataset.clicks = count
      counter.innerText = `Counter click: ${count}`
   }
}

// run
addEventListener('click', addBorder)
addEventListener('click', counter)