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
// const addQuestion = (req, res) => {
//   const { questions, answers } = req.body;
//   // check if question is already there
//   pool.query(queries.checkQuestionExists, [questions], (error, results) => {
//     if (results.rows.length) {
//       res.send("question already exists");
//     }
//   });
// };

module.exports = {
  getQuiz,
  getQuizById,
  getAnswer,
  getAnswerById,
  // addQuestion,
};
