"use strict"
// ===== BEGIN ===== //
const wishList = [
   "Подорож навколо світу",
   "Навчання новій мові",
   "Створення власного бізнесу",
   "Придбання власного будинку",
   "Зустріч зі своїм улюбленим актором/актрисою",
   "Здоров'я для себе та близьких",
   "Новий автомобіль",
   "Публікація книги",
   "Володіння навичками гри на музичному інструменті",
   "Реалізація творчих проектів"
]
function getRandomWish(list = wishList) {
   let currentList = list
   const mainBlock = document.querySelector('main')
   for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * (currentList.length))
      const newDiv = document.createElement('div')
      mainBlock.append(newDiv)
      newDiv.append(currentList[randomIndex])
      currentList.splice(randomIndex, 1)
   }
}
window.onload = function () {
   getRandomWish()
}


