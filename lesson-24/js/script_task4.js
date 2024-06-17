"use strict"
// ===== BEGIN ===== //
const mainEl = document.querySelector('main')
const students = [
   { fullName: 'Іванов Іван Іванович', course: 2, faculty: 'Фізичний' },
   { fullName: 'Петров Петро Петрович', course: 3, faculty: 'Економічний' },
   { fullName: 'Сидорова Марія Володимирівна', course: 1, faculty: 'Філологічний' },
   { fullName: 'Коваленко Олександр Васильович', course: 4, faculty: 'Юридичний' },
   { fullName: 'Соколова Олена Петрівна', course: 2, faculty: 'Історичний' },
   { fullName: 'Михайлов Дмитро Олексійович', course: 3, faculty: 'Технічний' },
   { fullName: 'Захарченко Ірина Ігорівна', course: 1, faculty: 'Медичний' },
   { fullName: 'Григоров Володимир Вікторович', course: 4, faculty: 'Філософський' },
   { fullName: 'Павлова Ольга Сергіївна', course: 2, faculty: 'Економічний' },
   { fullName: 'Козлов Вадим Миколайович', course: 3, faculty: 'Інженерний' },
   { fullName: 'Шевченко Анна Олександрівна', course: 1, faculty: 'Фізичний' },
   { fullName: 'Ткаченко Вікторія Павлівна', course: 4, faculty: 'Юридичний' },
   { fullName: 'Іванова Наталія Ігорівна', course: 2, faculty: 'Філологічний' },
   { fullName: 'Кузьменко Олексій Віталійович', course: 3, faculty: 'Історичний' },
   { fullName: 'Петренко Ігор Юрійович', course: 1, faculty: 'Технічний' }
]

const facultyList = new Set(students.map((item) => item.faculty))
console.log(facultyList.size)

const facultyNumEl = document.createElement('h3')
facultyNumEl.append(`Кількість різних факультетів: ${facultyList.size}`)

const courceStudents = new Map()
students.forEach(student => {
   const { course } = student
   if (courceStudents.has(course)) {
      courceStudents.set(course, courceStudents.get(course) + 1)
   } else {
      courceStudents.set(course, 1)
   }
})

const courceStudentsTitle = document.createElement('h3')
courceStudentsTitle.innerText = 'Кількість студентів на курсах:'
const courceStudentsList = document.createElement('ul')
for (const [key, val] of courceStudents) {
   const listItem = document.createElement('li')
   listItem.append(`Курс № ${key} : ${val} студентів`)
   courceStudentsList.append(listItem)
}
mainEl.append(facultyNumEl, courceStudentsTitle, courceStudentsList)