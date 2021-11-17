import fs from "fs";
import carrito from "./carrito.js";

const borrarProducto = (req, res) => {
  const { id } = req.params;
  const thisIndex = carrito.findIndex((x) => {
    x.id == id;
  });
  if (thisIndex != -1){
    carrito.splice(thisIndex, 1) 
    fs.writeFileSync("./carritos.json", JSON.stringify(carrito));
    return res.status(201).json(`el item con ID: ${id} fue borrado`);
  }else{
    return res.status(404).json(`el item con ID: ${id} no existe`);
  } 
};

export default borrarProducto;
