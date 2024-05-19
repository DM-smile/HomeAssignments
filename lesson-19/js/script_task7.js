"use strict"
// ===== BEGIN ===== //
const button = document.querySelector('.button')
function run() {
   document.querySelector('body').style.backgroundImage = "url('../img/bg_task_7.jpg')"
   document.querySelector('.button').remove()
   document.querySelector('header').remove()
   document.querySelector('footer').remove()
   snowFlake(200)
   setInterval(() => smowMove(1, 2.5, 100), 200)
}
function snowFlake(snowNum) {
   const mainHtml = document.querySelector('body')
   for (let i = 0; i < snowNum; i++) {
      const randomTop = 1 + Math.floor(Math.random() * (100))
      const randomLeft = 1 + Math.floor(Math.random() * (100))
      const snowSize = 15 + Math.floor(Math.random() * (25))
      const item = document.createElement('span')
      item.innerText = '*'
      mainHtml.append(item)
      item.style.top = `-${randomTop}%`
      item.style.left = `${randomLeft}%`
      item.style.fontSize = `${snowSize}px`
   }
}
function smowMove(minStep, maxStep, maxTop) {
   const shows = document.querySelectorAll('span')
   for (const el of shows) {
      const randomTop = 1 + Math.floor(Math.random() * (100))
      const speed = minStep + Math.floor(Math.random() * (maxStep))
      let currentValTop = parseFloat(el.style.top)
      el.style.transition = 'all 0.5s'
      el.style.transitionTimingFunction = 'linear'
      if (currentValTop >= maxTop) {
         currentValTop = -randomTop
         el.style.transition = 'none'
      }
      el.style.top = `${currentValTop + speed}%`
   }
}

button.addEventListener('click', run)