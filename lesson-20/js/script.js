"use strict"
// ===== BEGIN ===== //
class BookingTransport {
   constructor(list, container) {
      this.container = container
      this.list = this.render(list, this.container)
   }
   render(list, container) {
      for (const el of list) {
         const elementLi = document.createElement('li')
         elementLi.innerText = el
         container.append(elementLi)
         const newButton = document.createElement('span')
         newButton.className = 'button'
         elementLi.append(newButton)
      }
   }
}
const carsContainer = document.getElementsByClassName('free-cars__list')[0]
const bicyclesContainer = document.getElementsByClassName('free-bicycle__list')[0]

const cars = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes-Benz"]
const bicycles = ["Trek", "Giant", "Cannondale", "Specialized", "Scott", "Bianchi"]

new BookingTransport(cars, carsContainer)
new BookingTransport(bicycles, bicyclesContainer)


function buttonChange() {
   const buttonsCollection = document.getElementsByClassName('button')
   for (const el of buttonsCollection) {
      el.classList.add('button')
      if (el.closest('.booked-transport')) {
         el.classList.add('button--select')
         el.innerText = 'Звільнити'
      } else {
         el.classList.remove('button--select')
         el.innerText = 'Забронювати'
      }
   }
}

function counter() {
   let counterFreeCar = document.querySelectorAll('.free-cars__list li').length
   let counterFreeBicycle = document.querySelectorAll('.free-bicycle__list li').length
   let counterBookedCar = document.querySelectorAll('.booked-cars__list li').length
   let counterBookedBicycle = document.querySelectorAll('.booked-bicycle__list li').length

   document.querySelector('.counter-free-car').innerText = counterFreeCar
   document.querySelector('.counter-free-bicycle').innerText = counterFreeBicycle
   document.querySelector('.counter-booked-car').innerText = counterBookedCar
   document.querySelector('.counter-booked-bicycle').innerText = counterBookedBicycle
}

function bookingTransport(event) {
   const target = event.target
   const freeCars = document.getElementsByClassName('free-cars__list')[0]
   const freeBicycle = document.getElementsByClassName('free-bicycle__list')[0]
   const bookingCars = document.getElementsByClassName('booked-cars__list')[0]
   const bookingBicycle = document.getElementsByClassName('booked-bicycle__list')[0]
   const element = target.closest('li')
   if (target.classList.contains('button') && target.closest('.free-cars')) {
      bookingCars.append(element)
   } else if (target.classList.contains('button') && target.closest('.free-bicycle')) {
      bookingBicycle.append(element)
   }
   else if (target.classList.contains('button') && target.closest('.booked-cars')) {
      freeCars.append(element)
   } else if (target.classList.contains('button') && target.closest('.booked-bicycle')) {
      freeBicycle.append(element)
   }
   buttonChange()
   counter()
}

window.onload = () => {
   counter()
   buttonChange()
}

const mainBlock = document.getElementsByClassName('task-block')[0]
mainBlock.addEventListener('click', bookingTransport)

