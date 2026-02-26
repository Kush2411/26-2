const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dbConnect = require("./src/config/dbConnect.js");

dotenv.config();

const PORT = process.env.PORT || 2000;

dbConnect();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
