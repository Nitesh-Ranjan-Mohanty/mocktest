import express from "express";
import { nodeQuestions } from "../questionBank/nodeQuestionBank";
import { webPackQuestions } from "../questionBank/webPackQuestionBank";
import { jestQuestions } from "../questionBank/jestQuestionBank";
import { reactQuestions } from "../questionBank/reactQuesionBank";
import { shuffleArray } from "../utils/helpers";
import { marked } from 'marked';

const router = express.Router();

const questions = [
  ...nodeQuestions,
  ...webPackQuestions,
  ...jestQuestions,
  ...reactQuestions,
];

// Middleware to initialize quiz session
router.use((req, res, next) => {
  if (!req.session.quiz) {
    req.session.quiz = {
      score: 0,
      currentQuestionIndex: 0,
      userAnswers: [],
      selectedTopic: null,
      shuffledQuestions: [],
    };
  }
  next();
});

// Route to select topic
router.get("/select-topic", (req, res) => {
  res.render("select-topic", {
    topics: ["nodejs", "webpack", "jest", "react"],
  });
});

// Handle topic selection
router.post("/select-topic", (req, res) => {
  const { selectedTopic } = req.body;
  const filteredQuestions = questions?.filter(
    (q) => q?.topic === selectedTopic
  );
  const shuffledQuestions = shuffleArray(filteredQuestions);

  req.session.quiz.selectedTopic = selectedTopic;
  req.session.quiz.shuffledQuestions = shuffledQuestions;
  req.session.quiz.currentQuestionIndex = 0;
  req.session.quiz.score = 0;
  req.session.quiz.userAnswers = [];

  res.redirect("/quiz/question");
});

// Display one question at a time
router.get("/question", (req, res) => {
  const { shuffledQuestions, currentQuestionIndex } = req.session.quiz;

  if (currentQuestionIndex >= shuffledQuestions.length) {
    return res.redirect("/quiz/result");
  }

  const question = shuffledQuestions[currentQuestionIndex];
  res.render("question", { question, options: shuffleArray(question.options) });
});

router.post("/question", (req, res) => {
  const userAnswer = req.body.answer;
  const correctAnswer = req.body.correctAnswer;
  const explanation = req.body.explanation;

  // Optionally, store these values in the session or database as needed

  res.render("feedback", {
    userAnswer,
    correctAnswer,
    explanation:marked.parse(explanation),
  });
});

router.get("/next-question", (req, res) => {
  const { shuffledQuestions, currentQuestionIndex } = req.session.quiz;

  if (currentQuestionIndex >= shuffledQuestions.length) {
    return res.redirect("/quiz/result");
  }

  const nextQuestion = shuffledQuestions[currentQuestionIndex];
  req.session.quiz.currentQuestionIndex += 1;

  res.render("question", {
    question: nextQuestion,
    options: shuffleArray(nextQuestion.options),
  });
});

// Display result
router.get("/result", (req, res) => {
  const { score, shuffledQuestions } = req.session.quiz;
  res.render("result", {
    score,
    totalQuestions: shuffledQuestions.length,
    questions: shuffledQuestions,
  });
});

export default router;
