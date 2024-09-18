import { nodeQuestions } from "./nodeQuestionBank";
import { webPackQuestions } from "./webPackQuestionBank";
import { jestQuestions } from "./jestQuestionBank";
import * as readline from "readline";
import say from "say";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [...nodeQuestions, ...webPackQuestions, ...jestQuestions];
const topics = [
  "nodejs",
  "typescript",
  "jest",
  "react",
  "reactNative",
  "babel",
  "webpack",
  "oraclesql",
];

// Function to shuffle an array
const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const speakPromise = (text: string): Promise<void> => {
  return new Promise<void>((resolve) => {
    say.speak(text, null, 1, () => {
      resolve();
    });
  });
};

const askQuestion = async (
  question: string,
  options: string[],
  explanation: string,
  correctAnswer: string
): Promise<number> => {
  return new Promise(async (resolve) => {
    console.log(question);
    const shuffledOptions = shuffleArray(options);
    shuffledOptions.forEach((option, idx) => {
      console.log(`${idx + 1}. ${option}`);
    });

    rl.question("Your answer (enter the number): ", async (answer) => {
      const choice = parseInt(answer, 10);
      if (choice >= 1 && choice <= options.length) {
        console.log(`\nCorrect answer: ${correctAnswer}`);
        console.log(`Your answer: ${shuffledOptions[choice - 1]}`);
        console.log(`Explanation: ${explanation}\n`);
        say.stop();
        await speakPromise(`The correct answer is ${correctAnswer}`);
        await speakPromise(
          `Your answer is: ${shuffledOptions[choice - 1]} ${
            shuffledOptions[choice - 1] === correctAnswer
              ? "Which is Correct"
              : "Which is incorrect"
          }`
        );
        await speakPromise(explanation);
        resolve(choice);
      } else {
        console.log("Invalid choice. Please select a valid option.");
        resolve(
          await askQuestion(question, options, explanation, correctAnswer)
        );
      }
    });
  });
};

const selectTopic = async (): Promise<string> => {
  console.log("Select a topic for the test:");
  topics.forEach((topic, idx) => {
    console.log(`${idx + 1}. ${topic}`);
  });

  return new Promise((resolve) => {
    rl.question("Enter the number of your choice: ", (answer) => {
      const choice = parseInt(answer, 10);
      if (choice >= 1 && choice <= topics.length) {
        resolve(topics[choice - 1]);
      } else {
        console.log("Invalid choice. Please select a valid option.");
        resolve(selectTopic());
      }
    });
  });
};
const startTest = async () => {
  console.log("Welcome to the Node.js Mock Test!");
  console.log(
    "You will be presented with questions based on your selected topic."
  );

  const selectedTopic = await selectTopic();
  //   console.log(`You selected: ${selectedTopic}`);

  const centerText = (text: string, width: number): string => {
    const padding = Math.max(0, Math.floor((width - text.length) / 2));
    return " ".repeat(padding) + text;
  };

  const colorize = (text: string, colorCode: string): string => {
    const colorCodes: { [key: string]: string } = {
      red: "31",
      green: "32",
      yellow: "33",
      blue: "34",
      magenta: "35",
      cyan: "36",
      white: "37",
    };
    const color = colorCodes[colorCode] || "37"; // Default to white if color not found
    return `\x1b[${color}m${text}\x1b[0m`; // ANSI escape codes for color
  };

  const width = 80;

  console.log(
    colorize(
      "---------------------------------------------------------------------------",
      "blue"
    )
  );
  console.log(
    centerText(
      colorize(
        `----------------------You selected: ${selectedTopic}-----------------------`,
        "blue"
      ),
      width
    )
  );
  console.log(
    colorize(
      "---------------------------------------------------------------------------",
      "blue"
    )
  );

  // Filter questions based on the selected topic
  const filteredQuestions = questions.filter((q) => q?.topic === selectedTopic);

  // Shuffle the filtered questions
  const shuffledQuestions = shuffleArray(filteredQuestions);

  let score = 0;
  const userAnswers: { [key: number]: string } = {};

  for (const q of shuffledQuestions) {
    const choice = await askQuestion(
      q.question,
      q.options,
      q.explanation,
      q.answer
    );
    userAnswers[q.id] = q.options[choice - 1];
    if (q.options[choice - 1] === q.answer) {
      score++;
    }
  }

  console.log("\nTest completed!");
  console.log(`Your score: ${score}/${shuffledQuestions.length}`);

  // Display correct answers
  console.log("\nCorrect Answers:");
  shuffledQuestions.forEach((q) => {
    console.log(`Q${q.id}: ${q.answer}`);
  });

  rl.close();
};

startTest();
