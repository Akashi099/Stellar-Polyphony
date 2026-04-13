# Phase 1 Architecture Reference

## Scope

This document defines the architecture for the Phase 1 MVP. It supports parallel work across web, API, admin, and future mobile applications.

## Bounded Areas

### Public Web
- Landing page
- Discovery (browse live performances)
- Session detail and tipping

### Artist Web
- Onboarding flow
- Live session control dashboard
- Profile management

### Admin Web
- Authentication entry
- Overview dashboard
- Audit log viewer

### API
- Health check
- Authentication
- Profile management
- Session lifecycle
- Payment preparation
- Audit logging

## Core Entities

### User
- **Roles**: fan, artist, admin
- **Ownership**: One profile per user
- **Purpose**: Authentication and authorization

### ArtistProfile
- **Purpose**: Public identity for performers
- **Fields**: Stage name, slug, bio, genres, wallet address
- **References**: Sessions and tips link to profiles

### Session
- **Lifecycle**: draft → live → ended
- **Ownership**: Connected to one artist
- **Data**: Stream metadata, viewer count, timestamps

### TipIntent
- **Purpose**: Client-created draft for payment preparation
- **Evolution**: Becomes payment-ready transaction in later phases
- **Links**: Fan to artist session

### AuditEvent
- **Purpose**: Track system mutations
- **Emission**: Created on successful state changes
- **Consumption**: Queried by admin surfaces

## Route Contract

### Web Routes

| Route | Purpose |
|-------|---------|
| `/` | Public landing page |
| `/discover` | Browse live or upcoming performances |
| `/sessions/:slug` | Session detail and tip form |
| `/profile` | User profile editing |
| `/artist/onboarding` | Artist setup flow |
| `/artist/dashboard` | Session controls |
| `/admin/login` | Admin authentication |
| `/admin` | Admin overview dashboard |

### API Routes

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/health` | Health check |
| POST | `/auth/register` | Create user account |
| POST | `/auth/login` | Authenticate user |
| GET | `/auth/session` | Verify session |
| POST | `/profile` | Create artist profile |
| PATCH | `/profile/:id` | Update profile |
| GET | `/profile/:slug` | Get public profile |
| POST | `/sessions` | Create session draft |
| PATCH | `/sessions/:id` | Update session |
| POST | `/sessions/:id/start` | Start live session |
| POST | `/sessions/:id/end` | End session |
| GET | `/sessions/live` | List live sessions |
| POST | `/payments/prepare` | Prepare tip transaction |
| POST | `/payments/confirm` | Confirm transaction |
| GET | `/audit` | Query audit events (admin) |

## Integration Strategy

### Development Approach
- **Web branches**: Use local cookie-backed or in-memory data when backend is not ready
- **API branches**: Use fake service implementations behind stable interfaces
- **Shared packages**: Publish request/response shapes, not framework-specific code

### Parallel Development
- Teams can work independently on different surfaces
- Contracts are defined upfront
- Mock implementations allow progress without dependencies

## Key Sequences

### Artist Onboarding
1. User opens artist setup page
2. User enters stage name, slug, genres, wallet address
3. Local storage persists draft immediately
4. API integration swaps persistence without changing UI

### Session Start
1. Artist opens dashboard
2. Artist edits session draft
3. Artist clicks "Start Session"
4. Session state transitions to `live`
5. Discovery page shows new live session

### Tip Intent
1. Fan opens session detail
2. Fan submits amount, asset, and note
3. Draft tip intent is stored
4. Payment preparation flow (Phase 2) will upgrade to real transactions

## Phase 1 Constraints

### What's Included
- Mock authentication (no real security)
- In-memory or local storage persistence
- Basic UI flows
- API contract definitions
- Audit event logging

### What's Deferred to Phase 2
- Real Stellar blockchain integration
- Live streaming infrastructure
- Real-time chat and interactions
- Production-grade authentication
- Database persistence
- Wallet verification
- Transaction confirmation

## Technology Choices

### Monorepo
- **Tool**: pnpm workspaces + Turbo
- **Benefit**: Shared code, coordinated builds

### Type Safety
- **Tool**: TypeScript
- **Benefit**: Catch errors early, better IDE support

### Modularity
- **Pattern**: Apps and packages separation
- **Benefit**: Clear boundaries, reusable code

## Open Questions

Deferred to Phase 2:
- Wallet verification storage model
- Real Stellar transaction confirmation strategy
- Real-time delivery contract (WebSocket vs SSE)
- Admin moderation workflow specifics
- Streaming infrastructure provider
