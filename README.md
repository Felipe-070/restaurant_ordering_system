# Restaurant Ordering System API

API REST desenvolvida para gerenciar categorias e produtos de um sistema de pedidos de restaurante. O projeto utiliza Node.js, TypeScript, Express e Supabase como banco de dados.

## Tecnologias

- Node.js
- TypeScript
- Express
- Supabase

## Requisitos

- Node.js instalado
- Projeto/banco configurado no Supabase
- Variáveis de ambiente configuradas em um arquivo `.env`

## Configuração e execução

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Configure o arquivo `.env` na raiz do projeto com as credenciais do Supabase:

   ```env
   SUPABASE_URL=https://seu-projeto.supabase.co
   SUPABASE_SECRET_KEY=sua-chave-do-supabase
   ```

   Não publique suas chaves reais no GitHub.

3. Inicie a API em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

4. A API ficará disponível em `http://localhost:3000`.

Para compilar e executar a versão compilada:

```bash
npm run build
npm start
```

## Endpoints

Os exemplos abaixo consideram a API rodando em `http://localhost:3000`. As requisições de criação e atualização devem enviar JSON com o cabeçalho `Content-Type: application/json`.

### Categorias

| Método | Rota | Descrição |
|---|---|---|
| GET | `/categories` | Lista todas as categorias |
| GET | `/categories/:id` | Busca uma categoria pelo ID |
| GET | `/categories/search/:keyword` | Busca categorias por palavra-chave no nome ou descrição |
| POST | `/categories` | Cria uma categoria |
| PUT | `/categories/:id` | Atualiza uma categoria |
| DELETE | `/categories/:id` | Remove uma categoria |

#### Exemplo de criação — `POST /categories`

```json
{
  "name": "Pizzas",
  "description": "Pizzas tradicionais e especiais",
  "icon": "pizza",
  "display_order": 1,
  "active": true
}
```

#### Exemplo de atualização — `PUT /categories/:id`

Substitua `:id` pelo UUID da categoria que deseja atualizar.

```json
{
  "name": "Pizzas especiais",
  "description": "Pizzas tradicionais, especiais e da casa",
  "icon": "pizza",
  "display_order": 2,
  "active": true
}
```

#### Exemplo de busca por palavra-chave

```http
GET /categories/search/pizza
```

### Produtos

| Método | Rota | Descrição |
|---|---|---|
| GET | `/products` | Lista todos os produtos |
| GET | `/products/:id` | Busca um produto pelo ID |
| POST | `/products` | Cria um produto |
| PUT | `/products/:id` | Atualiza um produto |
| DELETE | `/products/:id` | Remove um produto |

#### Exemplo de criação — `POST /products`

O campo `category_id` deve conter o UUID de uma categoria existente. O campo `image` pode ser `null` quando o produto não tiver imagem.

```json
{
  "category_id": "UUID-DA-CATEGORIA",
  "title": "Pizza de calabresa",
  "description": "Pizza com molho de tomate, muçarela e calabresa",
  "price": 39.90,
  "image": null,
  "available": true,
  "active": true
}
```

#### Exemplo de atualização — `PUT /products/:id`

Substitua `:id` pelo UUID do produto que deseja atualizar.

```json
{
  "category_id": "UUID-DA-CATEGORIA",
  "title": "Pizza de calabresa grande",
  "description": "Pizza grande com molho de tomate, muçarela e calabresa",
  "price": 44.90,
  "image": null,
  "available": true,
  "active": true
}
```

## Exemplos de consulta

Listar categorias:

```http
GET http://localhost:3000/categories
```

Buscar uma categoria por ID:

```http
GET http://localhost:3000/categories/UUID-DA-CATEGORIA
```

Listar produtos:

```http
GET http://localhost:3000/products
```

Buscar um produto por ID:

```http
GET http://localhost:3000/products/UUID-DO-PRODUTO
```

## Respostas HTTP

- `200 OK`: consulta, atualização ou remoção realizada.
- `201 Created`: registro criado.
- `404 Not Found`: recurso ou parâmetro não encontrado/fornecido, conforme a rota.
- `500 Internal Server Error`: erro interno ao processar a operação.

As respostas de sucesso retornam os dados em JSON. Em caso de erro, a API retorna um objeto JSON com a propriedade `message`.

## Observações

- Os IDs são identificadores UUID gerados/armazenados pelo banco de dados; não envie os textos ilustrativos `UUID-DA-CATEGORIA` ou `UUID-DO-PRODUTO` literalmente.
- Os exemplos são dados ilustrativos para testar a API.
- A API depende das tabelas `categories` e `products` configuradas no Supabase com os campos utilizados pelo projeto.
