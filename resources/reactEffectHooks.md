In React, **effect hooks** are functions that allow you to perform side effects in function components. Side effects can include data fetching, DOM manipulation, subscribing to external services, or setting up event listeners. React provides the following effect hooks:

### 1. **`useEffect()`**:
The most commonly used effect hook, `useEffect()` runs side effects after the component has rendered. It can handle side effects on every render or conditionally based on a dependency array.

**Usage**:
```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Code for the side effect (e.g., data fetching)
  return () => {
    // Cleanup function (optional) to run when the component unmounts
  };
}, [/* dependencies */]); // If empty, the effect only runs on mount/unmount
```

**Key points**:
- **No dependencies**: Runs on every render.
- **Empty dependency array**: Runs only on mount (componentDidMount) and unmount (componentWillUnmount).
- **Dependencies array**: Runs only when any of the listed dependencies change.

### 2. **`useLayoutEffect()`**:
Similar to `useEffect()`, but it fires synchronously after all DOM mutations. It ensures that the side effect runs before the browser repaints the screen, making it useful for measuring DOM elements or applying visual changes that need to happen immediately.

**Usage**:
```jsx
import { useLayoutEffect } from 'react';

useLayoutEffect(() => {
  // Synchronous side effects after DOM updates but before the browser paints
  return () => {
    // Cleanup function (optional)
  };
}, [/* dependencies */]); 
```

**Key points**:
- Runs synchronously after all DOM mutations but before the browser paints.
- Use this hook when measuring DOM elements or for visual updates that need to happen immediately.

### 3. **`useInsertionEffect()`**:
Introduced in **React 18**, `useInsertionEffect()` is a special hook used for injecting styles into the DOM before any other DOM mutations. It's used by libraries like styled-components or emotion for injecting critical CSS. This hook runs synchronously before `useLayoutEffect()` and `useEffect()`.

**Usage**:
```jsx
import { useInsertionEffect } from 'react';

useInsertionEffect(() => {
  // Synchronously inject styles into the DOM
}, []);
```

**Key points**:
- Primarily useful for CSS-in-JS libraries to inject styles before layout effects.
- Runs before the DOM is mutated, which helps in avoiding layout shifts.

### Summary of Effect Hooks:

| Hook                | Timing of Execution                   | Common Use Cases                                    |
|---------------------|---------------------------------------|----------------------------------------------------|
| **`useEffect()`**    | After the render                      | Data fetching, subscriptions, timers, logging, etc. |
| **`useLayoutEffect()`** | After DOM mutations, before the browser paint | Measuring DOM elements, applying immediate visual effects |
| **`useInsertionEffect()`** | Before DOM mutations and layout effects | Injecting CSS styles synchronously (primarily for CSS-in-JS libraries) |

These three hooks allow developers to handle a wide range of side effects efficiently in React functional components, depending on when and how those effects should be executed.