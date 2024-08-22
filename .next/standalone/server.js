const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const isDev = process.env.NODE_ENV !== 'production'; // Verifica se está em desenvolvimento
const port = parseInt(process.env.PORT, 10) || 3000; // Obtém a porta do ambiente ou usa 3000 como padrão

const app = next({ dev: isDev }); // Inicializa o aplicativo Next.js
const handle = app.getRequestHandler(); // Obtém o manipulador de requisições do Next.js

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true); // Analisa a URL da requisição
    handle(req, res, parsedUrl); // Processa a requisição com o manipulador do Next.js
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`); // Log para desenvolvimento
  });
});
