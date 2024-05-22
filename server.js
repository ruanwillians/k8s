const express = require("express");
const app = express();
const PORT = 3000;
require("dotenv").config();

const name = process.env.name;
const age = process.env.age;
const user = process.env.user;
const password = process.env.password;

// Rota de exemplo
app.get("/", (req, res) => {
  res.send(`${name}, ${age}`);
});

app.get("/secret", (req, res) => {
  res.send(`${user}, ${password}`);
});

app.get("/healthz", (req, res) => {
  res.send("OK");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando`);
});
