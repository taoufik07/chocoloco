# Chococlone

React Native app built with Expo, TypeScript, and file-based routing.

## Prerequisites

Install development tools using [mise](https://mise.jdx.dev/):

```bash
mise install
```

Then install project dependencies:

```bash
bun install
```

## How to Start

Start the development server:

```bash
bun start
```

Other useful commands

```bash
bun lint          # Run ESLint
bun lint:fix      # Fix ESLint issues
bun format        # Format with Prettier
bun check:type    # TypeScript type checking
```

## Pre-commit Hooks

This project uses [pre-commit](https://pre-commit.com/) for automated code quality checks.

Install hooks:

```bash
pre-commit install
```

Helpful commands:

```bash
pre-commit run --all-files                  # Run all hooks on all files
pre-commit run <hook-id> [--all-files]      # Run specific hook
pre-commit autoupdate                       # Update hook versions
```
