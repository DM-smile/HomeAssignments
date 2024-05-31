"use strict"
// ===== BEGIN ===== //
const mainEl = document.querySelector('main')

const pupils = [
   {
      name: 'Olga',
      birthday: new Date('6 January 2014')
   },
   {
      name: 'Masha',
      birthday: new Date('4 May 2012')
   },
   {
      name: 'Ivan',
      birthday: new Date('3 May 2015')
   },
   {
      name: 'Oleh',
      birthday: new Date('29 April 2014')
   },
   {
      name: 'Maxim',
      birthday: new Date('24 October 2016')
   },
]

const grownPupil = pupils.reduce((prev, el) => {
   return el.birthday < prev.birthday ? el : prev
})

pupils.forEach((el) => {
   const day = el.birthday.getDate()
   let month = el.birthday.getMonth() + 1
   const year = el.birthday.getFullYear()
   const age = Math.floor((new Date() - el.birthday) / 1000 / 60 / 60 / 24 / 365.25)

   if (month < 10) month = `0${month}`

   mainEl.append(`${el.name} (${day}.${month}.${year}) - ${age} років`)
   mainEl.append(document.createElement('br'))
})

mainEl.append(document.createElement('br'))
mainEl.append(`Найдоросліший учень: ${grownPupil.name}`)