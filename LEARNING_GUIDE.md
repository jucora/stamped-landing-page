# Stamped Landing Project Learning Guide

This guide explains how this project works step by step. It is written for someone who may not know React or modern web development yet. By the end, you should understand how this landing page is built, how the pieces work together, and how to change it.

---

## 1. What this project is

This is a landing page built with:

- **React**: a JavaScript library for building user interfaces
- **Vite**: a fast development server and build tool
- **CSS**: for styling the page

The project is not a full app with backend logic. It is a static marketing-style page with sections like a hero, features, and a footer.

---

## 2. How to run the project

Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

This installs the project packages and starts a local development server. Then open the browser address shown by Vite, usually `http://localhost:5173`.

If you want to build the app for production, use:

```bash
npm run build
```

---

## 3. Main files to know

The most important files are:

- `package.json`: lists dependencies and commands
- `src/main.jsx`: application entry point
- `src/App.jsx`: top-level app layout
- `src/index.css`: global styles and responsive CSS
- `src/components/`: folder with each visible page section
- `src/hooks/useReveal.js`: a small custom React hook

---

## 4. How React starts this page

### 4.1 `src/main.jsx`

This is the first file that runs.

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

What it does:

- imports global CSS
- imports the main `App` component
- tells React to render the app inside the `<div id="root">` element in `index.html`

### 4.2 `src/App.jsx`

This file is the app container. It puts the sections on the page in order.

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import DashboardMockup from './components/DashboardMockup'
import Metrics from './components/Metrics'
import CTA from './components/CTA'
import Footer from './components/Footer'

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
  )
}
```

This means the page is built by stacking these components in that order.

---

## 5. How styles are applied

### 5.1 Global styles: `src/index.css`

This file sets fonts and resets default browser styles.

Key parts:

- `box-sizing: border-box` - makes width calculations easier
- CSS variables like `--purple`, `--text-dark`, `--bg`
- `body { overflow-x: hidden; }` prevents horizontal scrolling
- responsive rules for the mobile navigation menu

### 5.2 Inline styles in components

Most component styles are written directly in the component using `style={{ ... }}`.

Example from `Hero.jsx`:

```jsx
<section style={{
  minHeight: '100vh',
  padding: 'clamp(100px, 12vw, 140px) 5vw 80px',
  display: 'flex', alignItems: 'center',
  background: 'linear-gradient(...)',
}}>
```

That means each component controls its own appearance directly in JavaScript.

---

## 6. Understanding the component structure

### 6.1 Navbar: `src/components/Navbar.jsx`

This component shows the top navigation.

What it does:

- shows the logo image from `src/assets/stamped_logo.png`
- displays section links: `Problem`, `How it works`, `Features`
- provides a CTA button that opens `https://stamped-flutter-app.vercel.app/`
- includes a mobile hamburger button using `useState`
- when a link is clicked, it scrolls to the matching section

Important React concept:

- `useState(false)` creates state to track if the mobile menu is open
- `setMenuOpen(prev => !prev)` toggles the menu

### 6.2 Hero: `src/components/Hero.jsx`

This is the top section of the page.

What it shows:

- a headline with `Define. Track. Prove your work.`
- a description paragraph
- two buttons: a CTA link and a scroll link
- a right-side image imported from `src/assets/stamped-team.jpg`

Important React concept:

- `useEffect()` runs after the component appears on the page
- it adds the `visible` class to `.reveal` elements so they animate in

### 6.3 Problem: `src/components/Problem.jsx`

This component shows a before/after comparison.

What it contains:

- two lists: `before` and `after`
- a red `Cross` icon for before items
- a purple `Check` icon for after items
- a custom hook `useReveal()` to animate the section when it scrolls into view

Important concept:

- arrays of objects are mapped to JSX elements with `before.map(...)`
- small components can be defined inside the file (`Check` and `Cross`)

### 6.4 HowItWorks: `src/components/HowItWorks.jsx`

This section explains the product workflow in 3 steps.

What it does:

- defines a `steps` array with `start`, `manage`, and `complete`
- renders each step as a card
- uses `useReveal()` so the whole section fades in
- uses CSS for responsiveness at smaller widths

### 6.5 Features: `src/components/Features.jsx`

This section lists product features.

What it does:

- defines 6 feature objects in `features`
- each feature has a title, description, and SVG icon as JSX
- renders a `FeatureCard` for each feature
- includes hover styles and responsive layout

### 6.6 DashboardMockup: `src/components/DashboardMockup.jsx`

This is a static mockup of a dashboard.

What it shows:

- a sidebar with project navigation and user info
- a main panel with a list of project cards
- a floating detail card in the lower-right corner
- `projects` data is hard-coded in the file

This component does not fetch real data. It is a visual example.

### 6.7 CTA: `src/components/CTA.jsx`

This is the final call-to-action section.

What it shows:

- a headline and supporting paragraph
- a CTA button linking to the external app
- a soft background glow effect

### 6.8 Footer: `src/components/Footer.jsx`

This is the bottom section.

What it shows:

- a logo image imported from `src/assets/stamped-white-logo.png`
- a short product sentence
- a copyright line

---

## 7. The custom hook: `src/hooks/useReveal.js`

This hook makes elements appear when they scroll into view.

```jsx
import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.1) {
  const ref = useRef()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
```

How it works:

- `useRef()` creates a reference to a DOM element
- `IntersectionObserver` watches when the element enters the browser viewport
- when the element becomes visible, it adds the CSS class `visible`
- the component using this hook attaches `ref` to a `<div>` or another element

For example, `Problem.jsx` uses:

```jsx
const ref = useReveal()
<div ref={ref}> ... </div>
```

---

## 8. How React components work in this project

### 8.1 Functional components

All components are functions that return JSX.

Example:

```jsx
export default function Navbar() {
  return (
    <nav> ... </nav>
  )
}
```

JSX looks like HTML but works inside JavaScript. It is transformed by React into the UI.

### 8.2 Props

A component can receive data through props.

Example in this project:

- `AppMockup({ compact = false })` accepts `compact`

This project mostly uses components without props, because it is a static page.

### 8.3 State

State is data that changes over time.

`Navbar.jsx` uses state:

```jsx
const [menuOpen, setMenuOpen] = useState(false)
```

This controls whether the mobile menu is visible.

### 8.4 Events

HTML-like events are handled with functions.

Example:

```jsx
onClick={() => setMenuOpen(prev => !prev)}
```

This means: when the button is clicked, toggle the value of `menuOpen`.

---

## 9. Understanding the file `src/components/AppMockup.jsx`

This file contains a visual mockup component. It is currently not used by the app.

If you want to show it again, import it in `Hero.jsx` and render `<AppMockup />`.

The file is useful for learning because it shows:

- how to build a UI layout with nested `div` elements
- how `map()` renders repeated cards
- how to use inline styles to create a dashboard look

---

## 10. How sections connect to each other

These links use HTML anchors and page IDs:

- `Problem` link scrolls to `id="problem"`
- `How it works` link scrolls to `id="how"`
- `Features` link scrolls to `id="features"`

That happens in `Navbar.jsx` with `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`.

---

## 11. How to make a change

### 11.1 Change text

Find the section file and replace the text. For example, to change the hero title in `Hero.jsx`:

```jsx
<h1>Define. Track.<br /><span>Prove</span> your work.</h1>
```

### 11.2 Change colors

Edit CSS variables in `src/index.css`:

```css
--purple: #5B21B6;
--text-dark: #111827;
```

### 11.3 Add a new section

1. create `src/components/NewSection.jsx`
2. export a component that returns JSX
3. import it in `src/App.jsx`
4. add `<NewSection />` inside the returned fragment

### 11.4 Add a new image

1. place the image in `src/assets/`
2. import it in a component:

```jsx
import myImage from '../assets/my-image.png'
```

3. use it in JSX:

```jsx
<img src={myImage} alt="Description" />
```

---

## 12. Common learning steps

Follow this path to learn from the project:

1. open `src/main.jsx` and understand the root render
2. open `src/App.jsx` and see the page structure
3. open `Navbar.jsx` and learn about state and clicks
4. open `Hero.jsx` and learn about layout and effects
5. open `Problem.jsx` and learn about mapping arrays to UI
6. open `HowItWorks.jsx` and `Features.jsx` and learn more component patterns
7. open `useReveal.js` to learn how React interacts with browser APIs
8. change one text line, save, and see the update in the browser
9. add a new simple component and import it into `App.jsx`

---

## 13. Tips for beginners

- React components are just JavaScript functions that return UI.
- `useEffect` runs code after the component appears.
- `useState` stores values that can change.
- JSX looks like HTML but it is JavaScript.
- `style={{ ... }}` is how this project writes most CSS directly inside components.
- A hook like `useReveal()` is reusable logic shared across components.

---

## 14. Where to learn more

If you want to learn React step by step, start with these topics:

- React components and JSX
- React state and hooks (`useState`, `useEffect`)
- how React renders lists with `map()`
- how to pass props to components
- how to use CSS for layout and responsive design
- how Vite starts a React app

This project is a great starting place because it is small, visual, and easy to change.

---

## 15. Final note

This landing page is built from simple pieces:

- a render entry point
- a component tree
- inline styles and a small CSS file
- data arrays rendered to UI
- a few reusable helpers

By reading each file and making one change at a time, you can learn both React and how this site works.
