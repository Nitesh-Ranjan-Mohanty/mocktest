interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  topic: string;
  example?: string;
}

export const nodeQuestions: Question[] = [
  {
      "id": 1,
      "question": "What is Node.js?",
      "options": ["A JavaScript runtime built on Chrome's V8 engine", "A front-end framework", "A database", "A programming language"],
      "answer": "A JavaScript runtime built on Chrome's V8 engine",
      "explanation": "Node.js is a JavaScript runtime that allows you to run JavaScript code on the server side, enabling the development of server-side applications using JavaScript.",
      "topic": "nodejs",
      "example": "console.log('Hello, Node.js!');"
  },
  {
      "id": 2,
      "question": "What is npm?",
      "options": ["Node Package Manager", "Node Program Manager", "Node Protocol Manager", "Node Process Manager"],
      "answer": "Node Package Manager",
      "explanation": "npm is the package manager for Node.js, allowing developers to install, share, and manage packages for their Node applications.",
      "topic": "nodejs",
      "example": "npm install express"
  },
  {
      "id": 3,
      "question": "How do you create a basic HTTP server in Node.js?",
      "options": ["http.createServer()", "new HttpServer()", "server.create()", "http.Server()"],
      "answer": "http.createServer()",
      "explanation": "You can create a basic HTTP server in Node.js using the http.createServer() method, which takes a request handler as an argument.",
      "topic": "nodejs",
      "example": "const http = require('http'); http.createServer((req, res) => { res.end('Hello World!'); }).listen(3000);"
  },
  {
      "id": 4,
      "question": "What is the purpose of the 'require' function in Node.js?",
      "options": ["To import modules", "To define a function", "To create a server", "To manage packages"],
      "answer": "To import modules",
      "explanation": "The 'require' function is used to import modules in Node.js, allowing you to use code from other files or packages.",
      "topic": "nodejs",
      "example": "const express = require('express');"
  },
  {
      "id": 5,
      "question": "What is Express.js?",
      "options": ["A Node.js web application framework", "A database", "A front-end framework", "A JavaScript engine"],
      "answer": "A Node.js web application framework",
      "explanation": "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.",
      "topic": "nodejs",
      "example": "const express = require('express'); const app = express();"
  },
  {
      "id": 6,
      "question": "What is middleware in Express?",
      "options": ["Functions that have access to the request and response objects", "A type of database", "A front-end library", "A function to create servers"],
      "answer": "Functions that have access to the request and response objects",
      "explanation": "Middleware functions in Express are functions that have access to the request and response objects and can modify them or end the request-response cycle.",
      "topic": "nodejs",
      "example": "app.use((req, res, next) => { console.log('Request received'); next(); });"
  },
  {
      "id": 7,
      "question": "What is the purpose of the 'next' function in Express middleware?",
      "options": ["To pass control to the next middleware function", "To end the response", "To send a response", "To create a new request"],
      "answer": "To pass control to the next middleware function",
      "explanation": "The 'next' function is used in middleware to pass control to the next middleware function in the stack.",
      "topic": "nodejs",
      "example": "app.use((req, res, next) => { console.log('First middleware'); next(); });"
  },
  {
      "id": 8,
      "question": "How do you handle GET requests in Express?",
      "options": ["app.get()", "app.request()", "app.handle()", "app.fetch()"],
      "answer": "app.get()",
      "explanation": "You handle GET requests in Express using the app.get() method, which takes a route and a callback function as arguments.",
      "topic": "nodejs",
      "example": "app.get('/users', (req, res) => { res.send('User list'); });"
  },
  {
      "id": 9,
      "question": "What is a promise in Node.js?",
      "options": ["An object representing the eventual completion of an asynchronous operation", "A synchronous operation", "A database connection", "A type of variable"],
      "answer": "An object representing the eventual completion of an asynchronous operation",
      "explanation": "A promise is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
      "topic": "nodejs",
      "example": "let promise = new Promise((resolve, reject) => { /* some async operation */ });"
  },
  {
      "id": 10,
      "question": "What is the purpose of 'async/await' in Node.js?",
      "options": ["To simplify asynchronous code", "To handle synchronous code", "To manage databases", "To create servers"],
      "answer": "To simplify asynchronous code",
      "explanation": "The 'async/await' syntax in JavaScript simplifies working with asynchronous code by allowing you to write it in a synchronous-like manner.",
      "topic": "nodejs",
      "example": "async function fetchData() { const data = await getData(); }"
  },
  {
      "id": 11,
      "question": "What does the 'fs' module in Node.js do?",
      "options": ["File system operations", "Database operations", "Networking", "HTTP requests"],
      "answer": "File system operations",
      "explanation": "The 'fs' module provides an API for interacting with the file system, allowing you to read and write files.",
      "topic": "nodejs",
      "example": "const fs = require('fs'); fs.readFile('file.txt', 'utf8', (err, data) => { console.log(data); });"
  },
  {
      "id": 12,
      "question": "What is a callback function?",
      "options": ["A function passed as an argument to another function", "A function that returns a value", "A synchronous function", "A method of a class"],
      "answer": "A function passed as an argument to another function",
      "explanation": "A callback function is a function that is passed as an argument to another function and is executed after the completion of that function.",
      "topic": "nodejs",
      "example": "setTimeout(() => { console.log('Executed after 2 seconds'); }, 2000);"
  },
  {
      "id": 13,
      "question": "What is event-driven programming in Node.js?",
      "options": ["A programming paradigm based on events and callbacks", "A way to manage databases", "A method of writing synchronous code", "A way to create servers"],
      "answer": "A programming paradigm based on events and callbacks",
      "explanation": "Event-driven programming in Node.js allows applications to respond to events and execute callback functions when these events occur.",
      "topic": "nodejs",
      "example": "process.on('exit', (code) => { console.log('Exit code:', code); });"
  },
  {
      "id": 14,
      "question": "What is the purpose of 'process.env' in Node.js?",
      "options": ["To access environment variables", "To manage processes", "To create servers", "To handle errors"],
      "answer": "To access environment variables",
      "explanation": "'process.env' is an object in Node.js that contains the user environment variables, allowing you to access configuration settings.",
      "topic": "nodejs",
      "example": "const dbPassword = process.env.DB_PASSWORD;"
  },
  {
      "id": 15,
      "question": "What is a REPL in Node.js?",
      "options": ["Read-Eval-Print Loop", "Runtime Environment for Programming Languages", "Remote Execution Protocol Language", "Resource Efficient Programming Language"],
      "answer": "Read-Eval-Print Loop",
      "explanation": "REPL stands for Read-Eval-Print Loop, which is an interactive programming environment that takes single user inputs, evaluates them, and returns the result to the user.",
      "topic": "nodejs",
      "example": "You can start REPL by simply typing 'node' in the command line."
  },
  {
      "id": 16,
      "question": "What is the purpose of the 'cluster' module in Node.js?",
      "options": ["To create multiple child processes", "To handle file operations", "To manage database connections", "To create servers"],
      "answer": "To create multiple child processes",
      "explanation": "The 'cluster' module allows you to create multiple child processes that share the same server port, enabling load balancing across CPU cores.",
      "topic": "nodejs",
      "example": "const cluster = require('cluster'); if (cluster.isMaster) { cluster.fork(); }"
  },
  {
      "id": 17,
      "question": "What is the purpose of the 'path' module in Node.js?",
      "options": ["To work with file and directory paths", "To manage databases", "To create servers", "To handle HTTP requests"],
      "answer": "To work with file and directory paths",
      "explanation": "The 'path' module provides utilities for working with file and directory paths, making it easier to handle file locations across different operating systems.",
      "topic": "nodejs",
      "example": "const path = require('path'); const filePath = path.join(__dirname, 'file.txt');"
  },
  {
      "id": 18,
      "question": "What is CORS in Node.js?",
      "options": ["Cross-Origin Resource Sharing", "Centralized Object Resource Storage", "Common Online Resource Sharing", "Cross-Origin Response Security"],
      "answer": "Cross-Origin Resource Sharing",
      "explanation": "CORS stands for Cross-Origin Resource Sharing, a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.",
      "topic": "nodejs",
      "example": "app.use(require('cors')());"
  },
  {
      "id": 19,
      "question": "What is the use of 'body-parser' middleware in Express?",
      "options": ["To parse incoming request bodies", "To manage database connections", "To handle file uploads", "To create servers"],
      "answer": "To parse incoming request bodies",
      "explanation": "'body-parser' is a middleware that parses incoming request bodies in a middleware before your handlers, making it available under the req.body property.",
      "topic": "nodejs",
      "example": "app.use(require('body-parser').json());"
  },
  {
      "id": 20,
      "question": "What is the significance of the 'module.exports' in Node.js?",
      "options": ["To export functions or objects from a module", "To import modules", "To create servers", "To manage dependencies"],
      "answer": "To export functions or objects from a module",
      "explanation": "'module.exports' is used to define what a module exports and makes available to other modules when they require it.",
      "topic": "nodejs",
      "example": "module.exports = myFunction;"
  },
  {
      "id": 21,
      "question": "What is a streaming data in Node.js?",
      "options": ["Data that is processed as it is being received", "Data stored in a database", "Data that is sent in one go", "Data that is retrieved from the cache"],
      "answer": "Data that is processed as it is being received",
      "explanation": "Streaming data in Node.js refers to processing data as it is being received, which is efficient for handling large amounts of data.",
      "topic": "nodejs",
      "example": "const fs = require('fs'); const readStream = fs.createReadStream('file.txt'); readStream.pipe(process.stdout);"
  },
  {
      "id": 22,
      "question": "What is the 'dotenv' package used for?",
      "options": ["To manage environment variables", "To handle file operations", "To create servers", "To manage databases"],
      "answer": "To manage environment variables",
      "explanation": "The 'dotenv' package is used to load environment variables from a .env file into process.env, making it easier to manage configuration settings.",
      "topic": "nodejs",
      "example": "require('dotenv').config();"
  },
  {
      "id": 23,
      "question": "What does the 'http' module in Node.js do?",
      "options": ["Creates HTTP servers and clients", "Handles file operations", "Manages databases", "Creates web sockets"],
      "answer": "Creates HTTP servers and clients",
      "explanation": "The 'http' module provides utilities for creating HTTP servers and clients, enabling communication over the HTTP protocol.",
      "topic": "nodejs",
      "example": "const http = require('http'); http.createServer((req, res) => { res.end('Hello World!'); }).listen(3000);"
  },
  {
      "id": 24,
      "question": "What is the significance of 'nextTick' in Node.js?",
      "options": ["To execute a function in the next iteration of the event loop", "To handle promises", "To manage databases", "To create servers"],
      "answer": "To execute a function in the next iteration of the event loop",
      "explanation": "'process.nextTick()' is a function that defers the execution of a function until the next iteration of the event loop, allowing other operations to complete first.",
      "topic": "nodejs",
      "example": "process.nextTick(() => { console.log('Executed next tick'); });"
  },
  {
      "id": 25,
      "question": "What is the purpose of the 'crypto' module in Node.js?",
      "options": ["To provide cryptographic functionality", "To manage databases", "To create servers", "To handle file operations"],
      "answer": "To provide cryptographic functionality",
      "explanation": "The 'crypto' module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.",
      "topic": "nodejs",
      "example": "const crypto = require('crypto'); const hash = crypto.createHash('sha256').update('data').digest('hex');"
  }
]

