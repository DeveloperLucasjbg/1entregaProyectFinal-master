function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
export default class Producto {
  constructor(name, description, code, image, price, stock) {
    this.id = getRandomInt(1, 3000)
    this.timeStamp = Date.now()
    this.name = name || null
    this.description = description || null
    this.code = code || null
    this.image = image || null
    this.price = price || null
    this.stock = stock || null
  }
}
