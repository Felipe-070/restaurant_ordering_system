import http from "node:http";

const port = 3000;

const routes = {
    "/": {
        message: "API Restaurante",
        version: "1.0.0",
    },
    "/categories": {
        message: "Categorias de produtos"
    },
    "/products": {
        message: "Lista de produtos"
    }
};

const server = http.createServer((req, res) => {
    const response = routes[req.url as keyof typeof routes];

    if (!response) {
        res.writeHead(404, {
            "Content-Type": "application/json"
        });

        return res.end(
            JSON.stringify({
                message: "Route not found"
            })
        );
    }

    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify(response));
});

server.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
});