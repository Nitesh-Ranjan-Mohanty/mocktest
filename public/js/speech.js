// // document.addEventListener("DOMContentLoaded", () => {
// //   const synth = window.speechSynthesis;

// //   function speak(text) {
// //     return new Promise((resolve) => {
// //       const utterance = new SpeechSynthesisUtterance(text);
// //       utterance.onend = () => resolve();
// //       synth.speak(utterance);
// //     });
// //   }

// //   // Function to be called after form submission
// //   async function handleAnswerFeedback(correctAnswer, userAnswer, explanation) {
// //     await speak(`The correct answer is ${correctAnswer}`);
// //     await speak(
// //       `Your answer is ${userAnswer} which is ${userAnswer === correctAnswer ? "Correct" : "Incorrect"}`
// //     );
// //     await speak(`Explanation: ${explanation}`);
// //   }

// //   // Attach event listener to the form
// //   const form = document.querySelector('form');
// //   if (form) {
// //     form.addEventListener('submit', async (event) => {
// //       event.preventDefault(); // Prevent the default form submission

// //       const formData = new FormData(form);
// //       const userAnswer = formData.get('answer');
// //       const correctAnswer = formData.get('correctAnswer');
// //       const explanation = formData.get('explanation');

// //       // Provide feedback
// //       await handleAnswerFeedback(correctAnswer, userAnswer, explanation);

// //       // Optionally, redirect or update the page content after speaking
// //       // window.location.href = '/next-question'; // Adjust as needed
// //     });
// //   }
// // });

// document.addEventListener("DOMContentLoaded", () => {
//   const synth = window.speechSynthesis;

//   function speak(text) {
//     return new Promise((resolve) => {
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.onend = () => resolve();
//       synth.speak(utterance);
//     });
//   }

//   async function handleAnswerFeedback(correctAnswer, userAnswer, explanation) {
//     await speak(`The correct answer is ${correctAnswer}`);
//     await speak(
//       `Your answer is ${userAnswer} which is ${userAnswer === correctAnswer ? "Correct" : "Incorrect"}`
//     );
//     await speak(`Explanation: ${explanation}`);
//   }

//   const feedbackElement = document.getElementById('feedback');
//   if (feedbackElement) {
//     const correctAnswer = feedbackElement.dataset.correctAnswer;
//     const userAnswer = feedbackElement.dataset.userAnswer;
//     const explanation = feedbackElement.dataset.explanation;

//     handleAnswerFeedback(correctAnswer, userAnswer, explanation).then(() => {
//       // Redirect to the next question
//       window.location.href = '/quiz/next-question'; // Adjust the URL to your route
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const synth = window.speechSynthesis;
  const nextButton = document.getElementById('nextQuestionButton');

  function speak(text) {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => resolve();
      synth.speak(utterance);
    });
  }

//   function markdownToPlainText(markdown) {
//     // Remove Markdown headings
//     let text = markdown.replace(/^#\s+/gm, '');

//     // Remove Markdown emphasis
//     text = text.replace(/\*\*|\*|__|_/g, '');

//     // Remove Markdown lists
//     text = text.replace(/^\s*[\*\+\-\d\)]\s+/gm, '');

//     // Remove Markdown links
//     text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');

//     // Remove Markdown code blocks
//     text = text.replace(/```[\s\S]*?```/g, '');

//     // Remove Markdown images
//     text = text.replace(/!\[([^\]]*)\]\([^\)]+\)/g, '$1');

//     // Remove Markdown blockquotes
//     text = text.replace(/^>\s+/gm, '');

//     return text.trim();
// }

function markdownToPlainText(html) {
  // Create a temporary DOM element to parse the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  // Extract text content from the temporary DOM element
  let text = tempDiv.textContent || tempDiv.innerText || '';

  // Additional cleanup to handle specific HTML entities if needed
  // For common entities
  text = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

  return text.trim();
}

  async function handleAnswerFeedback(correctAnswer, userAnswer, explanation) {
    await speak(`The correct answer is ${correctAnswer}`);
    await speak(
      `Your answer is ${userAnswer} which is ${userAnswer === correctAnswer ? "Correct" : "Incorrect"}`
    );
    console.log(`${markdownToPlainText(explanation)}`)
    await speak(`${markdownToPlainText(explanation)}`);
  }

  const feedbackElement = document.getElementById('feedback');
  if (feedbackElement) {
    const correctAnswer = feedbackElement.dataset.correctAnswer;
    const userAnswer = feedbackElement.dataset.userAnswer;
    const explanation = feedbackElement.dataset.explanation;

    handleAnswerFeedback(correctAnswer, userAnswer, explanation).then(() => {
      nextButton.disabled = false;
      // window.location.href = '/quiz/next-question';
    });
  }

  function stopSpeaking() {
    if (synth.speaking) {
      synth.cancel(); // Stop the current speech
    }
  }

  nextButton.addEventListener('click', () => {
    window.location.href = '/quiz/next-question'; // Adjust the URL to your route
    stopSpeaking();
  });
});
