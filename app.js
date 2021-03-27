const express = require("express");

require('./models/db')
const router = require('./routes/router');

const app = express();

app.use(express.static("public"));
app.use(express.json())

app.use("/api/articles", router)

app.listen(3000, () => console.log("Server started on port 3000"))