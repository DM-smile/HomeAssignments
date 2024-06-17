"use strict"
// ===== BEGIN ===== //

// render function

const addElementToHtml = (el, text, generatedEl) => {
   const main = document.querySelector('main')
   if (el) {
      const item = document.createElement(el)
      if (text) item.innerText = text
      main.append(item)
   } else if (generatedEl) {
      if (text) generatedEl.innerText = text
      main.append(generatedEl)
   }
}

// ================================================= //

const ulrList = [
   'http://my-site.com', 'http://my-super-site.edu', 'http://flowers.org', 'http://bicycles.com', 'http://workers.edu', 'http://javascript.com', 'http://react.com', 'http://vue.com', 'http://kuplu-garazh.edu', 'http://ventilator.ua'
]


addElementToHtml('h3', 'Список сайтів:')

for (const el of ulrList) {
   addElementToHtml(null, null, el)
   addElementToHtml('br')
}


const domensList = new Map()
for (const el of ulrList) {
   const domain = el.match(/\.\w+$/)[0]
   if (domensList.has(domain)) {
      const val = domensList.get(domain)
      domensList.set(domain, val + 1)
   } else {
      const val = 1
      domensList.set(domain, val)
   }
}

addElementToHtml('h3', 'Список доменів:')
const main = document.querySelector('main')
for (const [key, val] of domensList) {
   const br = document.createElement('br')
   main.append(`(${key}) кількість: ${val}`, br)
}
