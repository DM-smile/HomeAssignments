"use strict"
// ===== BEGIN ===== //
class Client {
   constructor(name, money, status = 0, limit = 0) {
      this.name = name
      this.money = money
      this.limit = limit

      if (status === 0) this.status = 'BASE'
      else if (status === 1) this.status = 'GOLD'

      this.check()
   }
   check() {
      if (this.money < 0) {
         if (this.status === 'BASE' || this.limit <= 0)
            throw new Error('Відсутній кредитний ліміт!')
         else if (this.limit < this.money * -1)
            throw new Error('Недостатньо кредитного ліміту!')
      }
   }
}

class Bank {
   constructor(arr, list, block) {
      this.clientsList = arr
      this.list = list
      this.sum = this.sum(arr)
      this.window = this.render(list, block, this.clientsList, this.sum)
   }

   sum(arr) {
      return arr.reduce((prevSum, el) => el.money + prevSum, 0)
   }

   render(list, main, arr, sum) {

      const allSum = document.createElement('h1')
      allSum.innerText = `Загальна сума грошей на рахунках: $${sum}`
      main.append(allSum)
      allSum.style.color = 'red'


      const baseList = document.createElement('div')
      main.append(baseList)
      const goldList = document.createElement('div')
      main.append(goldList)

      const titleBase = document.createElement('h3')
      titleBase.innerText = 'Прості клієнти:'
      baseList.append(titleBase)

      const titleGold = document.createElement('h3')
      titleGold.innerText = 'Gold клієнти:'
      goldList.append(titleGold)

      let countBase = 0
      let countGold = 0

      for (const el of arr) {
         const titleClient = document.createElement('p')

         const ulElement = document.createElement(list)

         const nameItem = document.createElement('li')
         nameItem.innerText = `Name: ${el.name}`
         ulElement.append(nameItem)
         const statusItem = document.createElement('li')
         statusItem.innerText = `Status client: ${el.status}`
         ulElement.append(statusItem)
         const moneyItem = document.createElement('li')
         moneyItem.innerText = `Money: $${el.money}`
         ulElement.append(moneyItem)
         const limiteItem = document.createElement('li')
         limiteItem.innerText = `Credit limit: $${el.limit}`
         ulElement.append(limiteItem)

         if (el.status === 'BASE') {
            titleClient.innerText = `Client № ${++countBase}`
            baseList.append(titleClient)
            baseList.append(ulElement)

         }
         else if (el.status === 'GOLD') {
            titleClient.innerText = `Client № ${++countGold}`
            goldList.append(titleClient)
            goldList.append(ulElement)
         }

      }

   }
}


const clients = [
   new Client('John Smith', 10000),
   new Client('Jane Johnson', 20000, 1, 50000),
   new Client('Alex Williams', 5000),
   new Client('Emily Brown', -10500, 1, 20000),
   new Client('Chris Jones', 1500),
   new Client('Katie Garcia', -1500, 1, 20000),
   new Client('Michael Miller', 15000),
   new Client('Laura Davis', -1500, 1, 2000),
   new Client('David Martinez', 2400),
   new Client('Sarah Hernandez', 55500, 1, 2000),
]


const mainEl = document.querySelector('main')

const bank = new Bank(clients, 'ul', mainEl)