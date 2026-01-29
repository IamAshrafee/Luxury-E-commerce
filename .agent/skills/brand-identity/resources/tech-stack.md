# Preferred Tech Stack & Implementation Rules

When generating code or UI components for **Luxe**, you **MUST** strictly adhere to the following technology choices.

## Core Stack
* **Framework:** React JS
* **Styling Engine:** **Vanilla CSS with CSS Variables** (Strict Requirement).
  * **Global Styles:** `src/styles/global.css`
  * **Variables:** `src/styles/variables.css`
  * **Reset:** `src/styles/reset.css`
* **Icons:** Lucide-React
* **Build Tool:** Vite.

## Implementation Guidelines

### 1. Styling Pattern (Vanilla CSS)
* **CSS Modules:** Do NOT use CSS modules (e.g., `style.module.css`). Use standard `Component.css` imported in `Component.jsx`.
* **Variables:** You MUST use the CSS variables defined in `src/styles/variables.css` for implementation.
  * Use `var(--color-bg)` not `#0C0A09`
  * Use `var(--color-primary)` not `#CA8A04`
  * Use `var(--font-heading)` for titles.
* **Glassmorphism:** Use the helper class `.glass-panel` defined in `global.css` for any cards or overlays.

### 2. Component Patterns
* **Functional Components:** Use React functional components with hooks.
* **CSS Imports:** Import the CSS file at the top of the JSX file: `import './Component.css'`.
* **Images:** Import images at the top: `import name from '../assets/images/file.png'`.

### 3. Forbidden Patterns
* **Do NOT use Tailwind CSS.** The project is built with Vanilla CSS variables.
* **Do NOT use Bootstrap.**
* **Do NOT use inline styles** (e.g., `style={{color: 'red'}}`) unless for dynamic values (like background images or calculated positions).
