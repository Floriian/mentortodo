const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const path = require("path");

const indexRouter = require("./routes/index.router");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

app.use(cors());

app.use(indexRouter);

app.listen(PORT, () => console.log(`🚀: App is listening on ${PORT}`));
