import express from "express";
import categoryRoutes from "../controller/CategoryRoutes.js";
import productRoutes from "../controller/ProductRoutes.js";

const app = express();

app.use(express.json());

app.use(categoryRoutes);
app.use(productRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API do sistema de pedidos funcionando!"
    });
});

export default app;