# Stellar-Polyphony

A decentralized platform for connecting musicians and audiences through real-time performances and blockchain-based tipping.

## Overview

Stellar-Polyphony is a modern web application built on a monorepo architecture that enables street performers, indie artists, and musicians to broadcast live performances to a global audience while receiving direct support through cryptocurrency tips.

### Key Features

- **Live Performance Discovery**: Browse and discover live performances from artists worldwide
- **Real-time Streaming**: Watch performances as they happen
- **Blockchain Tipping**: Support artists directly using Stellar blockchain
- **Artist Profiles**: Customizable profiles for performers
- **Session Management**: Artists can create, manage, and broadcast live sessions
- **Admin Dashboard**: Moderation and oversight tools

## Architecture

This project uses a **monorepo** structure powered by:

- **pnpm workspaces**: Efficient package management
- **Turbo**: High-performance build system
- **TypeScript**: Type-safe development
- **Modular design**: Separation of apps and shared packages

### Project Structure

```
stellar-polyphony/
├── apps/                    # Application workspaces
│   ├── web/                # Public-facing web application
│   ├── api/                # Backend API service
│   └── admin/              # Admin dashboard
├── packages/               # Shared packages
│   ├── types/             # Shared TypeScript types
│   ├── ui/                # Shared UI components
│   └── config/            # Shared configuration
├── tooling/               # Development tools and scripts
├── docs/                  # Documentation
└── .github/               # CI/CD workflows
```

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **pnpm** >= 8.x
- **Git**

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Stellar-Polyphony.git
cd Stellar-Polyphony
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Development

Run all applications in development mode:
```bash
pnpm dev
```

Run specific workspace:
```bash
pnpm --filter web dev
pnpm --filter api dev
pnpm --filter admin dev
```

### Building

Build all applications:
```bash
pnpm build
```

Build specific workspace:
```bash
pnpm --filter web build
```

### Testing

Run tests across all workspaces:
```bash
pnpm test
```

### Linting

Check code quality:
```bash
pnpm lint
```

Type checking:
```bash
pnpm typecheck
```

## Core Entities

### User
- Roles: fan, artist, admin
- Owns one profile
- Authentication and authorization

### ArtistProfile
- Public identity for performers
- Stage name, bio, genres, wallet address
- Referenced by sessions and tips

### Session
- Lifecycle: draft → live → ended
- Connected to one artist
- Contains stream metadata and viewer count

### TipIntent
- Client-created draft for payment preparation
- Becomes payment-ready transaction
- Links fan to artist session

### AuditEvent
- Emitted for successful mutations
- Queried by admin surfaces
- Tracks system activity

## API Routes

### Authentication
- `POST /auth/register` - Create new user account
- `POST /auth/login` - Authenticate user
- `GET /auth/session` - Verify session

### Profile
- `POST /profile` - Create artist profile
- `PATCH /profile/:id` - Update profile
- `GET /profile/:slug` - Get public profile

### Sessions
- `POST /sessions` - Create session draft
- `PATCH /sessions/:id` - Update session
- `POST /sessions/:id/start` - Start live session
- `POST /sessions/:id/end` - End session
- `GET /sessions/live` - List live sessions

### Payments
- `POST /payments/prepare` - Prepare tip transaction
- `POST /payments/confirm` - Confirm transaction

### Audit
- `GET /audit` - Query audit events (admin only)

## Web Routes

### Public
- `/` - Landing page
- `/discover` - Browse live performances
- `/sessions/:slug` - Session detail and tip form

### Artist
- `/artist/onboarding` - Artist setup
- `/artist/dashboard` - Session controls
- `/profile` - Profile editing

### Admin
- `/admin/login` - Admin authentication
- `/admin` - Admin dashboard

## Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

1. **Report Bugs**: Open an issue describing the bug and how to reproduce it
2. **Suggest Features**: Share your ideas for new features or improvements
3. **Submit Pull Requests**: Fix bugs or implement features
4. **Improve Documentation**: Help make our docs clearer and more comprehensive
5. **Code Review**: Review open pull requests

### Development Workflow

1. **Fork the repository** to your GitHub account

2. **Clone your fork**:
```bash
git clone https://github.com/yourusername/Stellar-Polyphony.git
cd Stellar-Polyphony
```

3. **Create a feature branch**:
```bash
git checkout -b feature/your-feature-name
```

4. **Install dependencies**:
```bash
pnpm install
```

5. **Make your changes**:
   - Write clean, readable code
   - Follow existing code style
   - Add tests for new features
   - Update documentation as needed

6. **Test your changes**:
```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

7. **Commit your changes**:
```bash
git add .
git commit -m "feat: add your feature description"
```

Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

8. **Push to your fork**:
```bash
git push origin feature/your-feature-name
```

9. **Open a Pull Request**:
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template
   - Link any related issues

### Code Style Guidelines

- Use **TypeScript** for all new code
- Follow **ESLint** rules configured in the project
- Use **Prettier** for code formatting
- Write **meaningful variable and function names**
- Add **JSDoc comments** for public APIs
- Keep functions **small and focused**
- Write **unit tests** for business logic

### Pull Request Guidelines

- **One feature per PR**: Keep PRs focused and manageable
- **Update documentation**: Include relevant doc updates
- **Add tests**: Ensure new code is tested
- **Pass CI checks**: All tests and lints must pass
- **Descriptive title**: Clearly describe what the PR does
- **Link issues**: Reference related issues in the description
- **Request review**: Tag relevant maintainers

### Branch Naming Convention

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or updates

### Testing Requirements

- **Unit tests** for utility functions and business logic
- **Integration tests** for API endpoints
- **Component tests** for UI components
- Maintain or improve code coverage

### Documentation Standards

- Update README.md for user-facing changes
- Add JSDoc comments for functions and classes
- Update API documentation for endpoint changes
- Include examples in documentation
- Keep docs in sync with code

### Getting Help

- **Discord**: Join our community server (link coming soon)
- **Issues**: Ask questions by opening an issue with the "question" label
- **Discussions**: Use GitHub Discussions for broader topics

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Assume good intentions
- Follow the [Contributor Covenant](https://www.contributor-covenant.org/)

### Recognition

Contributors will be:
- Listed in our CONTRIBUTORS.md file
- Mentioned in release notes for significant contributions
- Invited to join the core team for sustained contributions

## Development Phases

### Phase 1 (Current)
- Basic authentication and user management
- Artist profile creation and editing
- Session lifecycle management
- Discovery and session detail pages
- Mock payment preparation
- Admin audit logging

### Phase 2 (Planned)
- Real Stellar blockchain integration
- Live streaming infrastructure
- Real-time chat and interactions
- Advanced search and filtering
- Mobile applications
- Analytics dashboard

## Technology Stack

### Frontend
- React / Next.js
- TypeScript
- Tailwind CSS
- React Query

### Backend
- Node.js
- Express / Fastify
- TypeScript
- PostgreSQL
- Redis

### Blockchain
- Stellar SDK
- Wallet integration

### Infrastructure
- Docker
- GitHub Actions
- Vercel / AWS

## License

MIT License - see [LICENSE](LICENSE) file for details

## Links

- **Documentation**: [docs/](./docs/)
- **Architecture**: [docs/architecture.md](./docs/architecture.md)
- **API Reference**: [docs/api-reference.md](./docs/api-reference.md)
- **Contributing Guide**: This README (Contributing section)
- **Code of Conduct**: [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/Stellar-Polyphony/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/Stellar-Polyphony/discussions)
- **Email**: support@stellar-polyphony.com

---

Built with ❤️ by the Stellar-Polyphony community
