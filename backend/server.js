const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/users", (req, res) => {
    const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
    res.json(data.users);
});

app.post("/users", (req, res) => {
    const { name, email } = req.body;
    const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
    data.users.push({ name, email });
    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
    res.status(201).send("Usuario agregado");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
