"use strict"
// ===== BEGIN ===== //
const books = [
   { title: "Війна і мир", year: 1869, author: "Дж. К. Роулінг", price: 200 },
   { title: "Анна Кареніна", year: 1877, author: "Дж. К. Роулінг", price: 180 },
   { title: "Гобіт", year: 1937, author: "Дж. Р. Р. Толкін", price: 150 },
   { title: "Володар перснів", year: 1954, author: "Дж. Р. Р. Толкін", price: 220 },
   { title: "1984", year: 1949, author: "Джордж Орвелл", price: 180 },
   { title: "Ферма тварин", year: 1945, author: "Джордж Орвелл", price: 160 },
   { title: "Гаррі Поттер і філософський камінь", year: 1997, author: "Дж. К. Роулінг", price: 220 },
   { title: "Гаррі Поттер і таємна кімната", year: 1998, author: "Дж. К. Роулінг", price: 240 },
   { title: "Кобзар", year: 1840, author: "Тарас Шевченко", price: 190 },
   { title: "Гайдамаки", year: 1841, author: "Тарас Шевченко", price: 210 }
]
const allPriceByAuthors = new Map()
books.forEach(book => {
   const { author, price } = book
   if (allPriceByAuthors.has(author)) {
      allPriceByAuthors.set(author, allPriceByAuthors.get(author) + price)
   } else {
      allPriceByAuthors.set(author, price)
   }
})
const mainEl = document.querySelector('main')

for (const [key, val] of allPriceByAuthors) {
   const br = document.createElement('br')
   mainEl.append(`${key} : $${val}`, br)
}
