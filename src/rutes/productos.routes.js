import { Router } from "express";
import getProductos from "../controllers/productosMetodos/getProductos.js";
import agregarProducto from "../controllers/productosMetodos/agregarProducto.js";
import borrarProducto from "../controllers/productosMetodos/borrarProducto.js";
import actualizarProd from "../controllers/productosMetodos/actualizarProd.js";

const productosRouter = Router();

productosRouter.put("/actualizar/:id", actualizarProd);
productosRouter.get("/listar/:id?", getProductos);
productosRouter.post("/agregar", agregarProducto);
productosRouter.delete("/borrar/:id", borrarProducto);

export default productosRouter;
