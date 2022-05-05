const express = require("express");
const quizRoutes = require("./src/quiz/routes");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1", quizRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
