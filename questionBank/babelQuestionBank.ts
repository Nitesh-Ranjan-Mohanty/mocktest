interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
    topic: string;
    example?: string;
  }
  
  export const babelQuestions: Question[] = [
    {
        "id": 1,
        "question": "What is Babel?",
        "options": ["A JavaScript transpiler", "A database management system", "A front-end framework", "A type of programming language"],
        "answer": "A JavaScript transpiler",
        "explanation": "Babel is a tool that is primarily used to convert ECMAScript 2015+ code into a backward-compatible version of JavaScript that can run in older browsers.",
        "topic": "babel",
        "example": "npm install --save-dev @babel/core @babel/cli"
    },
    {
        "id": 2,
        "question": "What is the main purpose of Babel?",
        "options": ["To transpile modern JavaScript to older versions", "To optimize JavaScript code for performance", "To minify code", "To provide a testing framework"],
        "answer": "To transpile modern JavaScript to older versions",
        "explanation": "Babel's main purpose is to convert ES6+ JavaScript syntax to ES5 syntax, ensuring compatibility with older browsers.",
        "topic": "babel",
        "example": "Babel can transpile features like arrow functions and classes into older JavaScript syntax."
    },
    {
        "id": 3,
        "question": "Which of the following is a core package of Babel?",
        "options": ["@babel/core", "babel-transpiler", "babelify", "babel-processor"],
        "answer": "@babel/core",
        "explanation": "The @babel/core package is the core module of Babel that provides the main API for transforming JavaScript code.",
        "topic": "babel",
        "example": "npm install --save-dev @babel/core"
    },
    {
        "id": 4,
        "question": "What is a Babel plugin?",
        "options": ["A tool that allows custom transformations of JavaScript code", "A tool for managing dependencies", "A module for debugging JavaScript", "A utility for bundling files"],
        "answer": "A tool that allows custom transformations of JavaScript code",
        "explanation": "Babel plugins are used to add custom transformations, such as converting specific ECMAScript syntax into backward-compatible JavaScript.",
        "topic": "babel",
        "example": "A common plugin is @babel/plugin-transform-arrow-functions which converts ES6 arrow functions into ES5 functions."
    },
    {
        "id": 5,
        "question": "What does the '@babel/preset-env' preset do?",
        "options": ["Automatically determines which JavaScript features to transpile based on the target environment", "Minifies JavaScript code", "Converts CSS to JavaScript", "Provides a testing environment for JavaScript code"],
        "answer": "Automatically determines which JavaScript features to transpile based on the target environment",
        "explanation": "@babel/preset-env is a smart preset that allows you to use the latest JavaScript features without needing to micromanage which syntax is transpiled.",
        "topic": "babel",
        "example": "npm install --save-dev @babel/preset-env"
    },
    {
        "id": 6,
        "question": "How does Babel help in writing modern JavaScript?",
        "options": ["It compiles modern JavaScript syntax into code that older browsers can understand", "It debugs JavaScript code", "It optimizes code for production", "It manages project dependencies"],
        "answer": "It compiles modern JavaScript syntax into code that older browsers can understand",
        "explanation": "Babel helps developers write modern JavaScript by compiling it into code that can be executed in environments that do not natively support the latest ECMAScript features.",
        "topic": "babel",
        "example": "With Babel, you can use features like async/await in environments that do not yet support them."
    },
    {
        "id": 7,
        "question": "What is the role of Babel polyfills?",
        "options": ["To provide missing features in older browsers", "To debug JavaScript errors", "To minify JavaScript files", "To optimize JavaScript performance"],
        "answer": "To provide missing features in older browsers",
        "explanation": "Babel polyfills provide support for JavaScript features that are not natively available in older browsers, such as promises or `Array.prototype.includes()`.",
        "topic": "babel",
        "example": "You can include Babel polyfills by using `@babel/polyfill` to ensure compatibility with older browsers."
    },
    {
        "id": 8,
        "question": "What command is used to install Babel in a project?",
        "options": ["npm install --save-dev @babel/core", "npm install babel", "npm install --global babel", "npm init babel"],
        "answer": "npm install --save-dev @babel/core",
        "explanation": "To use Babel in your project, you need to install the core Babel package using npm or yarn, typically as a development dependency.",
        "topic": "babel",
        "example": "npm install --save-dev @babel/core @babel/cli"
    },
    {
        "id": 9,
        "question": "What is the purpose of Babel's configuration file, `.babelrc`?",
        "options": ["To define the plugins and presets Babel should use", "To list the dependencies of the project", "To configure the JavaScript linter", "To specify the build output path"],
        "answer": "To define the plugins and presets Babel should use",
        "explanation": "The `.babelrc` file is a configuration file where you can specify which presets and plugins Babel should use to transpile your JavaScript code.",
        "topic": "babel",
        "example": "{ \"presets\": [\"@babel/preset-env\"] }"
    },
    {
        "id": 10,
        "question": "What is Babel CLI used for?",
        "options": ["To run Babel from the command line", "To compile TypeScript", "To manage Node.js packages", "To debug JavaScript code"],
        "answer": "To run Babel from the command line",
        "explanation": "Babel CLI is a command-line interface that allows you to transpile JavaScript files directly from the command line using Babel.",
        "topic": "babel",
        "example": "babel src --out-dir lib"
    }
]
