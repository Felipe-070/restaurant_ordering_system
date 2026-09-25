import type { Request, Response } from "express";
import CategoryRepository from "../repositories/CategoryRepository.js";

async function getAll(req: Request, res: Response) {
    try {
        const categories = await CategoryRepository.findAll();

        res.status(200).json(categories);
    } catch (error) {
        console.error("Erro ao buscar categorias:", error);

        res.status(500).json({
            message: "Erro ao buscar categorias"
        });
    }
}

async function searchByKeyword(req: Request, res: Response) {
    try {
        const { keyword } = req.params;

        if (!keyword) {
            return res.status(404).json({
                message: "Palavra-chave não fornecida"
            });
        }

        const categories =
            await CategoryRepository.searchByKeyword(keyword);

        res.status(200).json(categories);
    } catch (error) {
        console.error("Erro ao buscar categoria:", error);

        res.status(404).json({
            message: "Categoria não encontrada"
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
                message: "ID da categoria não fornecido"
            });
        }

        const category = await CategoryRepository.findById(id);

        res.status(200).json(category);
    } catch (error) {
        console.error("Erro ao buscar categoria:", error);

        res.status(404).json({
            message: "Categoria não encontrada"
        });
    }
}

async function create(req: Request, res: Response) {
    try {
        const category = await CategoryRepository.create(req.body);

        res.status(201).json(category);
    } catch (error) {
        console.error("Erro ao criar categoria:", error);

        res.status(500).json({
            message: "Erro ao criar categoria"
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
            message: "ID da categoria não fornecido"
        });
    }

    try {
        const category =
            await CategoryRepository.update(id, req.body);

        res.status(200).json(category);
    } catch (error) {
        console.error("Erro ao atualizar categoria:", error);

        res.status(500).json({
            message: "Erro ao atualizar categoria"
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
            message: "ID da categoria não fornecido"
        });
    }

    try {
        const category =
            await CategoryRepository.remove(id);

        res.status(200).json(category);
    } catch (error) {
        console.error("Erro ao remover categoria:", error);

        res.status(500).json({
            message: "Erro ao remover categoria"
        });
    }
}

export default {
    getAll,
    searchByKeyword,
    getById,
    create,
    update,
    remove
};