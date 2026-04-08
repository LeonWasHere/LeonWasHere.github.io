# LeonWasHere.github.io

...

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