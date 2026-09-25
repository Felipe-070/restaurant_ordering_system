import { Router } from "express";
import productController from "./ProductController.js";

const router = Router();

router.get(
    "/products",
    productController.getAll
);

router.get(
    "/products/:id",
    productController.getById
);

router.post(
    "/products",
    productController.create
);

router.put(
    "/products/:id",
    productController.update
);

router.delete(
    "/products/:id",
    productController.remove
);

export default router;