const { ClientRequest } = require("http");
const pool = require("../db");
const queries = require("./queries");
const getQuiz = (req, res) => {
  pool.query(queries.getQuiz, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getAnswer = (req, res) => {
  pool.query(queries.getAnswer, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getQuizById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getQuizById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getAnswerById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getAnswerById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const addQuestion = (req, res) => {
  const { questions, answers } = req.body;

  pool.query(queries.addQuestion, [questions, answers], (error, results) => {
    if (error) throw error;
    res.status(201).send({ message: "question and answer created" });
  });
};
// const deleteQuizId = (req, res) => {
//   const id = parseInt(req.params.id);
//   pool.query(queries.deleteQuizId, [id], (error, results) => {
//     res.status(201).send("questions deleted");
//   });
//   if (error) throw error;
// };

module.exports = {
  getQuiz,
  getQuizById,
  getAnswer,
  getAnswerById,
  addQuestion,
  // deleteQuizId,
};
