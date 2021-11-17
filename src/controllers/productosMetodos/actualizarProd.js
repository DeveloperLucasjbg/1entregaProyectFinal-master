import config from "../../constants/index.js";
import productos from "./productos.js";
import fs from "fs";


export default function actualizarProd(req, res) {
  if (config.isAdmin) {
    let { id } = req.params;
    let { name, description, code, image, price, stock } = req.body;
    let producto = productos.find((x) => x.id == id);
    if (!producto) {
      res.status(401).json({ msg: "producto invalido" });
    }
    producto.name = name || producto.name;
    producto.description = description || producto.description 
    producto.code = code || producto.code 
    producto.image = image || producto.image 
    producto.price = price || producto.price 
    producto.stock = stock || producto.stock 

    let newProductos = productos.filter(x => x.id != id)
    newProductos.push(producto)
    fs.writeFileSync("productos.json", JSON.stringify(newProductos));
    res.status(201).json(producto);
  } else {
    console.log(config.adminError);
    return res.status(401).json(config.adminError);
  }
}