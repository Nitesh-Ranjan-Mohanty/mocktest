// document.addEventListener("DOMContentLoaded", () => {
//   const synth = window.speechSynthesis;

//   function speak(text) {
//     return new Promise((resolve) => {
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.onend = () => resolve();
//       synth.speak(utterance);
//     });
//   }

//   // Function to be called after form submission
//   async function handleAnswerFeedback(correctAnswer, userAnswer, explanation) {
//     await speak(`The correct answer is ${correctAnswer}`);
//     await speak(
//       `Your answer is ${userAnswer} which is ${userAnswer === correctAnswer ? "Correct" : "Incorrect"}`
//     );
//     await speak(`Explanation: ${explanation}`);
//   }

//   // Attach event listener to the form
//   const form = document.querySelector('form');
//   if (form) {
//     form.addEventListener('submit', async (event) => {
//       event.preventDefault(); // Prevent the default form submission

//       const formData = new FormData(form);
//       const userAnswer = formData.get('answer');
//       const correctAnswer = formData.get('correctAnswer');
//       const explanation = formData.get('explanation');

//       // Provide feedback
//       await handleAnswerFeedback(correctAnswer, userAnswer, explanation);

//       // Optionally, redirect or update the page content after speaking
//       // window.location.href = '/next-question'; // Adjust as needed
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const synth = window.speechSynthesis;

  function speak(text) {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => resolve();
      synth.speak(utterance);
    });
  }

  async function handleAnswerFeedback(correctAnswer, userAnswer, explanation) {
    await speak(`The correct answer is ${correctAnswer}`);
    await speak(
      `Your answer is ${userAnswer} which is ${userAnswer === correctAnswer ? "Correct" : "Incorrect"}`
    );
    await speak(`Explanation: ${explanation}`);
  }

  const feedbackElement = document.getElementById('feedback');
  if (feedbackElement) {
    const correctAnswer = feedbackElement.dataset.correctAnswer;
    const userAnswer = feedbackElement.dataset.userAnswer;
    const explanation = feedbackElement.dataset.explanation;

    handleAnswerFeedback(correctAnswer, userAnswer, explanation).then(() => {
      // Redirect to the next question
      window.location.href = '/quiz/next-question'; // Adjust the URL to your route
    });
  }
});
