"use strict"
// ===== BEGIN ===== //
function convert() {
   const euroExchangeRate = 41
   const dollarExchangeRate = 39.8
   const grn = document.getElementById('grn').value
   const dollar = document.getElementById('grn').value
   document.getElementById('euro').value = grn / euroExchangeRate
   document.getElementById('dollar').value = dollar / dollarExchangeRate
}
document.getElementById('convert').onclick = convert