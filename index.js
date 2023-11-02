const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.listen(PORT, () => console.log(`🚀: App is listening on ${PORT}`));
