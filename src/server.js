const express = require("express");
const quizRoutes = require("./quiz/routes");
const surveyRoutes = require("./survey/routes");
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
app.use("/", surveyRoutes);
app.use("/", quizRoutes);
app.use("/auth", require("./routes/jwtAuth"));
app.listen(port, () => console.log(`app listening on port ${port}`));
