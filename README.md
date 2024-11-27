# HackerRank Preparation Kit Solutions

This repository contains my solutions for the **1 Month Preparation Kit** on HackerRank. The challenges are organized by difficulty: **Basic**, **Intermediate**, and **Advanced**. Each folder includes the code solution and an explanation of the approach used.

## Structure

- **basic/**: Challenges focusing on fundamental programming concepts and algorithms.
- **intermediate/**: Challenges involving complex data structures and algorithms.
- **advanced/**: Challenges covering advanced topics such as dynamic programming and optimization.
- **mock-tests/**: Mock tests for each week's progress.

## Getting Started

Each challenge is in its own folder with the following structure:

- `solution.<extension>`: The code implementation of the solution.
- `README.md`: A brief explanation of the problem, the approach used, and complexity analysis.

## How to Run

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hackerrank-preparation-kit.git
   cd hackerrank-preparation-kit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run build`: Compile TypeScript to JavaScript
- `npm test`: Run all test suites
- `npm run test:watch`: Run tests in watch mode

### Running Specific Challenges

If you want to run a specific test file, use the following command:

```bash
npx jest tests/<path-to-test-file>.test.ts
```

For example, to test the solution for the **Plus Minus** challenge, you can run:

```bash
npx jest tests/basic/plus-minus.test.ts
```

## Challenges Covered

### Week 1

- [Plus Minus](src/basic/plus-minus/)
