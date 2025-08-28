# Available Scripts

This document describes all the available npm scripts for the Aum Motion Web project.

## Development Scripts

### `npm run dev`
Start the development server with hot reload using Vite.

### `npm run build`
Build the project for production using Vite.

### `npm run build:dev`
Build the project in development mode.

### `npm run build:prod`
Build the project in production mode with optimizations.

### `npm run preview`
Preview the production build locally.

### `npm start`
Alias for `npm run preview` - starts the preview server.

## Code Quality Scripts

### `npm run lint`
Run ESLint to check for code quality issues.

### `npm run lint:fix`
Run ESLint and automatically fix fixable issues.

### `npm run type-check`
Run TypeScript compiler to check for type errors without emitting files.

### `npm run format`
Format all code files using Prettier.

### `npm run format:check`
Check if all files are properly formatted without making changes.

## Testing Scripts

### `npm run test`
Run all tests using Vitest.

### `npm run test:ui`
Run tests with the Vitest UI interface.

### `npm run test:coverage`
Run tests and generate coverage reports.

## Build & Cleanup Scripts

### `npm run clean`
Remove the `dist` directory and build artifacts.

### `npm run prebuild`
Automatically clean before building (runs `npm run clean`).

### `npm run analyze`
Build the project with bundle analysis enabled.

## Git Hooks

### `npm run prepare`
Install Husky git hooks (runs automatically after `npm install`).

## Usage Examples

```bash
# Start development
npm run dev

# Build for production
npm run build

# Run tests with coverage
npm run test:coverage

# Format all code
npm run format

# Check code quality
npm run lint

# Type check
npm run type-check
```

## Pre-commit Hooks

The project uses Husky and lint-staged to automatically:
- Run ESLint on staged JavaScript/TypeScript files
- Format code with Prettier
- Ensure code quality before commits

## Testing Setup

Tests are configured with:
- **Vitest** as the test runner
- **React Testing Library** for component testing
- **jsdom** for DOM simulation
- **Coverage reporting** with v8 provider

## Code Formatting

Code is automatically formatted using Prettier with the following rules:
- Single quotes for strings
- Semicolons required
- 80 character line width
- 2 space indentation
- Trailing commas in objects and arrays
