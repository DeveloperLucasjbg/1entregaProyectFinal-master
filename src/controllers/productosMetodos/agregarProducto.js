import fs from "fs";
import productos from "./productos.js";
import config from "../../constants/index.js";
import Producto from "../../models/Producto.js";

export default function agregarProducto(req, res) {
  try {
    if (config.isAdmin) {
      const { name, description, code, image, price, stock } = req.body;
      const newProduct = new Producto(
        name,
        description,
        code,
        image,
        price,
        stock
      );
        productos.push(newProduct)
      fs.writeFileSync("productos.json", JSON.stringify(productos));
      return res.status(201).json(newProduct);
    } else {
      console.log(config.adminError);
      return res.status(401).json(config.adminError);
    }
  } catch (err) {
    console.log(err);
  }
}
