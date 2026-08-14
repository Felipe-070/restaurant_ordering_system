import http from "node:http";

const port = 3000;

const server = http.createServer((req, res) => {
    const response = {
        messaage: "API Restaurante",
        version: "1.0.0",
        xpto: "teste"
    };

    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify(response));
});

server.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
})