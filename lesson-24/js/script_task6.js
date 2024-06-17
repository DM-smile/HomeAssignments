"use strict"
// ===== BEGIN ===== //
const lists = document.querySelector('.lists')
const list1 = document.querySelector('.list1')
const list2 = document.querySelector('.list2')
lists.style = 'display: flex; gap: 30px'

const mathClubStudents = ["Шевченко", "Коваленко", "Іваненко", "Петренко", "Сидоренко", "Кузьменко", "Мартиненко", "Олійник", "Тарасенко", "Бондаренко", "Гриценко", "Демченко", "Литвиненко", "Мельниченко", "Романенко"]

const historyClubStudents = ["Шевченко", "Мельник", "Іваненко", "Лисенко", "Гончаренко", "Довженко", "Захаренко", "Богданенко", "Федоренко", "Кравченко", "Зайченко", "Михайленко", "Нечипоренко", "Павленко", "Семененко"]

const mathList = document.createElement('ul')
const historyList = document.createElement('ul')
const mathTitle = document.createElement('h2')
mathTitle.innerText = 'Стунденти гуртку з математики:'
list1.append(mathTitle)
for (const el of mathClubStudents) {
   const li = document.createElement('li')
   li.append(el)
   list1.append(li)
}

const historyTitle = document.createElement('h2')
historyTitle.innerText = 'Стунденти гуртку з історії:'
list2.append(historyTitle)
for (const el of historyClubStudents) {
   const li = document.createElement('li')
   li.append(el)
   list2.append(li)
}
let allStudentsList = new Map()
for (const item of mathClubStudents) {
   let count = allStudentsList.get(item) ?? 0
   allStudentsList.set(item, count + 1)
}
for (const item of historyClubStudents) {
   let count = allStudentsList.get(item) ?? 0
   allStudentsList.set(item, count + 1)
}

const main = document.querySelector('main')
const allWorkshopListTitle = allStudentsList.size
const p1 = document.createElement('p')
main.append(p1)
p1.innerText = `Загальна кількість студентів які відідують гурток/гуртки: ${allWorkshopListTitle}`

let countMegaSuperStudents = 0
for (const [key, val] of allStudentsList) {
   if (val > 1) countMegaSuperStudents++
   console.log(countMegaSuperStudents)
}

const p2 = document.createElement('p')
main.append(p2)
p2.innerText = `Кількість студентів, які відвідують обидва гуртки: ${countMegaSuperStudents}`