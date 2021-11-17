import fs from "fs";

const carritoLoader = () => {
  return JSON.parse(fs.readFileSync("carritos.json", "UTF-8"));
};
let carrito = carritoLoader() || [];

export default carrito;
