# Complete React.js Guide: From Beginner to Advanced

## Table of Contents
1. [Introduction to React](#1-introduction-to-react)
2. [Core Concepts](#2-core-concepts)
3. [Components & Props](#3-components--props)
4. [State & Lifecycle](#4-state--lifecycle)
5. [Events & Handling](#5-events--handling)
6. [Hooks](#6-hooks)
7. [Forms & Controlled Components](#7-forms--controlled-components)
8. [Component Composition](#8-component-composition)
9. [Context API](#9-context-api)
10. [Error Boundaries](#10-error-boundaries)
11. [Higher-Order Components](#11-higher-order-components)
12. [Render Props](#12-render-props)
13. [Code Splitting](#13-code-splitting)
14. [Performance Optimization](#14-performance-optimization)
15. [Testing](#15-testing)
16. [Advanced Patterns](#16-advanced-patterns)

## 1. Introduction to React

### What is React?
React is a JavaScript library for building user interfaces, particularly single-page applications. It was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.

### Key Features
- Virtual DOM
- Component-Based Architecture
- Unidirectional Data Flow
- JSX (JavaScript XML)

### Setting Up React
```bash
# Create a new React project using Create React App
npx create-react-app my-app
cd my-app
npm start
```

### Basic Structure
```jsx
// index.js - Entry point
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// App.js - Main component
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```

## 2. Core Concepts

### JSX
JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.

```jsx
// JSX Example
const element = (
  <div className="greeting">
    <h1>Hello, {formatName(user)}</h1>
    <p>Welcome to React</p>
  </div>
);

// Equivalent JavaScript
const element = React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement('h1', null, 'Hello, ', formatName(user)),
  React.createElement('p', null, 'Welcome to React')
);
```

### Virtual DOM
The Virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering performance.

```jsx
// React handles Virtual DOM updates automatically
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## 3. Components & Props

### Functional Components
```jsx
// Simple functional component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using arrow function
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

// Usage
<Welcome name="John" />
```

### Class Components
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Props
```jsx
// Props example with default values
function UserCard({ name, age = 25, role = 'User' }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

// Usage
<UserCard name="John Doe" age={30} role="Admin" />
<UserCard name="Jane Doe" /> // Uses default values
```

## 4. State & Lifecycle

### useState Hook
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```

### Class Component State
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

### Lifecycle Methods
```jsx
class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    // Called after component is mounted
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  componentDidUpdate(prevProps, prevState) {
    // Called after component updates
    if (prevProps.id !== this.props.id) {
      this.fetchData(this.props.id);
    }
  }

  componentWillUnmount() {
    // Cleanup before component is unmounted
    this.subscription.unsubscribe();
  }

  render() {
    return <div>{/* Render content */}</div>;
  }
}
```

## 5. Events & Handling

### Event Handling
```jsx
function EventDemo() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Button clicked!');
  };

  const handleChange = (e) => {
    console.log('Input value:', e.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <input onChange={handleChange} />
    </div>
  );
}
```

### Event Binding
```jsx
class EventBinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
    // Binding in constructor
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ message: 'Button clicked!' });
  }

  // Alternative using arrow function
  handleClickArrow = () => {
    this.setState({ message: 'Button clicked!' });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click (Bound)</button>
        <button onClick={this.handleClickArrow}>Click (Arrow)</button>
      </div>
    );
  }
}
```

## 6. Hooks

### useState
```jsx
function UserForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <form>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
      />
    </form>
  );
}
```

### useEffect
```jsx
function DataFetcher({ id }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`https://api.example.com/data/${id}`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Cleanup function
    return () => {
      // Cancel any ongoing requests or cleanup
    };
  }, [id]); // Dependency array

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data found</div>;

  return <div>{/* Render data */}</div>;
}
```

### useContext
```jsx
// Create context
const ThemeContext = React.createContext('light');

// Provider component
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

// Consumer component using useContext
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
    >
      Toggle Theme
    </button>
  );
}
```

### useReducer
```jsx
// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Component using useReducer
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

## 7. Forms & Controlled Components

### Controlled Components
```jsx
function ControlledForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 8. Component Composition

### Children Props
```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage
function App() {
  return (
    <Card title="Welcome">
      <p>This is some content inside the card.</p>
      <button>Click me</button>
    </Card>
  );
}
```

### Specialized Components
```jsx
function Dialog({ type = 'info', title, message, onClose }) {
  const styles = {
    info: { borderColor: 'blue' },
    warning: { borderColor: 'yellow' },
    error: { borderColor: 'red' }
  };

  return (
    <div className="dialog" style={styles[type]}>
      <h3>{title}</h3>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function ErrorDialog({ title, message, onClose }) {
  return (
    <Dialog
      type="error"
      title={title}
      message={message}
      onClose={onClose}
    />
  );
}
```

## 9. Context API

### Creating and Using Context
```jsx
// Create context
const UserContext = React.createContext();

// Provider component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Consumer component
function UserProfile() {
  const { user, logout } = useContext(UserContext);

  if (!user) return <div>Please log in</div>;

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

// App setup
function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}
```

## 10. Error Boundaries

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

### Higher-Order Components (HOC) in React

A **Higher-Order Component (HOC)** is a pattern in React that allows you to reuse component logic. An HOC is a function that takes a component and returns a new component with enhanced behavior. HOCs are not part of the React API, but they are a convention that allows you to compose components in a way that promotes reusability and separation of concerns.

### Definition
A Higher-Order Component (HOC) is a function that takes a component as an argument and returns a new component. This new component typically has additional props, state, or logic that the original component doesn't have. HOCs allow for cross-cutting concerns (like authentication, logging, or styling) to be handled in a modular way.

### Basic Example

Here's a simple example of an HOC that adds a "loading" state to a component:

```jsx
import React, { useState, useEffect } from 'react';

// HOC that adds loading functionality
function withLoading(Component) {
  return function WithLoading(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading state
      return () => clearTimeout(timer);
    }, []);

    return loading ? <div>Loading...</div> : <Component {...props} />;
  };
}

// Regular component
function MyComponent() {
  return <div>Data is loaded!</div>;
}

// Enhanced component with loading state
const MyComponentWithLoading = withLoading(MyComponent);

function App() {
  return (
    <div>
      <MyComponentWithLoading />
    </div>
  );
}

export default App;
```

### Explanation:
1. `withLoading` is the HOC that adds a loading state to any component.
2. The `withLoading` function takes a component (`MyComponent`) and returns a new component that has loading logic.
3. Inside the HOC, we simulate a loading state using the `useState` and `useEffect` hooks. Once the loading is done (after 2 seconds), it renders the original `MyComponent`.

### Common Use Cases for HOCs
1. **Code splitting**: Dynamically load parts of a component when needed (for example, using `React.lazy`).
2. **Authentication**: A component that checks if the user is authenticated before rendering the actual component.
3. **Error boundaries**: Handling errors within components and providing fallback UI.
4. **Logging**: Wrap components to log props, state, or lifecycle events.
5. **Styling**: Apply certain styles or themes to components.

### Example of an HOC for Authentication

```jsx
import React from 'react';

// Simulate an authentication check
function withAuth(Component) {
  return function WithAuth(props) {
    const isAuthenticated = false; // Simulate the user not being authenticated

    if (!isAuthenticated) {
      return <div>Please log in to view this content.</div>;
    }

    return <Component {...props} />;
  };
}

// Regular component
function ProtectedContent() {
  return <div>Protected Content</div>;
}

// Enhanced component with authentication check
const ProtectedContentWithAuth = withAuth(ProtectedContent);

function App() {
  return (
    <div>
      <ProtectedContentWithAuth />
    </div>
  );
}

export default App;
```

### Key Characteristics of HOCs:
1. **Reusability**: You can apply the same HOC to multiple components, making your code more modular and reusable.
2. **Functionality Enhancement**: HOCs are great for adding additional features to existing components without modifying the original component itself.
3. **Composability**: You can chain HOCs together. For example, a component can be wrapped by multiple HOCs to apply different behaviors (e.g., both authentication and loading behavior).

### Conclusion
Higher-Order Components are a powerful pattern in React that enables component reuse, adds behavior to existing components, and helps in separating concerns, making it easier to manage large React applications.

## 12. Render Props

Render Props is a technique for sharing code between components using a prop whose value is a function.

```jsx
// Mouse tracking component with render prop
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {/* The render prop gives flexibility in rendering */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage with different render implementations
function App() {
  return (
    <div>
      {/* Render as coordinates */}
      <MouseTracker
        render={({ x, y }) => (
          <p>Mouse position: ({x}, {y})</p>
        )}
      />

      {/* Render as following cursor */}
      <MouseTracker
        render={({ x, y }) => (
          <div style={{ 
            position: 'fixed',
            left: x,
            top: y,
            width: 20,
            height: 20,
            background: 'red',
            borderRadius: '50%'
          }}/>
        )}
      />
    </div>
  );
}
```

### Advanced Render Props with Multiple Children

```jsx
// Data fetching component with render prop
function DataFetcher({ url, renderSuccess, renderError, renderLoading }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  if (loading) return renderLoading();
  if (error) return renderError(error);
  return renderSuccess(data);
}

// Usage
function UserProfile({ userId }) {
  return (
    <DataFetcher
      url={`/api/users/${userId}`}
      renderLoading={() => <div>Loading...</div>}
      renderError={(error) => <div>Error: {error.message}</div>}
      renderSuccess={(user) => (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    />
  );
}
```

## 13. Code Splitting

### React.lazy and Suspense

```jsx
import React, { Suspense, lazy } from 'react';

// Lazy loaded components
const HeavyComponent = lazy(() => import('./HeavyComponent'));
const AnotherHeavyComponent = lazy(() => import('./AnotherHeavyComponent'));

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
```

### Route-based Code Splitting

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// Lazy load route components
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const UserProfile = lazy(() => import('./routes/UserProfile'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

### Component-based Splitting with Error Boundary

```jsx
const MyErrorBoundary = lazy(() => import('./MyErrorBoundary'));
const MyComponent = lazy(() => import('./MyComponent'));

function ComponentWithErrorBoundary() {
  return (
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </MyErrorBoundary>
  );
}
```

## 14. Performance Optimization

### React.memo for Functional Components

```jsx
// Prevent unnecessary re-renders with React.memo
const ExpensiveComponent = React.memo(({ data }) => {
  // Complex rendering logic
  return (
    <div>
      {data.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  return prevProps.data.length === nextProps.data.length;
});
```

### useMemo and useCallback

```jsx
function SearchResults({ query, data }) {
  // Memoize expensive calculations
  const filteredData = useMemo(() => {
    return data.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);

  // Memoize callback functions
  const handleItemClick = useCallback((id) => {
    console.log(`Item clicked: ${id}`);
  }, []); // Empty dependency array if callback doesn't depend on props/state

  return (
    <ul>
      {filteredData.map(item => (
        <li key={item.id} onClick={() => handleItemClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
```

### Virtualization for Long Lists

```jsx
import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      Item {items[index]}
    </div>
  );

  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
}
```

## 15. Testing

### Component Testing with Jest and React Testing Library

```jsx
// Button.test.jsx
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Integration Testing

```jsx
// UserProfile.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';

// Mock fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: 'John Doe', email: 'john@example.com' })
  })
);

describe('UserProfile Integration', () => {
  test('loads and displays user data', async () => {
    render(<UserProfile userId="123" />);

    // Check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });
  });
});
```

### Custom Hook Testing

```jsx
// useCounter.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

describe('useCounter', () => {
  test('should increment and decrement count', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });
});
```

## 16. Advanced Patterns

### Compound Components Pattern

```jsx
// Compound components for a custom select
const Select = ({ children, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <SelectContext.Provider value={{ 
      isOpen, 
      setIsOpen, 
      selectedOption, 
      setSelectedOption,
      onChange 
    }}>
      <div className="select">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

Select.Trigger = function SelectTrigger() {
  const { selectedOption, setIsOpen } = useContext(SelectContext);
  return (
    <button onClick={() => setIsOpen(prev => !prev)}>
      {selectedOption?.label || 'Select...'}
    </button>
  );
};

Select.Options = function SelectOptions({ children }) {
  const { isOpen } = useContext(SelectContext);
  return isOpen ? <div className="options">{children}</div> : null;
};

Select.Option = function SelectOption({ value, children }) {
  const { setSelectedOption, setIsOpen, onChange } = useContext(SelectContext);
  
  const handleSelect = () => {
    setSelectedOption({ value, label: children });
    setIsOpen(false);
    onChange?.(value);
  };

  return (
    <div className="option" onClick={handleSelect}>
      {children}
    </div>
  );
};

// Usage
function App() {
  return (
    <Select onChange={value => console.log(value)}>
      <Select.Trigger />
      <Select.Options>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select.Options>
    </Select>
  );
}
```

### State Reducer Pattern

```jsx
function useToggle({ reducer = (state, action) => action.changes } = {}) {
  const [{ on }, dispatch] = useReducer(reducer, { on: false });

  const toggle = () => dispatch({ type: 'toggle', changes: { on: !on } });
  const setOn = () => dispatch({ type: 'set-on', changes: { on: true } });
  const setOff = () => dispatch({ type: 'set-off', changes: { on: false } });

  return { on, toggle, setOn, setOff };
}

// Usage with custom reducer
function App() {
  function toggleStateReducer(state, action) {
    if (action.type === 'toggle' && state.on) {
      // Prevent toggling off
      return state;
    }
    return action.changes;
  }

  const { on, toggle } = useToggle({ reducer: toggleStateReducer });

  return (
    <button onClick={toggle}>
      {on ? 'On' : 'Off'}
    </button>
  );
}
```

### Control Props Pattern

```jsx
function ControlledInput({ value: controlledValue, onChange, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  
  const handleChange = (event) => {
    if (!isControlled) {
      setValue(event.target.value);
    }
    onChange?.(event);
  };

  return (
    <input
      value={isControlled ? controlledValue : value}
      onChange={handleChange}
    />
  );
}

// Usage
function App() {
  const [value, setValue] = useState('');

  return (
    <div>
      {/* Controlled */}
      <ControlledInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* Uncontrolled */}
      <ControlledInput
        defaultValue="default"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
```

These advanced patterns enable you to create more flexible and reusable components while maintaining good performance and testability. The key is understanding when to use each pattern and how they can be combined to solve specific problems in your application.