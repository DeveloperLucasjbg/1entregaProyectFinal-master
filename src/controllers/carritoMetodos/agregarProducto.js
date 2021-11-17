import fs from "fs";
import carrito from "./carrito.js";
import productos from "../productosMetodos/productos.js";

const agregarProducto = (req, res) => {
  try {
    const { id } = req.params;
    let newProduct = productos.find((x) => x.id == id);
   if (newProduct !== undefined ){
     carrito.push(newProduct);
     fs.writeFileSync("carritos.json", JSON.stringify(carrito));
     return res.status(201).json(newProduct);
   }else{
     return res.status(404).json('no existe ese producto');
   }
  } catch (err) {
    console.log(err);
  }
};

export default agregarProducto;
