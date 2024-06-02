"use strict"
const taskBlock = document.getElementsByClassName('task')
const addElToHtml = (numTask, el, el2, block = taskBlock) => {
   const p = document.createElement('p')
   p.append(el)
   block[numTask - 1].append(p)
   if (el2) {
      const addEl = document.createElement(el2)
      block[numTask - 1].append(addEl)
   }
}

// ===== BEGIN ===== //

// Задача 1. Дано масив рядків.Вивести ті, у яких є цифри(використати метод test та регулярні вирази).
const arr1 = [
   'A', 'B1', 'C', 'D', 'E2', 'F', 'G', 'H3', 'I', 'J4', 'K', 'L5', 'M',
   'N', 'O6', 'P', 'Q', 'R7', 'S', 'T8', 'U', 'V9', 'W', 'X', 'Y0', 'Z'
]
addElToHtml(1, `Масив: ${arr1}`)

const newArr1 = []
for (const el of arr1) {
   if (/\d/.test(el)) newArr1.push(el)
}

addElToHtml(1, `Новий масив: ${newArr1}`)

// ===================================================== //

// Задача 2. Дано масив рядків.Вивести ті, у яких немає цифр.
const arr2 = [
   '00', 'B', 'C', 'D', '22', 'F', '66', '33', 'I', 'J', '44', '99', 'M',
]
addElToHtml(2, `Масив: ${arr2}`)

const newArr2 = []
for (const el of arr2) {
   if (/\D/.test(el)) newArr2.push(el)
}
addElToHtml(2, `Новий масив: ${newArr2}`)

// ===================================================== //

// Задача 3. Дано масив рядків.Вивести ті, у яких є голосні літери.
const arr3 = [
   'A', 'B1', 'C', 'D', 'E2', 'F', 'G', 'H3', 'I', 'J4', 'K', 'L5', 'M',
   'N', 'O6', 'P', 'Q', 'R7', 'S', 'T8', 'U', 'V9', 'W', 'X', 'Y0', 'Z'
]
addElToHtml(3, `Масив: ${arr3}`)

const newArr3 = []
for (const el of arr3) {
   if (/[aeiou]/i.test(el)) newArr3.push(el)
}

addElToHtml(3, `Новий масив: ${newArr3}`)

// ===================================================== //

// Задача 4. Дано масив рядків.Вивести ті, у яких немає голосних літер.
const arr4 = [
   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
   'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
addElToHtml(4, `Масив: ${arr4}`)

const newArr4 = []
for (const el of arr4) {
   if (/[^aeiou]/i.test(el)) newArr4.push(el)
}

addElToHtml(4, `Новий масив: ${newArr4}`)

// ===================================================== //

// Задача 5. Дано масив рядків.Вивести ті, у яких є або цифра 1 або цифра 3.
const arr5 = [
   'A', 'B', 'C', '1', '44', '3', 'G', 'H', '6', 'J', 'K', 'L8', 'M',
   'N', '77', 'P', '16', 'R', 'S', '13', 'U', 'V', '0', 'X', 'Y', 'Z'
]
addElToHtml(5, `Масив: ${arr5}`)

const newArr5 = []
for (const el of arr5) {
   if (/[13]/i.test(el)) newArr5.push(el)
}

addElToHtml(5, `Новий масив: ${newArr5}`)

// ===================================================== //

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
const text6 = 'У 2023 році кількість студентів у нашому університеті зросла до 1250. Серед них 950 студентів обрали технічні спеціальності, а решта 300 обрали гуманітарні науки. В аудиторіях 12 і 14 проходять заняття з програмування, де 25 студентів навчаються Python, а 15 - JavaScript. Усього на факультеті працюють 42 викладачі.'

addElToHtml(6, `Текст: ${text6}`, 'br')

const arrOfText = text6.split(' ')

const arrNumbersOfText = []
console.log(arrNumbersOfText)
for (const el of arrOfText) {
   if ((/^\d+$/).test(el)) arrNumbersOfText.push(el)
}

addElToHtml(6, `Список чисел з тексту: ${arrNumbersOfText}`)

// ===================================================== //

// Задача 7. Дано рядок тексту.Знайти усі знаки пунктуації, які були використано.
const text7 = `Today was a wonderful day! I woke up early, at 6:30. Hurrying, I had a quick cup of coffee, ate a slice of toast, and headed to work. On the way, I noticed that the sky was cloudy... But, fortunately, it didn't rain. I put on my coat, grabbed an umbrella, and ran to the subway. When I arrived at work, my colleagues were already there. We discussed plans for the day and started working. For lunch, I plan to meet a friend at the "Tasty Coffee" cafe. And then, maybe, we'll go to the movies. It's going to be a great day!`

addElToHtml(7, `Текст: ${text7}`, 'br')

const punctMarksList = text7.match(/[!,:.'"]/g)
addElToHtml(7, `Список знаків пунктуації з тексту: ${punctMarksList}`)

// ===================================================== //

// Задача 8. Дано рядок тексту.Вивести усі складові, які розділені розділовими знаками.
const text8 = 'У 2022 році я поїхав у відпустку до Італії. Це була незабутня подорож! Спочатку, ми відвідали Рим - місто, сповнене історії та культури. Потім, ми поїхали до Флоренції, де провели 3 дні, милуючись архіт1ектурою. У 2025 році, я планую відвідати Японію. Сподіваюся, що ця подорож буде не менш цікавою!'
addElToHtml(8, text8)

const btnGetList = document.createElement('button')
btnGetList.style.marginTop = '10px'
addElToHtml(8, btnGetList)

btnGetList.innerText = 'Отримати список'

const title = document.createElement('h3')
addElToHtml(8, title)

const ol = document.createElement('ol')
addElToHtml(8, ol)

const separationText = (text, listEl, titleEl) => {
   titleEl.innerText = 'Отриманий список:'
   const result = text.split(/[.,!?]\D/g)
   for (const el of result) {
      const li = document.createElement('li')
      li.innerText = el
      listEl.append(li)
   }
   btnGetList.remove()
}

btnGetList.addEventListener('click', () => separationText(text8, ol, title))


// ===================================================== //


// Задача 9. Дано рядок тексту.Перевірити, чи містить він дату у форматі dd.mm.yyyy(dd - день, mm - місяць, yyyy - рік).
const text9 = 'Курт Кобейн народився 20.02.1967 року, а помер 05.04.1994 року.'
addElToHtml(9, `Текст: ${text9}`)

const reg9 = (/\b\d{2}.\d{2}.\d{4}\b/g)
if (reg9.test(text9)) {
   const dates = text9.match(reg9)
   addElToHtml(9, `В тексті знайдено такі дати: ${dates}`)
} else addElToHtml(9, 'В тексті не знайдено дат!')

// ===================================================== //

// Задача 10. Дано рядок тексту.Підрахувати кількість двоцифрових чисел у рядку.
const text10 = 'Сьогодні на ринку я купив 5 кілограмів яблук, 2 кілограми бананів і 3 пачки молока. Потім я пішов до крамниці, щоб купити 10 ручок і 8 олівців для своєї нової творчої роботи. Після цього я вирушив на автобусну зупинку, де чекав 15 хвилин, поки прийшов автобус. Усім дуже сподобалася поїздка!'

let numsArr
const reg10 = (/\b\d{2}\b/g)
if (reg10.test(text10)) {
   numsArr = text10.match(reg10)
}
let counterNums = numsArr.length

addElToHtml(10, `Текст: ${text10}`, 'br')
addElToHtml(10, `Кількість двоцифрових чисел в тексті: ${counterNums}`)

// ===================================================== //

// Задача 11. Визначити чи може бути рядок тексту номером банківської картки(приклад:
// «4142 - 3433 - 2323 - 3434»).Знайти усі такі номери.
const text11 = 'I have several bank cards: 4144-8587-9405-7395, 5947-3290-8491-4825, 1234-9090'
addElToHtml(11, `Текст: ${text11}`)

const reg11 = (/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g)
if (reg11.test(text11)) {
   const cards = text11.match(reg11)
   addElToHtml(11, `В тексті знайдено такі банківські карти: ${cards}`)
} else addElToHtml(11, 'В тексті не знайдено банківських карт')

// ===================================================== //

// Задача 12. Дано адресу сайту.Визначити, чи є він урядовим(містить домен “gov”)
const site = document.createElement('input')
site.setAttribute('placeholder', 'Сайт не вказано!')
site.setAttribute('value', 'http://www.my-super-site.com')
site.style.width = '200px'
site.style.marginBottom = '10px'
addElToHtml(12, site)

const checkBtn = document.createElement('button')
checkBtn.innerText = 'перевірити'
checkBtn.style.marginBottom = '10px'
addElToHtml(12, checkBtn)

const taskResult = document.createElement('p')
taskBlock[12 - 1].append(taskResult)

const checkUrl = (url, el) => {
   if (url.endsWith('.gov')) {
      el.innerText = 'Сайт є урядовим'
   } else el.innerText = 'Не є урядовим'
}

checkBtn.addEventListener('click', () => checkUrl(site.value, taskResult))

// ===================================================== //

// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
const messageText = '1984, 2050, 2100, 2135, 1999, 2200, 2025, 3140, 2077, 2022, 1800, 2175, 1955, 2033, 2250, 2115'
const btnOpenMessage = document.querySelector('.message__envelope')
const blockMessage = document.querySelector('.message')
const btnOfResult = document.createElement('button')
btnOfResult.style.marginTop = '10px'
btnOfResult.innerText = 'Отримати список'
const resultMessage = document.createElement('p')
resultMessage.style.marginTop = '10px'
const openMessage = (el1, el2, el3) => {
   el1.style.color = 'rgb(22, 0, 109)'
   el1.innerText = `Отримано повідомлення: ${messageText}`
   addElToHtml(13, el2)
   addElToHtml(13, el3)
}
btnOpenMessage.addEventListener('click', () => openMessage(blockMessage, btnOfResult, resultMessage))

const getResult = (text, el = resultMessage) => {
   const list = text.match((/(\b20[2-9][2-9]|\b2[1-9][0-9][0-9]|\b[3-9][0-9][0-9][0-9]\b)/g))
   el.innerText = `Отриманий список: ${list}`
}

btnOfResult.addEventListener('click', () => getResult(messageText))

// ===================================================== //

// Задача 14. Дано номер телефону.Перевірити, чи є цей телефон телефоном з України(починаєтсья на «+38»)
const telNum = document.createElement('input')
telNum.setAttribute('placeholder', 'Номер телефону не вказано!')
telNum.setAttribute('value', '+380681231212')
telNum.style.width = '200px'
telNum.style.marginBottom = '10px'
addElToHtml(14, telNum)

const checkTelBtn = document.createElement('button')
checkTelBtn.innerText = 'перевірити'
checkTelBtn.style.marginBottom = '10px'
addElToHtml(14, checkTelBtn)

const checkResult = document.createElement('p')
taskBlock[14 - 1].append(checkResult)

const checkTel = (num, el) => {
   if (num.startsWith('+38') || num.startsWith('38')) {
      el.innerText = 'Номер телефону з України'
   } else el.innerText = 'Номер телефону не з України'
}

checkTelBtn.addEventListener('click', () => checkTel(telNum.value, checkResult))

// ===================================================== //

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.Замінити пробіл на дефіс.
const userName = document.createElement('input')
userName.style.width = '200px'
userName.style.marginBottom = '8px'

userName.setAttribute('placeholder', "Введіть прізвище та ім'я")
const el = document.createElement('p')
el.style.fontSize = '20px'

const correctionUserName = (userName, el) => {
   const newUserName = userName.replace(' ', '-')
   el.innerText = newUserName
}

addElToHtml(15, userName)
addElToHtml(15, el)
userName.addEventListener('input', () => correctionUserName(userName.value, el))

// ===================================================== //

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день / місяць / рік»
const myDate = document.createElement('input')
myDate.setAttribute('placeholder', 'дд.мм.рррр')
taskBlock[16 - 1].append(myDate)

const btn = document.createElement('button')
btn.innerText = 'OK'
taskBlock[16 - 1].append(btn)

const p = document.createElement('p')
p.style.fontSize = '22px'
p.style.marginTop = '10px'
taskBlock[16 - 1].append(p)

const replace = (date, numTask, block, el) => {
   if ((/\d{2}\.\d{2}\.\d{4}/).test(date)) {
      const newDate = date.replaceAll('.', '/')
      el.innerText = `Результат: ${newDate}`
      block[numTask - 1].append(p)
   } else el.innerText = 'Некоректні дані! Потрібно ввести в форматі "дд.мм.рррр"'
}

btn.addEventListener('click', () => replace(myDate.value, 16, taskBlock, p))

// ===================================================== //

// Задача 17. Користувач вводить день(номер дня(0 - 6) або «sun, mon, tue, wed, thu, fri, sat»).Визначити, чи є це день вихідним
const day = document.createElement('input')
day.setAttribute('class', 'inp-task17')
day.setAttribute('placeholder', 'Введіть номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»')
const info = document.createElement('p')
info.style.fontSize = '20px'

const thisDay = (day, el = info) => {
   const weekends = ['mon', 'tue', 'wed', 'thu', 'fri']
   const workDays = ['sun', 'sat']
   el.style.color = 'rgb(22, 0, 109)'
   if (day.length === 0) el.innerText = 'Дані не вказано!'
   else if (/[06]/.test(day) || workDays.includes(day.toLowerCase())) el.innerText = 'Це вихідний!'
   else if (/[1-5]/.test(day) || weekends.includes(day.toLowerCase())) el.innerText = 'Це робочий день!'
   else {
      el.style.color = 'red'
      el.innerText = 'Дані некоректні!'
   }
}

addElToHtml(17, day); addElToHtml(17, info)
window.onload = () => thisDay(day.value)
day.addEventListener('input', () => thisDay(day.value))

// ====== END ====== //