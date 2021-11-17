import productos from "./productos.js";

export default function getProductos(req, res) {
  let { id } = req.params;
  if (id == undefined) {
    res.status(201).json(productos);
  } else {
    res.status(201).json(productos.find((x) => x.id == id));
  }
}
