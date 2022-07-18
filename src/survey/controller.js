let survey = require("./survey.json");

const getSurvey = (req, res) => {
  res.json(survey);
  console.log(survey);
};
const getSurveyFirstQuestion = (req, res) => {
  res.json(survey[0]);
  console.log(survey[0]);
};

module.exports = { getSurvey, getSurveyFirstQuestion };
