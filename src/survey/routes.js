const { Router } = require("express");
const controller = require("./controller");
const routerSurvey = Router();
routerSurvey.get("/survey", controller.getSurvey);
routerSurvey.get("/survey/first", controller.getSurveyFirstQuestion);
// routerSurvey.get("/survey/id:", controller.getSurveyFirstQuestion);
module.exports = routerSurvey;
