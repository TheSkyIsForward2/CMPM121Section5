# Section 5 – Refactoring Code Smells in Practice

This activity is designed to help you practice identifying code smells and applying refactoring patterns to a real codebase in CMPM 121, Game Development Patterns.

## Assignment Instructions

For this assignment, your task is to **analyze and improve the code in `src/main.ts`**:

1. **Identify code smells**: Review the code and look for patterns that may cause maintenance issues, reduce readability, or introduce potential bugs.
2. **Refactor**: Apply **refactoring patterns** as described in Fowler’s _Refactoring_ book to improve the code.
3. **Document your work**: Once you have completed your refactoring:
   - Rewrite this README.md
   - List the **code smells** you identified
   - Describe the **refactoring patterns** you applied and how they improved the code

## Getting Started

With Codespaces (or another environment supporting devcontainers):

1. Run `deno task dev` to start the development server

Without Codespaces (local VS Code):

1. Install the [Deno](https://docs.deno.com/runtime/getting_started/installation/) runtime.
2. Install the Deno VS Code extension (must be done only after installing Deno runtime).
3. Run `./setup-hooks.sh` to enable pre-commit quality checks
4. Run `deno task dev` to start the development server

The setup script configures Git hooks to automatically run formatting, linting, and type checking before commits.

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages Deployment

1. Go to your repository's Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The workflow will automatically deploy on pushes to the `main` branch
4. Your site will be published at `https://<your-github-username>.github.io/<repository-name>/`

## Code Smells

1. Long Function & Data Clumps:
   Setup Function is incredibly long, should be reduced in size and allow other functions to take over its responsibilities.

   Fix: Extract Function + Combine Functions into Class -> Logic is now modular (createUI, cacheElements, updateUI) to take on more tasks independently as well as give code better readability.

2. Duplicated Code:
   { ctr.innerHTML = `${c}`;
   document.title = "Clicked " + c;
   document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue"; }

   was repeated 3 times.

   Fix: Extract Function -> updateUI() centralizes this code into one function that all event listeners can use.

3. Global Data:
   Code for the counter is a global

   Fix: Encapsulate Variable -> count encapsulated within CounterApp class instead

4. Magic Literal:
   Constants given should instead be symbolic constants (or enumerators)

   Fix: Replace Magic Literal with Symbolic Constant -> Centralized constants (IDS, COLORS, TITLE)
