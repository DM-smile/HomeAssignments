"use strict"
// ===== BEGIN ===== //
class Client {
   constructor(id, name, money) {
      this.id = id
      this.name = name
      this.money = money
   }
   addMoney(val) {
      return this.money += val
   }
   subMoney(val) {
      if (this.money >= val) return this.money -= val
      else this.error()
   }
   toString() {
      return `${this.name} [${this.id}] : ${this.money} грн.`
   }
   error() {
      throw new Error('Недостатньо коштів')
   }
}

class GoldenClient extends Client {
   constructor(id, name, money, limit, interest) {
      super(id, name, money)
      this.limit = limit
      this.interest = interest
      this.credit = 0
      this.penaltyNum = 0
   }
   subMoney(val) {
      if (this.money >= val) this.money -= val
      else {
         this.money -= val
         this.penalty()
      }
      return this.money
   }
   penalty() {
      if (this.money < 0) this.credit = this.money * -1
      if (this.credit > this.limit) super.error()
      else if (this.credit > 0) {
         this.penaltyNum = this.credit / 100 * this.interest
         return this.penaltyNum
      }

   }
   toString() {
      if (this.penaltyNum > 0) return `${this.name} [${this.id}] : ${this.money} грн. (Пеня: ${this.penaltyNum} грн.)`
      else return `${this.name} [${this.id}] : ${this.money} грн.`
   }
}

function style(el, fontSize, color, border, padding) {
   el.style.fontSize = `${fontSize}px`
   el.style.color = `${color}`
   el.style.border = `${border}px solid ${color}`
   el.style.padding = `${padding}px`
}


const mainEl = document.querySelector('main')

const f1 = new Client('B-123123', 'Ivanov I.I.', 1000)
f1.subMoney(500)
mainEl.append(f1)

mainEl.append(document.createElement('br'))

const f2 = new GoldenClient('G-232323', 'Sidorov A.O.', 1000, 5000, 5)
f2.subMoney(1700)
mainEl.append(f2)



style(mainEl, 19, 'blue', 2, 8)
