const dialogues = ({ userAnswer, correctAnswer }) => {
  return [
    `You picked ${userAnswer}. It’s ${
      userAnswer === correctAnswer ? "correct" : "incorrect"
    }.`,
    `Your choice was ${userAnswer}. That’s ${
      userAnswer === correctAnswer ? "right" : "wrong"
    }.`,
    `${userAnswer}? That’s ${
      userAnswer === correctAnswer ? "correct!" : "not quite right."
    }`,
    `You selected ${userAnswer}. That's ${
      userAnswer === correctAnswer ? "the right choice!" : "incorrect."
    }`,
    `Your answer, ${userAnswer}, is ${
      userAnswer === correctAnswer ? "spot on!" : "not right."
    }`,
    `Looks like you answered ${userAnswer}. That's ${
      userAnswer === correctAnswer ? "correct!" : "wrong."
    }`,
    `You went with ${userAnswer}. It’s ${
      userAnswer === correctAnswer ? "the correct answer." : "incorrect."
    }`,
    `${userAnswer} is what you picked. That’s ${
      userAnswer === correctAnswer ? "right!" : "not correct."
    }`,
    `You chose ${userAnswer}, and that’s ${
      userAnswer === correctAnswer ? "absolutely right!" : "incorrect."
    }`,
    `${userAnswer} was your choice. That’s ${
      userAnswer === correctAnswer ? "correct!" : "wrong."
    }`,
    `You opted for ${userAnswer}. That's ${
      userAnswer === correctAnswer ? "right on target!" : "off the mark."
    }`,
    `You selected ${userAnswer}. ${
      userAnswer === correctAnswer ? "Good job!" : "Not quite correct."
    }`,
    `Your choice of ${userAnswer} is ${
      userAnswer === correctAnswer ? "the correct answer!" : "incorrect."
    }`,
    `${userAnswer} is your response. ${
      userAnswer === correctAnswer ? "You nailed it!" : "That’s not right."
    }`,
    `You answered ${userAnswer}. That’s ${
      userAnswer === correctAnswer ? "spot on!" : "wrong."
    }`,
    `${userAnswer}? That’s ${
      userAnswer === correctAnswer ? "the right call!" : "the wrong one."
    }`,
    `You decided on ${userAnswer}. That's ${
      userAnswer === correctAnswer ? "correct!" : "not correct."
    }`,
    `${userAnswer} is your pick, and it's ${
      userAnswer === correctAnswer ? "the correct answer!" : "incorrect."
    }`,
    `The answer you gave, ${userAnswer}, is ${
      userAnswer === correctAnswer ? "right!" : "not the right one."
    }`,
    `Your response, ${userAnswer}, is ${
      userAnswer === correctAnswer ? "exactly right!" : "incorrect."
    }`,
    `You’ve gone with ${userAnswer}. ${
      userAnswer === correctAnswer ? "Great job!" : "That’s wrong."
    }`,
    `You’ve picked ${userAnswer}. That’s ${
      userAnswer === correctAnswer ? "correct!" : "not quite right."
    }`,
    `You chose ${userAnswer}, which is ${
      userAnswer === correctAnswer ? "the right answer." : "not correct."
    }`,
    `${userAnswer} was your answer. That’s ${
      userAnswer === correctAnswer ? "correct!" : "wrong."
    }`,
    `You put down ${userAnswer}. ${
      userAnswer === correctAnswer ? "Well done!" : "Not the correct answer."
    }`,
  ];
};


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
    if (userAnswer !== correctAnswer) {
      await speak(`The correct answer is ${correctAnswer}`);
    }
    
    const dialogue = dialogues({ userAnswer, correctAnswer });
    
    // Function to get a random dialogue
    function getRandomDialogue() {
      const index = Math.floor(Math.random() * dialogue.length);
      return dialogue[index];
    }
    
    // Usage with the speak function
    await speak(getRandomDialogue());
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
