function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
export default class Carrito {
  constructor(id, productos) {
    this.id = id || getRandomInt()
    this.timestamp = Date.now()
    this.productos = productos || []
  }
}

