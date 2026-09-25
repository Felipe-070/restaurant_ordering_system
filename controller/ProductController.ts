import type { Request, Response } from "express";
import ProductRepository from "../repositories/ProductRepository.js";

async function getAll(req: Request, res: Response) {
    try {
        const products = await ProductRepository.findAll();

        res.status(200).json(products);
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);

        res.status(500).json({
            message: "Erro ao buscar produtos"
        });
    }
}

async function getById(
    req: Request<{ id: string }>,
    res: Response
) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(404).json({
                message: "ID do produto não fornecido"
            });
        }

        const product = await ProductRepository.findById(id);

        res.status(200).json(product);
    } catch (error) {
        console.error("Erro ao buscar produto:", error);

        res.status(404).json({
            message: "Produto não encontrado"
        });
    }
}

async function create(req: Request, res: Response) {
    try {
        const product = await ProductRepository.create(req.body);

        res.status(201).json(product);
    } catch (error) {
        console.error("Erro ao criar produto:", error);

        res.status(500).json({
            message: "Erro ao criar produto"
        });
    }
}

async function update(
    req: Request<{ id: string }>,
    res: Response
) {
    const { id } = req.params;

    if (!id) {
        return res.status(404).json({
            message: "ID do produto não fornecido"
        });
    }

    try {
        const product =
            await ProductRepository.update(id, req.body);

        res.status(200).json(product);
    } catch (error) {
        console.error("Erro ao atualizar produto:", error);

        res.status(500).json({
            message: "Erro ao atualizar produto"
        });
    }
}

async function remove(
    req: Request<{ id: string }>,
    res: Response
) {
    const { id } = req.params;

    if (!id) {
        return res.status(404).json({
            message: "ID do produto não fornecido"
        });
    }

    try {
        const product =
            await ProductRepository.remove(id);

        res.status(200).json(product);
    } catch (error) {
        console.error("Erro ao remover produto:", error);

        res.status(500).json({
            message: "Erro ao remover produto"
        });
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};