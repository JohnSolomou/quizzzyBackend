// storing all sql queries
const getQuiz = "SELECT questions FROM quiz";
const getQuizById = "SELECT questions FROM quiz WHERE id = $1";
const getAnswer = "SELECT answers FROM quiz";
const getAnswerById = "SELECT answers FROM quiz WHERE id = $1";
const checkQuestionExists = "SELECT s FROM quiz s WHERE s.questions = $1";
module.exports = {
  getQuiz,
  getQuizById,
  getAnswerById,
  getAnswer,
  checkQuestionExists,
};
