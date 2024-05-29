"use strict"
// ===== BEGIN ===== //
class inNotNumbersError extends Error {
   constructor(el) {
      super()
      this.el = el
      this.message = 'Некоректні дані поля '
      this.name = 'inNotNumbersError'
   }
}
class isPresetNumbersError extends Error {
   constructor(min, max, el) {
      super()
      this.el = el
      this.min = min
      this.max = max
      this.message = `${this.min} - ${this.max}`
      this.name = 'isPresetNumbersError'
   }
}
class isHolidaysError extends Error {
   constructor() {
      super()
      this.message = 'Вказаний місяць припадає на канікули, виправити оцінку вже не можна!'
      this.name = 'isHolidaysError'
   }
}
class isLastMonthsOfSemesterError extends Error {
   constructor() {
      super()
      this.message = 'В останній місяць семестру не можна виправити оцінку!'
      this.name = 'isLastMonthsOfSemesterError'
   }
}
class isGoodScoreError extends Error {
   constructor() {
      super()
      this.message = 'Оцінка задовільна, виправляти немає потреби!'
      this.name = 'isGoodScoreError'
   }
}
class isCanFixScore extends Error {
   constructor() {
      super()
      this.message = 'Оцінка незадовільна, але виправити ще є час!'
      this.name = 'isCanFixScore'
   }
}

function validate() {
   const holidaysMonths = [6, 7, 8]
   const lastMonthsOfSemester = [11, 2, 5]
   const goodScore = 70
   const bodyElement = document.querySelector('.checker')
   const infoBlock = document.querySelector('.checker__info')
   const monthField = document.getElementById('checker__month')
   const ratingField = document.getElementById('checker__rating')
   infoBlock.innerText = ''
   infoBlock.style.color = 'black'
   monthField.style.outline = 'initial'
   ratingField.style.outline = 'initial'
   bodyElement.style.height = '200px'

   const minVal = 1
   const maxMonth = 12
   const maxRate = 100
   try {
      if (isNaN(monthField.value)) throw new inNotNumbersError(monthField)
      else if (isNaN(ratingField.value)) throw new inNotNumbersError(ratingField)
      else if (monthField.value < minVal || monthField.value > maxMonth)
         throw new isPresetNumbersError(1, 12, monthField)
      else if (ratingField.value < minVal || ratingField.value > maxRate)
         throw new isPresetNumbersError(1, 100, ratingField)
      else if (ratingField.value >= goodScore) throw new isGoodScoreError()
      else if (holidaysMonths.includes(parseInt(monthField.value)))
         throw new isHolidaysError()
      else if (lastMonthsOfSemester.includes(parseInt(monthField.value)))
         throw new isLastMonthsOfSemesterError()
      else if (ratingField.value < goodScore) {
         throw new isCanFixScore()
      }
   }

   catch (error) {
      if (error instanceof isGoodScoreError) {
         console.log(error.message)
         infoBlock.innerText = error.message
         infoBlock.style.color = 'green'
         bodyElement.style.height = '260px'
      } else if (error instanceof isCanFixScore) {
         console.log(error.message)
         infoBlock.innerText = error.message
         infoBlock.style.color = 'green'
         bodyElement.style.height = '260px'
      } else if (error instanceof inNotNumbersError && error.el === monthField) {
         console.log(error.message + 'місяць!')
         infoBlock.innerText = error.message + 'місяць!'
         monthField.style.outline = '2px solid red'
         infoBlock.style.color = 'red'
         bodyElement.style.height = '240px'
      } else if (error instanceof inNotNumbersError && error.el === ratingField) {
         console.log(error.message + 'місяць!')
         infoBlock.innerText = error.message + 'Оцінки!'
         ratingField.style.outline = '2px solid red'
         infoBlock.style.color = 'red'
         bodyElement.style.height = '240px'
      } else if (error instanceof isPresetNumbersError && error.el === monthField) {
         console.log('Введіть дані поля місяця в межах ' + error.message)
         infoBlock.innerText = 'Введіть дані поля місяця в межах ' + error.message
         monthField.style.outline = '2px solid red'
         infoBlock.style.color = 'red'
         bodyElement.style.height = '270px'
      } else if (error instanceof isPresetNumbersError && error.el === ratingField) {
         console.log('Введіть дані поля оцінки в межах ' + error.message)
         infoBlock.innerText = 'Введіть дані поля оцінки в межах ' + error.message
         ratingField.style.outline = '2px solid red'
         infoBlock.style.color = 'red'
         bodyElement.style.height = '270px'
      } else if (error instanceof isHolidaysError) {
         console.log(error.message)
         infoBlock.innerText = error.message
         infoBlock.style.color = 'red'
         bodyElement.style.height = '290px'
      } else if (error instanceof isLastMonthsOfSemesterError) {
         console.log(error.message)
         infoBlock.innerText = error.message
         infoBlock.style.color = 'red'
         bodyElement.style.height = '270px'
      }
   }
}

const button = document.querySelector('.checker__buton')
button.addEventListener('click', validate)