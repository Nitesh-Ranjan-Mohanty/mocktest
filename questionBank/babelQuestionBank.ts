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
    id: 1,
    question: "What is Babel?",
    options: [
      "A JavaScript transpiler",
      "A database management system",
      "A front-end framework",
      "A type of programming language",
    ],
    answer: "A JavaScript transpiler",
    explanation:
      "Babel is a tool that is primarily used to convert ECMAScript 2015+ code into a backward-compatible version of JavaScript that can run in older browsers.",
    topic: "babel",
    example: "npm install --save-dev @babel/core @babel/cli",
  },
  {
    id: 2,
    question: "What is the main purpose of Babel?",
    options: [
      "To transpile modern JavaScript to older versions",
      "To optimize JavaScript code for performance",
      "To minify code",
      "To provide a testing framework",
    ],
    answer: "To transpile modern JavaScript to older versions",
    explanation:
      "Babel's main purpose is to convert ES6+ JavaScript syntax to ES5 syntax, ensuring compatibility with older browsers.",
    topic: "babel",
    example:
      "Babel can transpile features like arrow functions and classes into older JavaScript syntax.",
  },
  {
    id: 3,
    question: "Which of the following is a core package of Babel?",
    options: ["@babel/core", "babel-transpiler", "babelify", "babel-processor"],
    answer: "@babel/core",
    explanation:
      "The @babel/core package is the core module of Babel that provides the main API for transforming JavaScript code.",
    topic: "babel",
    example: "npm install --save-dev @babel/core",
  },
  {
    id: 4,
    question: "What is a Babel plugin?",
    options: [
      "A tool that allows custom transformations of JavaScript code",
      "A tool for managing dependencies",
      "A module for debugging JavaScript",
      "A utility for bundling files",
    ],
    answer: "A tool that allows custom transformations of JavaScript code",
    explanation:
      "Babel plugins are used to add custom transformations, such as converting specific ECMAScript syntax into backward-compatible JavaScript.",
    topic: "babel",
    example:
      "A common plugin is @babel/plugin-transform-arrow-functions which converts ES6 arrow functions into ES5 functions.",
  },
  {
    id: 5,
    question: "What does the '@babel/preset-env' preset do?",
    options: [
      "Automatically determines which JavaScript features to transpile based on the target environment",
      "Minifies JavaScript code",
      "Converts CSS to JavaScript",
      "Provides a testing environment for JavaScript code",
    ],
    answer:
      "Automatically determines which JavaScript features to transpile based on the target environment",
    explanation:
      "@babel/preset-env is a smart preset that allows you to use the latest JavaScript features without needing to micromanage which syntax is transpiled.",
    topic: "babel",
    example: "npm install --save-dev @babel/preset-env",
  },
  {
    id: 6,
    question: "How does Babel help in writing modern JavaScript?",
    options: [
      "It compiles modern JavaScript syntax into code that older browsers can understand",
      "It debugs JavaScript code",
      "It optimizes code for production",
      "It manages project dependencies",
    ],
    answer:
      "It compiles modern JavaScript syntax into code that older browsers can understand",
    explanation:
      "Babel helps developers write modern JavaScript by compiling it into code that can be executed in environments that do not natively support the latest ECMAScript features.",
    topic: "babel",
    example:
      "With Babel, you can use features like async/await in environments that do not yet support them.",
  },
  {
    id: 7,
    question: "What is the role of Babel polyfills?",
    options: [
      "To provide missing features in older browsers",
      "To debug JavaScript errors",
      "To minify JavaScript files",
      "To optimize JavaScript performance",
    ],
    answer: "To provide missing features in older browsers",
    explanation:
      "Babel polyfills provide support for JavaScript features that are not natively available in older browsers, such as promises or `Array.prototype.includes()`.",
    topic: "babel",
    example:
      "You can include Babel polyfills by using `@babel/polyfill` to ensure compatibility with older browsers.",
  },
  {
    id: 8,
    question: "What command is used to install Babel in a project?",
    options: [
      "npm install --save-dev @babel/core",
      "npm install babel",
      "npm install --global babel",
      "npm init babel",
    ],
    answer: "npm install --save-dev @babel/core",
    explanation:
      "To use Babel in your project, you need to install the core Babel package using npm or yarn, typically as a development dependency.",
    topic: "babel",
    example: "npm install --save-dev @babel/core @babel/cli",
  },
  {
    id: 9,
    question: "What is the purpose of Babel's configuration file, `.babelrc`?",
    options: [
      "To define the plugins and presets Babel should use",
      "To list the dependencies of the project",
      "To configure the JavaScript linter",
      "To specify the build output path",
    ],
    answer: "To define the plugins and presets Babel should use",
    explanation:
      "The `.babelrc` file is a configuration file where you can specify which presets and plugins Babel should use to transpile your JavaScript code.",
    topic: "babel",
    example: '{ "presets": ["@babel/preset-env"] }',
  },
  {
    id: 10,
    question: "What is Babel CLI used for?",
    options: [
      "To run Babel from the command line",
      "To compile TypeScript",
      "To manage Node.js packages",
      "To debug JavaScript code",
    ],
    answer: "To run Babel from the command line",
    explanation:
      "Babel CLI is a command-line interface that allows you to transpile JavaScript files directly from the command line using Babel.",
    topic: "babel",
    example: "babel src --out-dir lib",
  },
  {
    id: 13,
    question:
      "Which of the following Babel plugins is used to transpile async/await syntax?",
    options: [
      "@babel/plugin-transform-async-to-generator",
      "@babel/plugin-transform-arrow-functions",
      "@babel/plugin-transform-block-scoping",
      "@babel/plugin-proposal-optional-chaining",
    ],
    answer: "@babel/plugin-transform-async-to-generator",
    explanation:
      "The @babel/plugin-transform-async-to-generator plugin converts async/await syntax into ES5-compatible generator functions.",
    topic: "babel",
    example:
      "npm install --save-dev @babel/plugin-transform-async-to-generator",
  },
  {
    id: 14,
    question: "What is the Babel runtime used for?",
    options: [
      "To optimize code and avoid code duplication when using features like async/await",
      "To handle HTTP requests",
      "To debug JavaScript errors",
      "To transpile JSX into JavaScript",
    ],
    answer:
      "To optimize code and avoid code duplication when using features like async/await",
    explanation:
      "The Babel runtime helps avoid duplication by providing helper functions for transpiling features like async/await and classes.",
    topic: "babel",
    example: "npm install --save @babel/runtime",
  },
  {
    id: 15,
    question: "What does the `useBuiltIns` option in @babel/preset-env do?",
    options: [
      "It allows the selective inclusion of polyfills",
      "It controls the output file size",
      "It enables debug mode",
      "It provides support for TypeScript",
    ],
    answer: "It allows the selective inclusion of polyfills",
    explanation:
      "The `useBuiltIns` option allows you to selectively include only the polyfills that your target environment needs, reducing bundle size.",
    topic: "babel",
    example: '{ "useBuiltIns": "entry" }',
  },
  {
    id: 16,
    question: "Which Babel preset is recommended for compiling ES2015+ syntax?",
    options: [
      "@babel/preset-env",
      "@babel/preset-typescript",
      "@babel/preset-flow",
      "@babel/preset-react",
    ],
    answer: "@babel/preset-env",
    explanation:
      "@babel/preset-env is the recommended preset for compiling ES2015+ syntax into a format compatible with older environments.",
    topic: "babel",
    example: "npm install --save-dev @babel/preset-env",
  },
  {
    id: 17,
    question: "What does the `targets` option in @babel/preset-env do?",
    options: [
      "Specifies the target environments for the transpiled code",
      "Specifies the location of output files",
      "Enables TypeScript support",
      "Optimizes code for performance",
    ],
    answer: "Specifies the target environments for the transpiled code",
    explanation:
      "The `targets` option allows you to define the browsers or environments that the output code should be compatible with.",
    topic: "babel",
    example: '{ "targets": { "browsers": ["> 1%", "last 2 versions"] } }',
  },
  {
    id: 18,
    question: "What is the primary benefit of using Babel?",
    options: [
      "It ensures compatibility with older browsers",
      "It improves code execution speed",
      "It provides a debugging interface",
      "It compresses JavaScript files",
    ],
    answer: "It ensures compatibility with older browsers",
    explanation:
      "Babel allows you to write modern JavaScript that is compatible with older browsers by converting it into ES5.",
    topic: "babel",
    example:
      "Babel transpiles features like arrow functions, classes, and async/await into compatible JavaScript.",
  },
  {
    id: 19,
    question: "Which of the following is a valid Babel configuration file?",
    options: [".babelrc", "babel-config.json", ".babel.json", "babel.settings"],
    answer: ".babelrc",
    explanation:
      ".babelrc is a valid Babel configuration file that defines presets and plugins for the transpilation process.",
    topic: "babel",
    example: '{ "presets": ["@babel/preset-env"] }',
  },
  {
    id: 20,
    question:
      "How can you specify the ECMAScript version to target using Babel?",
    options: [
      "By using the 'targets' option in @babel/preset-env",
      "By using the 'ecmaVersion' option in .babelrc",
      "By using the 'esversion' option in package.json",
      "By installing a specific version of Babel",
    ],
    answer: "By using the 'targets' option in @babel/preset-env",
    explanation:
      "The 'targets' option in @babel/preset-env allows you to specify the ECMAScript version or browsers you want to target.",
    topic: "babel",
    example: '{ "targets": { "esmodules": true } }',
  },
  {
    id: 21,
    question: "What does `@babel/plugin-transform-arrow-functions` do?",
    options: [
      "Transforms ES6 arrow functions into ES5 compatible functions",
      "Converts async functions to generators",
      "Adds TypeScript support to Babel",
      "Enables JSX syntax in Babel",
    ],
    answer: "Transforms ES6 arrow functions into ES5 compatible functions",
    explanation:
      "This plugin converts ES6 arrow function syntax into traditional ES5 function expressions.",
    topic: "babel",
    example: "npm install --save-dev @babel/plugin-transform-arrow-functions",
  },
  {
    id: 22,
    question: "What is Babel's role in a build process?",
    options: [
      "To transpile modern JavaScript into a backward-compatible version",
      "To manage package dependencies",
      "To minify JavaScript files",
      "To bundle files together",
    ],
    answer: "To transpile modern JavaScript into a backward-compatible version",
    explanation:
      "Babel transpiles modern JavaScript code (ES6+) into a version that can run in older environments.",
    topic: "babel",
    example:
      "Babel is often integrated with build tools like Webpack or Gulp to transpile JavaScript during the build process.",
  },
  {
    id: 23,
    question: "Which option in Babel helps to debug transpiled code?",
    options: ["Source maps", "useBuiltIns", "loose mode", "targets"],
    answer: "Source maps",
    explanation:
      "Source maps allow you to map transpiled code back to the original source code, making it easier to debug.",
    topic: "babel",
    example:
      "Source maps can be generated by setting the 'sourceMaps' option to true in Babel configuration.",
  },
  {
    id: 24,
    question: "What does the `@babel/preset-typescript` preset do?",
    options: [
      "It allows Babel to transpile TypeScript code",
      "It converts JSX syntax into JavaScript",
      "It bundles JavaScript files",
      "It optimizes JavaScript code for performance",
    ],
    answer: "It allows Babel to transpile TypeScript code",
    explanation:
      "@babel/preset-typescript allows Babel to transpile TypeScript code into JavaScript.",
    topic: "babel",
    example: "npm install --save-dev @babel/preset-typescript",
  },
  {
    id: 25,
    question:
      "How does Babel handle new JavaScript features like optional chaining?",
    options: [
      "Through plugins like @babel/plugin-proposal-optional-chaining",
      "By default in the core Babel package",
      "Using the @babel/preset-env preset",
      "With the useBuiltIns option",
    ],
    answer: "Through plugins like @babel/plugin-proposal-optional-chaining",
    explanation:
      "Babel handles new JavaScript proposals such as optional chaining by using specific plugins, like @babel/plugin-proposal-optional-chaining.",
    topic: "babel",
    example: "npm install --save-dev @babel/plugin-proposal-optional-chaining",
  },
  {
    id: 26,
    question: "Which browsers can be targeted by Babel?",
    options: [
      "Any browser, based on the targets configuration",
      "Only modern browsers",
      "Only Internet Explorer",
      "Only mobile browsers",
    ],
    answer: "Any browser, based on the targets configuration",
    explanation:
      "Babel can target any browser by configuring the 'targets' option in the @babel/preset-env preset.",
    topic: "babel",
    example: '{ "targets": { "browsers": ["> 0.25%", "not dead"] } }',
  },
  {
    id: 27,
    question: "How do you include Babel in a Webpack project?",
    options: [
      "Using babel-loader",
      "Using webpack-babel",
      "Using babel-webpack-plugin",
      "Using webpack-plugin-transform-babel",
    ],
    answer: "Using babel-loader",
    explanation:
      "babel-loader is a Webpack loader that allows you to transpile JavaScript files using Babel.",
    topic: "babel",
    example: "npm install --save-dev babel-loader",
  },
  {
    id: 28,
    question: "What does the 'loose' option in Babel do?",
    options: [
      "It allows Babel to use more permissive transformations for better performance",
      "It enables debugging",
      "It adds TypeScript support",
      "It bundles JavaScript files",
    ],
    answer:
      "It allows Babel to use more permissive transformations for better performance",
    explanation:
      "The 'loose' option enables more permissive, less strict transformations in Babel, which can result in faster code.",
    topic: "babel",
    example: '{ "loose": true }',
  },
  {
    id: 29,
    question: "What is the purpose of polyfills in Babel?",
    options: [
      "To add support for new JavaScript features in older environments",
      "To compress JavaScript files",
      "To enable JSX support",
      "To bundle JavaScript files",
    ],
    answer: "To add support for new JavaScript features in older environments",
    explanation:
      "Polyfills provide implementations of modern JavaScript features that may not be available in older environments.",
    topic: "babel",
    example:
      "Babel can include polyfills for features like Promise or Map using @babel/polyfill.",
  },
  {
    id: 30,
    question: "How can you improve Babel's performance?",
    options: [
      "By enabling the 'cache' option in babel-loader",
      "By adding more plugins",
      "By disabling JSX support",
      "By using Babel in production mode only",
    ],
    answer: "By enabling the 'cache' option in babel-loader",
    explanation:
      "The 'cache' option in babel-loader allows Babel to cache results to improve performance during subsequent builds.",
    topic: "babel",
    example: '{ "cacheDirectory": true }',
  },
  {
    id: 31,
    question: "Which Babel package includes polyfills for ES6+ features?",
    options: [
      "@babel/polyfill",
      "@babel/plugin-transform-runtime",
      "@babel/preset-env",
      "@babel/preset-es6",
    ],
    answer: "@babel/polyfill",
    explanation:
      "@babel/polyfill includes polyfills for ES6+ features like Promise, Symbol, and Array methods.",
    topic: "babel",
    example: "npm install --save @babel/polyfill",
  },
  {
    id: 32,
    question:
      "Which of the following features is enabled by @babel/plugin-transform-runtime?",
    options: [
      "Reuse of Babel helpers to reduce bundle size",
      "Transpiling TypeScript",
      "Adding TypeScript support",
      "Minifying JavaScript code",
    ],
    answer: "Reuse of Babel helpers to reduce bundle size",
    explanation:
      "@babel/plugin-transform-runtime helps reduce code duplication by reusing Babel's helper functions.",
    topic: "babel",
    example: "npm install --save-dev @babel/plugin-transform-runtime",
  },
  {
    id: 33,
    question: "What is the purpose of the `presets` option in Babel?",
    options: [
      "To define a set of plugins for transpiling specific JavaScript features",
      "To specify output file locations",
      "To add support for CSS modules",
      "To bundle JavaScript files",
    ],
    answer:
      "To define a set of plugins for transpiling specific JavaScript features",
    explanation:
      "The `presets` option in Babel allows you to define a set of plugins that target specific JavaScript features, like ES6 or JSX.",
    topic: "babel",
    example: '{ "presets": ["@babel/preset-env"] }',
  },
  {
    id: 34,
    question:
      "How can you configure Babel to only transpile the code that isn't supported by the target environment?",
    options: [
      "By using the 'useBuiltIns' option in @babel/preset-env",
      "By enabling 'loose' mode",
      "By adding polyfills manually",
      "By enabling source maps",
    ],
    answer: "By using the 'useBuiltIns' option in @babel/preset-env",
    explanation:
      "The 'useBuiltIns' option allows you to only include polyfills and transformations that are necessary for the target environment.",
    topic: "babel",
    example: '{ "useBuiltIns": "entry" }',
  },
  {
    id: 35,
    question: "What is the recommended way to handle async functions in Babel?",
    options: [
      "By using @babel/plugin-transform-async-to-generator",
      "By using @babel/plugin-transform-arrow-functions",
      "By using @babel/preset-react",
      "By using source maps",
    ],
    answer: "@babel/plugin-transform-async-to-generator",
    explanation:
      "@babel/plugin-transform-async-to-generator converts async functions into generator functions for better compatibility with older environments.",
    topic: "babel",
    example:
      "npm install --save-dev @babel/plugin-transform-async-to-generator",
  },
  {
    id: 36,
    question:
      "What is the purpose of `@babel/plugin-transform-modules-commonjs`?",
    options: [
      "It converts ECMAScript modules to CommonJS modules",
      "It adds TypeScript support",
      "It bundles JavaScript files",
      "It enables JSX syntax in Babel",
    ],
    answer: "It converts ECMAScript modules to CommonJS modules",
    explanation:
      "@babel/plugin-transform-modules-commonjs allows Babel to convert ECMAScript module syntax (ESM) to CommonJS syntax, enabling module support in environments like Node.js.",
    topic: "babel",
    example: "npm install --save-dev @babel/plugin-transform-modules-commonjs",
  },
  {
    id: 37,
    question: "What does the `@babel/preset-react` preset enable?",
    options: [
      "Transpiling JSX into JavaScript",
      "Adding TypeScript support",
      "Transpiling async/await syntax",
      "Minifying JavaScript files",
    ],
    answer: "Transpiling JSX into JavaScript",
    explanation:
      "@babel/preset-react allows Babel to transpile JSX syntax used in React applications into JavaScript.",
    topic: "babel",
    example: "npm install --save-dev @babel/preset-react",
  },
];
