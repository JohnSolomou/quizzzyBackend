const { Router } = require("express");
const controller = require("./controller");
const router = Router();
router.get("/quiz", controller.getQuiz);
// router.post("/quiz", controller.addQuestion);
router.get("/quiz/:id", controller.getQuizById);
router.get("/answer", controller.getAnswer);
router.get("/answer/:id", controller.getAnswerById);

module.exports = router;
