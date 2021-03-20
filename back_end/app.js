const express = require("express");

const app = express();

app.use((req, res) => {
res.json({ message :"Server On Stritoviçc" });
});

module.exports = app;