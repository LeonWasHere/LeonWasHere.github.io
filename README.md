# LeonWasHere.github.io

Initial Creation Date: January 22nd, 2026
Most Recent Update: April 11th, 2026

---

## Overview

This repository contains the source code for my personal GitHub Portfolio. The portfolio showcases my skills, academic projects, documentation, and reflections developed throughout the IT Programming program at NSCC COGS.

The goal of this portfolio is to present a clean and structured overview of my work.

---

## Features

- Single-page responsive portfolio built with HTML, JavaScript, and Tailwind CSS  
- Dynamic project loading using JSON and JavaScript  
- Structured sections including About, Skills, Achievements, Projects, Documentation, Reflection, and Contact  
- Interactive UI elements such as hover effects and smooth scrolling navigation  
- Integration of GitHub repositories and sample code for each project  

---

## Project Structure

In the assets/ folder we have the following sub-folders:
- images/ # Profile image
- screenshots/ # Project screenshots
- samples/ # Sample code files for projects
- documents/ # PDF files
- json/ # JSON files
- js/ # JavaScript files

---

## Workflow Guidelines

This workflow was introduced on April 7th, 2026 as part of a full portfolio overhaul.

The previous version of the portfolio is archived under 'portfolio-prototype/'.

---

### Branching Structure

This project follows a clear and maintainable branching model:

- **main:** reserved for production-ready code
- **feature branches:** used for new features, fixes, or enhancements

#### Branch Naming Convention

Branches must follow this format:

```
type/<description>
```

Examples:

```
docs/workflow-guidelines
```

All work must be done in a feature branch and merged into 'main' through a Pull Request.

---

### Commit Message

This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

#### Common Commit Types

- **chore:** maintenance tasks
- **docs:** documentation changes
- **feat:** new feature
- **fix:** bug fix
- **refactor:** code restructuring without behavior changes
- **test:** adding or updating tests
- **merge:** merging branches or pull requests

#### Commit Message Format

Commits must follow this format:

```
type: <description>
```

Example:

```
docs: add documentation for branching strategy and commit standards
```

---