interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
    topic: string;
}

export const questions: Question[] = [
    {
        id: 1,
        question: 'What is Node.js?',
        options: ['A database', 'A web server', 'A runtime environment', 'A programming language'],
        answer: 'A runtime environment',
        explanation: 'Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser. It is built on Chrome\'s V8 JavaScript engine and is used for server-side programming, making it possible to build scalable network applications.',
        topic: 'nodejs'
    },
    {
        id: 2,
        question: 'What is the purpose of `package.json` in a Node.js project?',
        options: ['To list project dependencies', 'To define project metadata', 'To manage project scripts', 'All of the above'],
        answer: 'All of the above',
        explanation: '`package.json` is a crucial file in Node.js projects. It lists the project dependencies, defines project metadata (such as name and version), and manages project scripts (commands that can be executed using npm). This file acts as the central configuration file for Node.js projects.',
        topic: 'nodejs'
    },
    {
        id: 3,
        question: 'What does `npm install` do?',
        options: ['Installs packages listed in `package.json`', 'Updates all packages to the latest version', 'Removes installed packages', 'Creates a new `package.json` file'],
        answer: 'Installs packages listed in `package.json`',
        explanation: 'The `npm install` command installs all the dependencies listed in the `package.json` file into the `node_modules` directory. It ensures that all required packages are available for your project to function properly.',
        topic: 'nodejs'
    },
    {
        id: 4,
        question: 'What is the role of the `require()` function in Node.js?',
        options: ['To load modules', 'To execute JavaScript code', 'To manage HTTP requests', 'To handle file I/O operations'],
        answer: 'To load modules',
        explanation: 'The `require()` function in Node.js is used to load and include modules (JavaScript files or packages) into your application. It allows you to use functionality provided by external modules or files within your own code.',
        topic: 'nodejs'
    },
    {
        id: 5,
        question: 'How can you define a global variable in Node.js?',
        options: ['By attaching it to the `global` object', 'By using `var` at the top level', 'By declaring it in a module', 'By using `window` object'],
        answer: 'By attaching it to the `global` object',
        explanation: 'In Node.js, global variables can be defined by attaching them to the `global` object. This makes the variable accessible throughout the entire Node.js runtime. However, global variables should be used sparingly to avoid potential conflicts and unintended consequences.',
        topic: 'nodejs'
    },
    {
        id: 6,
        question: 'What is the purpose of the `fs` module in Node.js?',
        options: ['To interact with the file system', 'To handle HTTP requests', 'To create web servers', 'To manage process inputs'],
        answer: 'To interact with the file system',
        explanation: 'The `fs` (file system) module in Node.js provides an API for interacting with the file system. It allows you to perform file operations such as reading, writing, updating, and deleting files. This module is essential for handling file I/O in Node.js applications.',
        topic: 'nodejs'
    },
    {
        id: 7,
        question: 'What does the `setTimeout()` function do in JavaScript?',
        options: ['Executes a function after a specified delay', 'Repeats a function at regular intervals', 'Cancels a function execution', 'None of the above'],
        answer: 'Executes a function after a specified delay',
        explanation: 'The `setTimeout()` function in JavaScript schedules a function to be executed after a specified delay, which is measured in milliseconds. It allows you to perform tasks after waiting for a certain amount of time.',
        topic: 'nodejs'
    },
    {
        id: 8,
        question: 'Which method is used to determine the length of an array?',
        options: ['Array.prototype.length', 'Array.prototype.size', 'Array.prototype.count', 'Array.prototype.measure'],
        answer: 'Array.prototype.length',
        explanation: 'The `Array.prototype.length` property returns the number of elements in an array. It is an important property for iterating over arrays and managing their content.',
        topic: 'nodejs'
    },
    {
        id: 9,
        question: 'What is the purpose of `npm run`?',
        options: ['To run a project-defined script', 'To install dependencies', 'To remove packages', 'To update packages'],
        answer: 'To run a project-defined script',
        explanation: '`npm run` allows you to execute scripts defined in the `scripts` section of `package.json`. These scripts can automate tasks such as testing, building, or starting the application.',
        topic: 'nodejs'
    },
    {
        id: 10,
        question: 'How do you handle errors in a synchronous function?',
        options: ['Use a `try/catch` block', 'Use a callback function', 'Use `Promise.catch()`', 'Use `async/await`'],
        answer: 'Use a `try/catch` block',
        explanation: 'In synchronous functions, errors can be handled using a `try/catch` block. This allows you to catch exceptions and handle them appropriately, preventing the application from crashing.',
        topic: 'nodejs'
    },
    {
        id: 11,
        question: 'What is the purpose of `process.exit()` in Node.js?',
        options: ['To end the process with a specific exit code', 'To terminate a specific module', 'To stop a running server', 'To exit a loop'],
        answer: 'To end the process with a specific exit code',
        explanation: 'The `process.exit()` function in Node.js terminates the current process with a specified exit code. An exit code of `0` typically indicates success, while a non-zero exit code indicates an error.',
        topic: 'nodejs'
    },
    {
        id: 12,
        question: 'Which method is used to add an element to the beginning of an array?',
        options: ['Array.prototype.unshift()', 'Array.prototype.push()', 'Array.prototype.shift()', 'Array.prototype.pop()'],
        answer: 'Array.prototype.unshift()',
        explanation: 'The `Array.prototype.unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array. It is useful for inserting elements at the start of an array.',
        topic: 'nodejs'
    },
    {
        id: 13,
        question: 'What is the purpose of `npm start`?',
        options: ['To start a project-defined script', 'To install packages', 'To run tests', 'To build the project'],
        answer: 'To start a project-defined script',
        explanation: '`npm start` runs the script defined in the `start` property of the `scripts` section in `package.json`. It is commonly used to start the main application or development server.',
        topic: 'nodejs'
    },
    {
        id: 14,
        question: 'How can you debug a Node.js application?',
        options: ['Using the `node --inspect` flag', 'Using `console.log()`', 'Using an IDE with debugging capabilities', 'All of the above'],
        answer: 'All of the above',
        explanation: 'Node.js applications can be debugged using multiple methods: the `node --inspect` flag for debugging with Chrome DevTools, `console.log()` for basic logging, and an IDE with built-in debugging capabilities for a more comprehensive debugging experience.',
        topic: 'nodejs'
    },
    {
        id: 15,
        question: 'What does the `Array.prototype.reduce()` method do in JavaScript?',
        options: ['Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value', 'Filters out elements from an array', 'Finds an element in an array', 'Creates a new array from the results of applying a function'],
        answer: 'Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value',
        explanation: 'The `Array.prototype.reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It is useful for aggregating or accumulating array values.',
        topic: 'nodejs'
    },
    {
        id: 16,
        question: 'What is the purpose of `npm link`?',
        options: ['To symlink a local package into your project', 'To publish a package to the registry', 'To update a package', 'To uninstall a package'],
        answer: 'To symlink a local package into your project',
        explanation: 'The `npm link` command creates a symbolic link from globally installed packages to your local project. This is useful for developing and testing local packages before publishing them.',
        topic: 'nodejs'
    },
    {
        id: 17,
        question: 'What does `Object.keys()` do?',
        options: ['Returns an array of a given object’s own enumerable property names', 'Returns an array of the object’s values', 'Returns an array of the object’s methods', 'Returns an array of the object’s prototypes'],
        answer: 'Returns an array of a given object’s own enumerable property names',
        explanation: 'The `Object.keys()` method returns an array of a given object’s own enumerable property names. This is useful for iterating over the keys of an object and performing operations on its properties.',
        topic: 'nodejs'
    },
    {
        id: 18,
        question: 'What does `Object.values()` do?',
        options: ['Returns an array of a given object’s own enumerable property values', 'Returns an array of the object’s keys', 'Returns an array of the object’s methods', 'Deletes properties from an object'],
        answer: 'Returns an array of a given object’s own enumerable property values',
        explanation: 'The `Object.values()` method returns an array of the enumerable property values of an object. This is useful for iterating over or accessing the values of an object without needing to know its keys.',
        topic: 'nodejs'
    },
    {
        id: 19,
        question: 'What does `npm cache clean --force` do?',
        options: ['Clears the npm cache', 'Updates all cached packages', 'Installs packages from the cache', 'Removes the cache directory'],
        answer: 'Clears the npm cache',
        explanation: '`npm cache clean --force` forces the clearing of the npm cache, which can help resolve issues related to corrupt or outdated cache data. This command is used when you need to remove cached files and ensure a clean state.',
        topic: 'nodejs'
    },
    {
        id: 20,
        question: 'What is the purpose of `async/await` in JavaScript?',
        options: ['To handle asynchronous operations more easily', 'To create synchronous code', 'To handle errors in synchronous code', 'To define global variables'],
        answer: 'To handle asynchronous operations more easily',
        explanation: '`async/await` is a syntax in JavaScript that allows you to write asynchronous code in a way that looks synchronous. It simplifies working with promises by enabling you to use `await` to pause execution until a promise resolves, making your code more readable and easier to manage.',
        topic: 'nodejs'
    },
    {
        id: 21,
        question: 'What is `npm`?',
        options: ['Node Package Manager', 'Network Package Manager', 'Node Process Manager', 'None of the above'],
        answer: 'Node Package Manager',
        explanation: '`npm` stands for Node Package Manager. It is a package manager for JavaScript, primarily used for managing Node.js modules and their dependencies. It helps developers to easily share and reuse code.',
        topic: 'nodejs'
    },
    {
        id: 22,
        question: 'What is the purpose of the `path` module in Node.js?',
        options: ['To handle and transform file paths', 'To manage HTTP requests', 'To interact with the database', 'To create child processes'],
        answer: 'To handle and transform file paths',
        explanation: 'The `path` module in Node.js provides utilities for working with file and directory paths. It helps in resolving and normalizing paths, joining paths together, and extracting various components of paths.',
        topic: 'nodejs'
    },
    {
        id: 23,
        question: 'What is `npm init` used for?',
        options: ['To create a new `package.json` file', 'To install all dependencies', 'To update the `package.json` file', 'To start a new Node.js project'],
        answer: 'To create a new `package.json` file',
        explanation: '`npm init` is used to create a new `package.json` file for your project. This file will include information about your project such as its name, version, description, and dependencies.',
        topic: 'nodejs'
    },
    {
        id: 24,
        question: 'What does `require(\'module\')` do?',
        options: ['Loads and returns the specified module', 'Executes the specified module', 'Installs the specified module', 'Removes the specified module'],
        answer: 'Loads and returns the specified module',
        explanation: '`require(\'module\')` loads the specified module and returns its exports. This function allows you to include and use code from other modules within your application.',
        topic: 'nodejs'
    },
    {
        id: 25,
        question: 'What is `process.env` in Node.js?',
        options: ['An object containing environment variables', 'A module for handling process events', 'A method for managing environment configurations', 'A utility for process management'],
        answer: 'An object containing environment variables',
        explanation: '`process.env` is an object in Node.js that contains the user environment variables. It allows you to access environment-specific configurations such as API keys, database connections, and other sensitive data.',
        topic: 'nodejs'
    },
    {
        id: 26,
        question: 'What is the purpose of `node_modules` folder?',
        options: ['To store installed npm packages', 'To store temporary files', 'To store configuration files', 'To store documentation'],
        answer: 'To store installed npm packages',
        explanation: 'The `node_modules` folder is where npm installs all the packages and their dependencies for your project. It contains the actual code of all the libraries and modules you have installed.',
        topic: 'nodejs'
    },
    {
        id: 27,
        question: 'What is the function of the `http` module in Node.js?',
        options: ['To create HTTP servers and clients', 'To handle file operations', 'To manage child processes', 'To interact with databases'],
        answer: 'To create HTTP servers and clients',
        explanation: 'The `http` module in Node.js provides utilities for creating HTTP servers and clients. It allows you to build server-side applications that handle HTTP requests and responses.',
        topic: 'nodejs'
    },
    {
        id: 28,
        question: 'How can you handle asynchronous operations in Node.js?',
        options: ['Using callbacks', 'Using Promises', 'Using async/await', 'All of the above'],
        answer: 'All of the above',
        explanation: 'Asynchronous operations in Node.js can be handled using callbacks, Promises, or async/await. Callbacks provide a way to execute code after an operation completes, Promises represent the eventual completion (or failure) of an asynchronous operation, and async/await simplifies working with Promises by allowing you to write asynchronous code that looks synchronous.',
        topic: 'nodejs'
    },
    {
        id: 29,
        question: 'What is the purpose of the `buffer` module in Node.js?',
        options: ['To handle binary data', 'To manage HTTP responses', 'To parse JSON data', 'To interact with the file system'],
        answer: 'To handle binary data',
        explanation: 'The `buffer` module in Node.js provides utilities for handling binary data. Buffers are used to work with raw binary data directly, such as when dealing with streams or binary files.',
        topic: 'nodejs'
    },
    {
        id: 30,
        question: 'What is the difference between `process.nextTick()` and `setImmediate()`?',
        options: ['`process.nextTick()` queues a callback to be executed after the current operation completes, while `setImmediate()` queues a callback to be executed in the next iteration of the event loop', '`process.nextTick()` executes immediately, while `setImmediate()` executes after a delay', '`process.nextTick()` and `setImmediate()` are identical', '`process.nextTick()` is for synchronous code and `setImmediate()` is for asynchronous code'],
        answer: '`process.nextTick()` queues a callback to be executed after the current operation completes, while `setImmediate()` queues a callback to be executed in the next iteration of the event loop',
        explanation: 'The `process.nextTick()` method schedules a callback to be executed in the current phase of the event loop, before any I/O operations. In contrast, `setImmediate()` schedules a callback to be executed in the next iteration of the event loop, after I/O operations. This means that `process.nextTick()` is useful for deferring work until the current operation completes, while `setImmediate()` defers work until the next phase of the event loop.',
        topic: 'nodejs'
    },
    {
        id: 31,
        question: 'What is the purpose of `npm outdated`?',
        options: ['To check for outdated packages', 'To update all packages', 'To install new packages', 'To remove unused packages'],
        answer: 'To check for outdated packages',
        explanation: '`npm outdated` lists the packages that have newer versions available compared to the currently installed versions. This command helps you identify which packages need to be updated.',
        topic: 'nodejs'
    },
    {
        id: 32,
        question: 'What does `npm install <package>@<version>` do?',
        options: ['Installs a specific version of a package', 'Updates a package to the latest version', 'Uninstalls a package', 'Displays package details'],
        answer: 'Installs a specific version of a package',
        explanation: '`npm install <package>@<version>` installs a specific version of a package. This is useful when you need to ensure compatibility or use a version of a package that is known to work with your project.',
        topic: 'nodejs'
    },
    {
        id: 33,
        question: 'What is the purpose of the `events` module in Node.js?',
        options: ['To handle events and event-driven programming', 'To manage file system operations', 'To interact with databases', 'To handle HTTP requests'],
        answer: 'To handle events and event-driven programming',
        explanation: 'The `events` module in Node.js provides a way to handle events and create event-driven programming patterns. It allows you to define and listen for events, enabling you to respond to various actions or changes within your application.',
        topic: 'nodejs'
    },
    {
        id: 34,
        question: 'What is the `cluster` module used for in Node.js?',
        options: ['To create multiple instances of a Node.js process', 'To manage child processes', 'To handle HTTP requests', 'To perform file operations'],
        answer: 'To create multiple instances of a Node.js process',
        explanation: 'The `cluster` module allows you to create multiple instances of a Node.js process, enabling you to take advantage of multi-core systems. This helps improve the performance and scalability of your Node.js application by distributing the load across multiple processes.',
        topic: 'nodejs'
    },
    {
        id: 35,
        question: 'What does `process.env.NODE_ENV` typically represent?',
        options: ['The environment in which the Node.js application is running', 'The version of Node.js being used', 'The path to the Node.js executable', 'The directory of the current project'],
        answer: 'The environment in which the Node.js application is running',
        explanation: '`process.env.NODE_ENV` is an environment variable that typically represents the environment in which the Node.js application is running, such as `development`, `production`, or `test`. It is used to configure application behavior based on the environment.',
        topic: 'nodejs'
    },
    {
        id: 36,
        question: 'What is the purpose of `module.exports`?',
        options: ['To export functionality from a module', 'To import functionality into a module', 'To define global variables', 'To manage dependencies'],
        answer: 'To export functionality from a module',
        explanation: '`module.exports` is used to export functionality from a Node.js module, allowing other files to require and use it. It defines what is exposed from the module when it is imported elsewhere in the application.',
        topic: 'nodejs'
    },
    {
        id: 37,
        question: 'What does `npm run <script>` do?',
        options: ['Executes a script defined in `package.json`', 'Installs a new package', 'Updates a package', 'Displays script details'],
        answer: 'Executes a script defined in `package.json`',
        explanation: '`npm run <script>` executes a script that is defined in the `scripts` section of the `package.json` file. This is useful for running build processes, tests, and other custom commands configured for your project.',
        topic: 'nodejs'
    },
    {
        id: 38,
        question: 'What is `middleware` in the context of Node.js?',
        options: ['Functions that process requests and responses in Express.js', 'Modules that handle HTTP requests', 'Libraries for database operations', 'Utilities for file management'],
        answer: 'Functions that process requests and responses in Express.js',
        explanation: 'In the context of Node.js, particularly with Express.js, middleware refers to functions that are executed in the request-response cycle. Middleware functions can modify request and response objects, terminate the request-response cycle, or call the next middleware function.',
        topic: 'nodejs'
    },
    {
        id: 39,
        question: 'What is the purpose of the `fs` module in Node.js?',
        options: ['To handle file system operations', 'To manage HTTP requests', 'To handle events', 'To work with binary data'],
        answer: 'To handle file system operations',
        explanation: 'The `fs` module in Node.js provides an API for interacting with the file system. It allows you to read, write, and manipulate files and directories within your Node.js application.',
        topic: 'nodejs'
    },
    {
        id: 40,
        question: 'What is `npm link` used for?',
        options: ['To symlink a package into your project', 'To install a package globally', 'To update a package', 'To remove a package'],
        answer: 'To symlink a package into your project',
        explanation: '`npm link` creates a symlink to a local package in your project. This is useful for developing and testing local packages before publishing them, allowing you to use them as if they were installed from the npm registry.',
        topic: 'nodejs'
    },
    {
        id: 41,
        question: 'What is the `repl` module in Node.js?',
        options: ['A Read-Eval-Print Loop for interactive Node.js sessions', 'A module for handling HTTP requests', 'A utility for working with streams', 'A library for handling encryption'],
        answer: 'A Read-Eval-Print Loop for interactive Node.js sessions',
        explanation: 'The `repl` module provides a Read-Eval-Print Loop (REPL) for interactive Node.js sessions. It allows you to execute JavaScript code, evaluate expressions, and see results immediately, making it useful for testing and debugging code interactively.',
        topic: 'nodejs'
    },
    {
        id: 42,
        question: 'What is the purpose of `npm dedupe`?',
        options: ['To remove duplicate packages', 'To update all packages', 'To install missing packages', 'To optimize package installation'],
        answer: 'To remove duplicate packages',
        explanation: '`npm dedupe` removes duplicate packages from the `node_modules` folder, ensuring that only one version of each package is installed. This helps to reduce the overall size of your `node_modules` folder and can improve the performance of your application.',
        topic: 'nodejs'
    },
    {
        id: 43,
        question: 'What does `npm prune` do?',
        options: ['Removes extraneous packages', 'Installs missing packages', 'Updates all packages', 'Displays package details'],
        answer: 'Removes extraneous packages',
        explanation: '`npm prune` removes packages that are not listed in your `package.json` file from the `node_modules` folder. This helps to clean up unnecessary dependencies and reduce the size of your project.',
        topic: 'nodejs'
    },
    {
        id: 44,
        question: 'What is `Promise.all()` used for?',
        options: ['To execute multiple promises in parallel and wait for all to complete', 'To chain multiple promises together', 'To create a new promise', 'To handle errors in promises'],
        answer: 'To execute multiple promises in parallel and wait for all to complete',
        explanation: '`Promise.all()` is used to execute multiple promises in parallel and wait for all of them to complete. It returns a single promise that resolves when all of the input promises have resolved, or rejects if any of the input promises reject.',
        topic: 'nodejs'
    },
    {
        id: 45,
        question: 'What does `npm run build` typically do?',
        options: ['Runs the build script defined in `package.json`', 'Installs packages', 'Updates packages', 'Removes packages'],
        answer: 'Runs the build script defined in `package.json`',
        explanation: '`npm run build` executes the build script defined in the `scripts` section of the `package.json` file. This is commonly used to compile code, bundle assets, or perform other build tasks for a project.',
        topic: 'nodejs'
    },
    {
        id: 46,
        question: 'What is the purpose of the `assert` module in Node.js?',
        options: ['To perform assertions for testing', 'To handle HTTP requests', 'To manage file system operations', 'To handle binary data'],
        answer: 'To perform assertions for testing',
        explanation: 'The `assert` module in Node.js provides a set of assertion tests that can be used to verify that code behaves as expected. It is commonly used in unit testing to check if certain conditions are true and to report failures when they are not.',
        topic: 'nodejs'
    },
    {
        id: 47,
        question: 'What does `npm install --save-dev` do?',
        options: ['Installs a package as a development dependency', 'Installs a package globally', 'Installs a package as a production dependency', 'Removes a package'],
        answer: 'Installs a package as a development dependency',
        explanation: '`npm install --save-dev` installs a package as a development dependency, meaning it is only required during the development phase and not in production. This is useful for tools and libraries needed for development and testing.',
        topic: 'nodejs'
    },
    {
        id: 48,
        question: 'What is the purpose of `npm ci`?',
        options: ['To install dependencies from a `package-lock.json` file', 'To clean the npm cache', 'To create a new `package.json` file', 'To update all dependencies'],
        answer: 'To install dependencies from a `package-lock.json` file',
        explanation: '`npm ci` installs dependencies from the `package-lock.json` file, ensuring a clean and consistent installation. It is designed for continuous integration environments where reproducibility and consistency are crucial.',
        topic: 'nodejs'
    },
    {
        id: 49,
        question: 'What is the purpose of the `url` module in Node.js?',
        options: ['To parse and format URLs', 'To handle HTTP requests', 'To manage file system operations', 'To work with streams'],
        answer: 'To parse and format URLs',
        explanation: 'The `url` module in Node.js provides utilities for URL resolution and parsing. It allows you to parse URL strings into components, format URLs, and resolve relative URLs, which is useful for managing and manipulating URLs in your application.',
        topic: 'nodejs'
    },
    {
        id: 50,
        question: 'What does `npm cache clean` do?',
        options: ['Clears the npm cache', 'Updates the npm cache', 'Installs missing packages', 'Removes a package from the cache'],
        answer: 'Clears the npm cache',
        explanation: '`npm cache clean` clears the npm cache, which can help resolve issues with corrupt or outdated cached packages. This command forces npm to fetch fresh copies of packages from the registry.',
        topic: 'nodejs'
    }
]
