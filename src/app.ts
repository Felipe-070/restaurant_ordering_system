import express from "express";
import { randomUUID } from "node:crypto";
import supabase from "./config/supabase.js";
import category from "./model/category.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Restaurant Ordering System - API",
        version: "1.0.0",
    });
});

app.get("/categories", async (req, res) => {
  try {
    const categorias = await category.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    res.status(500).json({
      message: "Erro ao buscar categorias",
    });
  }
});

app.get("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const categoryData = await category.findById(id);
    res.status(200).json(categoryData);
  } catch (error) {
    console.error("Erro ao buscar categoria:", error);
    res.status(404).json({
      message: "Categoria não encontrada",
    });
  }
});


app.get("/products", async (req, res) => {
  try {
    const products = await category.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(500).json({
      message: "Erro ao buscar produtos",
    });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await category.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    res.status(404).json({
      message: "Produto não encontrado",
    });
  }
});

export default app;