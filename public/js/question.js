// document.addEventListener("DOMContentLoaded", () => {
//     const synth = window.speechSynthesis;
//     const questionElement = document.querySelector("h2");
  
//     // Function to speak the text
//     function speak(text) {
//       return new Promise((resolve) => {
//         const utterance = new SpeechSynthesisUtterance(text);
//         utterance.onend = () => resolve();
//         synth.speak(utterance);
//       });
//     }
  
//     // Read the question aloud when the page loads
//     if (questionElement) {
//       const questionText = questionElement.textContent;
//       speak(questionText);
//     }
//   });
  

document.addEventListener("DOMContentLoaded", () => {
    const synth = window.speechSynthesis;
    const questionElement = document.querySelector("h2");
    const optionElements = document.querySelectorAll(".radio-group label");
  
    // Function to speak the text
    function speak(text) {
      return new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => resolve();
        synth.speak(utterance);
      });
    }
  
    // Read the question and options aloud
    async function readQuestionAndOptions() {
      if (questionElement) {
        const questionText = questionElement.textContent;
        await speak(`Question: ${questionText}`);
      }
  
      optionElements.forEach(async (option, idx) => {
        const optionText = option.textContent;
        await speak(`Option ${idx + 1}: ${optionText}`);
      });
    }
  
    // Call the function to read the question and options
    readQuestionAndOptions();
  });
  