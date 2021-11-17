import { Router } from "express";
import getCarrito from "../controllers/carritoMetodos/getCarrito.js";
import agregarProducto from "../controllers/carritoMetodos/agregarProducto.js";
import borrarProducto from "../controllers/carritoMetodos/borrarProducto.js";

const carritoRouter = Router();
// -> carrito/:
carritoRouter.get("/listar/:id?", getCarrito);
carritoRouter.post("/agregar/:id?", agregarProducto);
carritoRouter.delete("/borrar/:id", borrarProducto);

export default carritoRouter;
