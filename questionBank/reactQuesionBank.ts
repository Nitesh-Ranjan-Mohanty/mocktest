interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  topic: string;
}

export const reactQuestions: Question[] = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A framework for server-side rendering",
      "A CSS preprocessor",
      "A database",
    ],
    answer: "A JavaScript library for building user interfaces",
    explanation:
      "React is a JavaScript library developed by Facebook for building user interfaces, especially for single-page applications. It allows developers to create reusable UI components and manage the state of those components efficiently.",
    topic: "react",
  },
  {
    id: 2,
    question: "What are components in React?",
    options: [
      "Reusable pieces of UI",
      "Functions that handle state",
      "Classes for managing events",
      "Containers for routing",
    ],
    answer: "Reusable pieces of UI",
    explanation:
      "Components are the building blocks of a React application. They are reusable pieces of UI that can be composed together to build complex user interfaces. Components can be either class-based or functional.",
    topic: "react",
  },
  {
    id: 3,
    question: "What is JSX?",
    options: [
      "A syntax extension for JavaScript",
      "A new type of HTML",
      "A JavaScript framework",
      "A CSS framework",
    ],
    answer: "A syntax extension for JavaScript",
    explanation:
      "JSX stands for JavaScript XML. It is a syntax extension that allows you to write HTML-like code within JavaScript files. JSX makes it easier to create and visualize the structure of your UI components.",
    topic: "react",
  },
  {
    id: 4,
    question: "What is the virtual DOM in React?",
    options: [
      "A lightweight copy of the actual DOM",
      "A new DOM API",
      "A way to access the browser's DOM",
      "A method for server-side rendering",
    ],
    answer: "A lightweight copy of the actual DOM",
    explanation:
      "The virtual DOM is a lightweight representation of the actual DOM. React uses it to optimize updates to the UI. When a component's state changes, React updates the virtual DOM first and then efficiently updates the actual DOM based on the differences.",
    topic: "react",
  },
  {
    id: 5,
    question: "What is state in React?",
    options: [
      "An object that holds data that influences the rendering of a component",
      "A function that returns component data",
      "A global variable for all components",
      "A method for managing routing",
    ],
    answer:
      "An object that holds data that influences the rendering of a component",
    explanation:
      "State is an object managed within a component that holds data that affects the component's rendering and behavior. It allows components to create and manage their own data. State changes trigger re-renders of the component.",
    topic: "react",
  },
  {
    id: 6,
    question: "What is props in React?",
    options: [
      "Properties passed from parent to child components",
      "A method to manage component state",
      "A way to handle component lifecycle",
      "A function to render components",
    ],
    answer: "Properties passed from parent to child components",
    explanation:
      "Props (short for properties) are used to pass data from parent components to child components in React. They allow components to be dynamic and reusable by providing different data inputs.",
    topic: "react",
  },
  {
    id: 7,
    question: "What are hooks in React?",
    options: [
      "Functions that let you use state and other React features without writing a class",
      "Methods for managing component lifecycle",
      "Classes that handle routing",
      "Functions for handling events",
    ],
    answer:
      "Functions that let you use state and other React features without writing a class",
    explanation:
      "Hooks are functions introduced in React 16.8 that allow you to use state and other React features in functional components. Common hooks include `useState`, `useEffect`, and `useContext`.",
    topic: "react",
  },
  {
    id: 8,
    question: "What does `useState` do in React?",
    options: [
      "Allows you to add state to functional components",
      "Handles side effects in functional components",
      "Manages context across components",
      "Provides lifecycle methods to functional components",
    ],
    answer: "Allows you to add state to functional components",
    explanation:
      "`useState` is a hook that allows functional components to have state variables. It returns a pair: the current state value and a function to update it. Example:\n```js\nconst [count, setCount] = useState(0);\n```",
    topic: "react",
  },
  {
    id: 9,
    question: "How does `useEffect` work in React?",
    options: [
      "It handles side effects in functional components",
      "It manages state updates",
      "It sets up context for components",
      "It defines component lifecycle methods",
    ],
    answer: "It handles side effects in functional components",
    explanation:
      "`useEffect` is a hook that lets you perform side effects (e.g., data fetching, subscriptions) in functional components. It runs after every render by default but can be controlled with dependencies. Example:\n```js\nuseEffect(() => {\n  // Side effect code\n}, [dependencies]);\n```",
    topic: "react",
  },
  {
    id: 10,
    question: "What is `useContext` in React?",
    options: [
      "A hook that allows you to access context values",
      "A method for setting up state",
      "A function for handling side effects",
      "A way to manage component lifecycle",
    ],
    answer: "A hook that allows you to access context values",
    explanation:
      "`useContext` is a hook that allows functional components to access context values directly. It is used with the `Context` object created by `React.createContext()`. Example:\n```js\nconst value = useContext(MyContext);\n```",
    topic: "react",
  },
  {
    id: 11,
    question: "What is the purpose of `React.memo`?",
    options: [
      "It optimizes functional components by memoizing their output",
      "It manages component state",
      "It handles side effects",
      "It creates context for components",
    ],
    answer: "It optimizes functional components by memoizing their output",
    explanation:
      "`React.memo` is a higher-order component that optimizes the rendering of functional components by memoizing their output. It only re-renders the component if its props change. Example:\n```js\nconst MyComponent = React.memo((props) => {\n  // Component code\n});\n```",
    topic: "react",
  },
  {
    id: 12,
    question: "How do you handle conditional rendering in React?",
    options: [
      "Using JavaScript conditional operators or logical operators",
      "Using `useState` hook",
      "Using `useEffect` hook",
      "Using `React.Fragment`",
    ],
    answer: "Using JavaScript conditional operators or logical operators",
    explanation:
      "Conditional rendering in React can be handled using JavaScript conditional operators like `if`, `&&`, or ternary operators within JSX. Example:\n```js\n{isLoggedIn ? <Welcome /> : <Login />}\n```",
    topic: "react",
  },
  {
    id: 13,
    question: "What is `React.Fragment` used for?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To create context for components",
      "To handle side effects",
      "To manage component state",
    ],
    answer: "To group multiple elements without adding extra nodes to the DOM",
    explanation:
      "`React.Fragment` is used to group multiple elements without adding extra nodes to the DOM. It helps to avoid unnecessary divs or other elements in the DOM structure. Example:\n```js\nreturn (\n  <>\n    <Child1 />\n    <Child2 />\n  </>\n);\n```",
    topic: "react",
  },
  {
    id: 14,
    question: "How do you pass data between components in React?",
    options: ["Using props", "Using state", "Using context", "Using hooks"],
    answer: "Using props",
    explanation:
      'Data is passed between components in React using props. Parent components can pass data to child components through props, allowing for component communication and reuse. Example:\n```js\nfunction Parent() {\n  return <Child data="example" />;\n}\nfunction Child(props) {\n  return <div>{props.data}</div>;\n}\n```',
    topic: "react",
  },
  {
    id: 15,
    question: "What are controlled components in React?",
    options: [
      "Components that have their form data controlled by React state",
      "Components that handle their own state internally",
      "Components that use hooks for managing state",
      "Components that are rendered conditionally",
    ],
    answer: "Components that have their form data controlled by React state",
    explanation:
      "Controlled components are form elements whose values are controlled by React state. The state updates whenever the input changes, and the input value is set based on the state. Example:\n```js\nfunction ControlledInput() {\n  const [value, setValue] = useState('');\n  return <input value={value} onChange={(e) => setValue(e.target.value)} />;\n}\n```",
    topic: "react",
  },
  {
    id: 16,
    question: "What is the use of `key` prop in React lists?",
    options: [
      "To help React identify which items have changed, are added, or are removed",
      "To manage state for list items",
      "To create context for list components",
      "To handle side effects in lists",
    ],
    answer:
      "To help React identify which items have changed, are added, or are removed",
    explanation:
      "The `key` prop is used in React lists to give each item a unique identifier. It helps React efficiently update and reorder list items by keeping track of which items have changed. Example:\n```js\nconst items = [1, 2, 3];\nreturn (\n  <ul>\n    {items.map(item => <li key={item}>{item}</li>)}\n  </ul>\n);\n```",
    topic: "react",
  },
  {
    id: 17,
    question: "What is the purpose of `React.StrictMode`?",
    options: [
      "To highlight potential problems in an application",
      "To manage component state",
      "To create context for components",
      "To handle side effects",
    ],
    answer: "To highlight potential problems in an application",
    explanation:
      "`React.StrictMode` is a wrapper component that helps identify potential problems in an application during development. It activates additional checks and warnings for its descendants, but does not affect the production build. Example:\n```js\n<React.StrictMode>\n  <App />\n</React.StrictMode>\n```",
    topic: "react",
  },
  {
    id: 18,
    question: "How do you handle events in React?",
    options: [
      "By using event handlers as props",
      "By using state",
      "By using context",
      "By using refs",
    ],
    answer: "By using event handlers as props",
    explanation:
      "Events in React are handled by passing event handler functions as props to components. For example, to handle a click event, you would pass a function to the `onClick` prop. Example:\n```js\n<button onClick={() => alert('Clicked!')}>Click Me</button>\n```",
    topic: "react",
  },
  {
    id: 19,
    question: "What is `useRef` used for in React?",
    options: [
      "To access DOM elements or persist values across renders",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    answer: "To access DOM elements or persist values across renders",
    explanation:
      "`useRef` is a hook that allows you to persist values across renders without causing a re-render. It is often used to access DOM elements or to store mutable values. Example:\n```js\nconst inputRef = useRef(null);\nuseEffect(() => {\n  inputRef.current.focus();\n}, []);\nreturn <input ref={inputRef} />;\n```",
    topic: "react",
  },
  {
    id: 20,
    question: "How do you perform conditional rendering in React?",
    options: [
      "Using JavaScript conditional operators like `if` or ternary operators",
      "Using context",
      "Using refs",
      "Using `React.Fragment`",
    ],
    answer:
      "Using JavaScript conditional operators like `if` or ternary operators",
    explanation:
      "Conditional rendering in React can be achieved using JavaScript conditional operators within JSX. This allows you to render different elements based on certain conditions. Example:\n```js\n{isLoggedIn ? <Welcome /> : <Login />}\n```",
    topic: "react",
  },
  {
    id: 21,
    question: "What is `useReducer` in React?",
    options: [
      "A hook for managing state with a reducer function",
      "A hook for handling side effects",
      "A hook for managing context",
      "A method for optimizing performance",
    ],
    answer: "A hook for managing state with a reducer function",
    explanation:
      "`useReducer` is a hook used for managing state in functional components using a reducer function, similar to Redux. It is useful for complex state logic that involves multiple sub-values or actions. Example:\n```js\nconst [state, dispatch] = useReducer(reducer, initialState);\n```",
    topic: "react",
  },
  {
    id: 22,
    question: "What is `React.createContext` used for?",
    options: [
      "To create context for sharing values across components",
      "To manage component state",
      "To handle side effects",
      "To create a virtual DOM",
    ],
    answer: "To create context for sharing values across components",
    explanation:
      "`React.createContext` is used to create a Context object that allows you to share values between components without passing props explicitly through every level of the tree. Example:\n```js\nconst MyContext = React.createContext();\nconst Provider = ({ children }) => <MyContext.Provider value={value}>{children}</MyContext.Provider>;\n```",
    topic: "react",
  },
  {
    id: 23,
    question: "What is the purpose of `React.lazy`?",
    options: [
      "To dynamically import components and enable code splitting",
      "To handle component state",
      "To create context",
      "To manage side effects",
    ],
    answer: "To dynamically import components and enable code splitting",
    explanation:
      "`React.lazy` allows you to dynamically import components and enable code splitting in your application. This can help reduce the initial load time by loading components only when they are needed. Example:\n```js\nconst LazyComponent = React.lazy(() => import('./LazyComponent'));\n```",
    topic: "react",
  },
  {
    id: 24,
    question: "How do you handle forms in React?",
    options: [
      "Using controlled components or uncontrolled components",
      "Using context",
      "Using hooks",
      "Using `React.Fragment`",
    ],
    answer: "Using controlled components or uncontrolled components",
    explanation:
      "Forms in React can be handled using controlled components (where form data is managed by React state) or uncontrolled components (where form data is managed by the DOM). Controlled components are more commonly used for better control over form state.",
    topic: "react",
  },
  {
    id: 25,
    question: "What is `useCallback` used for in React?",
    options: [
      "To memoize callback functions to prevent unnecessary re-renders",
      "To handle state updates",
      "To manage side effects",
      "To create context",
    ],
    answer: "To memoize callback functions to prevent unnecessary re-renders",
    explanation:
      "`useCallback` is a hook that memoizes callback functions, which helps prevent unnecessary re-renders by ensuring that the function reference remains the same unless its dependencies change. Example:\n```js\nconst memoizedCallback = useCallback(() => {\n  // Callback function\n}, [dependencies]);\n```",
    topic: "react",
  },
  {
    id: 26,
    question: "What is `useImperativeHandle` in React?",
    options: [
      "To customize the instance value that is exposed when using `ref`",
      "To handle state updates",
      "To create context",
      "To manage side effects",
    ],
    answer: "To customize the instance value that is exposed when using `ref`",
    explanation:
      "`useImperativeHandle` is a hook that allows you to customize the instance value that is exposed when using `ref` with a functional component. This can be useful for controlling what methods or properties are accessible from the parent component. Example:\n```js\nconst MyComponent = forwardRef((props, ref) => {\n  useImperativeHandle(ref, () => ({ customMethod }));\n  return <div>...</div>;\n});\n```",
    topic: "react",
  },
  {
    id: 27,
    question: "What is the purpose of `useLayoutEffect` in React?",
    options: [
      "To handle side effects that require DOM measurements",
      "To manage component state",
      "To create context",
      "To manage component lifecycle",
    ],
    answer: "To handle side effects that require DOM measurements",
    explanation:
      "`useLayoutEffect` is similar to `useEffect`, but it fires synchronously after all DOM mutations. It is used for operations that need to read layout from the DOM and re-render synchronously. Example:\n```js\nuseLayoutEffect(() => {\n  // DOM measurement code\n}, [dependencies]);\n```",
    topic: "react",
  },
  {
    id: 28,
    question: "How do you manage global state in a React application?",
    options: [
      "Using context, Redux, or other state management libraries",
      "Using local state within components",
      "Using props",
      "Using `React.Fragment`",
    ],
    answer: "Using context, Redux, or other state management libraries",
    explanation:
      "Global state in a React application can be managed using context API, Redux, or other state management libraries like MobX or Zustand. These solutions help manage and share state across multiple components in an application.",
    topic: "react",
  },
  {
    id: 29,
    question: "What is the `useMemo` hook used for in React?",
    options: [
      "To memoize expensive calculations and optimize performance",
      "To handle state updates",
      "To manage side effects",
      "To create context",
    ],
    answer: "To memoize expensive calculations and optimize performance",
    explanation:
      "`useMemo` is a hook that memoizes the result of an expensive calculation and returns the cached result if the dependencies have not changed. This helps in optimizing performance by avoiding unnecessary recalculations. Example:\n```js\nconst memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n```",
    topic: "react",
  },
  {
    id: 30,
    question: "What is the `React.Fragment` used for?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    answer: "To group multiple elements without adding extra nodes to the DOM",
    explanation:
      "`React.Fragment` is used to group multiple elements into a single parent without adding an extra node to the DOM. It helps in keeping the DOM structure clean and avoiding unnecessary wrapper elements. Example:\n```js\nreturn (\n  <React.Fragment>\n    <ChildA />\n    <ChildB />\n  </React.Fragment>\n);\n```",
    topic: "react",
  },
  {
    id: 31,
    question: "What are controlled components in React?",
    options: [
      "Components whose form data is handled by React state",
      "Components that manage their own state internally",
      "Components that use context for state management",
      "Components that use refs for handling form data",
    ],
    answer: "Components whose form data is handled by React state",
    explanation:
      "Controlled components are form elements whose value is controlled by React state. The form data is managed by setting the value of the input elements based on the state and updating the state through event handlers. Example:\n```js\n<input value={value} onChange={e => setValue(e.target.value)} />\n```",
    topic: "react",
  },
  {
    id: 32,
    question: "What is `React.memo` used for?",
    options: [
      "To memoize functional components and prevent unnecessary re-renders",
      "To manage state",
      "To create context",
      "To handle side effects",
    ],
    answer:
      "To memoize functional components and prevent unnecessary re-renders",
    explanation:
      "`React.memo` is a higher-order component that memoizes functional components to prevent unnecessary re-renders. It will only re-render the component if its props change. Example:\n```js\nconst MemoizedComponent = React.memo(Component);\n```",
    topic: "react",
  },
  {
    id: 33,
    question:
      "What is the difference between `useEffect` and `useLayoutEffect`?",
    options: [
      "`useEffect` runs asynchronously after DOM updates, `useLayoutEffect` runs synchronously before DOM updates",
      "`useEffect` handles side effects, `useLayoutEffect` manages state",
      "`useEffect` is used for context, `useLayoutEffect` is used for refs",
      "`useEffect` runs during mounting, `useLayoutEffect` runs during unmounting",
    ],
    answer:
      "`useEffect` runs asynchronously after DOM updates, `useLayoutEffect` runs synchronously before DOM updates",
    explanation:
      "`useEffect` and `useLayoutEffect` are both used for handling side effects, but they differ in timing. `useEffect` runs asynchronously after the DOM has been updated, while `useLayoutEffect` runs synchronously before the DOM is painted. Example:\n```js\nuseEffect(() => { /* async side effect */ }, [dependencies]);\nuseLayoutEffect(() => { /* sync side effect */ }, [dependencies]);\n```",
    topic: "react",
  },
  {
    id: 34,
    question: "What is `useTransition` used for in React?",
    options: [
      "To manage concurrent rendering and improve UI responsiveness",
      "To handle state updates",
      "To create context",
      "To memoize values",
    ],
    answer: "To manage concurrent rendering and improve UI responsiveness",
    explanation:
      "`useTransition` is a hook used to manage concurrent rendering, allowing you to mark certain updates as non-urgent and improve UI responsiveness. It helps keep the application interactive while performing less urgent updates. Example:\n```js\nconst [isPending, startTransition] = useTransition();\nstartTransition(() => { /* update state */ });\n```",
    topic: "react",
  },
  {
    id: 35,
    question: 'What are "strict mode" warnings in React?',
    options: [
      "Warnings generated by `React.StrictMode` to identify potential problems in the application",
      "Warnings related to deprecated APIs",
      "Warnings for performance issues",
      "Warnings for missing dependencies",
    ],
    answer:
      "Warnings generated by `React.StrictMode` to identify potential problems in the application",
    explanation:
      "`React.StrictMode` generates warnings to help identify potential issues in your application during development. These warnings include identifying unsafe lifecycle methods, legacy context API usage, and other potential problems. Example:\n```js\n<React.StrictMode>\n  <App />\n</React.StrictMode>\n```",
    topic: "react",
  },
  {
    id: 36,
    question: "What is the `useReducer` hook's `dispatch` function used for?",
    options: [
      "To send actions to the reducer function to update state",
      "To handle side effects",
      "To create context",
      "To memoize values",
    ],
    answer: "To send actions to the reducer function to update state",
    explanation:
      "In the `useReducer` hook, the `dispatch` function is used to send actions to the reducer function. This function updates the state based on the action type and payload. Example:\n```js\ndispatch({ type: 'INCREMENT' });\n```",
    topic: "react",
  },
  {
    id: 37,
    question: "What is the purpose of `useImperativeHandle` in React?",
    options: [
      "To customize the instance value exposed to parent components when using refs",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    answer:
      "To customize the instance value exposed to parent components when using refs",
    explanation:
      "`useImperativeHandle` is used to customize the instance value that is exposed when using `ref` in a functional component. It allows you to control what methods or properties are accessible to the parent component. Example:\n```js\nconst MyComponent = forwardRef((props, ref) => {\n  useImperativeHandle(ref, () => ({ customMethod }));\n  return <div>...</div>;\n});\n```",
    topic: "react",
  },
  {
    id: 38,
    question: "What is `React.forwardRef` used for?",
    options: [
      "To forward refs to a child component",
      "To handle state updates",
      "To create context",
      "To memoize values",
    ],
    answer: "To forward refs to a child component",
    explanation:
      "`React.forwardRef` is used to forward refs from a parent component to a child component. This allows the parent to directly interact with a DOM element or a component instance in the child. Example:\n```js\nconst MyComponent = forwardRef((props, ref) => <div ref={ref}>...</div>);\n```",
    topic: "react",
  },
  {
    id: 39,
    question: "How can you optimize performance in a React application?",
    options: [
      "By using memoization techniques, React.memo, and useCallback",
      "By increasing the frequency of re-renders",
      "By avoiding use of state and props",
      "By directly manipulating the DOM",
    ],
    answer: "By using memoization techniques, React.memo, and useCallback",
    explanation:
      "Performance in a React application can be optimized using memoization techniques like `useMemo`, `React.memo`, and `useCallback` to avoid unnecessary re-renders and computations. These techniques help ensure that components only re-render when necessary.",
    topic: "react",
  },
  {
    id: 40,
    question: "What is `useContext` used for in React?",
    options: [
      "To access context values from a context provider",
      "To handle state updates",
      "To create refs",
      "To manage side effects",
    ],
    answer: "To access context values from a context provider",
    explanation:
      "`useContext` is a hook that allows you to access context values that have been provided by a `Context.Provider`. It simplifies the consumption of context data in functional components. Example:\n```js\nconst value = useContext(MyContext);\n```",
    topic: "react",
  },
  {
    id: 41,
    question:
      "What is the difference between `React.Component` and `React.PureComponent`?",
    options: [
      "`React.Component` does not implement `shouldComponentUpdate` by default, while `React.PureComponent` does",
      "`React.PureComponent` handles side effects, while `React.Component` does not",
      "`React.PureComponent` is used for context, while `React.Component` is used for state",
      "`React.PureComponent` is for class components, while `React.Component` is for functional components",
    ],
    answer:
      "`React.Component` does not implement `shouldComponentUpdate` by default, while `React.PureComponent` does",
    explanation:
      "`React.PureComponent` implements `shouldComponentUpdate` with a shallow prop and state comparison, which helps in preventing unnecessary re-renders. `React.Component` does not have this optimization by default. Example:\n```js\nclass MyComponent extends React.PureComponent { /* ... */ }\nclass MyOtherComponent extends React.Component { /* ... */ }\n```",
    topic: "react",
  },
  {
    id: 42,
    question: "What is `useCallback` used for in React?",
    options: [
      "To memoize callback functions to prevent unnecessary re-creations",
      "To handle state updates",
      "To manage side effects",
      "To create context",
    ],
    answer: "To memoize callback functions to prevent unnecessary re-creations",
    explanation:
      "`useCallback` is a hook that memoizes callback functions, preventing them from being recreated on every render. This is useful for passing stable callback functions to child components or for performance optimizations. Example:\n```js\nconst memoizedCallback = useCallback(() => { /* callback function */ }, [dependencies]);\n```",
    topic: "react",
  },
  {
    id: 43,
    question: "What is `React.StrictMode` used for?",
    options: [
      "To identify potential problems in an application during development",
      "To handle side effects",
      "To manage state updates",
      "To create context",
    ],
    answer:
      "To identify potential problems in an application during development",
    explanation:
      "`React.StrictMode` is a tool for identifying potential problems in your React application during development. It activates additional checks and warnings for deprecated APIs, unsafe lifecycle methods, and other issues. Example:\n```js\n<React.StrictMode>\n  <App />\n</React.StrictMode>\n```",
    topic: "react",
  },
  {
    id: 44,
    question: "What is the `useDebugValue` hook used for in React?",
    options: [
      "To display a custom label for debugging purposes",
      "To handle state updates",
      "To create context",
      "To memoize values",
    ],
    answer: "To display a custom label for debugging purposes",
    explanation:
      "`useDebugValue` is a hook that allows you to display a custom label for custom hooks in React DevTools, helping you debug and track hook values more easily. Example:\n```js\nuseDebugValue(value);\n```",
    topic: "react",
  },
  {
    id: 45,
    question: "What is the purpose of `React.lazy` and `Suspense`?",
    options: [
      "To enable dynamic import and code splitting for better performance",
      "To manage state updates",
      "To create context",
      "To handle side effects",
    ],
    answer:
      "To enable dynamic import and code splitting for better performance",
    explanation:
      "`React.lazy` and `Suspense` work together to enable dynamic import and code splitting in React applications. `React.lazy` allows you to dynamically import components, while `Suspense` provides a fallback UI while the component is being loaded. Example:\n```js\nconst LazyComponent = React.lazy(() => import('./LazyComponent'));\n<Suspense fallback={<div>Loading...</div>}>\n  <LazyComponent />\n</Suspense>\n```",
    topic: "react",
  },
  {
    id: 46,
    question: "What is `useImperativeHandle` used for in React?",
    options: [
      "To customize the instance value exposed to parent components when using refs",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    answer:
      "To customize the instance value exposed to parent components when using refs",
    explanation:
      "`useImperativeHandle` is used to customize the instance value that is exposed when using `ref` in a functional component. It allows you to control what methods or properties are accessible to the parent component. Example:\n```js\nconst MyComponent = forwardRef((props, ref) => {\n  useImperativeHandle(ref, () => ({ customMethod }));\n  return <div>...</div>;\n});\n```",
    topic: "react",
  },
  {
    id: 47,
    question: "What is `useLayoutEffect` used for in React?",
    options: [
      "To run effects synchronously before the DOM is painted",
      "To manage state updates",
      "To handle side effects",
      "To create context",
    ],
    answer: "To run effects synchronously before the DOM is painted",
    explanation:
      "`useLayoutEffect` is used to run effects synchronously before the DOM is painted, allowing you to perform operations that need to be completed before the browser performs a paint. It is useful for layout calculations and measurements. Example:\n```js\nuseLayoutEffect(() => { /* effect code */ }, [dependencies]);\n```",
    topic: "react",
  },
  {
    id: 48,
    question: "What is the `useRef` hook used for in React?",
    options: [
      "To create mutable refs that persist across renders",
      "To handle state updates",
      "To manage side effects",
      "To create context",
    ],
    answer: "To create mutable refs that persist across renders",
    explanation:
      "`useRef` is a hook used to create mutable refs that persist across renders. It is often used to access DOM elements or store values that do not trigger re-renders when updated. Example:\n```js\nconst ref = useRef(null);\nreturn <div ref={ref}>...</div>;\n```",
    topic: "react",
  },
  {
    id: 49,
    question: "What is `ReactDOM.createPortal` used for?",
    options: [
      "To render children into a DOM node outside of the parent component's hierarchy",
      "To handle state updates",
      "To manage side effects",
      "To create context",
    ],
    answer:
      "To render children into a DOM node outside of the parent component's hierarchy",
    explanation:
      "`ReactDOM.createPortal` is used to render children into a DOM node outside of the parent component's hierarchy. This is useful for rendering modals, tooltips, or other components that need to be visually separated from the parent. Example:\n```js\nReactDOM.createPortal(<Modal />, document.getElementById('portal'));\n```",
    topic: "react",
  },
  {
    id: 50,
    question: "What is the purpose of `React.StrictMode`?",
    options: [
      "To help identify potential problems in an application during development",
      "To manage state updates",
      "To handle side effects",
      "To create context",
    ],
    answer:
      "To help identify potential problems in an application during development",
    explanation:
      "`React.StrictMode` is a development tool that helps identify potential problems in your React application. It enables additional checks and warnings for unsafe lifecycle methods, legacy context API usage, and other potential issues. Example:\n```js\n<React.StrictMode>\n  <App />\n</React.StrictMode>\n```",
    topic: "react",
  },
  {
    id: 51,
    question: "What is the `useCallback` hook used for?",
    options: [
      "To memoize callback functions to prevent unnecessary re-creations",
      "To handle state updates",
      "To manage side effects",
      "To create context",
    ],
    answer: "To memoize callback functions to prevent unnecessary re-creations",
    explanation:
      "`useCallback` is used to memoize callback functions, preventing them from being recreated on every render. This helps in optimizing performance by ensuring that the same instance of the function is used unless dependencies change. Example:\n```js\nconst memoizedCallback = useCallback(() => { /* callback function */ }, [dependencies]);\n```",
    topic: "react",
  },
  {
    id: 52,
    question: "What is the `useState` hook used for in React?",
    options: [
      "To add state to functional components",
      "To handle side effects",
      "To manage context",
      "To memoize values",
    ],
    answer: "To add state to functional components",
    explanation:
      "`useState` is a hook that allows you to add state to functional components. It returns a state variable and a function to update that state. Example:\n```js\nconst [count, setCount] = useState(0);\n```",
    topic: "react",
  },
  {
    id: 53,
    question: "What is `React.StrictMode` used for?",
    options: [
      "To identify potential problems in an application during development",
      "To manage state updates",
      "To handle side effects",
      "To create context",
    ],
    answer:
      "To identify potential problems in an application during development",
    explanation:
      "`React.StrictMode` is a tool for identifying potential problems in your React application during development. It activates additional checks and warnings for deprecated APIs, unsafe lifecycle methods, and other issues. Example:\n```js\n<React.StrictMode>\n  <App />\n</React.StrictMode>\n```",
    topic: "react",
  },
  {
    id: 54,
    question:
      "How do you pass data from a parent component to a child component?",
    options: ["Using props", "Using state", "Using context", "Using refs"],
    answer: "Using props",
    explanation:
      "Data is passed from a parent component to a child component using props. Props are read-only attributes that allow you to pass data and event handlers down the component tree. Example:\n```js\n<ChildComponent data={parentData} />\n```",
    topic: "react",
  },
  {
    id: 55,
    question: "What is the purpose of `useEffect` in React?",
    options: [
      "To handle side effects in functional components",
      "To manage state updates",
      "To create context",
      "To memoize values",
    ],
    answer: "To handle side effects in functional components",
    explanation:
      "`useEffect` is a hook used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after the render and can be configured to run based on dependencies. Example:\n```js\nuseEffect(() => { /* effect code */ }, [dependencies]);\n```",
    topic: "react",
  },
  {
    id: 56,
    question: "What is a key in React and why is it important?",
    options: [
      "A unique identifier for elements in a list to optimize rendering",
      "A way to manage state",
      "A method for handling side effects",
      "A hook for memoization",
    ],
    answer: "A unique identifier for elements in a list to optimize rendering",
    explanation:
      "A key is a unique identifier for elements in a list that helps React optimize rendering by tracking changes to list items. It is crucial for efficiently updating the list and avoiding unnecessary re-renders. Example:\n```js\n{items.map(item => <ListItem key={item.id} item={item} />)}\n```",
    topic: "react",
  },
  {
    id: 57,
    question: "What is the purpose of `useReducer` in React?",
    options: [
      "To manage more complex state logic than `useState`",
      "To handle side effects",
      "To create context",
      "To memoize values",
    ],
    answer: "To manage more complex state logic than `useState`",
    explanation:
      "`useReducer` is used to manage complex state logic in functional components. It is preferred over `useState` when state changes depend on previous state values or involve multiple sub-values. Example:\n```js\nconst [state, dispatch] = useReducer(reducer, initialState);\n```",
    topic: "react",
  },
  {
    id: 58,
    question: "How can you optimize performance in a React application?",
    options: [
      "By using memoization techniques, React.memo, and useCallback",
      "By increasing the frequency of re-renders",
      "By avoiding use of state and props",
      "By directly manipulating the DOM",
    ],
    answer: "By using memoization techniques, React.memo, and useCallback",
    explanation:
      "Performance in a React application can be optimized using memoization techniques like `useMemo`, `React.memo`, and `useCallback` to avoid unnecessary re-renders and computations. These techniques help ensure that components only re-render when necessary.",
    topic: "react",
  },
  {
    id: 59,
    question: "What is `useRef` used for in React?",
    options: [
      "To create mutable refs that persist across renders",
      "To handle state updates",
      "To manage side effects",
      "To create context",
    ],
    answer: "To create mutable refs that persist across renders",
    explanation:
      "`useRef` is a hook used to create mutable refs that persist across renders. It is often used to access DOM elements or store values that do not trigger re-renders when updated. Example:\n```js\nconst ref = useRef(null);\nreturn <div ref={ref}>...</div>;\n```",
    topic: "react",
  },
  {
    id: 60,
    question: "What is `React.lazy` used for?",
    options: [
      "To dynamically import components and enable code splitting",
      "To handle state updates",
      "To create context",
      "To manage side effects",
    ],
    answer: "To dynamically import components and enable code splitting",
    explanation:
      "`React.lazy` is used to dynamically import components, enabling code splitting and reducing the initial load time of the application. It is often used in conjunction with `Suspense` to show a fallback UI while the component is loading. Example:\n```js\nconst LazyComponent = React.lazy(() => import('./LazyComponent'));\n```",
    topic: "react",
  },
  {
    id: 61,
    question: "What is `React.PureComponent`?",
    options: [
      "A class component that implements `shouldComponentUpdate` with a shallow prop and state comparison",
      "A hook for managing state",
      "A function for handling side effects",
      "A context provider",
    ],
    answer:
      "A class component that implements `shouldComponentUpdate` with a shallow prop and state comparison",
    explanation:
      "`React.PureComponent` is a class component that implements `shouldComponentUpdate` with a shallow comparison of props and state. This helps in preventing unnecessary re-renders when the props and state have not changed. Example:\n```js\nclass MyComponent extends React.PureComponent { /* ... */ }\n```",
    topic: "react",
  },
  {
    id: 62,
    question: "What is `useMemo` used for in React?",
    options: [
      "To memoize expensive calculations and optimize performance",
      "To handle state updates",
      "To manage side effects",
      "To create context",
    ],
    answer: "To memoize expensive calculations and optimize performance",
    explanation:
      "`useMemo` is a hook that memoizes the result of an expensive calculation and returns the cached result if the dependencies have not changed. This helps in optimizing performance by avoiding unnecessary recalculations. Example:\n```js\nconst memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n```",
    topic: "react",
  },
  {
    id: 63,
    question: "What is `React.Fragment` used for?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To manage component state",
      "To handle side effects",
      "To create context",
    ],
    answer: "To group multiple elements without adding extra nodes to the DOM",
    explanation:
      "`React.Fragment` is used to group multiple elements into a single parent without adding an extra node to the DOM. It helps in keeping the DOM structure clean and avoiding unnecessary wrapper elements. Example:\n```js\nreturn (\n  <React.Fragment>\n    <ChildA />\n    <ChildB />\n  </React.Fragment>\n);\n```",
    topic: "react",
  },
  {
    id: 64,
    question: "What are controlled components in React?",
    options: [
      "Components whose form data is handled by React state",
      "Components that manage their own state internally",
      "Components that use context for state management",
      "Components that use refs for handling form data",
    ],
    answer: "Components whose form data is handled by React state",
    explanation:
      "Controlled components are form elements whose value is controlled by React state. The form data is managed by setting the value of the input elements based on the state and updating the state through event handlers. Example:\n```js\n<input value={value} onChange={e => setValue(e.target.value)} />\n```",
    topic: "react",
  },
  {
    id: 65,
    question: "What is `React.memo` used for?",
    options: [
      "To memoize functional components and prevent unnecessary re-renders",
      "To manage state",
      "To create context",
      "To handle side effects",
    ],
    answer:
      "To memoize functional components and prevent unnecessary re-renders",
    explanation:
      "`React.memo` is a higher-order component that memoizes functional components, preventing them from re-rendering if their props have not changed. This can optimize performance by avoiding unnecessary renders. Example:\n```js\nconst MemoizedComponent = React.memo(MyComponent);\n```",
    topic: "react",
  },
  {
    id: 66,
    question: "What is the `useContext` hook used for in React?",
    options: [
      "To access context values in functional components",
      "To handle state updates",
      "To create refs",
      "To manage side effects",
    ],
    answer: "To access context values in functional components",
    explanation:
      "`useContext` is a hook that allows you to access context values directly in functional components. It is used to consume values from a `Context` created with `React.createContext`. Example:\n```js\nconst value = useContext(MyContext);\n```",
    topic: "react",
  },
  {
    id: 67,
    question: "What is the purpose of `React.createContext`?",
    options: [
      "To create a context object for managing global state",
      "To handle side effects",
      "To manage component state",
      "To memoize values",
    ],
    answer: "To create a context object for managing global state",
    explanation:
      "`React.createContext` is used to create a context object that can be used to share data or state across components without having to pass props explicitly through every level of the component tree. Example:\n```js\nconst MyContext = React.createContext(defaultValue);\n```",
    topic: "react",
  },
  {
    id: 68,
    question: "How do you create a custom hook in React?",
    options: [
      "By defining a function that uses one or more React hooks",
      "By using a class component",
      "By extending a base class",
      "By using `useState` only",
    ],
    answer: "By defining a function that uses one or more React hooks",
    explanation:
      "Custom hooks are created by defining a function that uses one or more React hooks. This function can then be used to encapsulate and reuse logic across multiple components. Example:\n```js\nfunction useCustomHook() {\n  const [value, setValue] = useState(initialValue);\n  // custom logic\n  return [value, setValue];\n}\n```",
    topic: "react",
  },
  {
    id: 69,
    question: "What is the purpose of `forwardRef` in React?",
    options: [
      "To forward refs to a child component",
      "To handle state updates",
      "To manage side effects",
      "To create context",
    ],
    answer: "To forward refs to a child component",
    explanation:
      "`forwardRef` is a higher-order component that allows you to forward refs from a parent component to a child component. This is useful when you need to access a child component's instance or DOM node. Example:\n```js\nconst MyComponent = forwardRef((props, ref) => <div ref={ref}>...</div>);\n```",
    topic: "react",
  },
  {
    id: 70,
    question: "What is `useImperativeHandle` used for in React?",
    options: [
      "To customize the instance value exposed to parent components when using refs",
      "To handle side effects",
      "To manage state",
      "To create context",
    ],
    answer:
      "To customize the instance value exposed to parent components when using refs",
    explanation:
      "`useImperativeHandle` is used in conjunction with `forwardRef` to customize the instance value that is exposed to the parent component when using refs. It allows you to control what methods or properties are accessible to the parent. Example:\n```js\nconst MyComponent = forwardRef((props, ref) => {\n  useImperativeHandle(ref, () => ({ customMethod }));\n  return <div>...</div>;\n});\n```",
    topic: "react",
  },
  {
    id: 71,
    question: "What is `useEffect` used for in React?",
    options: [
      "To handle side effects in functional components",
      "To manage state updates",
      "To create context",
      "To memoize values",
    ],
    answer: "To handle side effects in functional components",
    explanation:
      "`useEffect` is a hook used for handling side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after the render and can be configured to run based on dependencies. Example:\n```js\nuseEffect(() => { /* effect code */ }, [dependencies]);\n```",
    topic: "react",
  },
  {
    id: 72,
    question: "What is the purpose of `ReactDOM.render`?",
    options: [
      "To render a React element into the DOM",
      "To handle state updates",
      "To manage side effects",
      "To create context",
    ],
    answer: "To render a React element into the DOM",
    explanation:
      "`ReactDOM.render` is used to render a React element or component into the DOM. It is typically used to mount the root component of a React application into a specified DOM node. Example:\n```js\nReactDOM.render(<App />, document.getElementById('root'));\n```",
    topic: "react",
  },
  {
    id: 73,
    question: "What is the `useLayoutEffect` hook used for?",
    options: [
      "To run effects synchronously before the DOM is painted",
      "To manage state updates",
      "To handle side effects",
      "To create context",
    ],
    answer: "To run effects synchronously before the DOM is painted",
    explanation:
      "`useLayoutEffect` is used to run effects synchronously before the browser paints the DOM. It is useful for performing operations that need to happen before the screen is updated, such as measuring layout. Example:\n```js\nuseLayoutEffect(() => { /* effect code */ }, [dependencies]);\n```",
    topic: "react",
  },
  {
    id: 74,
    question: "What is the `useCallback` hook used for?",
    options: [
      "To memoize callback functions to prevent unnecessary re-creations",
      "To manage state updates",
      "To handle side effects",
      "To create context",
    ],
    answer: "To memoize callback functions to prevent unnecessary re-creations",
    explanation:
      "`useCallback` is used to memoize callback functions, ensuring they are not recreated on every render unless their dependencies change. This optimization can help prevent unnecessary re-renders of child components. Example:\n```js\nconst memoizedCallback = useCallback(() => { /* callback function */ }, [dependencies]);\n```",
    topic: "react",
  },
  {
    id: 75,
    question: "What is `useMemo` used for in React?",
    options: [
      "To memoize expensive calculations and optimize performance",
      "To handle state updates",
      "To create context",
      "To manage side effects",
    ],
    answer: "To memoize expensive calculations and optimize performance",
    explanation:
      "`useMemo` is used to memoize the result of an expensive calculation. It returns a cached result of the calculation if the dependencies have not changed, helping to optimize performance by avoiding unnecessary recalculations. Example:\n```js\nconst memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n```",
    topic: "react",
  },
  {
    id: 76,
    question: "What is `useContext` used for in React?",
    options: [
      "To access context values in functional components",
      "To handle state updates",
      "To create refs",
      "To manage side effects",
    ],
    answer: "To access context values in functional components",
    explanation:
      "`useContext` is a hook that allows you to access context values directly in functional components. It is used to consume values provided by a `Context` created with `React.createContext`. Example:\n```js\nconst value = useContext(MyContext);\n```",
    topic: "react",
  },
  {
    id: 77,
    question: "How can you handle errors in React components?",
    options: [
      "Using error boundaries",
      "Using `useEffect` hook",
      "Using context",
      "Using refs",
    ],
    answer: "Using error boundaries",
    explanation:
      "Error boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the whole component tree. Example:\n```js\nclass ErrorBoundary extends React.Component { /* ... */ }\n```",
    topic: "react",
  },
  {
    id: 78,
    question: "What are `PropTypes` used for in React?",
    options: [
      "To validate the types of props passed to components",
      "To manage state updates",
      "To handle side effects",
      "To create context",
    ],
    answer: "To validate the types of props passed to components",
    explanation:
      "`PropTypes` is a library that allows you to define and validate the types of props passed to a component, helping to catch bugs and ensure that components receive the correct types of data. Example:\n```js\nMyComponent.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number\n};\n```",
    topic: "react",
  },
  {
    id: 79,
    question: "What is the purpose of `React.StrictMode`?",
    options: [
      "To activate additional checks and warnings for development",
      "To handle state updates",
      "To create context",
      "To manage side effects",
    ],
    answer: "To activate additional checks and warnings for development",
    explanation:
      "`React.StrictMode` is a wrapper component that activates additional checks and warnings for its children in development mode. It helps to identify potential problems and improve code quality. Example:\n```js\n<React.StrictMode>\n  <App />\n</React.StrictMode>\n```",
    topic: "react",
  },
  {
    id: 80,
    question: "How do you handle forms in React?",
    options: [
      "Using controlled components and state",
      "Using uncontrolled components",
      "Using context",
      "Using refs",
    ],
    answer: "Using controlled components and state",
    explanation:
      "Handling forms in React is typically done using controlled components, where form data is managed by the component's state. This allows for easy validation and handling of form submissions. Example:\n```js\nfunction MyForm() {\n  const [value, setValue] = useState('');\n  const handleChange = (e) => setValue(e.target.value);\n  return <input value={value} onChange={handleChange} />;\n}\n```",
    topic: "react",
  },
];
