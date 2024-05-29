"use strict"
// ===== BEGIN ===== //
const mainBlock = document.querySelector('main')

class Forefather {
   constructor(
      coordinateX,
      coordinateY,
      link,
      interval,
      section = mainBlock
   ) {
      this.coordinateX = coordinateX
      this.coordinateY = coordinateY
      this.link = link
      this.section = section
      this.interval = interval
      this.el = this.render(
         this.section, this.link, this.coordinateX, this.coordinateY
      )
   }
   render(section, link, x, y) {
      const el = this.addPhoto(link)
      section.append(el)
      el.style.top = `${y}px`
      el.style.left = `${x}px`
      return el
   }

   addPhoto(link) {
      const el = document.createElement('img')
      el.setAttribute('src', link)
      el.setAttribute('alt', 'image')
      return el
   }
}

class House extends Forefather {
   constructor(coordinateX, coordinateY, link, interval, minSize, maxSize, section) {
      super(coordinateX, coordinateY, link, interval, section)
      this.minSize = minSize
      this.maxSize = maxSize
      this.transform(this.el, this.interval, this.minSize, this.maxSize)
   }
   transform(el, interval, min, max) {
      setInterval(() => {
         const size = min + Math.floor(Math.random() * (max - min + 1))
         el.style.width = `${size}px`
      }, interval)
   }
}

class Dog extends Forefather {
   constructor(coordinateX, coordinateY, link, interval, minXValue, maxXValue, section) {
      super(coordinateX, coordinateY, link, interval, section)
      this.minXValue = minXValue
      this.maxXValue = maxXValue
      this.transform(this.el, this.interval, this.minXValue, this.maxXValue)
   }
   transform(el, interval, min, max) {
      setInterval(() => {
         const position = min + Math.floor(Math.random() * (max - min + 1))
         el.style.left = `${position}%`
      }, interval)
   }
}

class Bird extends Forefather {
   constructor(coordinateX, coordinateY, link, interval, minXValue, maxXValue, minYValue, maxYValue, section) {
      super(coordinateX, coordinateY, link, interval, section)
      this.minXValue = minXValue
      this.maxXValue = maxXValue
      this.minYValue = minYValue
      this.maxYValue = maxYValue
      this.transform(this.el, this.interval, this.minXValue, this.maxXValue, this.minYValue, this.maxYValue)
   }
   transform(el, interval, minX, maxX, minY, maxY) {
      setInterval(() => {
         const positionX = minX + Math.floor(Math.random() * (maxX - minX + 1))
         const positionY = minY + Math.floor(Math.random() * (maxY - minY + 1))
         el.style.left = `${positionX}%`
         el.style.top = `${positionY}px`
      }, interval)
   }
}

new House(200, 50, '../img/house.jpg', 3000, 100, 500)
new Dog(200, 350, '../img/dog.jpg', 3000, 0, 80)
new Bird(200, 680, '../img/bird.jpg', 3000, 0, 80, 450, 800)
