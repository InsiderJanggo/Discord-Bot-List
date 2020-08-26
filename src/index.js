const express = require("express");

require("dotenv").config()
const app = express();

const {PORT} = process.env

app.set("port", PORT);

app.set("view engine", "ejs");

app.set(express.static("public"));
require("./router")(app);

app.listen(PORT, () => console.info(`Listening To Port ${PORT}`));