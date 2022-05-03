const { Router } = require("express");
const controller = require("./controller");
const router = Router();
router.get("/", controller.getQuiz);
router.post("/", controller.addQuestion);
router.get("/:id", controller.getQuizById);
// router.get("/answer", controller.getAnswer);
// router.get("/answer:id", controller.getAnswerById);

module.exports = router;
