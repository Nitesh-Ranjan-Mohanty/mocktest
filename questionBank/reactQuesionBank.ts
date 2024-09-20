interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  topic: string;
  example?: string;
}

export const reactQuestions: Question[] = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database",
      "A CSS framework",
    ],
    answer: "A JavaScript library for building user interfaces",
    explanation:
      "React is a JavaScript library developed by Facebook for building user interfaces, especially single-page applications.",
    topic: "react",
    example: "import React from 'react';",
  },
  {
    id: 2,
    question: "What is a component in React?",
    options: [
      "A reusable piece of UI",
      "A JavaScript function",
      "A type of CSS",
      "A data structure",
    ],
    answer: "A reusable piece of UI",
    explanation:
      "In React, a component is a reusable piece of UI that can be composed to build complex user interfaces.",
    topic: "react",
    example: "function MyComponent() { return <div>Hello!</div>; }",
  },
  {
    id: 3,
    question: "What is JSX?",
    options: [
      "JavaScript XML",
      "JavaScript Syntax Extension",
      "JavaScript Extended",
      "JavaScript X",
    ],
    answer: "JavaScript XML",
    explanation:
      "JSX is a syntax extension for JavaScript that looks similar to XML or HTML, allowing developers to write HTML-like structures in their React components.",
    topic: "react",
    example: "const element = <h1>Hello, world!</h1>;",
  },
  {
    id: 4,
    question: "What is the purpose of 'props' in React?",
    options: [
      "To pass data from parent to child components",
      "To manage local state",
      "To handle events",
      "To define styles",
    ],
    answer: "To pass data from parent to child components",
    explanation:
      "Props (short for properties) are used to pass data and event handlers from parent components to child components in React.",
    topic: "react",
    example: "<MyComponent name='Alice' />",
  },
  {
    id: 5,
    question: "What is state in React?",
    options: [
      "An object that represents a component's local state",
      "A global variable",
      "A method to manage props",
      "A way to define styles",
    ],
    answer: "An object that represents a component's local state",
    explanation:
      "State in React is an object that represents the local state of a component and can be changed using the setState method.",
    topic: "react",
    example: "const [count, setCount] = useState(0);",
  },
  {
    id: 6,
    question: "What are React hooks?",
    options: [
      "Functions that let you use state and lifecycle features in functional components",
      "Methods to create class components",
      "Functions to handle events",
      "APIs for routing",
    ],
    answer:
      "Functions that let you use state and lifecycle features in functional components",
    explanation:
      "React hooks are functions that allow you to use state and other React features in functional components, making it easier to manage stateful logic.",
    topic: "react",
    example: "import { useState } from 'react';",
  },
  {
    id: 7,
    question: "What is the use of 'useEffect' hook?",
    options: [
      "To perform side effects in functional components",
      "To manage state",
      "To handle events",
      "To render UI",
    ],
    answer: "To perform side effects in functional components",
    explanation:
      "'useEffect' is a hook that lets you perform side effects in functional components, such as data fetching or DOM manipulation.",
    topic: "react",
    example: "useEffect(() => { console.log('Component mounted'); }, []);",
  },
  {
    id: 8,
    question: "What is the virtual DOM in React?",
    options: [
      "An in-memory representation of the real DOM",
      "The actual DOM",
      "A database",
      "A CSS framework",
    ],
    answer: "An in-memory representation of the real DOM",
    explanation:
      "The virtual DOM is an in-memory representation of the real DOM that React uses to optimize updates and rendering, improving performance.",
    topic: "react",
    example: "React creates a virtual DOM to track changes efficiently.",
  },
  {
    id: 9,
    question: "What is the significance of keys in React?",
    options: [
      "To uniquely identify elements in a list",
      "To manage state",
      "To define styles",
      "To handle events",
    ],
    answer: "To uniquely identify elements in a list",
    explanation:
      "Keys are used in React to uniquely identify elements in a list, helping React to optimize rendering and updates.",
    topic: "react",
    example: "<li key={item.id}>{item.name}</li>",
  },
  {
    id: 10,
    question: "What is the difference between functional and class components?",
    options: [
      "Functional components are stateless; class components can manage state",
      "Functional components can use hooks; class components cannot",
      "Class components are faster",
      "There is no difference",
    ],
    answer:
      "Functional components are stateless; class components can manage state",
    explanation:
      "Functional components are simpler and primarily used for rendering, while class components can manage their own state and lifecycle methods.",
    topic: "react",
    example:
      "class MyComponent extends React.Component { render() { return <div>Hello!</div>; } }",
  },
  {
    id: 11,
    question:
      "What is the purpose of the 'render' method in a class component?",
    options: [
      "To define what the component renders",
      "To manage state",
      "To handle events",
      "To define styles",
    ],
    answer: "To define what the component renders",
    explanation:
      "The 'render' method in a class component is used to define the UI that the component will render, returning JSX.",
    topic: "react",
    example: "render() { return <h1>Hello, world!</h1>; }",
  },
  {
    id: 12,
    question: "What is the purpose of 'setState' in React?",
    options: [
      "To update the state of a component",
      "To pass props",
      "To render components",
      "To handle events",
    ],
    answer: "To update the state of a component",
    explanation:
      "'setState' is a method used in class components to update the component's state and trigger a re-render.",
    topic: "react",
    example: "this.setState({ count: this.state.count + 1 });",
  },
  {
    id: 13,
    question: "What is prop drilling?",
    options: [
      "Passing props through multiple levels of components",
      "Managing state",
      "Creating components",
      "Handling events",
    ],
    answer: "Passing props through multiple levels of components",
    explanation:
      "Prop drilling refers to the process of passing data through multiple layers of components, which can make the code less clean and harder to maintain.",
    topic: "react",
    example: "const Parent = () => <Child prop={value} />;",
  },
  {
    id: 14,
    question: "What is context in React?",
    options: [
      "A way to share values between components without prop drilling",
      "A method to create components",
      "A lifecycle method",
      "A way to handle state",
    ],
    answer: "A way to share values between components without prop drilling",
    explanation:
      "Context provides a way to share values between components without explicitly passing props through every level of the component tree.",
    topic: "react",
    example: "const MyContext = React.createContext();",
  },
  {
    id: 15,
    question: "What is a higher-order component?",
    options: [
      "A function that takes a component and returns a new component",
      "A method to create components",
      "A type of hook",
      "A lifecycle method",
    ],
    answer: "A function that takes a component and returns a new component",
    explanation:
      "A higher-order component (HOC) is a function that takes a component as an argument and returns a new component, enabling code reuse.",
    topic: "react",
    example:
      "const withExtraProps = (WrappedComponent) => (props) => <WrappedComponent {...props} extraProp='value' />;",
  },
  {
    id: 16,
    question: "What is a controlled component?",
    options: [
      "A component whose form data is handled by React",
      "A stateless component",
      "A class component",
      "A functional component",
    ],
    answer: "A component whose form data is handled by React",
    explanation:
      "A controlled component is a component whose form data is managed by React, meaning that the component's state is the single source of truth.",
    topic: "react",
    example: "<input value={this.state.value} onChange={this.handleChange} />",
  },
  {
    id: 17,
    question: "What is an uncontrolled component?",
    options: [
      "A component that manages its own form data",
      "A class component",
      "A component that does not render",
      "A stateless component",
    ],
    answer: "A component that manages its own form data",
    explanation:
      "An uncontrolled component is a component that maintains its own state internally instead of being controlled by React.",
    topic: "react",
    example: "<input defaultValue='Hello' />",
  },
  {
    id: 18,
    question: "What is the purpose of the 'key' prop in lists?",
    options: [
      "To give each element a unique identifier",
      "To manage state",
      "To handle events",
      "To define styles",
    ],
    answer: "To give each element a unique identifier",
    explanation:
      "The 'key' prop helps React identify which items have changed, are added, or are removed, which improves performance in rendering lists.",
    topic: "react",
    example: "<ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>",
  },
  {
    id: 19,
    question: "What is the purpose of 'shouldComponentUpdate'?",
    options: [
      "To determine whether a component should re-render",
      "To manage state",
      "To handle events",
      "To define styles",
    ],
    answer: "To determine whether a component should re-render",
    explanation:
      "'shouldComponentUpdate' is a lifecycle method that allows you to control whether a component should re-render or not based on changes in props or state.",
    topic: "react",
    example: "shouldComponentUpdate(nextProps, nextState) { return false; }",
  },
  {
    id: 20,
    question: "What are React Fragments?",
    options: [
      "A way to group multiple elements without adding extra nodes",
      "A type of component",
      "A method to manage state",
      "A way to handle events",
    ],
    answer: "A way to group multiple elements without adding extra nodes",
    explanation:
      "React Fragments allow you to group multiple elements without adding extra nodes to the DOM, making the code cleaner.",
    topic: "react",
    example: "<React.Fragment><Child1 /><Child2 /></React.Fragment>",
  },
  {
    id: 21,
    question: "What is the purpose of 'useRef' hook?",
    options: [
      "To create a mutable object that persists for the full lifetime of the component",
      "To manage state",
      "To perform side effects",
      "To handle events",
    ],
    answer:
      "To create a mutable object that persists for the full lifetime of the component",
    explanation:
      "'useRef' is a hook that returns a mutable object which can be used to store values that do not cause re-renders when updated.",
    topic: "react",
    example: "const inputRef = useRef();",
  },
  {
    id: 22,
    question: "What is the purpose of 'React.StrictMode'?",
    options: [
      "To highlight potential problems in an application",
      "To optimize performance",
      "To handle state",
      "To define styles",
    ],
    answer: "To highlight potential problems in an application",
    explanation:
      "React.StrictMode is a tool for highlighting potential problems in an application, enabling additional checks and warnings for its descendants.",
    topic: "react",
    example: "<React.StrictMode><App /></React.StrictMode>",
  },
  {
    id: 23,
    question: "What is 'memoization' in React?",
    options: [
      "An optimization technique to prevent unnecessary re-renders",
      "A method to manage state",
      "A way to handle events",
      "A way to define styles",
    ],
    answer: "An optimization technique to prevent unnecessary re-renders",
    explanation:
      "Memoization is an optimization technique used to prevent unnecessary re-renders of components by caching their rendered output.",
    topic: "react",
    example: "const MemoizedComponent = React.memo(MyComponent);",
  },
  {
    id: 24,
    question: "What does 'ReactDOM.render' do?",
    options: [
      "Renders a React component into the DOM",
      "Updates the state",
      "Handles events",
      "Defines styles",
    ],
    answer: "Renders a React component into the DOM",
    explanation:
      "'ReactDOM.render' is used to render a React component into the DOM, displaying the UI on the webpage.",
    topic: "react",
    example: "ReactDOM.render(<App />, document.getElementById('root'));",
  },
  {
    id: 25,
    question: "What is 'useCallback' used for?",
    options: [
      "To memoize callback functions",
      "To manage state",
      "To handle events",
      "To define styles",
    ],
    answer: "To memoize callback functions",
    explanation:
      "'useCallback' is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed.",
    topic: "react",
    example:
      "const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);",
  },
];
