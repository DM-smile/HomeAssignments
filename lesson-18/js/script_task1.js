"use strict"
// ===== BEGIN ===== //
function calc(operation) {
   const firstNum = parseFloat(document.getElementById('num1').value)
   const secondNum = parseFloat(document.getElementById('num2').value)
   let result
   if (operation === '+') result = firstNum + secondNum
   if (operation === '-') result = firstNum - secondNum
   if (operation === '*') result = firstNum * secondNum
   if (operation === '/') result = firstNum / secondNum
   document.getElementById('result').value = result
}

document.getElementById('addition').onclick = () => calc('+')
document.getElementById('reduce').onclick = () => calc('-')
document.getElementById('multiplication').onclick = () => calc('*')
document.getElementById('division').onclick = () => calc('/')