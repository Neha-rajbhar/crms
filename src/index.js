const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const port = process.env.port || 5000;
const router = require("./routes/routes.js");

require("./connection/conn.js");

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer().any());

app.use("/", router);

app.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`);
});
