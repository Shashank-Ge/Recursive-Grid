# Recursive Grid

An interactive 3×3 grid game where clicks trigger deterministic ripple effects based on divisibility rules and cell locking mechanics.

**[Live Demo](https://recursive-grid-alpha.vercel.app/)** • **[Repository](https://github.com/Shashank-Ge/Recursive-Grid)**

---

## Overview

Recursive Grid is a constraint-based interaction system built around a 3×3 grid. Each cell click increments its value and potentially triggers cascading effects on neighboring cells based on mathematical rules. Cells become locked when they reach a threshold value, creating an evolving puzzle state where available moves diminish over time.

The core challenge lies in the ripple mechanics: divisibility by 3 affects the right neighbor, divisibility by 5 affects the cell below. These rules interact with edge constraints and locked states to create a deterministic but non-trivial state space.

---

## Core Mechanics

**Grid Structure**
- 3×3 grid of cells, each tracking a numeric value and locked state

**Click Behavior**
- Clicking a cell increments its value by 1
- Locked cells cannot be clicked or modified

**Ripple Rules**
- **Divisible by 3**: Decrements the right neighbor by 1 (if it exists and is unlocked)
- **Divisible by 5**: Increments the cell below by 2 (if it exists and is unlocked)

**Locking Mechanism**
- Cells lock when their value reaches 15 or higher
- Locked cells are visually distinct and immune to all changes

**Edge Safety**
- All ripple effects respect grid boundaries
- No out-of-bounds operations occur

---

## Technical Implementation

**Framework**: Next.js 16 with React 19 and TypeScript

**Styling**: Tailwind CSS 4 with custom gradients and transitions

**State Management**: React hooks (`useState`, `useCallback`) with immutable state updates

**Logic Separation**: Pure engine module (`engine/gridEngine.ts`) handles all game logic independently of React

**Ripple Logic**: Implemented as pure functions that return new grid states without side effects

**Edge Safety**: Explicit boundary checks before applying neighbor effects

**Locked State Isolation**: Conditional checks prevent modifications to locked cells at both click and ripple levels

---

## Architecture / Code Structure

```
recursive-grid/
├── engine/
│   ├── gridEngine.ts       # Pure logic: state transitions, rules, color mapping
│   └── gridEngine.test.ts  # Unit tests for engine functions
├── hooks/
│   └── useGridState.ts     # State management hook wrapping engine logic
├── components/
│   ├── Grid.tsx            # Grid container component
│   └── Cell.tsx            # Individual cell component
├── app/
│   ├── page.tsx            # Main page with game UI
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles and Tailwind config
```

**Separation of Concerns**
- `engine/` contains zero React dependencies—pure TypeScript logic
- `hooks/` bridges React state with engine functions
- `components/` handles rendering and user interaction
- All state transitions are immutable (deep cloning grid on updates)

---

## UI & Design Decisions

**Visual Hierarchy**
- Grid is the focal point, centered with ample whitespace
- Minimal chrome—no unnecessary UI elements

**Color System**
- Even values: Light gray gradient
- Odd values: Navy blue gradient
- Locked cells: Red gradient with white text
- High contrast ensures readability

**Micro-interactions**
- Smooth scale transform on hover (1.05x)
- 200ms transitions for all state changes
- Disabled cursor for locked cells

**Typography**
- Monospace font for cell values (consistent width)
- Large font size (2rem) for clarity

**No External UI Libraries**
- Built with native CSS and Tailwind utilities
- Keeps bundle size minimal and dependencies low

---

## Deployment

Hosted on **Vercel** with automatic deployments from the main branch.

**Live Site**: [https://recursive-grid-alpha.vercel.app/](https://recursive-grid-alpha.vercel.app/)

**Build Command**: `npm run build`

**Framework Preset**: Next.js (auto-detected)

---

## How to Run Locally

```bash
git clone https://github.com/Shashank-Ge/Recursive-Grid.git
cd Recursive-Grid
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

**Additional Commands**
- `npm run build` — Create production build
- `npm run start` — Run production server
- `npm test` — Run Jest unit tests
- `npm run lint` — Check code quality

---

## What This Project Demonstrates

- Deterministic state updates with pure functions
- Constraint-based interactions (divisibility rules, edge safety, locking)
- Edge-safe logic handling boundary conditions
- Controlled cascading effects without recursion
- Clean separation between logic and UI layers
- Production-ready deployment pipeline
- Comprehensive unit testing for core logic

---

## Future Improvements

- **Configurable grid size**: Allow NxN grids via settings panel
- **Animation refinement**: Add ripple effect visualization when neighbors are affected
- **Sound feedback**: Subtle audio cues for clicks, locks, and ripple triggers
- **Game mode**: Introduce win conditions (e.g., lock all cells in minimum moves)
- **Unit test expansion**: Add integration tests for component interactions
