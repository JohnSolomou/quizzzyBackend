const express = require("express");
const quizRoutes = require("./src/quiz/routes");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
// const bodyParser = require("body-parser");
require("dotenv").config();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.use("/", quizRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
