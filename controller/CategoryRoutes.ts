import { Router } from "express";
import categoryController from "./CategoryController.js";

const router = Router();

router.get("/categories", categoryController.getAll);

router.get(
    "/categories/search/:keyword",
    categoryController.searchByKeyword
);

router.get(
    "/categories/:id",
    categoryController.getById
);

router.post(
    "/categories",
    categoryController.create
);

router.put(
    "/categories/:id",
    categoryController.update
);

router.delete(
    "/categories/:id",
    categoryController.remove
);

export default router;