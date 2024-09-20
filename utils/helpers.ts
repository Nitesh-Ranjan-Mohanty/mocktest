import say from "say";

// Function to shuffle an array
// export const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

export const shuffleArray = (array) => {
  // Define phrases that should prevent shuffling
  const preventShufflePhrases = [
    "All of the above",
    "Both A and B",
    "C and D",
    "None of the above",
    "Either A or B",
    "All of the following",
    "A, B, and C",
    "All options are correct",
    "Select all that apply",
  ];

  // Check if the array contains any of the phrases
  const shouldShuffle = !array.some(option =>
    preventShufflePhrases.includes(option)
  );

  if (shouldShuffle) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return array;
};


// export const speakPromise = (text) => {
//   return new Promise((resolve) => {
//     say.speak(text, null, 1, () => {
//       resolve();
//     });
//   });
// };

export const speakPromise = (text: string): Promise<void> => {
  return new Promise<void>((resolve) => {
    say.speak(text, null, 1, () => {
      resolve();
    });
  });
};
