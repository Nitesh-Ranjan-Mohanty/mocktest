import say from "say";

// Function to shuffle an array
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
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
