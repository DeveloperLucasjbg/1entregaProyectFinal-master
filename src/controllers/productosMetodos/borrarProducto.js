import fs from "fs";
import productos from "./productos.js";
import config from "../../constants/index.js";

export default function borrarProducto(req, res) {
  if (config.isAdmin) {
    const { id } = req.params;
    productos.splice(
      productos.findIndex((x) => x.id == id),
      1
    );
    fs.writeFileSync("./productos.json", JSON.stringify(productos));
    return res.status(201).json(`el item con ID: ${id} fue borrado`);
  } else {
    console.log(config.adminError);
    return res.status(401).json(config.adminError);
  }
}
