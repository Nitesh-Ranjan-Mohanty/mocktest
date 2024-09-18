interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  topic: string;
}

export const jestQuestions: Question[] = [
  {
    id: 1,
    question: "How can you test a function that throws an error in Jest?",
    options: [
      "Using `toThrow` matcher",
      "Using `toBeFalsy` matcher",
      "Using `toEqual` matcher",
      "Using `toBeTruthy` matcher",
    ],
    answer: "Using `toThrow` matcher",
    explanation:
      "In Jest, the `toThrow` matcher is used to test if a function throws an error. You can specify the expected error or just check if any error is thrown. Example:\n```js\nfunction throwError() { throw new Error('Test error'); }\nexpect(throwError).toThrow('Test error');\n```",
    topic: "jest",
  },
  {
    id: 2,
    question: "How do you mock a module in Jest?",
    options: [
      "Using `jest.mock()`",
      "Using `jest.fn()`",
      "Using `jest.spyOn()`",
      "Using `jest.clearMocks()`",
    ],
    answer: "Using `jest.mock()`",
    explanation:
      "You use `jest.mock()` to mock entire modules in Jest. It allows you to provide a mock implementation of the module. Example:\n```js\njest.mock('./myModule');\nconst myModule = require('./myModule');\nmyModule.someFunction.mockImplementation(() => 'mocked value');\nexpect(myModule.someFunction()).toBe('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 3,
    question: "What is the purpose of `jest.fn()`?",
    options: [
      "To create a mock function",
      "To mock a module",
      "To run tests asynchronously",
      "To clear all mock functions",
    ],
    answer: "To create a mock function",
    explanation:
      "`jest.fn()` is used to create mock functions in Jest. These mock functions can track how many times they were called and with what arguments. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc('hello');\nexpect(mockFunc).toHaveBeenCalledWith('hello');\n```",
    topic: "jest",
  },
  {
    id: 4,
    question: "How do you mock a specific method of an object in Jest?",
    options: [
      "Using `jest.spyOn()`",
      "Using `jest.fn()`",
      "Using `jest.mock()`",
      "Using `jest.resetModules()`",
    ],
    answer: "Using `jest.spyOn()`",
    explanation:
      "`jest.spyOn()` is used to mock specific methods of an object while allowing other methods to behave as normal. Example:\n```js\nconst myObj = { myMethod: () => 'original' };\njest.spyOn(myObj, 'myMethod').mockReturnValue('mocked');\nexpect(myObj.myMethod()).toBe('mocked');\n```",
    topic: "jest",
  },
  {
    id: 5,
    question: "How can you reset all mock calls in Jest?",
    options: [
      "Using `jest.clearAllMocks()`",
      "Using `jest.resetModules()`",
      "Using `jest.mock()`",
      "Using `jest.fn()`",
    ],
    answer: "Using `jest.clearAllMocks()`",
    explanation:
      "To clear the call history of all mock functions in Jest, you use `jest.clearAllMocks()`. This is helpful for resetting the state between test cases. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalled();\njest.clearAllMocks();\nexpect(mockFunc).not.toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 6,
    question: "How do you test asynchronous code in Jest?",
    options: [
      "Using `async/await` or Promises",
      "Using `jest.spyOn()`",
      "Using `jest.mock()`",
      "Using `jest.clearMocks()`",
    ],
    answer: "Using `async/await` or Promises",
    explanation:
      "To test asynchronous code in Jest, you can use `async/await` or handle Promises with `.then()`. Example with `async/await`:\n```js\nasync function fetchData() { return 'data'; }\ntest('fetches data', async () => {\n  const data = await fetchData();\n  expect(data).toBe('data');\n});\n```",
    topic: "jest",
  },
  {
    id: 7,
    question: "How do you run only one test in Jest?",
    options: [
      "Using `test.only()`",
      "Using `test.skip()`",
      "Using `describe.only()`",
      "Using `test.todo()`",
    ],
    answer: "Using `test.only()`",
    explanation:
      "`test.only()` allows you to run just one test, which is useful for debugging a specific test. Example:\n```js\ntest.only('runs only this test', () => {\n  expect(true).toBe(true);\n});\n```",
    topic: "jest",
  },
  {
    id: 8,
    question: "How do you skip a test in Jest?",
    options: [
      "Using `test.skip()`",
      "Using `test.only()`",
      "Using `describe.only()`",
      "Using `jest.clearMocks()`",
    ],
    answer: "Using `test.skip()`",
    explanation:
      "`test.skip()` allows you to skip a specific test case. It can be useful when working on a large test suite and you want to temporarily disable a failing test. Example:\n```js\ntest.skip('skips this test', () => {\n  expect(true).toBe(false);\n});\n```",
    topic: "jest",
  },
  {
    id: 9,
    question: "What is the purpose of `jest.mockImplementation()`?",
    options: [
      "To mock the implementation of a function",
      "To clear all mock functions",
      "To run a specific test",
      "To handle asynchronous code",
    ],
    answer: "To mock the implementation of a function",
    explanation:
      "`jest.mockImplementation()` allows you to mock the specific implementation of a function. It’s useful for mocking complex logic. Example:\n```js\nconst mockFunc = jest.fn().mockImplementation(() => 'mocked value');\nexpect(mockFunc()).toBe('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 10,
    question: "How can you assert that a function was called in Jest?",
    options: [
      "Using `toHaveBeenCalled()` matcher",
      "Using `toThrow()` matcher",
      "Using `toBeFalsy()` matcher",
      "Using `toEqual()` matcher",
    ],
    answer: "Using `toHaveBeenCalled()` matcher",
    explanation:
      "In Jest, you can assert that a mock function was called by using `toHaveBeenCalled()` matcher. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalled();\n```",
    topic: "jest",
  },

  {
    id: 11,
    question:
      "How do you assert that a function was called a specific number of times in Jest?",
    options: [
      "Using `toHaveBeenCalledTimes()`",
      "Using `toHaveBeenCalledWith()`",
      "Using `toThrow()`",
      "Using `toBe()`",
    ],
    answer: "Using `toHaveBeenCalledTimes()`",
    explanation:
      "In Jest, the `toHaveBeenCalledTimes()` matcher is used to assert how many times a mock function was called. This helps in validating the behavior of functions that should only be invoked a specific number of times. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalledTimes(2);\n```",
    topic: "jest",
  },
  {
    id: 12,
    question:
      "How can you assert that a function was called with specific arguments in Jest?",
    options: [
      "Using `toHaveBeenCalledWith()`",
      "Using `toHaveBeenCalledTimes()`",
      "Using `toThrow()`",
      "Using `toBe()`",
    ],
    answer: "Using `toHaveBeenCalledWith()`",
    explanation:
      "In Jest, the `toHaveBeenCalledWith()` matcher is used to verify that a mock function was called with specific arguments. This is useful when you want to test the input values of a function. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc('hello', 123);\nexpect(mockFunc).toHaveBeenCalledWith('hello', 123);\n```",
    topic: "jest",
  },
  {
    id: 13,
    question:
      "How do you test timers in Jest, like `setTimeout` or `setInterval`?",
    options: [
      "Using `jest.useFakeTimers()`",
      "Using `jest.spyOn()`",
      "Using `jest.mock()`",
      "Using `jest.fn()`",
    ],
    answer: "Using `jest.useFakeTimers()`",
    explanation:
      "In Jest, `jest.useFakeTimers()` is used to mock and control functions like `setTimeout` and `setInterval`. This allows you to advance the timers manually, making it easier to test asynchronous code that relies on timing. Example:\n```js\njest.useFakeTimers();\nconst mockFunc = jest.fn();\nsetTimeout(mockFunc, 1000);\njest.advanceTimersByTime(1000);\nexpect(mockFunc).toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 14,
    question:
      "How do you restore the original implementation of a mocked function in Jest?",
    options: [
      "Using `mockRestore()`",
      "Using `jest.clearAllMocks()`",
      "Using `jest.resetModules()`",
      "Using `jest.fn()`",
    ],
    answer: "Using `mockRestore()`",
    explanation:
      "`mockRestore()` is used in Jest to restore the original implementation of a function that has been mocked, typically when using `jest.spyOn()`. This is useful when you want to return to the original behavior after testing a mocked function. Example:\n```js\nconst myObj = { myMethod: () => 'original' };\nconst spy = jest.spyOn(myObj, 'myMethod').mockReturnValue('mocked');\nexpect(myObj.myMethod()).toBe('mocked');\nspy.mockRestore();\nexpect(myObj.myMethod()).toBe('original');\n```",
    topic: "jest",
  },
  {
    id: 15,
    question: "What is the purpose of `jest.resetModules()`?",
    options: [
      "It resets the module registry",
      "It mocks a module",
      "It resets all mocks",
      "It runs only one test",
    ],
    answer: "It resets the module registry",
    explanation:
      "`jest.resetModules()` is used to reset the module registry, which clears the cache of loaded modules. This is useful when you need to test code in a fresh module state or when testing code that modifies the module itself. Example:\n```js\njest.resetModules();\nconst myModule = require('./myModule');\n```",
    topic: "jest",
  },
  {
    id: 16,
    question: "What is `jest.mockClear()` used for?",
    options: [
      "To clear the call history of a mock function",
      "To restore the original implementation of a mock",
      "To mock a module",
      "To reset the module registry",
    ],
    answer: "To clear the call history of a mock function",
    explanation:
      "`jest.mockClear()` clears the call history of a mock function without removing its implementation. This is useful when you need to reset the call count or arguments for a specific test case. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalled();\nmockFunc.mockClear();\nexpect(mockFunc).not.toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 17,
    question: "How can you test promises in Jest?",
    options: [
      "Using `return` with a promise",
      "Using `jest.spyOn()`",
      "Using `jest.clearAllMocks()`",
      "Using `jest.mock()`",
    ],
    answer: "Using `return` with a promise",
    explanation:
      "In Jest, you can test promises by returning them from a test. Jest will wait for the promise to resolve before completing the test. Example:\n```js\nfunction fetchData() { return Promise.resolve('data'); }\ntest('fetches data', () => {\n  return fetchData().then(data => {\n    expect(data).toBe('data');\n  });\n});\n```",
    topic: "jest",
  },
  {
    id: 18,
    question: "What is the purpose of `jest.spyOn()`?",
    options: [
      "To mock a specific method of an object",
      "To mock an entire module",
      "To create a mock function",
      "To reset the call history of a mock function",
    ],
    answer: "To mock a specific method of an object",
    explanation:
      "`jest.spyOn()` is used to mock specific methods of an object, allowing you to track their calls while leaving other methods of the object unmodified. Example:\n```js\nconst myObj = { myMethod: () => 'original' };\nconst spy = jest.spyOn(myObj, 'myMethod').mockReturnValue('mocked');\nexpect(myObj.myMethod()).toBe('mocked');\nspy.mockRestore();\n```",
    topic: "jest",
  },
  {
    id: 19,
    question: "How do you handle snapshots in Jest?",
    options: [
      "Using `toMatchSnapshot()`",
      "Using `jest.clearAllMocks()`",
      "Using `jest.spyOn()`",
      "Using `jest.fn()`",
    ],
    answer: "Using `toMatchSnapshot()`",
    explanation:
      "`toMatchSnapshot()` is used to capture a snapshot of a value and compare it to previously stored snapshots. This is useful for testing UI components or other complex data structures. Example:\n```js\nconst component = renderer.create(<MyComponent />).toJSON();\nexpect(component).toMatchSnapshot();\n```",
    topic: "jest",
  },
  {
    id: 20,
    question: "How can you mock a return value of a function in Jest?",
    options: [
      "Using `mockReturnValue()`",
      "Using `jest.spyOn()`",
      "Using `jest.mock()`",
      "Using `jest.clearMocks()`",
    ],
    answer: "Using `mockReturnValue()`",
    explanation:
      "`mockReturnValue()` is used to mock the return value of a function in Jest. This is helpful when you want the mock function to consistently return a specific value. Example:\n```js\nconst mockFunc = jest.fn().mockReturnValue('mocked value');\nexpect(mockFunc()).toBe('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 21,
    question: "What is the difference between `jest.fn()` and `jest.spyOn()`?",
    options: [
      "`jest.fn()` creates a mock function, while `jest.spyOn()` mocks an existing method.",
      "`jest.fn()` creates a real function, while `jest.spyOn()` creates a mock function.",
      "`jest.fn()` mocks a module, while `jest.spyOn()` mocks an object.",
      "`jest.fn()` and `jest.spyOn()` are identical in functionality.",
    ],
    answer:
      "`jest.fn()` creates a mock function, while `jest.spyOn()` mocks an existing method.",
    explanation:
      "`jest.fn()` creates a standalone mock function that can be called and tested. On the other hand, `jest.spyOn()` attaches a mock to an existing method of an object, allowing you to monitor and control how it is used without affecting other parts of the object. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalled();\n\nconst obj = { myMethod: () => 'original' };\nconst spy = jest.spyOn(obj, 'myMethod').mockReturnValue('mocked');\nexpect(obj.myMethod()).toBe('mocked');\n```",
    topic: "jest",
  },
  {
    id: 22,
    question: "How do you mock a module using Jest?",
    options: [
      "Using `jest.mock()`",
      "Using `jest.spyOn()`",
      "Using `jest.fn()`",
      "Using `jest.clearAllMocks()`",
    ],
    answer: "Using `jest.mock()`",
    explanation:
      "`jest.mock()` is used to mock entire modules in Jest. This is particularly useful when you want to control how the functions or classes from a specific module behave during tests. Example:\n```js\njest.mock('./myModule', () => ({ myMethod: jest.fn(() => 'mocked result') }));\nconst { myMethod } = require('./myModule');\nexpect(myMethod()).toBe('mocked result');\n```",
    topic: "jest",
  },
  {
    id: 23,
    question:
      "How do you mock a resolved value for a function that returns a promise?",
    options: [
      "Using `mockResolvedValue()`",
      "Using `mockReturnValue()`",
      "Using `jest.spyOn()`",
      "Using `jest.mock()`",
    ],
    answer: "Using `mockResolvedValue()`",
    explanation:
      "`mockResolvedValue()` is used to mock the resolved value of a promise-returning function in Jest. This is useful when testing asynchronous functions that return promises. Example:\n```js\nconst mockFunc = jest.fn().mockResolvedValue('resolved value');\nawait expect(mockFunc()).resolves.toBe('resolved value');\n```",
    topic: "jest",
  },
  {
    id: 24,
    question:
      "How do you mock a rejected value for a function that returns a promise?",
    options: [
      "Using `mockRejectedValue()`",
      "Using `mockReturnValue()`",
      "Using `jest.spyOn()`",
      "Using `jest.mock()`",
    ],
    answer: "Using `mockRejectedValue()`",
    explanation:
      "`mockRejectedValue()` is used to mock the rejected value of a promise-returning function in Jest. This helps simulate errors in asynchronous code. Example:\n```js\nconst mockFunc = jest.fn().mockRejectedValue('error');\nawait expect(mockFunc()).rejects.toBe('error');\n```",
    topic: "jest",
  },
  {
    id: 25,
    question: "What does `jest.clearAllMocks()` do?",
    options: [
      "Clears all mocks' call history",
      "Removes all mock implementations",
      "Resets all modules",
      "Restores all spies",
    ],
    answer: "Clears all mocks' call history",
    explanation:
      "`jest.clearAllMocks()` clears the call history of all mock functions but retains their implementations. This is useful when running multiple tests in a suite, ensuring that previous test calls don't affect later ones. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalled();\njest.clearAllMocks();\nexpect(mockFunc).not.toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 26,
    question: "What does `jest.resetAllMocks()` do?",
    options: [
      "Resets all mock functions to their initial state",
      "Clears the call history of all mocks",
      "Removes mock implementations",
      "Resets the module registry",
    ],
    answer: "Resets all mock functions to their initial state",
    explanation:
      "`jest.resetAllMocks()` resets the state of all mock functions to their initial state, removing any return values or implementations that were set during the test. This is useful when you want to ensure no mock state carries over between tests. Example:\n```js\nconst mockFunc = jest.fn().mockReturnValue('mocked');\nexpect(mockFunc()).toBe('mocked');\njest.resetAllMocks();\nexpect(mockFunc()).toBeUndefined();\n```",
    topic: "jest",
  },
  {
    id: 27,
    question: "What does `jest.restoreAllMocks()` do?",
    options: [
      "Restores the original implementations of all spied-on methods",
      "Clears the call history of all mocks",
      "Resets all mocks to their initial state",
      "Clears all mock modules",
    ],
    answer: "Restores the original implementations of all spied-on methods",
    explanation:
      "`jest.restoreAllMocks()` restores the original implementations of all methods that were spied on using `jest.spyOn()`. This is useful when you want to ensure the original behavior of methods is reinstated after mocking. Example:\n```js\nconst myObj = { myMethod: () => 'original' };\nconst spy = jest.spyOn(myObj, 'myMethod').mockReturnValue('mocked');\nexpect(myObj.myMethod()).toBe('mocked');\njest.restoreAllMocks();\nexpect(myObj.myMethod()).toBe('original');\n```",
    topic: "jest",
  },
  {
    id: 28,
    question: "What is the purpose of `jest.fn()`?",
    options: [
      "To create a mock function",
      "To spy on an existing function",
      "To mock an entire module",
      "To reset all mocks",
    ],
    answer: "To create a mock function",
    explanation:
      "`jest.fn()` creates a mock function that you can use to track calls and arguments, as well as mock return values. This is commonly used in unit tests to replace real implementations with controlled behaviors. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc('test');\nexpect(mockFunc).toHaveBeenCalledWith('test');\n```",
    topic: "jest",
  },
  {
    id: 29,
    question: "How can you group multiple related tests in Jest?",
    options: [
      "Using `describe()`",
      "Using `test()`",
      "Using `it()`",
      "Using `jest.fn()`",
    ],
    answer: "Using `describe()`",
    explanation:
      "`describe()` in Jest is used to group related tests together. This helps organize test cases into logical units, making test suites easier to read and manage. Example:\n```js\ndescribe('Math operations', () => {\n  test('adds two numbers', () => {\n    expect(1 + 1).toBe(2);\n  });\n  test('multiplies two numbers', () => {\n    expect(2 * 3).toBe(6);\n  });\n});\n```",
    topic: "jest",
  },
  {
    id: 30,
    question: "What is the difference between `test()` and `it()` in Jest?",
    options: [
      "There is no functional difference",
      "`test()` runs tests sequentially while `it()` runs them in parallel",
      "`it()` is an alias for `describe()`",
      "`test()` is for functional tests, while `it()` is for unit tests",
    ],
    answer: "There is no functional difference",
    explanation:
      "In Jest, `test()` and `it()` are interchangeable, and there is no functional difference between them. Both are used to define individual test cases. Many developers prefer `it()` when describing the behavior of components or functions. Example:\n```js\ntest('adds numbers', () => {\n  expect(1 + 1).toBe(2);\n});\n\nit('multiplies numbers', () => {\n  expect(2 * 3).toBe(6);\n});\n```",
    topic: "jest",
  },
  {
    id: 31,
    question: "How do you run a specific test file in Jest?",
    options: [
      "Run `jest path/to/file.test.js`",
      "Run `jest` with the `--testFile` flag",
      "Run `jest run --file`",
      "Run `jest only path/to/file.test.js`",
    ],
    answer: "Run `jest path/to/file.test.js`",
    explanation:
      "To run a specific test file in Jest, you can specify the path to the test file as an argument when invoking Jest. Example: `jest path/to/file.test.js`. This runs only the tests defined in that file.",
    topic: "jest",
  },
  ,
  {
    id: 32,
    question: "How can you run only specific tests within a file using Jest?",
    options: [
      "Use `test.only()`",
      "Use `describe.only()`",
      "Use `jest.only()`",
      "Use `test.skip()`",
    ],
    answer: "Use `test.only()`",
    explanation:
      "`test.only()` is used to run only the specified test, ignoring all other tests in the file. This is useful for focusing on specific test cases during development. Example:\n```js\ntest.only('this test runs', () => {\n  expect(true).toBe(true);\n});\ntest('this test is skipped', () => {\n  expect(true).toBe(true);\n});\n```",
    topic: "jest",
  },
  {
    id: 33,
    question: "What does `test.skip()` do in Jest?",
    options: [
      "Skips the test",
      "Runs the test but ignores the result",
      "Skips the test and logs a warning",
      "Marks the test as pending",
    ],
    answer: "Skips the test",
    explanation:
      "`test.skip()` tells Jest to skip the specified test case. This is useful when you want to temporarily disable tests without deleting them. Example:\n```js\ntest.skip('this test is skipped', () => {\n  expect(true).toBe(true);\n});\n```",
    topic: "jest",
  },
  {
    id: 34,
    question: "How do you test if a function throws an error in Jest?",
    options: [
      "Use `expect(() => fn()).toThrow()`",
      "Use `expect(fn).toThrow()`",
      "Use `expect(fn()).toThrowError()`",
      "Use `expect(() => fn()).toError()`",
    ],
    answer: "Use `expect(() => fn()).toThrow()`",
    explanation:
      "To test if a function throws an error, wrap the function in a lambda and use `toThrow()`. This ensures Jest checks whether the function throws an error. Example:\n```js\nfunction myFunc() {\n  throw new Error('Test error');\n}\nexpect(() => myFunc()).toThrow('Test error');\n```",
    topic: "jest",
  },
  {
    id: 35,
    question: "How can you mock an external API call in Jest?",
    options: [
      "Using `jest.mock()` and `jest.fn()`",
      "Using `jest.spyOn()`",
      "Using `jest.clearAllMocks()`",
      "Using `jest.resetModules()`",
    ],
    answer: "Using `jest.mock()` and `jest.fn()`",
    explanation:
      "You can mock external API calls by using `jest.mock()` to mock the module that makes the request, and `jest.fn()` to simulate the behavior of the API call. This allows you to control the behavior of the API during tests. Example:\n```js\njest.mock('axios', () => ({\n  get: jest.fn(() => Promise.resolve({ data: 'mocked data' }))\n}));\nconst axios = require('axios');\nconst data = await axios.get('/api');\nexpect(data).toEqual({ data: 'mocked data' });\n```",
    topic: "jest",
  },
  {
    id: 36,
    question: "How do you simulate a timer in Jest tests?",
    options: [
      "Using `jest.useFakeTimers()`",
      "Using `jest.mockTimers()`",
      "Using `jest.fnTimers()`",
      "Using `jest.mockFunctions()`",
    ],
    answer: "Using `jest.useFakeTimers()`",
    explanation:
      "`jest.useFakeTimers()` allows you to simulate the behavior of timers (e.g., `setTimeout`, `setInterval`) in your tests. This is useful for testing asynchronous code that relies on timing functions. Example:\n```js\njest.useFakeTimers();\nsetTimeout(() => {\n  console.log('Timer triggered');\n}, 1000);\njest.advanceTimersByTime(1000);\nexpect(console.log).toHaveBeenCalledWith('Timer triggered');\n```",
    topic: "jest",
  },
  {
    id: 37,
    question: "What is the purpose of `jest.advanceTimersByTime()`?",
    options: [
      "Advances the fake timer by a specified amount of time",
      "Resets all timers in the test suite",
      "Advances real timers by a specified time",
      "Disables all fake timers",
    ],
    answer: "Advances the fake timer by a specified amount of time",
    explanation:
      "`jest.advanceTimersByTime(ms)` allows you to manually advance the fake timers by a given amount of milliseconds. This is useful for testing time-dependent logic without actually waiting for time to pass. Example:\n```js\njest.useFakeTimers();\nsetTimeout(() => console.log('done'), 1000);\njest.advanceTimersByTime(1000);\nexpect(console.log).toHaveBeenCalledWith('done');\n```",
    topic: "jest",
  },
  {
    id: 38,
    question: "How do you reset Jest's module registry between tests?",
    options: [
      "Using `jest.resetModules()`",
      "Using `jest.clearAllMocks()`",
      "Using `jest.mock()`",
      "Using `jest.resetAllMocks()`",
    ],
    answer: "Using `jest.resetModules()`",
    explanation:
      "`jest.resetModules()` resets the module registry, causing all modules to be re-imported in the next test. This is useful when you want to ensure each test starts with a clean slate, especially when modules are cached by Jest. Example:\n```js\njest.resetModules();\nconst myModule = require('./myModule');\n// myModule will be freshly loaded\n```",
    topic: "jest",
  },
  {
    id: 39,
    question: "How can you test React components with Jest?",
    options: [
      "By using `@testing-library/react`",
      "By using `jest.spyOn()`",
      "By using `jest.mock()`",
      "By using `jest.fn()`",
    ],
    answer: "By using `@testing-library/react`",
    explanation:
      "For testing React components, Jest is commonly used alongside `@testing-library/react`, which provides utilities to render components and interact with them. This allows you to assert on the component's behavior and UI. Example:\n```js\nimport { render, screen } from '@testing-library/react';\nimport MyComponent from './MyComponent';\nrender(<MyComponent />);\nexpect(screen.getByText('Hello')).toBeInTheDocument();\n```",
    topic: "jest",
  },
  {
    id: 40,
    question:
      "How do you check if a function has been called with specific arguments in Jest?",
    options: [
      "Using `toHaveBeenCalledWith()`",
      "Using `toHaveBeenCalled()`",
      "Using `toBeCalled()`",
      "Using `jest.fn()`",
    ],
    answer: "Using `toHaveBeenCalledWith()`",
    explanation:
      "`toHaveBeenCalledWith()` asserts that a mock function was called with specific arguments. This is useful for verifying that a function was invoked with the expected parameters. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc('arg1', 'arg2');\nexpect(mockFunc).toHaveBeenCalledWith('arg1', 'arg2');\n```",
    topic: "jest",
  },
  {
    id: 41,
    question: "What is the difference between `jest.fn()` and `jest.mock()`?",
    options: [
      "`jest.fn()` mocks individual functions, while `jest.mock()` mocks entire modules.",
      "`jest.fn()` and `jest.mock()` are identical.",
      "`jest.fn()` mocks an entire module, while `jest.mock()` mocks individual functions.",
      "`jest.fn()` mocks objects, while `jest.mock()` mocks functions.",
    ],
    answer:
      "`jest.fn()` mocks individual functions, while `jest.mock()` mocks entire modules.",
    explanation:
      "`jest.fn()` is used to create individual mock functions, whereas `jest.mock()` is used to mock entire modules, replacing all exported functions or objects from that module. Example:\n```js\njest.mock('./module');\nconst { myMethod } = require('./module');\nexpect(myMethod()).toBeUndefined();\n\nconst mockFunc = jest.fn();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 42,
    question: "How do you clear all mock calls and instances in Jest?",
    options: [
      "Using `jest.clearAllMocks()`",
      "Using `jest.resetAllMocks()`",
      "Using `jest.mockClear()`",
      "Using `jest.clearMocks()`",
    ],
    answer: "Using `jest.clearAllMocks()`",
    explanation:
      "`jest.clearAllMocks()` resets all information stored in mocked functions, including call counts, instances, and return values. It is useful when you want to reset mocks between tests without re-mocking them. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalledTimes(1);\njest.clearAllMocks();\nexpect(mockFunc).toHaveBeenCalledTimes(0);\n```",
    topic: "jest",
  },
  {
    id: 43,
    question: "What does `jest.resetAllMocks()` do?",
    options: [
      "Resets all mock implementations and restores their initial state",
      "Clears all mock calls and instances",
      "Resets only the mock return values",
      "Completely removes mock implementations",
    ],
    answer: "Resets all mock implementations and restores their initial state",
    explanation:
      "`jest.resetAllMocks()` restores all mock functions to their original state as if they were newly created, including resetting mock implementations. This is useful for ensuring that no residual mock behavior persists between tests. Example:\n```js\nconst mockFunc = jest.fn(() => 'mocked value');\nmockFunc();\nexpect(mockFunc).toHaveBeenCalledTimes(1);\njest.resetAllMocks();\nexpect(mockFunc).not.toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 44,
    question: "How do you mock a return value of a function in Jest?",
    options: [
      "Using `jest.fn().mockReturnValue()`",
      "Using `jest.mock().mockReturnValue()`",
      "Using `jest.fn()`",
      "Using `jest.spyOn()`",
    ],
    answer: "Using `jest.fn().mockReturnValue()`",
    explanation:
      "You can mock a function's return value using `jest.fn().mockReturnValue()`, which allows you to specify what the function should return when it is called. Example:\n```js\nconst mockFunc = jest.fn().mockReturnValue('mocked value');\nexpect(mockFunc()).toBe('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 45,
    question: "What does `jest.spyOn()` do in Jest?",
    options: [
      "Spies on an object method and tracks its calls",
      "Mocks a function and replaces it with a fake one",
      "Returns a mocked value for a function",
      "Resets the module registry",
    ],
    answer: "Spies on an object method and tracks its calls",
    explanation:
      "`jest.spyOn()` allows you to spy on a method of an object, tracking how many times it has been called and with what arguments, while still preserving the original implementation unless mocked. Example:\n```js\nconst obj = { method: () => 'real value' };\nconst spy = jest.spyOn(obj, 'method');\nobj.method();\nexpect(spy).toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 46,
    question:
      "How can you check if a mocked function has returned a specific value in Jest?",
    options: [
      "Using `toHaveReturnedWith()`",
      "Using `toHaveBeenCalledWith()`",
      "Using `toBeCalled()`",
      "Using `jest.mockReturnValue()`",
    ],
    answer: "Using `toHaveReturnedWith()`",
    explanation:
      "`toHaveReturnedWith()` allows you to assert that a mock function returned a specific value at least once. This is useful for verifying the result of a mocked function. Example:\n```js\nconst mockFunc = jest.fn(() => 'mocked value');\nmockFunc();\nexpect(mockFunc).toHaveReturnedWith('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 47,
    question: "How do you mock a function inside a module in Jest?",
    options: [
      "Using `jest.mock()` with `jest.fn()`",
      "Using `jest.clearMocks()`",
      "Using `jest.spyOn()`",
      "Using `jest.resetMocks()`",
    ],
    answer: "Using `jest.mock()` with `jest.fn()`",
    explanation:
      "To mock a function inside a module, you use `jest.mock()` to mock the entire module, and then `jest.fn()` to mock individual functions from that module. Example:\n```js\njest.mock('./myModule', () => ({\n  myFunction: jest.fn(() => 'mocked value')\n}));\nconst { myFunction } = require('./myModule');\nexpect(myFunction()).toBe('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 48,
    question: "How do you use Jest's `mockImplementationOnce()` method?",
    options: [
      "To mock the implementation of a function for a single call",
      "To mock a function throughout the test",
      "To reset a mock function's implementation",
      "To verify a mock's implementation",
    ],
    answer: "To mock the implementation of a function for a single call",
    explanation:
      "`mockImplementationOnce()` is used to mock the behavior of a function for one specific call, after which the function reverts to its original implementation or another mock. Example:\n```js\nconst mockFunc = jest.fn().mockImplementationOnce(() => 'first call').mockImplementationOnce(() => 'second call');\nexpect(mockFunc()).toBe('first call');\nexpect(mockFunc()).toBe('second call');\n```",
    topic: "jest",
  },
  {
    id: 49,
    question:
      "How do you assert that a mock function was called a specific number of times?",
    options: [
      "Using `toHaveBeenCalledTimes()`",
      "Using `toHaveBeenCalledWith()`",
      "Using `toBeCalled()`",
      "Using `jest.fn()`",
    ],
    answer: "Using `toHaveBeenCalledTimes()`",
    explanation:
      "`toHaveBeenCalledTimes()` is used to assert that a mock function was called a certain number of times during a test. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalledTimes(2);\n```",
    topic: "jest",
  },
  {
    id: 50,
    question: "How can you reset all mocks in Jest between tests?",
    options: [
      "Using `jest.resetAllMocks()`",
      "Using `jest.clearAllMocks()`",
      "Using `jest.restoreAllMocks()`",
      "Using `jest.clearMocks()`",
    ],
    answer: "Using `jest.resetAllMocks()`",
    explanation:
      "`jest.resetAllMocks()` resets all mocks to their initial state, which includes removing any mock implementation and clearing calls, instances, and results. It ensures that no test case is affected by the behavior of previous tests. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalled();\njest.resetAllMocks();\nexpect(mockFunc).not.toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 51,
    question: "What is the purpose of `jest.restoreAllMocks()`?",
    options: [
      "Restores all mocked functions to their original implementations",
      "Resets all mock calls and instances",
      "Clears all mock implementations",
      "Removes mock behaviors and instances",
    ],
    answer: "Restores all mocked functions to their original implementations",
    explanation:
      "`jest.restoreAllMocks()` is useful when you want to restore the original implementation of mocked functions. This is particularly helpful if you use `jest.spyOn()` to mock methods and want to revert them back to their initial state. Example:\n```js\nconst obj = { method: () => 'real value' };\njest.spyOn(obj, 'method').mockReturnValue('mocked value');\nexpect(obj.method()).toBe('mocked value');\njest.restoreAllMocks();\nexpect(obj.method()).toBe('real value');\n```",
    topic: "jest",
  },
  {
    id: 52,
    question: "What does `expect.any()` do in Jest?",
    options: [
      "Matches any argument of a given type",
      "Matches an exact argument",
      "Checks for truthy values",
      "Compares function call counts",
    ],
    answer: "Matches any argument of a given type",
    explanation:
      "`expect.any()` is used to match any argument of a specific type. It is helpful when you need to assert that a function was called with arguments of a particular type without worrying about their exact values. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc('string');\nexpect(mockFunc).toHaveBeenCalledWith(expect.any(String));\n```",
    topic: "jest",
  },
  {
    id: 53,
    question: "How do you run only a specific test in Jest?",
    options: [
      "Using `test.only()`",
      "Using `test.skip()`",
      "Using `jest.only()`",
      "Using `describe.only()`",
    ],
    answer: "Using `test.only()`",
    explanation:
      "You can run a single test by using `test.only()`. This is useful for isolating a test during debugging. Only tests marked with `.only()` will run, while others will be skipped. Example:\n```js\ntest.only('runs only this test', () => {\n  expect(true).toBe(true);\n});\ntest('this test will be skipped', () => {\n  expect(true).toBe(false);\n});\n```",
    topic: "jest",
  },
  {
    id: 54,
    question: "How do you skip a specific test in Jest?",
    options: [
      "Using `test.skip()`",
      "Using `test.only()`",
      "Using `jest.skip()`",
      "Using `describe.skip()`",
    ],
    answer: "Using `test.skip()`",
    explanation:
      "`test.skip()` is used to skip a specific test without deleting it. This is helpful when a test is failing, but you do not want it to interfere with other tests. Example:\n```js\ntest.skip('this test will be skipped', () => {\n  expect(true).toBe(false);\n});\ntest('this test will run', () => {\n  expect(true).toBe(true);\n});\n```",
    topic: "jest",
  },
  {
    id: 55,
    question: "What does `expect.objectContaining()` do?",
    options: [
      "Matches an object with the expected subset of properties",
      "Checks if an object matches the exact value",
      "Checks if the object contains a specific value",
      "Compares two objects",
    ],
    answer: "Matches an object with the expected subset of properties",
    explanation:
      "`expect.objectContaining()` allows you to assert that an object contains specific properties without checking the entire object. It is useful when you only care about certain fields in the object. Example:\n```js\nconst obj = { a: 1, b: 2, c: 3 };\nexpect(obj).toEqual(expect.objectContaining({ a: 1, b: 2 }));\n```",
    topic: "jest",
  },
  {
    id: 56,
    question: "How do you test if an array contains specific elements in Jest?",
    options: [
      "Using `expect.arrayContaining()`",
      "Using `expect.any()`",
      "Using `expect.arrayIncludes()`",
      "Using `expect.contains()`",
    ],
    answer: "Using `expect.arrayContaining()`",
    explanation:
      "`expect.arrayContaining()` checks if an array contains the expected elements, regardless of their order. This is useful when you want to assert that an array includes specific items. Example:\n```js\nconst arr = [1, 2, 3];\nexpect(arr).toEqual(expect.arrayContaining([1, 2]));\n```",
    topic: "jest",
  },
  {
    id: 57,
    question: "What does `jest.mockClear()` do?",
    options: [
      "Clears information stored in mock function calls",
      "Resets the mock implementation",
      "Removes a mock",
      "Mocks a function with no implementation",
    ],
    answer: "Clears information stored in mock function calls",
    explanation:
      "`jest.mockClear()` clears the call count, arguments, and results of a mocked function but keeps the mock implementation intact. It is useful for resetting a mock between multiple tests. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalled();\njest.mockClear();\nexpect(mockFunc).not.toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 58,
    question: "What does `jest.isMockFunction()` do?",
    options: [
      "Checks if a function is a mock",
      "Checks if a function is called",
      "Mocks a function",
      "Resets a mock function",
    ],
    answer: "Checks if a function is a mock",
    explanation:
      "`jest.isMockFunction()` determines whether a given function is a mock function. This is helpful for verifying that a function was correctly mocked before proceeding with tests. Example:\n```js\nconst mockFunc = jest.fn();\nexpect(jest.isMockFunction(mockFunc)).toBe(true);\n```",
    topic: "jest",
  },
  {
    id: 59,
    question: "What is the purpose of `jest.advanceTimersByTime()`?",
    options: [
      "Advances the mock timer by a specified amount of time",
      "Clears the mock timer",
      "Mocks a timer",
      "Removes all timers",
    ],
    answer: "Advances the mock timer by a specified amount of time",
    explanation:
      "`jest.advanceTimersByTime()` is used to fast-forward mock timers by a given number of milliseconds. This is useful when testing code that relies on timeouts or intervals. Example:\n```js\njest.useFakeTimers();\nconst callback = jest.fn();\nsetTimeout(callback, 1000);\njest.advanceTimersByTime(1000);\nexpect(callback).toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 60,
    question: "How do you enable fake timers in Jest?",
    options: [
      "Using `jest.useFakeTimers()`",
      "Using `jest.enableTimers()`",
      "Using `jest.spyOn()`",
      "Using `jest.mockTimers()`",
    ],
    answer: "Using `jest.useFakeTimers()`",
    explanation:
      "`jest.useFakeTimers()` is used to mock the native `setTimeout`, `setInterval`, and other timer functions in Jest. This allows you to control time in tests and manually advance the timer when needed. Example:\n```js\njest.useFakeTimers();\nconst callback = jest.fn();\nsetTimeout(callback, 1000);\njest.runAllTimers();\nexpect(callback).toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 61,
    question: "How do you reset all modules in Jest?",
    options: [
      "Using `jest.resetModules()`",
      "Using `jest.resetAllMocks()`",
      "Using `jest.clearModules()`",
      "Using `jest.mockReset()`",
    ],
    answer: "Using `jest.resetModules()`",
    explanation:
      "`jest.resetModules()` clears the module registry, making Jest forget all the modules it has loaded. This is helpful when you want to reset module imports between tests to avoid state leakage. Example:\n```js\njest.resetModules();\nconst moduleA = require('./moduleA');\n// Now, require a fresh copy of moduleA\n```",
    topic: "jest",
  },
  {
    id: 62,
    question: "What is `jest.mock()` used for?",
    options: [
      "To mock entire modules or specific functions",
      "To check the implementation of a function",
      "To run only specific tests",
      "To spy on method calls",
    ],
    answer: "To mock entire modules or specific functions",
    explanation:
      "`jest.mock()` is used to mock entire modules or specific functions within those modules. It allows you to replace the implementation of a module or function with a mock for testing purposes. Example:\n```js\njest.mock('./myModule', () => ({ myFunction: jest.fn() }));\nconst { myFunction } = require('./myModule');\nmyFunction();\nexpect(myFunction).toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 63,
    question: "How do you mock an ES6 class in Jest?",
    options: [
      "Using `jest.mock()` with `jest.fn()`",
      "Using `jest.spyOn()`",
      "Using `jest.clearMocks()`",
      "Using `jest.fn()` directly",
    ],
    answer: "Using `jest.mock()` with `jest.fn()`",
    explanation:
      "To mock an ES6 class, you use `jest.mock()` and provide a mock implementation. This approach allows you to control the behavior of the class and its methods. Example:\n```js\nclass MyClass {\n  method() {\n    return 'real value';\n  }\n}\n\njest.mock('./MyClass', () => {\n  return { MyClass: jest.fn().mockImplementation(() => ({ method: jest.fn(() => 'mocked value') })) };\n});\n\nconst { MyClass } = require('./MyClass');\nconst instance = new MyClass();\nexpect(instance.method()).toBe('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 64,
    question: "How can you mock a static method of a class in Jest?",
    options: [
      "Using `jest.spyOn()` on the class",
      "Using `jest.mock()` on the class",
      "Using `jest.fn()` directly",
      "Using `jest.clearAllMocks()`",
    ],
    answer: "Using `jest.spyOn()` on the class",
    explanation:
      "`jest.spyOn()` can be used to mock static methods of a class by spying on the method and providing a mock implementation. Example:\n```js\nclass MyClass {\n  static staticMethod() {\n    return 'real value';\n  }\n}\n\njest.spyOn(MyClass, 'staticMethod').mockReturnValue('mocked value');\nexpect(MyClass.staticMethod()).toBe('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 65,
    question: "What is `jest.fn()` used for?",
    options: [
      "To create a mock function",
      "To create a real function",
      "To clear mock calls",
      "To spy on a method",
    ],
    answer: "To create a mock function",
    explanation:
      "`jest.fn()` creates a new mock function. This mock function can track calls, return values, and implement custom behaviors. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 66,
    question: "How do you use Jest to test asynchronous code?",
    options: [
      "Using `async`/`await` with `expect`",
      "Using `done` callback",
      "Using `expect.promise()`",
      "Using `jest.runAllTimers()`",
    ],
    answer: "Using `async`/`await` with `expect`",
    explanation:
      "You can test asynchronous code in Jest by using `async`/`await` with `expect`. This allows you to write tests that wait for asynchronous operations to complete before making assertions. Example:\n```js\ntest('async test', async () => {\n  const data = await fetchData();\n  expect(data).toBe('expected value');\n});\n```",
    topic: "jest",
  },
  {
    id: 67,
    question: "How can you test if a promise is rejected in Jest?",
    options: [
      "Using `expect(promise).rejects.toThrow()`",
      "Using `expect(promise).resolves.toBe()`",
      "Using `expect(promise).toThrow()`",
      "Using `expect(promise).not.toBe()`",
    ],
    answer: "Using `expect(promise).rejects.toThrow()`",
    explanation:
      "`expect(promise).rejects.toThrow()` is used to assert that a promise is rejected with an error. This is useful for testing error cases in asynchronous code. Example:\n```js\nawait expect(fetchData()).rejects.toThrow('Error message');\n```",
    topic: "jest",
  },
  {
    id: 68,
    question:
      "How can you mock a module and its methods with different implementations in Jest?",
    options: [
      "Using `jest.mock()` with multiple mock functions",
      "Using `jest.spyOn()` for each method",
      "Using `jest.resetModules()`",
      "Using `jest.clearAllMocks()`",
    ],
    answer: "Using `jest.mock()` with multiple mock functions",
    explanation:
      "To mock a module with different implementations for each method, you use `jest.mock()` and provide custom implementations for the methods you want to mock. Example:\n```js\njest.mock('./myModule', () => ({\n  method1: jest.fn(() => 'value1'),\n  method2: jest.fn(() => 'value2')\n}));\nconst { method1, method2 } = require('./myModule');\nexpect(method1()).toBe('value1');\nexpect(method2()).toBe('value2');\n```",
    topic: "jest",
  },
  {
    id: 69,
    question: "What is the purpose of `jest.requireActual()`?",
    options: [
      "To get the actual implementation of a module",
      "To mock a module",
      "To clear a module's cache",
      "To restore the original module",
    ],
    answer: "To get the actual implementation of a module",
    explanation:
      "`jest.requireActual()` is used to get the real implementation of a module that you have mocked. This is useful when you want to partially mock a module and still use the original implementation for some methods. Example:\n```js\nconst actualImplementation = jest.requireActual('./myModule');\njest.mock('./myModule', () => ({\n  ...actualImplementation,\n  method: jest.fn(() => 'mocked value')\n}));\nconst { method } = require('./myModule');\nexpect(method()).toBe('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 70,
    question:
      "How can you test that a function is called with specific arguments in Jest?",
    options: [
      "Using `expect(fn).toHaveBeenCalledWith()`",
      "Using `expect(fn).toHaveBeenCalled()`",
      "Using `expect(fn).toHaveBeenCalledTimes()`",
      "Using `expect(fn).toHaveReturnedWith()`",
    ],
    answer: "Using `expect(fn).toHaveBeenCalledWith()`",
    explanation:
      "`expect(fn).toHaveBeenCalledWith()` is used to assert that a function was called with specific arguments. This is useful for verifying that the function is called with the correct parameters. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc('arg1', 'arg2');\nexpect(mockFunc).toHaveBeenCalledWith('arg1', 'arg2');\n```",
    topic: "jest",
  },
  {
    id: 71,
    question: "How can you mock `console.log` in Jest tests?",
    options: [
      "Using `jest.spyOn(console, 'log')`",
      "Using `jest.mock('console')`",
      "Using `jest.fn()` directly",
      "Using `jest.mockConsole()`",
    ],
    answer: "Using `jest.spyOn(console, 'log')`",
    explanation:
      "To mock `console.log` in Jest, you can use `jest.spyOn()` to spy on the `console.log` method and provide a mock implementation. Example:\n```js\nconst consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});\nconsole.log('test');\nexpect(consoleSpy).toHaveBeenCalledWith('test');\n```",
    topic: "jest",
  },
  {
    id: 72,
    question: "What does `jest.runAllTimers()` do?",
    options: [
      "Executes all pending timers",
      "Runs timers in the background",
      "Clears all scheduled timers",
      "Advances the clock by a specific amount",
    ],
    answer: "Executes all pending timers",
    explanation:
      "`jest.runAllTimers()` executes all pending timers (e.g., setTimeout, setInterval) immediately. This is useful for testing code that relies on timers without having to wait for them to complete. Example:\n```js\njest.useFakeTimers();\nsetTimeout(() => {\n  // code\n}, 1000);\njest.runAllTimers();\n// code that depends on the timeout\n```",
    topic: "jest",
  },
  {
    id: 73,
    question:
      "How can you verify that a function was called a specific number of times in Jest?",
    options: [
      "Using `expect(fn).toHaveBeenCalledTimes()`",
      "Using `expect(fn).toHaveBeenCalledWith()`",
      "Using `expect(fn).toHaveReturnedTimes()`",
      "Using `expect(fn).toHaveBeenCalled()`",
    ],
    answer: "Using `expect(fn).toHaveBeenCalledTimes()`",
    explanation:
      "`expect(fn).toHaveBeenCalledTimes()` is used to assert that a function was called a specific number of times. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalledTimes(2);\n```",
    topic: "jest",
  },
  {
    id: 74,
    question: "How can you mock the return value of a function in Jest?",
    options: [
      "Using `jest.fn().mockReturnValue()`",
      "Using `jest.spyOn()`",
      "Using `jest.mock()`",
      "Using `jest.fn().mockImplementation()`",
    ],
    answer: "Using `jest.fn().mockReturnValue()`",
    explanation:
      "`jest.fn().mockReturnValue()` is used to specify a return value for a mock function. This allows you to control what the mock function returns when it is called. Example:\n```js\nconst mockFunc = jest.fn().mockReturnValue('mocked value');\nexpect(mockFunc()).toBe('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 75,
    question: "How do you mock an imported function in Jest?",
    options: [
      "Using `jest.mock()`",
      "Using `jest.fn()` directly",
      "Using `jest.spyOn()`",
      "Using `jest.clearAllMocks()`",
    ],
    answer: "Using `jest.mock()`",
    explanation:
      "To mock an imported function in Jest, you use `jest.mock()` to replace the function with a mock implementation. Example:\n```js\njest.mock('./myModule', () => ({ myFunction: jest.fn() }));\nconst { myFunction } = require('./myModule');\nmyFunction();\nexpect(myFunction).toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 76,
    question: "How can you reset the state of all mocks in Jest?",
    options: [
      "Using `jest.resetAllMocks()`",
      "Using `jest.clearAllMocks()`",
      "Using `jest.restoreAllMocks()`",
      "Using `jest.clearAllTimers()`",
    ],
    answer: "Using `jest.resetAllMocks()`",
    explanation:
      "`jest.resetAllMocks()` is used to reset the state of all mocks. This includes clearing any mock implementations and resetting their call history. Example:\n```js\njest.resetAllMocks();\n```",
    topic: "jest",
  },
  {
    id: 77,
    question:
      "How do you mock a module with a specific implementation in Jest?",
    options: [
      "Using `jest.mock()` with a factory function",
      "Using `jest.spyOn()`",
      "Using `jest.fn()`",
      "Using `jest.clearAllMocks()`",
    ],
    answer: "Using `jest.mock()` with a factory function",
    explanation:
      "To mock a module with a specific implementation, use `jest.mock()` and provide a factory function that returns the mock implementation. Example:\n```js\njest.mock('./myModule', () => ({\n  method: jest.fn(() => 'mocked value')\n}));\nconst { method } = require('./myModule');\nexpect(method()).toBe('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 78,
    question:
      "How can you use `jest.spyOn()` to monitor a method without changing its implementation?",
    options: [
      "By specifying `jest.spyOn(obj, 'method')`",
      "By using `jest.spyOn(obj, 'method').mockImplementation()`",
      "By using `jest.spyOn(obj, 'method').mockReturnValue()`",
      "By calling `jest.spyOn(obj, 'method').mockClear()`",
    ],
    answer: "By specifying `jest.spyOn(obj, 'method')`",
    explanation:
      "Using `jest.spyOn(obj, 'method')` allows you to monitor method calls without changing its implementation. This is useful for verifying that the method is called as expected. Example:\n```js\nconst obj = { method: () => 'original value' };\nconst spy = jest.spyOn(obj, 'method');\nobj.method();\nexpect(spy).toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 79,
    question: "How can you mock a module's default export in Jest?",
    options: [
      "Using `jest.mock()` with a factory function",
      "Using `jest.spyOn()`",
      "Using `jest.fn()` directly",
      "Using `jest.clearAllMocks()`",
    ],
    answer: "Using `jest.mock()` with a factory function",
    explanation:
      "To mock a module's default export, use `jest.mock()` with a factory function that returns the mock implementation for the default export. Example:\n```js\njest.mock('./myModule', () => ({ default: jest.fn(() => 'mocked value') }));\nconst myModule = require('./myModule');\nexpect(myModule.default()).toBe('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 80,
    question: "What is the purpose of `jest.restoreAllMocks()`?",
    options: [
      "To restore the original implementations of all mocked functions",
      "To reset the state of all mocks",
      "To clear all mock calls",
      "To mock new functions",
    ],
    answer: "To restore the original implementations of all mocked functions",
    explanation:
      "`jest.restoreAllMocks()` is used to restore the original implementations of all mocked functions. This is useful when you want to revert changes made by `jest.spyOn()` or other mocking methods. Example:\n```js\nconst spy = jest.spyOn(console, 'log').mockImplementation(() => {});\nconsole.log('test');\njest.restoreAllMocks();\nconsole.log('test'); // original implementation is restored\n```",
    topic: "jest",
  },
  {
    id: 81,
    question:
      "How can you mock a function with multiple different return values in Jest?",
    options: [
      "Using `jest.fn().mockReturnValueOnce()`",
      "Using `jest.fn().mockReturnValue()`",
      "Using `jest.fn().mockImplementation()`",
      "Using `jest.fn().mockResolvedValue()`",
    ],
    answer: "Using `jest.fn().mockReturnValueOnce()`",
    explanation:
      "`jest.fn().mockReturnValueOnce()` allows you to specify different return values for consecutive calls to the mock function. Example:\n```js\nconst mockFunc = jest.fn()\n  .mockReturnValueOnce('first call')\n  .mockReturnValueOnce('second call');\nexpect(mockFunc()).toBe('first call');\nexpect(mockFunc()).toBe('second call');\n```",
    topic: "jest",
  },
  {
    id: 82,
    question: "How do you mock a function's implementation in Jest?",
    options: [
      "Using `jest.fn().mockImplementation()`",
      "Using `jest.fn().mockReturnValue()`",
      "Using `jest.spyOn()`",
      "Using `jest.clearAllMocks()`",
    ],
    answer: "Using `jest.fn().mockImplementation()`",
    explanation:
      "`jest.fn().mockImplementation()` allows you to define a custom implementation for a mock function. Example:\n```js\nconst mockFunc = jest.fn().mockImplementation(() => 'custom implementation');\nexpect(mockFunc()).toBe('custom implementation');\n```",
    topic: "jest",
  },
  {
    id: 83,
    question:
      "How do you check if a mock function was called with specific arguments in Jest?",
    options: [
      "Using `expect(fn).toHaveBeenCalledWith()`",
      "Using `expect(fn).toHaveReturnedWith()`",
      "Using `expect(fn).toHaveBeenCalledTimes()`",
      "Using `expect(fn).toHaveBeenCalled()`",
    ],
    answer: "Using `expect(fn).toHaveBeenCalledWith()`",
    explanation:
      "`expect(fn).toHaveBeenCalledWith()` checks if a mock function was called with specific arguments. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc('arg1', 'arg2');\nexpect(mockFunc).toHaveBeenCalledWith('arg1', 'arg2');\n```",
    topic: "jest",
  },
  {
    id: 84,
    question: "How do you mock a method on a class in Jest?",
    options: [
      "Using `jest.spyOn()`",
      "Using `jest.mock()`",
      "Using `jest.fn()`",
      "Using `jest.clearAllMocks()`",
    ],
    answer: "Using `jest.spyOn()`",
    explanation:
      "To mock a method on a class, use `jest.spyOn()` to replace the method with a mock implementation. Example:\n```js\nclass MyClass {\n  method() { return 'original'; }\n}\nconst spy = jest.spyOn(MyClass.prototype, 'method').mockReturnValue('mocked');\nconst instance = new MyClass();\nexpect(instance.method()).toBe('mocked');\n```",
    topic: "jest",
  },
  {
    id: 85,
    question: "What does `jest.clearAllMocks()` do?",
    options: [
      "Clears all mock function calls and their history",
      "Resets the state of all mocks",
      "Restores the original implementations of all mocks",
      "Mocks new functions",
    ],
    answer: "Clears all mock function calls and their history",
    explanation:
      "`jest.clearAllMocks()` clears the call history and reset the state of all mocks. This is useful for isolating tests and ensuring that mocks do not retain state between tests. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\njest.clearAllMocks();\nexpect(mockFunc).toHaveBeenCalledTimes(0);\n```",
    topic: "jest",
  },
  {
    id: 86,
    question:
      "How can you use `jest.fn()` to create a mock function that returns a promise?",
    options: [
      "Using `jest.fn().mockResolvedValue()`",
      "Using `jest.fn().mockReturnValue()`",
      "Using `jest.fn().mockImplementation()`",
      "Using `jest.fn().mockRejectedValue()`",
    ],
    answer: "Using `jest.fn().mockResolvedValue()`",
    explanation:
      "`jest.fn().mockResolvedValue()` creates a mock function that returns a promise resolving to a specified value. Example:\n```js\nconst mockFunc = jest.fn().mockResolvedValue('resolved value');\nexpect(await mockFunc()).toBe('resolved value');\n```",
    topic: "jest",
  },
  {
    id: 87,
    question: "How do you mock a function to throw an error in Jest?",
    options: [
      "Using `jest.fn().mockRejectedValue()`",
      "Using `jest.fn().mockReturnValue()`",
      "Using `jest.fn().mockImplementation()`",
      "Using `jest.fn().mockReturnValueOnce()`",
    ],
    answer: "Using `jest.fn().mockRejectedValue()`",
    explanation:
      "`jest.fn().mockRejectedValue()` creates a mock function that returns a promise that is rejected with a specified error. Example:\n```js\nconst mockFunc = jest.fn().mockRejectedValue(new Error('mock error'));\nawait expect(mockFunc()).rejects.toThrow('mock error');\n```",
    topic: "jest",
  },
  {
    id: 88,
    question:
      "How do you verify if a mock function was called with a specific context in Jest?",
    options: [
      "Using `expect(fn).toHaveBeenCalledWith()`",
      "Using `expect(fn).toHaveBeenCalledTimes()`",
      "Using `expect(fn.mock.calls)`",
      "Using `expect(fn.mock.instances)`",
    ],
    answer: "Using `expect(fn.mock.calls)`",
    explanation:
      "To verify if a mock function was called with a specific context, you can check the `mock.calls` property to see the arguments and `mock.instances` to see the context. Example:\n```js\nconst mockFunc = jest.fn();\nconst context = { prop: 'value' };\nmockFunc.call(context);\nexpect(mockFunc.mock.instances[0]).toBe(context);\n```",
    topic: "jest",
  },
  {
    id: 89,
    question: "How do you mock a static method on a class in Jest?",
    options: [
      "Using `jest.spyOn()`",
      "Using `jest.mock()`",
      "Using `jest.fn()`",
      "Using `jest.clearAllMocks()`",
    ],
    answer: "Using `jest.spyOn()`",
    explanation:
      "To mock a static method on a class, use `jest.spyOn()` on the class itself, not the prototype. Example:\n```js\nclass MyClass {\n  static method() { return 'original'; }\n}\nconst spy = jest.spyOn(MyClass, 'method').mockReturnValue('mocked');\nexpect(MyClass.method()).toBe('mocked');\n```",
    topic: "jest",
  },
  {
    id: 90,
    question: "What is the purpose of `jest.mock()` with a factory function?",
    options: [
      "To provide a specific implementation for the module being mocked",
      "To clear all mocks",
      "To create a mock function",
      "To spy on a method",
    ],
    answer: "To provide a specific implementation for the module being mocked",
    explanation:
      "`jest.mock()` with a factory function allows you to specify the mock implementation of a module. This lets you control the behavior of the module for testing purposes. Example:\n```js\njest.mock('./myModule', () => ({\n  method: jest.fn(() => 'mocked value')\n}));\nconst { method } = require('./myModule');\nexpect(method()).toBe('mocked value');\n```",
    topic: "jest",
  },
  {
    id: 91,
    question:
      "How can you mock a module that exports multiple functions in Jest?",
    options: [
      "Using `jest.mock()` with an object specifying the mocks",
      "Using `jest.spyOn()` on each function",
      "Using `jest.fn()` for each function",
      "Using `jest.clearAllMocks()`",
    ],
    answer: "Using `jest.mock()` with an object specifying the mocks",
    explanation:
      "You can mock a module with multiple functions by providing an object to `jest.mock()` that specifies the mock implementations. Example:\n```js\njest.mock('./myModule', () => ({\n  func1: jest.fn(() => 'mocked func1'),\n  func2: jest.fn(() => 'mocked func2')\n}));\nconst { func1, func2 } = require('./myModule');\nexpect(func1()).toBe('mocked func1');\nexpect(func2()).toBe('mocked func2');\n```",
    topic: "jest",
  },
  {
    id: 92,
    question:
      "How do you use `jest.fn()` to create a mock function with a custom implementation?",
    options: [
      "Using `jest.fn(fn)`",
      "Using `jest.mock(fn)`",
      "Using `jest.spyOn(fn)`",
      "Using `jest.fn().mockReturnValue()`",
    ],
    answer: "Using `jest.fn(fn)`",
    explanation:
      "`jest.fn(fn)` creates a mock function with a custom implementation provided by `fn`. Example:\n```js\nconst mockFunc = jest.fn((x) => x + 1);\nexpect(mockFunc(1)).toBe(2);\n```",
    topic: "jest",
  },
  {
    id: 93,
    question: "What does `jest.resetAllMocks()` do?",
    options: [
      "Resets all mocks back to their initial state",
      "Clears all mock function calls",
      "Restores the original implementations of all mocks",
      "Mocks new functions",
    ],
    answer: "Resets all mocks back to their initial state",
    explanation:
      "`jest.resetAllMocks()` resets the state of all mocks, meaning that mock implementations and their call history are cleared. Example:\n```js\nconst mockFunc = jest.fn().mockReturnValue('value');\nmockFunc();\njest.resetAllMocks();\nexpect(mockFunc).toHaveBeenCalledTimes(0);\n```",
    topic: "jest",
  },
  {
    id: 94,
    question: "How do you test asynchronous code with Jest?",
    options: [
      "Using `async/await` or returning a promise",
      "Using `done` callback",
      "Using `expect().resolves`",
      "All of the above",
    ],
    answer: "All of the above",
    explanation:
      "Jest supports multiple ways to test asynchronous code, including `async/await`, returning a promise, and using the `done` callback. Example with `async/await`:\n```js\ntest('async test', async () => {\n  const result = await asyncFunction();\n  expect(result).toBe('value');\n});\n```",
    topic: "jest",
  },
  {
    id: 95,
    question:
      "How do you check if a function was called a specific number of times in Jest?",
    options: [
      "Using `expect(fn).toHaveBeenCalledTimes()`",
      "Using `expect(fn).toHaveBeenCalled()`",
      "Using `expect(fn).toHaveReturned()`",
      "Using `expect(fn).toBeCalledTimes()`",
    ],
    answer: "Using `expect(fn).toHaveBeenCalledTimes()`",
    explanation:
      "`expect(fn).toHaveBeenCalledTimes()` checks if a mock function was called a specific number of times. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalledTimes(2);\n```",
    topic: "jest",
  },
  {
    id: 96,
    question: "What does `jest.runAllTimers()` do?",
    options: [
      "Runs all timers that were mocked",
      "Clears all timers",
      "Mocks timers",
      "Restores original timers",
    ],
    answer: "Runs all timers that were mocked",
    explanation:
      "`jest.runAllTimers()` advances all timers to their completion, executing all scheduled timers in a test. Example:\n```js\njest.useFakeTimers();\nconst callback = jest.fn();\nsetTimeout(callback, 1000);\njest.runAllTimers();\nexpect(callback).toHaveBeenCalled();\n```",
    topic: "jest",
  },
  {
    id: 97,
    question: "How do you ensure a mock function is called only once in Jest?",
    options: [
      "Using `expect(fn).toHaveBeenCalledTimes(1)`",
      "Using `expect(fn).toHaveBeenCalled()`",
      "Using `expect(fn).toHaveBeenCalledWith()`",
      "Using `expect(fn).toBeCalledOnce()`",
    ],
    answer: "Using `expect(fn).toHaveBeenCalledTimes(1)`",
    explanation:
      "`expect(fn).toHaveBeenCalledTimes(1)` ensures that a mock function was called exactly once. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc();\nexpect(mockFunc).toHaveBeenCalledTimes(1);\n```",
    topic: "jest",
  },
  {
    id: 98,
    question: "How do you mock an imported module in Jest?",
    options: [
      "Using `jest.mock()`",
      "Using `jest.spyOn()`",
      "Using `jest.fn()`",
      "Using `jest.clearAllMocks()`",
    ],
    answer: "Using `jest.mock()`",
    explanation:
      "`jest.mock()` is used to mock an entire module, allowing you to specify mock implementations for its exports. Example:\n```js\njest.mock('./myModule', () => ({\n  func: jest.fn(() => 'mocked')\n}));\nconst { func } = require('./myModule');\nexpect(func()).toBe('mocked');\n```",
    topic: "jest",
  },
  {
    id: 99,
    question: "What is the difference between `jest.fn()` and `jest.spyOn()`?",
    options: [
      "`jest.fn()` creates a new mock function, while `jest.spyOn()` spies on an existing method",
      "`jest.fn()` clears all mocks, while `jest.spyOn()` creates new mocks",
      "`jest.fn()` creates a mock module, while `jest.spyOn()` mocks individual functions",
      "`jest.fn()` is used for module mocking, while `jest.spyOn()` is used for global mocks",
    ],
    answer:
      "`jest.fn()` creates a new mock function, while `jest.spyOn()` spies on an existing method",
    explanation:
      "`jest.fn()` creates a new, standalone mock function, while `jest.spyOn()` is used to spy on or mock a method of an existing object or class. Example:\n```js\nconst mockFunc = jest.fn();\nconst obj = { method: () => 'original' };\nconst spy = jest.spyOn(obj, 'method').mockReturnValue('mocked');\nexpect(obj.method()).toBe('mocked');\n```",
    topic: "jest",
  },
  {
    id: 100,
    question:
      "How do you verify that a mock function was called with specific arguments in Jest?",
    options: [
      "Using `expect(fn).toHaveBeenCalledWith()`",
      "Using `expect(fn).toHaveBeenCalled()`",
      "Using `expect(fn.mock.calls)`",
      "Using `expect(fn.mock.instances)`",
    ],
    answer: "Using `expect(fn).toHaveBeenCalledWith()`",
    explanation:
      "`expect(fn).toHaveBeenCalledWith()` verifies that a mock function was called with specific arguments. Example:\n```js\nconst mockFunc = jest.fn();\nmockFunc('arg1', 'arg2');\nexpect(mockFunc).toHaveBeenCalledWith('arg1', 'arg2');\n```",
    topic: "jest",
  },
];
