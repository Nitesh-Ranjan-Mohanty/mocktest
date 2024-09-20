interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  topic: string;
  example?: string;
}

export const jestQuestions: Question[] = [
  {
      "id": 1,
      "question": "What is Jest primarily used for?",
      "options": ["Unit testing JavaScript code", "Building user interfaces", "Managing application state", "Performing end-to-end testing"],
      "answer": "Unit testing JavaScript code",
      "explanation": "Jest is a JavaScript testing framework designed primarily for unit testing JavaScript applications, especially React applications.",
      "topic": "jest",
      "example": "npm install --save-dev jest"
  },
  {
      "id": 2,
      "question": "How do you run Jest tests from the command line?",
      "options": ["npm test", "jest", "npm run test", "All of the above"],
      "answer": "All of the above",
      "explanation": "You can run Jest tests using 'npm test', 'jest', or 'npm run test', depending on your package.json scripts configuration.",
      "topic": "jest",
      "example": "npm test"
  },
  {
      "id": 3,
      "question": "Which of the following is a key feature of Jest?",
      "options": ["Snapshot testing", "Automatic mock generation", "Code coverage reports", "All of the above"],
      "answer": "All of the above",
      "explanation": "Jest offers snapshot testing, automatic mock generation, and built-in code coverage reports as key features.",
      "topic": "jest",
      "example": "jest --coverage"
  },
  {
      "id": 4,
      "question": "What command is used to create a snapshot in Jest?",
      "options": ["expect().toMatchSnapshot()", "jest().toSnapshot()", "expect().toBeSnapshot()", "jest().snapshot()"],
      "answer": "expect().toMatchSnapshot()",
      "explanation": "The expect().toMatchSnapshot() command creates a snapshot of the rendered output, which can be used for comparison in future tests.",
      "topic": "jest",
      "example": "test('renders correctly', () => { const tree = renderer.create(<MyComponent />).toJSON(); expect(tree).toMatchSnapshot(); });"
  },
  {
      "id": 5,
      "question": "How can you mock a function in Jest?",
      "options": ["jest.fn()", "jest.mock()", "jest.spyOn()", "All of the above"],
      "answer": "All of the above",
      "explanation": "You can use jest.fn(), jest.mock(), or jest.spyOn() to create mocks or spies for functions in Jest.",
      "topic": "jest",
      "example": "const myMock = jest.fn();"
  },
  {
      "id": 6,
      "question": "What is the purpose of jest.mock()?",
      "options": ["To mock modules and their exports", "To spy on function calls", "To run tests in parallel", "To generate code coverage"],
      "answer": "To mock modules and their exports",
      "explanation": "jest.mock() is used to mock entire modules or their specific exports, allowing you to isolate the module being tested.",
      "topic": "jest",
      "example": "jest.mock('./myModule');"
  },
  {
      "id": 7,
      "question": "What is the default test file extension that Jest looks for?",
      "options": [".js", ".jsx", ".test.js", ".spec.js"],
      "answer": ".test.js",
      "explanation": "By default, Jest looks for test files with the .test.js or .spec.js extensions.",
      "topic": "jest",
      "example": "myComponent.test.js"
  },
  {
      "id": 8,
      "question": "How can you run only specific tests in Jest?",
      "options": ["Using .only() method", "Using --testNamePattern option", "Both A and B", "Using .skip() method"],
      "answer": "Both A and B",
      "explanation": "You can run specific tests using the .only() method or the --testNamePattern option to filter tests by name.",
      "topic": "jest",
      "example": "test.only('runs this test only', () => { });"
  },
  {
      "id": 9,
      "question": "What does the 'beforeEach' function do in Jest?",
      "options": ["Runs once before all tests", "Runs before each test", "Runs after each test", "Defines a test suite"],
      "answer": "Runs before each test",
      "explanation": "The 'beforeEach' function runs specified code before each test in a test suite, allowing for setup operations.",
      "topic": "jest",
      "example": "beforeEach(() => { jest.clearAllMocks(); });"
  },
  {
      "id": 10,
      "question": "What does the 'afterEach' function do in Jest?",
      "options": ["Runs after each test", "Runs before all tests", "Runs before each test", "Cleans up test data"],
      "answer": "Runs after each test",
      "explanation": "'afterEach' runs specified code after each test in a test suite, often used for cleanup tasks.",
      "topic": "jest",
      "example": "afterEach(() => { jest.clearAllMocks(); });"
  },
  {
      "id": 11,
      "question": "Which Jest function is used to assert that a value is true?",
      "options": ["toBeTruthy()", "toBeTrue()", "toBe()", "toEqual()"],
      "answer": "toBeTruthy()",
      "explanation": "The toBeTruthy() function is used to assert that a value is true or truthy in Jest tests.",
      "topic": "jest",
      "example": "expect(value).toBeTruthy();"
  },
  {
      "id": 12,
      "question": "What is the purpose of the 'describe' block in Jest?",
      "options": ["To group related tests together", "To define a test", "To mock a function", "To run setup code"],
      "answer": "To group related tests together",
      "explanation": "The 'describe' block is used to group related tests together, allowing for better organization and readability.",
      "topic": "jest",
      "example": "describe('MyComponent', () => { it('renders correctly', () => { }); });"
  },
  {
      "id": 13,
      "question": "What is a snapshot test in Jest?",
      "options": ["A test that compares an output to a stored snapshot", "A test that checks performance", "A test that verifies function calls", "A test that executes code in parallel"],
      "answer": "A test that compares an output to a stored snapshot",
      "explanation": "A snapshot test captures the output of a rendered component and compares it to a previously saved snapshot to detect changes.",
      "topic": "jest",
      "example": "expect(tree).toMatchSnapshot();"
  },
  {
      "id": 14,
      "question": "How can you generate a code coverage report in Jest?",
      "options": ["By running jest --coverage", "By using the coverage option in package.json", "By using jest.runCoverage()", "By installing a separate plugin"],
      "answer": "By running jest --coverage",
      "explanation": "Running jest with the --coverage flag generates a code coverage report for the tested files.",
      "topic": "jest",
      "example": "jest --coverage"
  },
  {
      "id": 15,
      "question": "Which method can you use to check if a value is not equal to another value in Jest?",
      "options": ["toBeNot()", "toBe()", "toEqual()", "toBeFalsy()"],
      "answer": "toBe()",
      "explanation": "The toBe() method is used to check if a value is strictly equal to another value in Jest tests.",
      "topic": "jest",
      "example": "expect(value).toBe(expectedValue);"
  },
  {
      "id": 16,
      "question": "What is the use of jest.fn()?",
      "options": ["To create a mock function", "To assert function calls", "To spy on function behavior", "All of the above"],
      "answer": "All of the above",
      "explanation": "jest.fn() can be used to create a mock function, assert calls to that function, and spy on its behavior.",
      "topic": "jest",
      "example": "const myMock = jest.fn();"
  },
  {
      "id": 17,
      "question": "How do you skip a test in Jest?",
      "options": ["Using .skip()", "Using .only()", "Using .ignore()", "Using .pause()"],
      "answer": "Using .skip()",
      "explanation": ".skip() allows you to skip a test, preventing it from running without removing the test code.",
      "topic": "jest",
      "example": "test.skip('this test is skipped', () => { });"
  },
  {
      "id": 18,
      "question": "What is the difference between toBe() and toEqual() in Jest?",
      "options": ["toBe() checks reference equality, while toEqual() checks value equality", "toBe() checks value equality, while toEqual() checks reference equality", "They are identical", "toEqual() is for objects only"],
      "answer": "toBe() checks reference equality, while toEqual() checks value equality",
      "explanation": "toBe() checks if two references point to the same object, while toEqual() checks if two values are equivalent.",
      "topic": "jest",
      "example": "expect(obj1).toEqual(obj2);"
  },
  {
      "id": 19,
      "question": "What is the default test runner used by Jest?",
      "options": ["Mocha", "Jasmine", "Karma", "QUnit"],
      "answer": "Jasmine",
      "explanation": "Jest uses Jasmine as its default test runner, providing a familiar syntax for defining tests.",
      "topic": "jest",
      "example": "describe('tests', () => { it('should pass', () => { }); });"
  },
  {
      "id": 20,
      "question": "How do you access the current test name in Jest?",
      "options": ["By using this.test.name", "By using jest.getCurrentTestName()", "By using it.name", "By using expect.getState().currentTestName"],
      "answer": "By using expect.getState().currentTestName",
      "explanation": "You can access the current test name using expect.getState().currentTestName.",
      "topic": "jest",
      "example": "const currentTestName = expect.getState().currentTestName;"
  },
  {
      "id": 21,
      "question": "What is the purpose of the 'jest.spyOn()' method?",
      "options": ["To create a mock function for an existing function", "To create a new instance of a function", "To create a snapshot of a function", "To run tests in parallel"],
      "answer": "To create a mock function for an existing function",
      "explanation": "jest.spyOn() creates a mock function that wraps an existing function, allowing you to track calls and return values.",
      "topic": "jest",
      "example": "const mySpy = jest.spyOn(obj, 'method');"
  },
  {
      "id": 22,
      "question": "What is the purpose of 'jest.clearAllMocks()'?",
      "options": ["To reset all mock function calls", "To clear the console", "To reset all test states", "To generate a new snapshot"],
      "answer": "To reset all mock function calls",
      "explanation": "jest.clearAllMocks() resets the state of all mock functions, clearing their call history and return values.",
      "topic": "jest",
      "example": "beforeEach(() => { jest.clearAllMocks(); });"
  },
  {
      "id": 23,
      "question": "How do you configure Jest to run in watch mode?",
      "options": ["jest --watch", "npm test --watch", "jest --runInBand", "npm run test --watch"],
      "answer": "jest --watch",
      "explanation": "Running 'jest --watch' enables watch mode, allowing Jest to automatically run tests related to changed files.",
      "topic": "jest",
      "example": "jest --watch"
  },
  {
      "id": 24,
      "question": "What does the 'test.concurrent' method do?",
      "options": ["Runs tests in parallel", "Runs tests sequentially", "Runs tests in different processes", "None of the above"],
      "answer": "Runs tests in parallel",
      "explanation": "The 'test.concurrent' method allows tests to run in parallel, improving test execution speed.",
      "topic": "jest",
      "example": "test.concurrent('test 1', async () => { });"
  },
  {
      "id": 25,
      "question": "How can you customize Jest configuration?",
      "options": ["Using a jest.config.js file", "Using package.json", "Using command-line arguments", "All of the above"],
      "answer": "All of the above",
      "explanation": "You can customize Jest configuration using a jest.config.js file, package.json, or command-line arguments.",
      "topic": "jest",
      "example": "module.exports = { testEnvironment: 'node' };"
  }
]
