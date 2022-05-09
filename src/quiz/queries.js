// storing all sql queries
const getQuiz = "SELECT questions FROM quiz";
const getQuizById = "SELECT questions FROM quiz WHERE id = $1";
const getAnswer = "SELECT answers FROM quiz";
const getAnswerById = "SELECT answers FROM quiz WHERE id = $1";
const addQuestion = "INSERT INTO quiz (questions,answers) VALUES ($1,$2)";
// const deleteQuizId = "Delete FROM  quiz WHERE ID = $1";
module.exports = {
  getQuiz,
  getQuizById,
  getAnswerById,
  getAnswer,
  addQuestion,
  // deleteQuizId,
};
