import express from "express";
import session from "express-session";
import path from "path";
import quizRouter from "./routes/quiz";

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "quiz-secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/quiz", quizRouter);

app.use((req, res) => {
  res.redirect("/quiz/select-topic"); 
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
