# Simple Calculator

## Task

[Link to task description](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0)

Build a **simple calculator** using **pure JavaScript** (no frameworks or libraries).  
The app should support basic math operations — **addition, subtraction, multiplication, division, percentage, and sign toggle**.

You must configure **Webpack** so that the optimized production build outputs only **two files**:

- `index.html`  
- a single bundled JS file (e.g., `bundle.js`)

###  Requirements

-  No use of `eval`, `Math`, `jQuery`, or any third-party math libraries (like Math.js)  
-  Code must be split into separate modules  
-  Configure ESLint (optionally with Prettier)  
-  Add a pre-commit hook (Husky) to prevent commits if ESLint errors exist  
-  Include documentation in this `README.md`

###  Bonus points for

-  User-friendly UI 
-  Theme switcher  
-  Deployment 

---

##  Technologies used  

- Webpack  
- JavaScript  
- ESLint, Prettier, Husky  
- Git  

---

##  How to run the app 

1. Clone this repository 

```
git clone https://github.com/polinakorolchuk/Calculator.git

```
2. Install dependencies

```
npm install

```
3. Start development mode 

```
npm run start
```

4. Build for production 

```
npm run build
```

##   The app structure 

```
project/
├─ src/
│  ├─ index.html            # HTML template 
│  ├─ styles/
│  │  └─ style.css          # Main styles
│  └─ js/
│     ├─ index.js           # Entry point
│     ├─ state.js           # App state (current, previous, operator)
│     ├─ calculator.js      # Core math logic
│     ├─ ui.js              # UI event listeners and screen updates
│     └─ theme.js           # Theme switch logic
```