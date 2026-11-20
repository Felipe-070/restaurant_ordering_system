import { fileURLToPath } from "node:url";
import swaggerJsdoc from "swagger-jsdoc";
import type { Options } from "swagger-jsdoc";

const options: Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Restaurant Ordering System API",
            version: "1.0.0",
            description: "Documentação da API do sistema de pedidos do restaurante.",
        },
        servers: [{ url: "http://localhost:3000" }],
        components: {
            schemas: {
                Category: {
                    type: "object",
                    properties: {
                        id: { type: "string", format: "uuid" },
                        name: { type: "string" },
                        description: { type: "string" },
                        icon: { type: "string" },
                        display_order: { type: "integer", minimum: 0 },
                        active: { type: "boolean" },
                    },
                },
                Product: {
                    type: "object",
                    properties: {
                        id: { type: "string", format: "uuid" },
                        category_id: { type: "string", format: "uuid" },
                        title: { type: "string" },
                        description: { type: "string" },
                        price: { type: "number", minimum: 0 },
                        image: { type: "string" },
                        available: { type: "boolean" },
                        active: { type: "boolean" },
                    },
                },
                Error: {
                    type: "object",
                    properties: {
                        message: { type: "string" },
                    },
                },
            },
        },
    },
    apis: [fileURLToPath(import.meta.url)],
};

/**
 * @openapi
 * /categories:
 *   get:
 *     summary: Lista categorias
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorias
 *   post:
 *     summary: Cria categoria
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, display_order]
 *             properties:
 *               name: { type: string }
 *               display_order: { type: integer, minimum: 0 }
 *               description: { type: string }
 *               icon: { type: string }
 *     responses:
 *       201:
 *         description: Categoria criada
 *       400:
 *         description: Dados inválidos
 * /categories/search:
 *   get:
 *     summary: Busca categorias por palavra-chave
 *     tags: [Categorias]
 *     parameters:
 *       - in: query
 *         name: keyword
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Categorias encontradas
 *       400:
 *         description: Palavra-chave não informada
 * /categories/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema: { type: string, format: uuid }
 *   get:
 *     summary: Busca categoria por ID
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Categoria encontrada
 *       404:
 *         description: Categoria não encontrada
 *   put:
 *     summary: Atualiza categoria
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               display_order: { type: integer, minimum: 0 }
 *               description: { type: string }
 *               icon: { type: string }
 *               active: { type: boolean }
 *     responses:
 *       200:
 *         description: Categoria atualizada
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Categoria não encontrada
 *   delete:
 *     summary: Remove categoria
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Categoria removida
 *       404:
 *         description: Categoria não encontrada
 * /products:
 *   get:
 *     summary: Lista produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *   post:
 *     summary: Cria produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [category_id, title, price]
 *             properties:
 *               category_id: { type: string, format: uuid }
 *               title: { type: string }
 *               price: { type: number, minimum: 0 }
 *               description: { type: string }
 *               image: { type: string }
 *     responses:
 *       201:
 *         description: Produto criado
 *       400:
 *         description: Dados inválidos
 * /products/search:
 *   get:
 *     summary: Busca produtos por palavra-chave
 *     tags: [Produtos]
 *     parameters:
 *       - in: query
 *         name: keyword
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Produtos encontrados
 *       400:
 *         description: Palavra-chave não informada
 * /products/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema: { type: string, format: uuid }
 *   get:
 *     summary: Busca produto por ID
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Produto encontrado
 *       404:
 *         description: Produto não encontrado
 *   put:
 *     summary: Atualiza produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category_id: { type: string, format: uuid }
 *               title: { type: string }
 *               price: { type: number, minimum: 0 }
 *               description: { type: string }
 *               image: { type: string }
 *               available: { type: boolean }
 *               active: { type: boolean }
 *     responses:
 *       200:
 *         description: Produto atualizado
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Produto não encontrado
 *   delete:
 *     summary: Remove produto
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Produto removido
 *       404:
 *         description: Produto não encontrado
 */
export default swaggerJsdoc(options);