# Contributing to Stellar-Polyphony

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Quick Start

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/Stellar-Polyphony.git`
3. Install dependencies: `pnpm install`
4. Create a branch: `git checkout -b feature/your-feature`
5. Make your changes
6. Run tests: `pnpm test && pnpm lint && pnpm typecheck`
7. Commit: `git commit -m "feat: your feature"`
8. Push: `git push origin feature/your-feature`
9. Open a Pull Request

## Development Setup

### Prerequisites
- Node.js >= 18.x
- pnpm >= 8.x
- Git

### Installation
```bash
pnpm install
cp .env.example .env
```

### Running Locally
```bash
# Run all apps
pnpm dev

# Run specific app
pnpm --filter web dev
pnpm --filter api dev
pnpm --filter admin dev
```

## Project Structure

```
stellar-polyphony/
├── apps/           # Applications
│   ├── web/       # Public web app
│   ├── api/       # Backend API
│   └── admin/     # Admin dashboard
├── packages/      # Shared packages
│   ├── types/     # TypeScript types
│   ├── config/    # Configuration
│   └── blockchain/# Stellar integration
└── docs/          # Documentation
```

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Code style (formatting, semicolons, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Examples:
```bash
git commit -m "feat: add session discovery page"
git commit -m "fix: resolve wallet connection issue"
git commit -m "docs: update API reference"
```

## Code Style

- Use TypeScript for all new code
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful variable names
- Add JSDoc comments for public APIs
- Keep functions small and focused

## Testing

- Write unit tests for business logic
- Write integration tests for API endpoints
- Maintain or improve code coverage
- Run tests before committing: `pnpm test`

## Pull Request Process

1. **Update documentation** - Include relevant doc updates
2. **Add tests** - Ensure new code is tested
3. **Pass CI checks** - All tests and lints must pass
4. **One feature per PR** - Keep PRs focused
5. **Link issues** - Reference related issues
6. **Request review** - Tag relevant maintainers

### PR Title Format
Use conventional commit format:
- `feat: add user authentication`
- `fix: resolve session timeout bug`

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Related Issues
Closes #123
```

## Areas to Contribute

### Good First Issues
- Documentation improvements
- UI/UX enhancements
- Bug fixes
- Test coverage

### Feature Development
- Artist profile features
- Session management
- Payment integration
- Admin tools

### Infrastructure
- CI/CD improvements
- Performance optimization
- Security enhancements
- Monitoring and logging

## Getting Help

- **Issues**: Open an issue with the "question" label
- **Discussions**: Use GitHub Discussions
- **Discord**: Join our community (link coming soon)

## Code Review Process

1. Maintainers review PRs within 2-3 business days
2. Address feedback and update PR
3. Once approved, maintainers will merge
4. Your contribution will be in the next release!

## Recognition

Contributors are recognized in:
- CONTRIBUTORS.md file
- Release notes
- Project README

Thank you for contributing to Stellar-Polyphony! 🎵✨
