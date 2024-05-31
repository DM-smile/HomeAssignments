"use strict"
const htmlBlock = document.querySelector('main')
htmlBlock.style.display = 'inline-block'
htmlBlock.style.fontSize = '26px'
htmlBlock.style.border = '2px solid black'
htmlBlock.style.padding = '10px'
htmlBlock.style.backgroundColor = 'greenyellow'
// ===== BEGIN ===== //

class GetTimeEndWorkingDay {
   constructor(endWorkingDay) {
      this.end = endWorkingDay

      this.endWorkingDay = endWorkingDay
      this.now = new Date()
      this.hoursToEnd = this.getHoursToEnd(this.now, this.end)
      this.minutesToEnd = this.getMinsToEnd(this.now, this.end)
      this.secondsToEnd = this.getSecondsToEnd(this.now, this.end)

      this.addZero()
   }
   getHoursToEnd(current, end) {
      let res
      end > current ? res = (end - current) / 1000 / 60 / 60 : res = 0
      return Math.floor(res)
   }
   getMinsToEnd(current, end) {
      let res
      end > current ? res = (end - current) / 1000 / 60 % 60 : res = 0
      return Math.floor(res)
   }
   getSecondsToEnd(current, end) {
      let res
      end > current ? res = (end - current) / 1000 % 60 : res = 0
      return Math.floor(res)
   }
   addZero() {
      if (this.hoursToEnd < 10) this.hoursToEnd = `0${this.hoursToEnd}`
      if (this.minutesToEnd < 10) this.minutesToEnd = `0${this.minutesToEnd}`
      if (this.secondsToEnd < 10) this.secondsToEnd = `0${this.secondsToEnd}`
   }
   toString() {
      return `До закінчення робочого дня залишилось : [ ${this.hoursToEnd} : ${this.minutesToEnd} : ${this.secondsToEnd} ]`
   }
}

const intervalCurrentTime = setInterval(() => {
   htmlBlock.innerText = ''
   htmlBlock.append(new GetTimeEndWorkingDay(new Date().setHours(17, 0, 0, 0)))
}, 1000
)
