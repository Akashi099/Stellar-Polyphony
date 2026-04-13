# Quick Start Guide

Get Stellar-Polyphony up and running in 5 minutes!

## Prerequisites

Ensure you have these installed:
- **Node.js** >= 18.x ([Download](https://nodejs.org/))
- **pnpm** >= 8.x (Install: `npm install -g pnpm`)
- **Git** ([Download](https://git-scm.com/))

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/Stellar-Polyphony.git
cd Stellar-Polyphony

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env

# 4. Start development servers
pnpm dev
```

## Verify Installation

After running `pnpm dev`, you should see:
- ✅ API server stub running
- ✅ Web app stub running
- ✅ Admin app stub running

## Project Commands

```bash
# Development
pnpm dev                    # Run all apps in dev mode
pnpm --filter web dev       # Run only web app
pnpm --filter api dev       # Run only API
pnpm --filter admin dev     # Run only admin

# Code Quality
pnpm lint                   # Check code style
pnpm typecheck              # Check TypeScript types
pnpm test                   # Run tests

# Build
pnpm build                  # Build all apps
pnpm --filter web build     # Build specific app
```

## Project Structure

```
Stellar-Polyphony/
├── apps/           # Applications (web, api, admin)
├── packages/       # Shared code (types, config, blockchain)
├── docs/           # Documentation
└── .github/        # CI/CD workflows
```

## Next Steps

1. **Read the docs**: Check out [docs/architecture.md](docs/architecture.md)
2. **Explore the code**: Start with [packages/types/src/index.ts](packages/types/src/index.ts)
3. **Make changes**: See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines
4. **Join the community**: Open an issue or discussion

## Common Issues

### pnpm not found
```bash
npm install -g pnpm
```

### Port already in use
Edit `.env` and change `API_PORT` to a different port.

### TypeScript errors
```bash
pnpm install
pnpm typecheck
```

## Getting Help

- 📖 [Full Documentation](README.md)
- 🤝 [Contributing Guide](CONTRIBUTING.md)
- 🐛 [Report Issues](https://github.com/yourusername/Stellar-Polyphony/issues)
- 💬 [Discussions](https://github.com/yourusername/Stellar-Polyphony/discussions)

## What's Next?

This is a Phase 1 implementation with ~10% of the planned features. The codebase includes:
- ✅ Monorepo structure
- ✅ TypeScript types
- ✅ Mock implementations
- ✅ Documentation
- ⏳ Real implementations (coming in Phase 2)

Ready to contribute? Check out [CONTRIBUTING.md](CONTRIBUTING.md)!

---

Happy coding! 🎵✨
