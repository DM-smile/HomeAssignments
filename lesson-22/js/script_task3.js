"use strict"
// ===== BEGIN ===== //

const start = new Date()
const update = () => {
   const current = new Date()
   const res = Math.floor((current - start) / 1000 / 60)
   document.querySelector('main').innerText = `Ви знаходитесь на сайті ${res} хвилин!`
}

setInterval(update, 300)