
import express, { urlencoded } from "express"
import errorHandlerMiddleware from "./middlewares/errorHandler.js"
import carritoRouter from'./rutes/carrito.routes.js'
import productsRouter from'./rutes/productos.routes.js'

// const metodos = require("./metodos");
const app = express();
app.use(express.static("public"));

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/",(_, res)=>{
    return res.json({message:"msj from root"})
});

app.use("/productos", productsRouter);
app.use("/carrito", carritoRouter);
// app.use(errorHandlerMiddleware);

export default app
