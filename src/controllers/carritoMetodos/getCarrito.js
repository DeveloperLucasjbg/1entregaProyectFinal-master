import carrito from "./carrito.js";

const getCarrito = (req, res) => {
  let { id } = req.params;
  if (id) {
    let selectedItem = carrito.find((x) => x.id == id);
    selectedItem
      ? res.status(201).json(selectedItem)
      : res.json("no se encontro ese Id");
  } else {
    res.status(201).json(carrito);
  }
};

export default getCarrito;
