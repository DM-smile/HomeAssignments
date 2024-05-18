"use strict"
// ===== BEGIN ===== //
const button = document.querySelector('.button')
function run() {
   document.querySelector('body').style.backgroundImage = "url('../img/bg_task_7.jpg')"
   document.querySelector('.button').remove()
   document.querySelector('header').remove()
   document.querySelector('footer').remove()
}
// button.addEventListener('click', run)
run()
function snowflake() {
   const mainHtml = document.querySelector('main')
   const item = document.createElement('span')
   item.innerText = '*'
   mainHtml.append(item)
}
snowflake()