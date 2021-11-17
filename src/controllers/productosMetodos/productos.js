import fs from "fs";

const productosLoader = () => {
  return JSON.parse(fs.readFileSync("productos.json", "UTF-8"));
};
let productos = productosLoader() || [];

export default productos;
