const express = require("express");

require('./models/db')
const router = require('./routes/router');

const app = express();

const port = process.env.PORT | 3000;

app.use(express.static("public"));
app.use(express.json())

app.use("/api/articles", router)

app.listen(port, () => console.log("Server started on port "+port))