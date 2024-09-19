interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  topic: string;
}

export const nodeQuestions: Question[] = [
  {
    id: 1,
    question: "What is Node.js?",
    options: [
      "A database",
      "A web server",
      "A runtime environment",
      "A programming language",
    ],
    answer: "A runtime environment",
    explanation: `Node.js is a runtime environment that allows JavaScript code to be executed outside of a web browser, leveraging Chrome's V8 JavaScript engine for high performance. Unlike traditional server-side languages, Node.js enables developers to use JavaScript across both client and server sides, simplifying development with a unified language. It operates on an event-driven, non-blocking I/O model, which means that operations like file reading, database queries, or network requests do not halt the execution of other processes, making it ideal for building scalable and efficient network applications. This architecture supports handling numerous simultaneous connections with minimal overhead, which is particularly useful for real-time applications such as chat services, online games, and live data streaming. Node.js also benefits from a rich ecosystem managed through npm (Node Package Manager), offering a vast array of libraries and modules that accelerate development and reduce the need to write code from scratch. With its versatility and robust community support, Node.js is well-suited for a wide range of applications, from web servers and API services to microservices and command-line tools.`,
    topic: "nodejs",
  },
  {
    id: 2,
    question: "What is the purpose of `package.json` in a Node.js project?",
    options: [
      "To list project dependencies",
      "To define project metadata",
      "To manage project scripts",
      "All of the above",
    ],
    answer: "All of the above",
    explanation:`The package.json file is an essential component in Node.js projects, serving as the project's central configuration file. It plays a vital role in managing the project's dependencies by listing the libraries and modules required for the project to run, ensuring that these dependencies are installed consistently across different environments. Additionally, package.json defines key project metadata, including the project's name, version, description, and author, which provides important context and information about the project. It also manages project scripts, which are predefined commands that can be executed using npm (Node Package Manager), facilitating tasks such as building, testing, and running the project. Overall, package.json is central to Node.js project management, offering a structured way to handle dependencies, metadata, and scripts, thereby streamlining development and ensuring consistency across various stages of the project.`,
    topic: "nodejs",
  },
  {
    id: 3,
    question: "What does `npm install` do?",
    options: [
      "Installs packages listed in `package.json`",
      "Updates all packages to the latest version",
      "Removes installed packages",
      "Creates a new `package.json` file",
    ],
    answer: "Installs packages listed in `package.json`",
    explanation:"The `npm install` command is used to install all the dependencies specified in the `package.json` file into the `node_modules` directory of a Node.js project. This command reads the list of required packages and their versions from `package.json` and fetches them from the npm registry. By doing so, it ensures that all necessary libraries and modules are downloaded and made available locally, allowing the project to function correctly. This process helps maintain consistency across different environments, as it guarantees that every instance of the project has the same set of dependencies, which is crucial for reliable and predictable behavior during development and production.",
    topic: "nodejs",
  },
  {
    id: 4,
    question: "What is the role of the `require()` function in Node.js?",
    options: [
      "To load modules",
      "To execute JavaScript code",
      "To manage HTTP requests",
      "To handle file I/O operations",
    ],
    answer: "To load modules",
    explanation:
      "The `require()` function in Node.js is used to load and include modules (JavaScript files or packages) into your application. It allows you to use functionality provided by external modules or files within your own code.",
    topic: "nodejs",
  },
  {
    id: 5,
    question: "How can you define a global variable in Node.js?",
    options: [
      "By attaching it to the `global` object",
      "By using `var` at the top level",
      "By declaring it in a module",
      "By using `window` object",
    ],
    answer: "By attaching it to the `global` object",
    explanation:
      "In Node.js, global variables can be defined by attaching them to the `global` object. This makes the variable accessible throughout the entire Node.js runtime. However, global variables should be used sparingly to avoid potential conflicts and unintended consequences.",
    topic: "nodejs",
  },
  {
    id: 6,
    question: "What is the purpose of the `fs` module in Node.js?",
    options: [
      "To interact with the file system",
      "To handle HTTP requests",
      "To create web servers",
      "To manage process inputs",
    ],
    answer: "To interact with the file system",
    explanation:
      "The `fs` (file system) module in Node.js provides an API for interacting with the file system. It allows you to perform file operations such as reading, writing, updating, and deleting files. This module is essential for handling file I/O in Node.js applications.",
    topic: "nodejs",
  },
  {
    id: 7,
    question: "What does the `setTimeout()` function do in JavaScript?",
    options: [
      "Executes a function after a specified delay",
      "Repeats a function at regular intervals",
      "Cancels a function execution",
      "None of the above",
    ],
    answer: "Executes a function after a specified delay",
    explanation:
      "The `setTimeout()` function in JavaScript schedules a function to be executed after a specified delay, which is measured in milliseconds. It allows you to perform tasks after waiting for a certain amount of time.",
    topic: "nodejs",
  },
  {
    id: 8,
    question: "Which method is used to determine the length of an array?",
    options: [
      "Array.prototype.length",
      "Array.prototype.size",
      "Array.prototype.count",
      "Array.prototype.measure",
    ],
    answer: "Array.prototype.length",
    explanation:
      "The `Array.prototype.length` property returns the number of elements in an array. It is an important property for iterating over arrays and managing their content.",
    topic: "nodejs",
  },
  {
    id: 9,
    question: "What is the purpose of `npm run`?",
    options: [
      "To run a project-defined script",
      "To install dependencies",
      "To remove packages",
      "To update packages",
    ],
    answer: "To run a project-defined script",
    explanation:
      "`npm run` allows you to execute scripts defined in the `scripts` section of `package.json`. These scripts can automate tasks such as testing, building, or starting the application.",
    topic: "nodejs",
  },
  {
    id: 10,
    question: "How do you handle errors in a synchronous function?",
    options: [
      "Use a `try/catch` block",
      "Use a callback function",
      "Use `Promise.catch()`",
      "Use `async/await`",
    ],
    answer: "Use a `try/catch` block",
    explanation:
      "In synchronous functions, errors can be handled using a `try/catch` block. This allows you to catch exceptions and handle them appropriately, preventing the application from crashing.",
    topic: "nodejs",
  },
  {
    id: 11,
    question: "What is the purpose of `process.exit()` in Node.js?",
    options: [
      "To end the process with a specific exit code",
      "To terminate a specific module",
      "To stop a running server",
      "To exit a loop",
    ],
    answer: "To end the process with a specific exit code",
    explanation:
      "The `process.exit()` function in Node.js terminates the current process with a specified exit code. An exit code of `0` typically indicates success, while a non-zero exit code indicates an error.",
    topic: "nodejs",
  },
  {
    id: 12,
    question:
      "Which method is used to add an element to the beginning of an array?",
    options: [
      "Array.prototype.unshift()",
      "Array.prototype.push()",
      "Array.prototype.shift()",
      "Array.prototype.pop()",
    ],
    answer: "Array.prototype.unshift()",
    explanation:
      "The `Array.prototype.unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array. It is useful for inserting elements at the start of an array.",
    topic: "nodejs",
  },
  {
    id: 13,
    question: "What is the purpose of `npm start`?",
    options: [
      "To start a project-defined script",
      "To install packages",
      "To run tests",
      "To build the project",
    ],
    answer: "To start a project-defined script",
    explanation:
      "`npm start` runs the script defined in the `start` property of the `scripts` section in `package.json`. It is commonly used to start the main application or development server.",
    topic: "nodejs",
  },
  {
    id: 14,
    question: "How can you debug a Node.js application?",
    options: [
      "Using the `node --inspect` flag",
      "Using `console.log()`",
      "Using an IDE with debugging capabilities",
      "All of the above",
    ],
    answer: "All of the above",
    explanation:
      "Node.js applications can be debugged using multiple methods: the `node --inspect` flag for debugging with Chrome DevTools, `console.log()` for basic logging, and an IDE with built-in debugging capabilities for a more comprehensive debugging experience.",
    topic: "nodejs",
  },
  {
    id: 15,
    question:
      "What does the `Array.prototype.reduce()` method do in JavaScript?",
    options: [
      "Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value",
      "Filters out elements from an array",
      "Finds an element in an array",
      "Creates a new array from the results of applying a function",
    ],
    answer:
      "Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value",
    explanation:
      "The `Array.prototype.reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It is useful for aggregating or accumulating array values.",
    topic: "nodejs",
  },
  {
    id: 16,
    question: "What is the purpose of `npm link`?",
    options: [
      "To symlink a local package into your project",
      "To publish a package to the registry",
      "To update a package",
      "To uninstall a package",
    ],
    answer: "To symlink a local package into your project",
    explanation:
      "The `npm link` command creates a symbolic link from globally installed packages to your local project. This is useful for developing and testing local packages before publishing them.",
    topic: "nodejs",
  },
  {
    id: 17,
    question: "What does `Object.keys()` do?",
    options: [
      "Returns an array of a given object’s own enumerable property names",
      "Returns an array of the object’s values",
      "Returns an array of the object’s methods",
      "Returns an array of the object’s prototypes",
    ],
    answer:
      "Returns an array of a given object’s own enumerable property names",
    explanation:
      "The `Object.keys()` method returns an array of a given object’s own enumerable property names. This is useful for iterating over the keys of an object and performing operations on its properties.",
    topic: "nodejs",
  },
  {
    id: 18,
    question: "What does `Object.values()` do?",
    options: [
      "Returns an array of a given object’s own enumerable property values",
      "Returns an array of the object’s keys",
      "Returns an array of the object’s methods",
      "Deletes properties from an object",
    ],
    answer:
      "Returns an array of a given object’s own enumerable property values",
    explanation:
      "The `Object.values()` method returns an array of the enumerable property values of an object. This is useful for iterating over or accessing the values of an object without needing to know its keys.",
    topic: "nodejs",
  },
  {
    id: 19,
    question: "What does `npm cache clean --force` do?",
    options: [
      "Clears the npm cache",
      "Updates all cached packages",
      "Installs packages from the cache",
      "Removes the cache directory",
    ],
    answer: "Clears the npm cache",
    explanation:
      "`npm cache clean --force` forces the clearing of the npm cache, which can help resolve issues related to corrupt or outdated cache data. This command is used when you need to remove cached files and ensure a clean state.",
    topic: "nodejs",
  },
  {
    id: 20,
    question: "What is the purpose of `async/await` in JavaScript?",
    options: [
      "To handle asynchronous operations more easily",
      "To create synchronous code",
      "To handle errors in synchronous code",
      "To define global variables",
    ],
    answer: "To handle asynchronous operations more easily",
    explanation:
      "`async/await` is a syntax in JavaScript that allows you to write asynchronous code in a way that looks synchronous. It simplifies working with promises by enabling you to use `await` to pause execution until a promise resolves, making your code more readable and easier to manage.",
    topic: "nodejs",
  },
  {
    id: 21,
    question: "What is `npm`?",
    options: [
      "Node Package Manager",
      "Network Package Manager",
      "Node Process Manager",
      "None of the above",
    ],
    answer: "Node Package Manager",
    explanation:
      "`npm` stands for Node Package Manager. It is a package manager for JavaScript, primarily used for managing Node.js modules and their dependencies. It helps developers to easily share and reuse code.",
    topic: "nodejs",
  },
  {
    id: 22,
    question: "What is the purpose of the `path` module in Node.js?",
    options: [
      "To handle and transform file paths",
      "To manage HTTP requests",
      "To interact with the database",
      "To create child processes",
    ],
    answer: "To handle and transform file paths",
    explanation:
      "The `path` module in Node.js provides utilities for working with file and directory paths. It helps in resolving and normalizing paths, joining paths together, and extracting various components of paths.",
    topic: "nodejs",
  },
  {
    id: 23,
    question: "What is `npm init` used for?",
    options: [
      "To create a new `package.json` file",
      "To install all dependencies",
      "To update the `package.json` file",
      "To start a new Node.js project",
    ],
    answer: "To create a new `package.json` file",
    explanation:
      "`npm init` is used to create a new `package.json` file for your project. This file will include information about your project such as its name, version, description, and dependencies.",
    topic: "nodejs",
  },
  {
    id: 24,
    question: "What does `require('module')` do?",
    options: [
      "Loads and returns the specified module",
      "Executes the specified module",
      "Installs the specified module",
      "Removes the specified module",
    ],
    answer: "Loads and returns the specified module",
    explanation:
      "`require('module')` loads the specified module and returns its exports. This function allows you to include and use code from other modules within your application.",
    topic: "nodejs",
  },
  {
    id: 25,
    question: "What is `process.env` in Node.js?",
    options: [
      "An object containing environment variables",
      "A module for handling process events",
      "A method for managing environment configurations",
      "A utility for process management",
    ],
    answer: "An object containing environment variables",
    explanation:
      "`process.env` is an object in Node.js that contains the user environment variables. It allows you to access environment-specific configurations such as API keys, database connections, and other sensitive data.",
    topic: "nodejs",
  },
  {
    id: 26,
    question: "What is the purpose of `node_modules` folder?",
    options: [
      "To store installed npm packages",
      "To store temporary files",
      "To store configuration files",
      "To store documentation",
    ],
    answer: "To store installed npm packages",
    explanation:
      "The `node_modules` folder is where npm installs all the packages and their dependencies for your project. It contains the actual code of all the libraries and modules you have installed.",
    topic: "nodejs",
  },
  {
    id: 27,
    question: "What is the function of the `http` module in Node.js?",
    options: [
      "To create HTTP servers and clients",
      "To handle file operations",
      "To manage child processes",
      "To interact with databases",
    ],
    answer: "To create HTTP servers and clients",
    explanation:
      "The `http` module in Node.js provides utilities for creating HTTP servers and clients. It allows you to build server-side applications that handle HTTP requests and responses.",
    topic: "nodejs",
  },
  {
    id: 28,
    question: "How can you handle asynchronous operations in Node.js?",
    options: [
      "Using callbacks",
      "Using Promises",
      "Using async/await",
      "All of the above",
    ],
    answer: "All of the above",
    explanation:
      "Asynchronous operations in Node.js can be handled using callbacks, Promises, or async/await. Callbacks provide a way to execute code after an operation completes, Promises represent the eventual completion (or failure) of an asynchronous operation, and async/await simplifies working with Promises by allowing you to write asynchronous code that looks synchronous.",
    topic: "nodejs",
  },
  {
    id: 29,
    question: "What is the purpose of the `buffer` module in Node.js?",
    options: [
      "To handle binary data",
      "To manage HTTP responses",
      "To parse JSON data",
      "To interact with the file system",
    ],
    answer: "To handle binary data",
    explanation:
      "The `buffer` module in Node.js provides utilities for handling binary data. Buffers are used to work with raw binary data directly, such as when dealing with streams or binary files.",
    topic: "nodejs",
  },
  {
    id: 30,
    question:
      "What is the difference between `process.nextTick()` and `setImmediate()`?",
    options: [
      "`process.nextTick()` queues a callback to be executed after the current operation completes, while `setImmediate()` queues a callback to be executed in the next iteration of the event loop",
      "`process.nextTick()` executes immediately, while `setImmediate()` executes after a delay",
      "`process.nextTick()` and `setImmediate()` are identical",
      "`process.nextTick()` is for synchronous code and `setImmediate()` is for asynchronous code",
    ],
    answer:
      "`process.nextTick()` queues a callback to be executed after the current operation completes, while `setImmediate()` queues a callback to be executed in the next iteration of the event loop",
    explanation:
      "The `process.nextTick()` method schedules a callback to be executed in the current phase of the event loop, before any I/O operations. In contrast, `setImmediate()` schedules a callback to be executed in the next iteration of the event loop, after I/O operations. This means that `process.nextTick()` is useful for deferring work until the current operation completes, while `setImmediate()` defers work until the next phase of the event loop.",
    topic: "nodejs",
  },
  {
    id: 31,
    question: "What is the purpose of `npm outdated`?",
    options: [
      "To check for outdated packages",
      "To update all packages",
      "To install new packages",
      "To remove unused packages",
    ],
    answer: "To check for outdated packages",
    explanation:
      "`npm outdated` lists the packages that have newer versions available compared to the currently installed versions. This command helps you identify which packages need to be updated.",
    topic: "nodejs",
  },
  {
    id: 32,
    question: "What does `npm install <package>@<version>` do?",
    options: [
      "Installs a specific version of a package",
      "Updates a package to the latest version",
      "Uninstalls a package",
      "Displays package details",
    ],
    answer: "Installs a specific version of a package",
    explanation:
      "`npm install <package>@<version>` installs a specific version of a package. This is useful when you need to ensure compatibility or use a version of a package that is known to work with your project.",
    topic: "nodejs",
  },
  {
    id: 33,
    question: "What is the purpose of the `events` module in Node.js?",
    options: [
      "To handle events and event-driven programming",
      "To manage file system operations",
      "To interact with databases",
      "To handle HTTP requests",
    ],
    answer: "To handle events and event-driven programming",
    explanation:
      "The `events` module in Node.js provides a way to handle events and create event-driven programming patterns. It allows you to define and listen for events, enabling you to respond to various actions or changes within your application.",
    topic: "nodejs",
  },
  {
    id: 34,
    question: "What is the `cluster` module used for in Node.js?",
    options: [
      "To create multiple instances of a Node.js process",
      "To manage child processes",
      "To handle HTTP requests",
      "To perform file operations",
    ],
    answer: "To create multiple instances of a Node.js process",
    explanation:
      "The `cluster` module allows you to create multiple instances of a Node.js process, enabling you to take advantage of multi-core systems. This helps improve the performance and scalability of your Node.js application by distributing the load across multiple processes.",
    topic: "nodejs",
  },
  {
    id: 35,
    question: "What does `process.env.NODE_ENV` typically represent?",
    options: [
      "The environment in which the Node.js application is running",
      "The version of Node.js being used",
      "The path to the Node.js executable",
      "The directory of the current project",
    ],
    answer: "The environment in which the Node.js application is running",
    explanation:
      "`process.env.NODE_ENV` is an environment variable that typically represents the environment in which the Node.js application is running, such as `development`, `production`, or `test`. It is used to configure application behavior based on the environment.",
    topic: "nodejs",
  },
  {
    id: 36,
    question: "What is the purpose of `module.exports`?",
    options: [
      "To export functionality from a module",
      "To import functionality into a module",
      "To define global variables",
      "To manage dependencies",
    ],
    answer: "To export functionality from a module",
    explanation:
      "`module.exports` is used to export functionality from a Node.js module, allowing other files to require and use it. It defines what is exposed from the module when it is imported elsewhere in the application.",
    topic: "nodejs",
  },
  {
    id: 37,
    question: "What does `npm run <script>` do?",
    options: [
      "Executes a script defined in `package.json`",
      "Installs a new package",
      "Updates a package",
      "Displays script details",
    ],
    answer: "Executes a script defined in `package.json`",
    explanation:
      "`npm run <script>` executes a script that is defined in the `scripts` section of the `package.json` file. This is useful for running build processes, tests, and other custom commands configured for your project.",
    topic: "nodejs",
  },
  {
    id: 38,
    question: "What is `middleware` in the context of Node.js?",
    options: [
      "Functions that process requests and responses in Express.js",
      "Modules that handle HTTP requests",
      "Libraries for database operations",
      "Utilities for file management",
    ],
    answer: "Functions that process requests and responses in Express.js",
    explanation:
      "In the context of Node.js, particularly with Express.js, middleware refers to functions that are executed in the request-response cycle. Middleware functions can modify request and response objects, terminate the request-response cycle, or call the next middleware function.",
    topic: "nodejs",
  },
  {
    id: 39,
    question: "What is the purpose of the `fs` module in Node.js?",
    options: [
      "To handle file system operations",
      "To manage HTTP requests",
      "To handle events",
      "To work with binary data",
    ],
    answer: "To handle file system operations",
    explanation:
      "The `fs` module in Node.js provides an API for interacting with the file system. It allows you to read, write, and manipulate files and directories within your Node.js application.",
    topic: "nodejs",
  },
  {
    id: 40,
    question: "What is `npm link` used for?",
    options: [
      "To symlink a package into your project",
      "To install a package globally",
      "To update a package",
      "To remove a package",
    ],
    answer: "To symlink a package into your project",
    explanation:
      "`npm link` creates a symlink to a local package in your project. This is useful for developing and testing local packages before publishing them, allowing you to use them as if they were installed from the npm registry.",
    topic: "nodejs",
  },
  {
    id: 41,
    question: "What is the `repl` module in Node.js?",
    options: [
      "A Read-Eval-Print Loop for interactive Node.js sessions",
      "A module for handling HTTP requests",
      "A utility for working with streams",
      "A library for handling encryption",
    ],
    answer: "A Read-Eval-Print Loop for interactive Node.js sessions",
    explanation:
      "The `repl` module provides a Read-Eval-Print Loop (REPL) for interactive Node.js sessions. It allows you to execute JavaScript code, evaluate expressions, and see results immediately, making it useful for testing and debugging code interactively.",
    topic: "nodejs",
  },
  {
    id: 42,
    question: "What is the purpose of `npm dedupe`?",
    options: [
      "To remove duplicate packages",
      "To update all packages",
      "To install missing packages",
      "To optimize package installation",
    ],
    answer: "To remove duplicate packages",
    explanation:
      "`npm dedupe` removes duplicate packages from the `node_modules` folder, ensuring that only one version of each package is installed. This helps to reduce the overall size of your `node_modules` folder and can improve the performance of your application.",
    topic: "nodejs",
  },
  {
    id: 43,
    question: "What does `npm prune` do?",
    options: [
      "Removes extraneous packages",
      "Installs missing packages",
      "Updates all packages",
      "Displays package details",
    ],
    answer: "Removes extraneous packages",
    explanation:
      "`npm prune` removes packages that are not listed in your `package.json` file from the `node_modules` folder. This helps to clean up unnecessary dependencies and reduce the size of your project.",
    topic: "nodejs",
  },
  {
    id: 44,
    question: "What is `Promise.all()` used for?",
    options: [
      "To execute multiple promises in parallel and wait for all to complete",
      "To chain multiple promises together",
      "To create a new promise",
      "To handle errors in promises",
    ],
    answer:
      "To execute multiple promises in parallel and wait for all to complete",
    explanation:
      "`Promise.all()` is used to execute multiple promises in parallel and wait for all of them to complete. It returns a single promise that resolves when all of the input promises have resolved, or rejects if any of the input promises reject.",
    topic: "nodejs",
  },
  {
    id: 45,
    question: "What does `npm run build` typically do?",
    options: [
      "Runs the build script defined in `package.json`",
      "Installs packages",
      "Updates packages",
      "Removes packages",
    ],
    answer: "Runs the build script defined in `package.json`",
    explanation:
      "`npm run build` executes the build script defined in the `scripts` section of the `package.json` file. This is commonly used to compile code, bundle assets, or perform other build tasks for a project.",
    topic: "nodejs",
  },
  {
    id: 46,
    question: "What is the purpose of the `assert` module in Node.js?",
    options: [
      "To perform assertions for testing",
      "To handle HTTP requests",
      "To manage file system operations",
      "To handle binary data",
    ],
    answer: "To perform assertions for testing",
    explanation:
      "The `assert` module in Node.js provides a set of assertion tests that can be used to verify that code behaves as expected. It is commonly used in unit testing to check if certain conditions are true and to report failures when they are not.",
    topic: "nodejs",
  },
  {
    id: 47,
    question: "What does `npm install --save-dev` do?",
    options: [
      "Installs a package as a development dependency",
      "Installs a package globally",
      "Installs a package as a production dependency",
      "Removes a package",
    ],
    answer: "Installs a package as a development dependency",
    explanation:
      "`npm install --save-dev` installs a package as a development dependency, meaning it is only required during the development phase and not in production. This is useful for tools and libraries needed for development and testing.",
    topic: "nodejs",
  },
  {
    id: 48,
    question: "What is the purpose of `npm ci`?",
    options: [
      "To install dependencies from a `package-lock.json` file",
      "To clean the npm cache",
      "To create a new `package.json` file",
      "To update all dependencies",
    ],
    answer: "To install dependencies from a `package-lock.json` file",
    explanation:
      "`npm ci` installs dependencies from the `package-lock.json` file, ensuring a clean and consistent installation. It is designed for continuous integration environments where reproducibility and consistency are crucial.",
    topic: "nodejs",
  },
  {
    id: 49,
    question: "What is the purpose of the `url` module in Node.js?",
    options: [
      "To parse and format URLs",
      "To handle HTTP requests",
      "To manage file system operations",
      "To work with streams",
    ],
    answer: "To parse and format URLs",
    explanation:
      "The `url` module in Node.js provides utilities for URL resolution and parsing. It allows you to parse URL strings into components, format URLs, and resolve relative URLs, which is useful for managing and manipulating URLs in your application.",
    topic: "nodejs",
  },
  {
    id: 50,
    question: "What does `npm cache clean` do?",
    options: [
      "Clears the npm cache",
      "Updates the npm cache",
      "Installs missing packages",
      "Removes a package from the cache",
    ],
    answer: "Clears the npm cache",
    explanation:
      "`npm cache clean` clears the npm cache, which can help resolve issues with corrupt or outdated cached packages. This command forces npm to fetch fresh copies of packages from the registry.",
    topic: "nodejs",
  },
  {
    id: 51,
    question: "What is the purpose of `process.nextTick()` in Node.js?",
    options: [
      "To schedule a callback to be executed in the next event loop iteration",
      "To handle asynchronous file operations",
      "To manage HTTP request responses",
      "To interact with databases",
    ],
    answer:
      "To schedule a callback to be executed in the next event loop iteration",
    explanation:
      "`process.nextTick()` is used to schedule a callback function to be executed in the next iteration of the event loop, before any I/O tasks. This is useful for deferring operations until the current phase of the event loop is complete.",
    topic: "nodejs",
  },
  {
    id: 52,
    question: "What does `npm outdated` do?",
    options: [
      "Lists packages that have newer versions available",
      "Updates all installed packages",
      "Installs new packages",
      "Removes unused packages",
    ],
    answer: "Lists packages that have newer versions available",
    explanation:
      "`npm outdated` lists all the packages in your project that have newer versions available. This command helps you identify which packages need to be updated to their latest versions.",
    topic: "nodejs",
  },
  {
    id: 53,
    question: "What is the `path` module used for in Node.js?",
    options: [
      "To work with and manipulate file and directory paths",
      "To handle HTTP requests",
      "To manage child processes",
      "To interact with databases",
    ],
    answer: "To work with and manipulate file and directory paths",
    explanation:
      "The `path` module provides utilities for working with file and directory paths. It offers functions to resolve, normalize, join, and parse paths, which are essential for managing file locations in your Node.js applications.",
    topic: "nodejs",
  },
  {
    id: 54,
    question:
      "What does the `npm install` command do without any additional flags?",
    options: [
      "Installs all dependencies listed in `package.json`",
      "Installs a specific package",
      "Updates all installed packages",
      "Removes a package",
    ],
    answer: "Installs all dependencies listed in `package.json`",
    explanation:
      "The `npm install` command installs all the dependencies listed in the `package.json` file. It ensures that all required packages are available for your project to run.",
    topic: "nodejs",
  },
  {
    id: 55,
    question: "What is the role of `npm init`?",
    options: [
      "Creates a new `package.json` file for a project",
      "Installs a new package",
      "Updates existing packages",
      "Removes a package",
    ],
    answer: "Creates a new `package.json` file for a project",
    explanation:
      "`npm init` is used to create a new `package.json` file in your project. This file contains metadata about your project, including dependencies, scripts, and other configuration settings.",
    topic: "nodejs",
  },
  {
    id: 56,
    question: "What is a `callback` in Node.js?",
    options: [
      "A function passed as an argument to another function that is executed after a task completes",
      "A module for handling HTTP requests",
      "A utility for file system operations",
      "A method for managing database connections",
    ],
    answer:
      "A function passed as an argument to another function that is executed after a task completes",
    explanation:
      "In Node.js, a callback is a function that is passed as an argument to another function and is executed after the task completes. It is a fundamental concept in asynchronous programming, allowing you to handle operations like file reading or network requests once they finish.",
    topic: "nodejs",
  },
  {
    id: 57,
    question: "What is the `debug` module used for in Node.js?",
    options: [
      "To add debugging support and output debug information",
      "To handle HTTP requests",
      "To manage file system operations",
      "To handle events",
    ],
    answer: "To add debugging support and output debug information",
    explanation:
      "The `debug` module provides a simple way to add debugging support to Node.js applications. It allows you to output debug information based on different namespaces, helping you trace and troubleshoot issues in your code.",
    topic: "nodejs",
  },
  {
    id: 58,
    question: "What does `npm install -g` do?",
    options: [
      "Installs a package globally on your system",
      "Installs a package locally in your project",
      "Updates a global package",
      "Removes a package",
    ],
    answer: "Installs a package globally on your system",
    explanation:
      "`npm install -g` installs a package globally on your system, making it available across all projects. This is typically used for tools and utilities that you want to access from anywhere on your machine.",
    topic: "nodejs",
  },
  {
    id: 59,
    question: "What is the purpose of the `http` module in Node.js?",
    options: [
      "To create and manage HTTP servers and clients",
      "To handle file system operations",
      "To interact with databases",
      "To manage child processes",
    ],
    answer: "To create and manage HTTP servers and clients",
    explanation:
      "The `http` module provides functionality for creating and managing HTTP servers and clients in Node.js. It allows you to handle HTTP requests and responses, making it essential for building web applications and APIs.",
    topic: "nodejs",
  },
  {
    id: 60,
    question: "What does the `npm uninstall` command do?",
    options: [
      "Removes a package from your project",
      "Installs a package",
      "Updates a package",
      "Lists installed packages",
    ],
    answer: "Removes a package from your project",
    explanation:
      "`npm uninstall` removes a package from your project and also updates the `package.json` and `package-lock.json` files to reflect the change. It is used to clean up dependencies that are no longer needed.",
    topic: "nodejs",
  },
  {
    id: 61,
    question: "What is `npm start` used for?",
    options: [
      "Runs the `start` script defined in `package.json`",
      "Installs all dependencies",
      "Updates packages",
      "Removes a package",
    ],
    answer: "Runs the `start` script defined in `package.json`",
    explanation:
      "`npm start` executes the `start` script defined in the `scripts` section of the `package.json` file. This command is commonly used to start the main application or server for your project.",
    topic: "nodejs",
  },
  {
    id: 62,
    question: "What is the purpose of the `crypto` module in Node.js?",
    options: [
      "To provide cryptographic functionality, including encryption and decryption",
      "To handle HTTP requests",
      "To manage file system operations",
      "To interact with databases",
    ],
    answer:
      "To provide cryptographic functionality, including encryption and decryption",
    explanation:
      "The `crypto` module provides cryptographic functionality in Node.js, such as encryption, decryption, and hashing. It is used to secure data and perform various cryptographic operations within your application.",
    topic: "nodejs",
  },
  {
    id: 63,
    question: "What does `npm ls` show?",
    options: [
      "Displays the dependency tree of installed packages",
      "Lists available npm commands",
      "Shows the details of a specific package",
      "Updates installed packages",
    ],
    answer: "Displays the dependency tree of installed packages",
    explanation:
      "`npm ls` shows the dependency tree of installed packages in your project. It provides a hierarchical view of how packages are related and which versions are being used.",
    topic: "nodejs",
  },
  {
    id: 64,
    question: "What is the `stream` module used for in Node.js?",
    options: [
      "To handle streaming data and create readable and writable streams",
      "To manage file system operations",
      "To handle HTTP requests",
      "To interact with databases",
    ],
    answer: "To handle streaming data and create readable and writable streams",
    explanation:
      "The `stream` module in Node.js provides an API for handling streaming data. It allows you to create readable and writable streams, making it easier to process large amounts of data in chunks rather than all at once.",
    topic: "nodejs",
  },
  {
    id: 65,
    question: "What is the `os` module used for in Node.js?",
    options: [
      "To interact with and retrieve information about the operating system",
      "To handle HTTP requests",
      "To manage file system operations",
      "To work with streams",
    ],
    answer:
      "To interact with and retrieve information about the operating system",
    explanation:
      "The `os` module provides methods for interacting with and retrieving information about the operating system. It includes functions to get details like the operating system type, CPU architecture, and memory usage.",
    topic: "nodejs",
  },
  {
    id: 66,
    question: "What does `npm run test` typically do?",
    options: [
      "Executes the test script defined in `package.json`",
      "Installs dependencies",
      "Updates packages",
      "Removes a package",
    ],
    answer: "Executes the test script defined in `package.json`",
    explanation:
      "`npm run test` runs the `test` script defined in the `scripts` section of the `package.json` file. This is typically used to execute automated tests for your project to ensure code quality and functionality.",
    topic: "nodejs",
  },
  {
    id: 67,
    question: "What is `npm link` commonly used for?",
    options: [
      "To symlink a local package for development",
      "To install a package globally",
      "To update a package",
      "To remove a package",
    ],
    answer: "To symlink a local package for development",
    explanation:
      "`npm link` creates a symlink to a local package, allowing you to test and develop changes to the package without having to publish it. This is useful for linking local development versions of packages into your project.",
    topic: "nodejs",
  },
  {
    id: 68,
    question: "What does the `util` module provide in Node.js?",
    options: [
      "Utility functions for common tasks",
      "HTTP server and client functionality",
      "Database interaction methods",
      "File system operations",
    ],
    answer: "Utility functions for common tasks",
    explanation:
      "The `util` module provides various utility functions that are useful for performing common tasks, such as formatting strings, inheriting classes, and inspecting objects. These utilities help simplify coding tasks and improve code readability.",
    topic: "nodejs",
  },
  {
    id: 69,
    question: "What is `async/await` used for in Node.js?",
    options: [
      "To handle asynchronous code in a synchronous-like manner",
      "To manage file system operations",
      "To interact with databases",
      "To handle HTTP requests",
    ],
    answer: "To handle asynchronous code in a synchronous-like manner",
    explanation:
      "`async/await` is a syntax feature that allows you to write asynchronous code in a way that resembles synchronous code. It makes handling asynchronous operations, such as promises, more readable and easier to manage.",
    topic: "nodejs",
  },
  {
    id: 70,
    question: "What is the `events` module used for in Node.js?",
    options: [
      "To handle and emit events in an event-driven architecture",
      "To manage HTTP requests",
      "To interact with databases",
      "To work with streams",
    ],
    answer: "To handle and emit events in an event-driven architecture",
    explanation:
      "The `events` module provides an API for creating and handling events in Node.js. It allows you to create event emitters, which can emit events and listen for those events, enabling an event-driven programming model.",
    topic: "nodejs",
  },
  {
    id: 71,
    question: "What is `npm audit` used for?",
    options: [
      "To identify and fix vulnerabilities in dependencies",
      "To list installed packages",
      "To update all dependencies",
      "To remove unused packages",
    ],
    answer: "To identify and fix vulnerabilities in dependencies",
    explanation:
      "`npm audit` analyzes your project’s dependencies for known vulnerabilities and provides a report detailing security issues. It also offers recommendations for fixing these issues to improve the security of your project.",
    topic: "nodejs",
  },
  {
    id: 72,
    question: "What does the `npm update` command do?",
    options: [
      "Updates all installed packages to their latest versions",
      "Installs new packages",
      "Removes a package",
      "Lists outdated packages",
    ],
    answer: "Updates all installed packages to their latest versions",
    explanation:
      "`npm update` updates all the installed packages in your project to their latest versions based on the version ranges specified in `package.json`. This helps keep your project dependencies up-to-date.",
    topic: "nodejs",
  },
  {
    id: 73,
    question: "What is the purpose of `npm run build`?",
    options: [
      "To compile or bundle the project for production",
      "To install dependencies",
      "To run tests",
      "To remove a package",
    ],
    answer: "To compile or bundle the project for production",
    explanation:
      "`npm run build` executes the `build` script defined in the `scripts` section of `package.json`. This script is commonly used to compile, transpile, or bundle the project code for production deployment.",
    topic: "nodejs",
  },
  {
    id: 74,
    question: "What is `npm ci` used for?",
    options: [
      "To install dependencies from a clean slate based on `package-lock.json`",
      "To install a specific package",
      "To update all packages",
      "To remove a package",
    ],
    answer:
      "To install dependencies from a clean slate based on `package-lock.json`",
    explanation:
      "`npm ci` installs dependencies from the `package-lock.json` file, ensuring a clean and repeatable install process. It is typically used in continuous integration environments to guarantee consistent installs.",
    topic: "nodejs",
  },
  {
    id: 75,
    question: "What is the `buffer` module used for in Node.js?",
    options: [
      "To handle binary data in memory",
      "To manage file system operations",
      "To handle HTTP requests",
      "To interact with databases",
    ],
    answer: "To handle binary data in memory",
    explanation:
      "The `buffer` module provides utilities for working with binary data directly in memory. It is useful for handling raw data streams, manipulating binary data, and working with buffers in Node.js applications.",
    topic: "nodejs",
  },
  {
    id: 76,
    question: "What does `npm pack` do?",
    options: [
      "Creates a tarball of the package for publishing",
      "Installs all dependencies",
      "Updates a package",
      "Removes a package",
    ],
    answer: "Creates a tarball of the package for publishing",
    explanation:
      "`npm pack` creates a tarball archive of the package based on the contents of `package.json`. This tarball can be used for publishing the package to a registry or for local testing.",
    topic: "nodejs",
  },
  {
    id: 77,
    question: "What does `npm version` do?",
    options: [
      "Displays or updates the version of the current package",
      "Installs a package",
      "Removes a package",
      "Lists installed packages",
    ],
    answer: "Displays or updates the version of the current package",
    explanation:
      "`npm version` allows you to view or update the version number of your package. It can be used to increment the version according to semantic versioning and update the `package.json` file accordingly.",
    topic: "nodejs",
  },
  {
    id: 78,
    question: "What is the `v8` module used for in Node.js?",
    options: [
      "To interact with the V8 JavaScript engine and access its features",
      "To handle HTTP requests",
      "To manage file system operations",
      "To work with streams",
    ],
    answer: "To interact with the V8 JavaScript engine and access its features",
    explanation:
      "The `v8` module provides access to V8-specific features and internal APIs. It allows you to interact with the V8 JavaScript engine, which Node.js uses for executing JavaScript code.",
    topic: "nodejs",
  },
  {
    id: 79,
    question: "What does `npm prune` do?",
    options: [
      "Removes extraneous packages not listed in `package.json`",
      "Installs all dependencies",
      "Updates all packages",
      "Lists installed packages",
    ],
    answer: "Removes extraneous packages not listed in `package.json`",
    explanation:
      "`npm prune` removes packages that are not listed in the `package.json` file but are present in the `node_modules` directory. This helps clean up unused dependencies and maintain a tidy project environment.",
    topic: "nodejs",
  },
  {
    id: 80,
    question: "What is the purpose of the `domain` module in Node.js?",
    options: [
      "To manage and handle errors and exceptions across asynchronous operations",
      "To handle HTTP requests",
      "To manage file system operations",
      "To work with streams",
    ],
    answer:
      "To manage and handle errors and exceptions across asynchronous operations",
    explanation:
      "The `domain` module provides a way to handle and manage errors across asynchronous operations. It helps to group multiple operations into a single domain, making it easier to handle errors and exceptions in a centralized manner.",
    topic: "nodejs",
  },
  {
    id: 81,
    question: "What is `npm run` used for?",
    options: [
      "To run a script defined in `package.json`",
      "To install dependencies",
      "To update packages",
      "To remove a package",
    ],
    answer: "To run a script defined in `package.json`",
    explanation:
      "`npm run` allows you to execute scripts defined in the `scripts` section of the `package.json` file. It is used to run tasks like testing, building, or starting the application as defined in the project’s configuration.",
    topic: "nodejs",
  },
  {
    id: 82,
    question: "What is the `dns` module used for in Node.js?",
    options: [
      "To perform DNS lookups and resolve domain names",
      "To handle HTTP requests",
      "To manage file system operations",
      "To work with streams",
    ],
    answer: "To perform DNS lookups and resolve domain names",
    explanation:
      "The `dns` module provides functionality for performing DNS lookups and resolving domain names to IP addresses. It allows you to query DNS servers and manage DNS records in Node.js applications.",
    topic: "nodejs",
  },
  {
    id: 83,
    question: "What does the `npm dedupe` command do?",
    options: [
      "Removes duplicate packages from `node_modules`",
      "Installs all dependencies",
      "Updates packages",
      "Lists outdated packages",
    ],
    answer: "Removes duplicate packages from `node_modules`",
    explanation:
      "`npm dedupe` removes duplicate packages from the `node_modules` directory by deduplicating dependencies. This helps to reduce the size of `node_modules` and ensure that only the necessary versions of packages are installed.",
    topic: "nodejs",
  },
  {
    id: 84,
    question: "What is the `readline` module used for in Node.js?",
    options: [
      "To handle reading and writing of streams line-by-line",
      "To manage HTTP requests",
      "To handle file system operations",
      "To interact with databases",
    ],
    answer: "To handle reading and writing of streams line-by-line",
    explanation:
      "The `readline` module provides an interface for reading data from a readable stream, such as the standard input, one line at a time. It is useful for creating interactive command-line interfaces and processing input line-by-line.",
    topic: "nodejs",
  },
  {
    id: 85,
    question: "What does the `npm cache` command do?",
    options: [
      "Manages the npm cache directory",
      "Installs all dependencies",
      "Updates packages",
      "Removes a package",
    ],
    answer: "Manages the npm cache directory",
    explanation:
      "`npm cache` is used to manage the npm cache directory, where npm stores cached packages and metadata. You can use it to clean, verify, or inspect the cache to troubleshoot installation issues or improve performance.",
    topic: "nodejs",
  },
  {
    id: 86,
    question: "What is `npm install --save-dev` used for?",
    options: [
      "To install a package as a development dependency",
      "To install a package globally",
      "To remove a package",
      "To update a package",
    ],
    answer: "To install a package as a development dependency",
    explanation:
      "`npm install --save-dev` installs a package as a development dependency, meaning it will only be used during development and testing, not in production. It adds the package to the `devDependencies` section of `package.json`.",
    topic: "nodejs",
  },
  {
    id: 87,
    question: "What does the `npm outdated` command do?",
    options: [
      "Lists packages that are outdated",
      "Updates all packages",
      "Installs new packages",
      "Removes a package",
    ],
    answer: "Lists packages that are outdated",
    explanation:
      "`npm outdated` displays a list of installed packages that have newer versions available. It provides information about the current version, the latest version, and the version specified in `package.json`.",
    topic: "nodejs",
  },
  {
    id: 88,
    question: "What is the `path` module used for in Node.js?",
    options: [
      "To work with file and directory paths",
      "To handle HTTP requests",
      "To manage file system operations",
      "To work with streams",
    ],
    answer: "To work with file and directory paths",
    explanation:
      "The `path` module provides utilities for working with file and directory paths. It includes functions for manipulating paths, such as joining, resolving, and normalizing path strings, making it easier to handle file paths across different platforms.",
    topic: "nodejs",
  },
  {
    id: 89,
    question: "What is the `child_process` module used for in Node.js?",
    options: [
      "To spawn and manage child processes",
      "To handle HTTP requests",
      "To manage file system operations",
      "To interact with databases",
    ],
    answer: "To spawn and manage child processes",
    explanation:
      "The `child_process` module allows you to spawn and manage child processes, which are separate instances of the Node.js process. It is useful for running system commands, executing scripts, and handling concurrent operations.",
    topic: "nodejs",
  },
  {
    id: 90,
    question: "What is `npm link` used for?",
    options: [
      "To symlink a local package for development",
      "To install a package globally",
      "To update a package",
      "To remove a package",
    ],
    answer: "To symlink a local package for development",
    explanation:
      "`npm link` creates a symlink to a local package, allowing you to test and develop changes to the package without having to publish it. This is useful for linking local development versions of packages into your project.",
    topic: "nodejs",
  },
  {
    id: 91,
    question: "What does the `os` module provide in Node.js?",
    options: [
      "Operating system-related utility functions",
      "Database interaction methods",
      "HTTP server and client functionality",
      "File system operations",
    ],
    answer: "Operating system-related utility functions",
    explanation:
      "The `os` module provides utility functions for interacting with and obtaining information about the operating system, such as the system’s CPU architecture, memory usage, and network interfaces.",
    topic: "nodejs",
  },
  {
    id: 92,
    question: "What does `npm ls` do?",
    options: [
      "Lists installed packages and their dependencies",
      "Installs all dependencies",
      "Updates a package",
      "Removes a package",
    ],
    answer: "Lists installed packages and their dependencies",
    explanation:
      "`npm ls` displays a tree view of installed packages and their dependencies. It shows which packages are installed and their version numbers, helping you understand the dependency tree of your project.",
    topic: "nodejs",
  },
  {
    id: 93,
    question: "What is the `url` module used for in Node.js?",
    options: [
      "To parse and format URLs",
      "To handle HTTP requests",
      "To manage file system operations",
      "To interact with databases",
    ],
    answer: "To parse and format URLs",
    explanation:
      "The `url` module provides utilities for parsing and formatting URLs. It allows you to work with URL components, such as the protocol, host, path, and query parameters, making it easier to handle URLs in Node.js applications.",
    topic: "nodejs",
  },
  {
    id: 94,
    question: "What is `npm run` used for?",
    options: [
      "To run a script defined in `package.json`",
      "To install dependencies",
      "To update packages",
      "To remove a package",
    ],
    answer: "To run a script defined in `package.json`",
    explanation:
      "`npm run` allows you to execute scripts defined in the `scripts` section of the `package.json` file. It is used to run tasks like testing, building, or starting the application as defined in the project’s configuration.",
    topic: "nodejs",
  },
  {
    id: 95,
    question: "What does the `http` module do in Node.js?",
    options: [
      "Provides utilities for creating HTTP servers and clients",
      "Handles file system operations",
      "Manages database connections",
      "Works with streams",
    ],
    answer: "Provides utilities for creating HTTP servers and clients",
    explanation:
      "The `http` module provides utilities for creating and managing HTTP servers and clients. It allows you to handle HTTP requests and responses, enabling you to build web servers and interact with web services.",
    topic: "nodejs",
  },
  {
    id: 96,
    question: "What does the `fs` module provide in Node.js?",
    options: [
      "File system operations like reading and writing files",
      "HTTP server and client functionality",
      "Database interaction methods",
      "Utility functions for common tasks",
    ],
    answer: "File system operations like reading and writing files",
    explanation:
      "The `fs` module provides an API for interacting with the file system. It includes functions for reading, writing, and manipulating files and directories, making it essential for file-based operations in Node.js applications.",
    topic: "nodejs",
  },
  {
    id: 97,
    question: "What does `npm config` do?",
    options: [
      "Manages npm configuration settings",
      "Installs packages",
      "Updates dependencies",
      "Lists installed packages",
    ],
    answer: "Manages npm configuration settings",
    explanation:
      "`npm config` is used to manage npm configuration settings, such as setting up proxies, changing the registry URL, and configuring package installation behavior. It helps you customize npm’s behavior to suit your needs.",
    topic: "nodejs",
  },
  {
    id: 98,
    question: "What is `npm start` used for?",
    options: [
      "To start the application as defined in `package.json`",
      "To install dependencies",
      "To update packages",
      "To remove a package",
    ],
    answer: "To start the application as defined in `package.json`",
    explanation:
      "`npm start` runs the `start` script defined in the `scripts` section of `package.json`. It is commonly used to launch the application, server, or any other main process required for your project.",
    topic: "nodejs",
  },
  {
    id: 99,
    question: "What is the purpose of `npm run test`?",
    options: [
      "To run the test script defined in `package.json`",
      "To install dependencies",
      "To update packages",
      "To remove a package",
    ],
    answer: "To run the test script defined in `package.json`",
    explanation:
      "`npm run test` executes the `test` script defined in the `scripts` section of `package.json`. It is used to run tests for the project, such as unit tests or integration tests, ensuring code quality and functionality.",
    topic: "nodejs",
  },
  {
    id: 100,
    question: "What does the `npm ls` command show?",
    options: [
      "Lists installed packages and their dependencies",
      "Updates all packages",
      "Installs new packages",
      "Removes a package",
    ],
    answer: "Lists installed packages and their dependencies",
    explanation:
      "`npm ls` shows a tree view of installed packages and their dependencies, displaying the versions of the packages and how they relate to each other within your project.",
    topic: "nodejs",
  },
];
