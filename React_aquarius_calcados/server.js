import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Servidor Node.js rodando 🔥");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
