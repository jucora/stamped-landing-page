# Stamped Landing Project Study Guide

This guide is made for someone who is learning web development and React for the first time. It explains each part of the project clearly, step by step, with examples and definitions. By the end, you should understand how this landing page is built, how it appears in the browser, and how to update it.

---

## 1. What this project is

This project is a simple landing page website built with modern web tools. It is not a full application with a backend server or database. Instead, it is a static website that looks like a product landing page.

It uses:

- **React** for the page structure and interactive behavior
- **Vite** to run the page during development and create a fast build
- **CSS** for colors, spacing, layout, and responsive design
- **JavaScript** inside React for logic and events

The page is made of small pieces called "components". Each component shows a section on the page, such as the navigation bar, the hero section, or the features section.

---

## 2. Project structure overview

Open the project folder and look at these files and folders:

- `package.json`: defines the project name, dependencies, and commands
- `index.html`: the main HTML file loaded by the browser
- `src/`: source code folder
  - `main.jsx`: entry point that starts React
  - `App.jsx`: root component that combines sections
  - `index.css`: global style settings
  - `components/`: React components for each section
  - `hooks/`: reusable helper code
  - `assets/`: images used in the page

### Why this structure matters

- `src/main.jsx` is where the web page begins.
- `App.jsx` is the top-level React component.
- `components/` contains the visible parts of the page.
- `index.css` controls the page theme and mobile behavior.

---

## 3. How to run the project

These are the commands you use in the terminal from the project folder:

1. Install the packages:

```bash
npm install
```

2. Start the project locally:

```bash
npm run dev
```

After starting, Vite will show an address like `http://localhost:5173`. Open that address in your browser to see the page.

3. Build the project for production:

```bash
npm run build
```

That command creates optimized files for a real website.

---

## 4. Basic web development concepts

If you are new to this, these are the main ideas:

### 4.1 HTML

HTML is the code that describes the structure of a web page. It uses tags like `<div>`, `<h1>`, and `<a>`.

Example:

```html
<h1>Hello</h1>
<p>This is a paragraph.</p>
```

### 4.2 CSS

CSS adds style to HTML. It controls colors, fonts, layout, and spacing.

Example:

```css
p {
  color: blue;
}
```

### 4.3 JavaScript

JavaScript is the language that makes pages interactive. React uses JavaScript to build the UI and respond to user actions.

### 4.4 React

React is a library for building user interfaces with JavaScript. Instead of writing plain HTML, React lets you write components.

A component is a function that returns JSX. JSX looks like HTML, but it is written inside JavaScript.

---

## 5. React and Vite in this project

### 5.1 `src/main.jsx`

This file is the starting point. It tells React where to show the page.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

Explanation:

- `import` loads other files and code.
- `createRoot(document.getElementById('root'))` finds the HTML element where the app appears.
- `.render(<App />)` tells React to display the `App` component.
- `<StrictMode>` helps find mistakes during development.

### 5.2 `src/App.jsx`

This file is the main app component. It puts all page sections together.

```jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import DashboardMockup from "./components/DashboardMockup";
import Metrics from "./components/Metrics";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <DashboardMockup />
      <Metrics />
      <CTA />
      <Footer />
    </>
  );
}
```

Explanation:

- Each line with `<Navbar />`, `<Hero />`, and so on is a component.
- `<></>` is called a fragment. It groups multiple components without adding extra HTML.
- `export default function App()` makes this component available to other files.

---

## 6. Global styles: `src/index.css`

This file controls look and feel for the whole site.

### 6.1 What the file does

- imports a font from Google Fonts
- resets default browser margins and padding
- defines color variables for consistent design
- sets the page background and text styles
- adds responsive behavior for mobile screens

### 6.2 Important parts explained

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

This means every element includes its border and padding when calculating width and height. It also removes default spacing.

```css
:root {
  --purple: #5b21b6;
  --text-dark: #111827;
  --bg: #f9fafb;
}
```

These are CSS variables. They make it easy to use the same colors in many places.

```css
body {
  font-family: "Inter", sans-serif;
  background: var(--white);
  overflow-x: hidden;
}
```

This sets the page font and prevents the page from scrolling horizontally.

### 6.3 Mobile navigation styles

At the bottom of `index.css`, there is code that changes the navigation on small screens.

```css
@media (max-width: 900px) {
  .navbar-toggle {
    display: block;
  }
  .navbar-links {
    display: none !important;
  }
  .navbar-links.open {
    display: flex !important;
  }
}
```

This means:

- when the screen width is 900 pixels or less,
- show the hamburger menu button,
- hide the navigation links by default,
- show them only if the menu is open.

---

## 7. Components and how they work

Each component is a separate file inside `src/components`.

React components are functions that return JSX. JSX looks like HTML but acts like JavaScript.

### 7.1 Navbar: `src/components/Navbar.jsx`

This is the top navigation bar.

#### What it does

- shows the logo on the left
- shows navigation links
- shows the call-to-action button
- makes the menu responsive on mobile

#### Key concepts in Navbar

```jsx
const [menuOpen, setMenuOpen] = useState(false);
```

This line creates a piece of state called `menuOpen`:

- `menuOpen` is the current value (true or false)
- `setMenuOpen` is a function to change that value
- `useState(false)` starts the value as `false`

When the user clicks the hamburger button, the code runs:

```jsx
onClick={() => setMenuOpen(prev => !prev)}
```

This toggles the menu open and closed.

#### HTML-like structure in Navbar

```jsx
<nav style={styles.nav}>
  <a href="#" style={styles.logo}>...</a>
  <button ... className="navbar-toggle">...</button>
  <div style={styles.links} className={`navbar-links ${menuOpen ? 'open' : ''}`}>
    ...
  </div>
</nav>
```

- `<nav>` is a navigation section
- `<a>` is a link
- `<button>` is a clickable button
- `className` is how React adds CSS classes
- `` `navbar-links ${menuOpen ? 'open' : ''}` `` adds the `open` class when the menu is open

#### Why the CTA button works differently

The button opens an external site using:

```jsx
<a href="https://stamped-flutter-app.vercel.app/" target="_blank" rel="noopener noreferrer">...
```

That means:

- the link goes to the external address
- `target="_blank"` opens it in a new tab
- `rel="noopener noreferrer"` is a security practice for external links

### 7.2 Hero: `src/components/Hero.jsx`

This is the first large section visitors see.

#### What it shows

- a top label: "For freelancers who mean business"
- main heading: "Define. Track. Prove your work."
- paragraph text
- two buttons: one external button and one internal scroll link
- a right-side image with rounded corners

#### How the reveal effect works

The component uses this code:

```jsx
useEffect(() => {
  setTimeout(() => {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("visible"));
  }, 100);
}, []);
```

- `useEffect()` runs a function after the component appears
- `querySelectorAll('.reveal')` finds all elements with the `reveal` class
- it adds the `visible` class so CSS can animate them

#### Why the image may not show

The image is imported at the top:

```jsx
import heroImage from "../assets/stamped-team.jpg";
```

Then it is used inside an `<img />` tag.

### 7.3 Problem: `src/components/Problem.jsx`

This section compares "Without Stamped" and "With Stamped".

#### What it does

- defines two arrays: `before` and `after`
- renders each item using `.map()`
- shows a red cross icon for problems
- shows a green check icon for benefits
- uses `useReveal()` to animate the section when it scrolls into view

#### How `.map()` works

The code uses:

```jsx
{
  before.map(({ title, desc }) => <div key={title}> ... </div>);
}
```

- `before.map(...)` loops over each item in the array
- it returns a new piece of UI for each item
- `key={title}` gives each item a unique name for React

#### Small reusable pieces inside the file

There are two icon components:

- `Check` shows a checkmark
- `Cross` shows an X

These are plain functions that return JSX.

### 7.4 How it Works: `src/components/HowItWorks.jsx`

This section explains the product flow in 3 steps.

#### What it does

- defines a `steps` array of objects
- renders one card per step
- uses `useReveal()` for animation
- uses responsive CSS for smaller screens

#### Why this section is useful

It shows how data can be separated from the UI. The content lives in the `steps` array, and the component renders it.

### 7.5 Features: `src/components/Features.jsx`

This section lists product benefits.

#### What it does

- defines a `features` array with title, description, icon
- uses a `FeatureCard` function to render each item
- applies hover styles so cards move slightly when hovered

#### Why icons are inside JSX

Instead of importing images, the file uses small SVG icons directly in the component. This is a common React pattern for simple graphics.

### 7.6 DashboardMockup: `src/components/DashboardMockup.jsx`

This section shows a fake app dashboard.

#### What it contains

- a left sidebar with project labels and user info
- a main panel with a list of project cards
- a floating detail box at the bottom right

#### Important note

This is only a visual mockup. It does not connect to a real application or data source.

### 7.7 CTA: `src/components/CTA.jsx`

This is the call-to-action section near the bottom.

#### What it shows

- a headline encouraging organization
- a paragraph explaining the product
- a button linking to the external app

### 7.8 Footer: `src/components/Footer.jsx`

This is the bottom of the page.

#### What it shows

- the footer logo image
- a short tagline
- a copyright line

---

## 8. What JSX means

JSX is the syntax that looks like HTML but runs in JavaScript.

Example:

```jsx
<div style={{ color: "red" }}>Hello</div>
```

Explanation:

- `<div>` is JSX, not HTML.
- `style={{ color: 'red' }}` is an object in JavaScript.
- React turns JSX into real HTML in the browser.

### Why use JSX?

JSX makes it easy to write UI and JavaScript together. You can use JavaScript expressions inside it with curly braces `{}`.

Example:

```jsx
<span>{title}</span>
```

This shows the value of the variable `title`.

---

## 9. How imports work

React files use `import` to bring code and assets from other files.

Example:

```jsx
import Navbar from "./components/Navbar";
import heroImage from "../assets/stamped-team.jpg";
```

- `Navbar` is a component from another file.
- `heroImage` is an image file used in JSX.

In React projects, you can import images and use them in `<img src={...} />`.

---

## 10. How the page appears in the browser

### 10.1 `index.html`

The page starts with an HTML file. It usually contains a `div` with `id="root"`.

React replaces that `div` with the full app.

### 10.2 React render process

When the app runs:

1. `main.jsx` loads `App`
2. `App.jsx` loads each component
3. each component returns JSX
4. React converts JSX to browser HTML
5. the browser displays the page

---

## 11. Understanding the mobile menu

The navbar changes on smaller screens.

### 11.1 How it works

- CSS hides the menu links on mobile
- a hamburger button appears instead
- clicking the button toggles the menu open or closed

### 11.2 Why `useState` is needed

`useState` stores whether the menu is open. The UI updates automatically when the value changes.

---

## 12. The `useReveal` hook in detail

This custom hook is in `src/hooks/useReveal.js`.

```jsx
import { useEffect, useRef } from "react";

export function useReveal(threshold = 0.1) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
```

### 12.1 What `useRef()` does

- it creates a reference to a DOM element
- it starts empty
- when React renders an element with `ref={ref}`, the actual element is stored in `ref.current`

### 12.2 What `IntersectionObserver` does

- watches whether an element is visible on screen
- when it becomes visible, it runs a function
- the function adds the `visible` class

### 12.3 Why this is useful

The class `visible` triggers animation styles in the component. It makes sections fade in when you scroll.

---

## 13. How to read a component file

Use this method to learn each file:

1. read the imports at the top
2. find the main function like `export default function ...()`
3. read the returned JSX inside `return (...)`
4. note any helper functions or data arrays
5. check for `useState`, `useEffect`, or custom hooks
6. understand the style values inside `style={{ ... }}`

### Example: `Problem.jsx`

- imports `useReveal`
- defines `before` and `after` arrays
- defines `Check` and `Cross` small icon components
- uses `before.map(...)` and `after.map(...)`
- returns the section content

---

## 14. Making changes safely

### 14.1 Changing a title

Find the text in the component file, edit it, and save.

### 14.2 Changing colors

Use CSS variables in `src/index.css`.

Example:

```css
--purple: #5b21b6;
--bg: #f9fafb;
```

Changing these variables updates many places at once.

### 14.3 Adding a new image

1. put the image in `src/assets/`
2. import it in the component:

```jsx
import myImage from "../assets/my-image.png";
```

3. use it:

```jsx
<img src={myImage} alt="My image description" />
```

### 14.4 Adding a new component

1. create `src/components/NewSection.jsx`
2. write a function that returns JSX
3. export the function with `export default`
4. import it in `src/App.jsx`
5. add `<NewSection />` inside the `return` of `App`

---

## 15. A step-by-step study plan

Follow these steps to learn the project from beginner level:

1. Open `src/main.jsx` and understand how React starts.
2. Open `src/App.jsx` and see how sections are composed.
3. Open `src/index.css` and learn global CSS and variables.
4. Open `src/components/Navbar.jsx` and learn state, links, and the mobile menu.
5. Open `src/components/Hero.jsx` and learn layout, images, and effects.
6. Open `src/components/Problem.jsx` and learn mapping arrays to content.
7. Open `src/components/HowItWorks.jsx` and `src/components/Features.jsx` to learn repeated patterns.
8. Open `src/components/DashboardMockup.jsx` to see a more complex UI layout.
9. Open `src/components/CTA.jsx` and `src/components/Footer.jsx` to learn final page sections.
10. Open `src/hooks/useReveal.js` to learn how React can interact with browser behavior.

---

## 16. Common beginner questions answered

### Why are there so many `<div>` tags?

Each `<div>` is a box that helps arrange content. Layout is built with nested boxes.

### What is the difference between `className` and `class`?

In React, use `className` instead of `class` because `class` is a reserved word in JavaScript.

### Why are some components written inside the same file?

Small helper components like `Check` and `Cross` are placed inside `Problem.jsx` because they are only used there.

### Why is `AppMockup.jsx` not visible in the page?

The file is defined but it is not currently imported and used in any active component. To show it, import it in `Hero.jsx` or another component.

---

## 17. Glossary of terms

- **React**: a library for building user interfaces.
- **JSX**: a syntax that looks like HTML inside JavaScript.
- **Component**: a reusable piece of UI.
- **State**: values that a component remembers and can change.
- **Props**: input values passed from one component to another.
- **Hook**: a React function that adds features like state or effects.
- **useState**: a hook to store state.
- **useEffect**: a hook to run code after render.
- **useRef**: a hook to keep a reference to a DOM element.
- **Vite**: a fast tool to run and build the app.

---

## 18. Final study advice

Start small. Change one sentence in `Hero.jsx`, save the file, and see the page update in the browser. Then try changing a color variable in `src/index.css`.

Use this project as a learning playground. The more you edit and observe, the more you will understand React and modern frontend development.
