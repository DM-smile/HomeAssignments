"use strict"
// ===== BEGIN ===== //
function getYearUser() {
   const currentYear = 2024
   const yearOfBirth = document.getElementById('yearOfBirth').value
   let userYear = currentYear - yearOfBirth
   if (yearOfBirth === '') userYear = 'неможливо порахувати'
   else if (currentYear < yearOfBirth) userYear = 'неможливо порахувати'
   else if (yearOfBirth < 1900) userYear = 'як у динозавра'
   else userYear += 'р.'
   document.getElementById('userYear').value = `Ваш вік ${userYear}`
}
document.getElementById('button').onclick = getYearUser