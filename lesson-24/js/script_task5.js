"use strict"
// ===== BEGIN ===== //
const main = document.querySelector('main')
const br = () => main.append(document.createElement('br'))

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

let map = new Map()
for (const el of temperatures) {
   let count = map.get(el) ?? 0
   map.set(el, count + 1)
}

map.forEach((val, key) => {
   const br = document.createElement('br')
   main.append(`${key} : ${val}`, br)
}); br()

main.append(document.createElement('p').innerText = ['Заокруглені значення:']); br()

temperatures.forEach((el) => {
   const br = document.createElement('br')
   el = Math.ceil(el)
   document.querySelector('main').append(el, br)
}); br()

main.append(document.createElement('p').innerText = ['Кількість різних показів: '])

let set = new Set(temperatures)
document.querySelector('main').append(set.size)