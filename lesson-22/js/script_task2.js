"use strict"
const main = document.querySelector('main')
main.style.fontSize = '18px'
// ===== BEGIN ===== //

const now = new Date()
const productionDate = new Date(2024, 4, 25)
const expirationDate = 10
const daysAfterCreation = Math.floor((now - productionDate) / 1000 / 60 / 60 / 24)

main.append(`Дата выготовлення йогурта: ${productionDate}`)
main.append(document.createElement('br'))
main.append(`Термін придатності: ${expirationDate} днів`)
main.append(document.createElement('br'))
main.append(`Пройшло ${daysAfterCreation} днів`)
main.append(document.createElement('br'))

if (daysAfterCreation <= expirationDate)
   main.append('Продукт придатний для вживання!')
else main.append('Продукт вже не придатний для вживання!')