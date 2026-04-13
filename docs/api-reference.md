# API Reference

## Authentication

### POST /auth/register

Create a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "username": "artistname",
  "password": "securepassword",
  "role": "fan" | "artist" | "admin"
}
```

**Response:**
```json
{
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "username": "artistname",
    "role": "fan"
  }
}
```

### POST /auth/login

Authenticate an existing user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "username": "artistname",
    "role": "artist"
  }
}
```

### GET /auth/session

Verify current session.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "authenticated": true,
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "username": "artistname",
    "role": "artist"
  }
}
```

## Profile

### POST /profile

Create an artist profile.

**Request Body:**
```json
{
  "stageName": "The Midnight Strummer",
  "slug": "midnight-strummer",
  "bio": "Jazz guitarist from Brooklyn",
  "genres": ["jazz", "blues", "soul"],
  "walletAddress": "GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```

**Response:**
```json
{
  "id": "profile-id",
  "userId": "user-id",
  "stageName": "The Midnight Strummer",
  "slug": "midnight-strummer",
  "bio": "Jazz guitarist from Brooklyn",
  "genres": ["jazz", "blues", "soul"],
  "walletAddress": "GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "createdAt": "2026-04-13T10:00:00Z"
}
```

### PATCH /profile/:id

Update an existing profile.

**Request Body:**
```json
{
  "bio": "Updated bio text",
  "genres": ["jazz", "blues"]
}
```

**Response:**
```json
{
  "id": "profile-id",
  "stageName": "The Midnight Strummer",
  "slug": "midnight-strummer",
  "bio": "Updated bio text",
  "genres": ["jazz", "blues"],
  "updatedAt": "2026-04-13T11:00:00Z"
}
```

### GET /profile/:slug

Get public profile by slug.

**Response:**
```json
{
  "id": "profile-id",
  "stageName": "The Midnight Strummer",
  "slug": "midnight-strummer",
  "bio": "Jazz guitarist from Brooklyn",
  "genres": ["jazz", "blues", "soul"],
  "sessionCount": 42,
  "totalTips": 1250.50
}
```

## Sessions

### POST /sessions

Create a new session draft.

**Request Body:**
```json
{
  "title": "Evening Jazz Session",
  "description": "Smooth jazz for your evening",
  "scheduledFor": "2026-04-13T20:00:00Z"
}
```

**Response:**
```json
{
  "id": "session-id",
  "artistId": "profile-id",
  "title": "Evening Jazz Session",
  "description": "Smooth jazz for your evening",
  "status": "draft",
  "scheduledFor": "2026-04-13T20:00:00Z",
  "createdAt": "2026-04-13T10:00:00Z"
}
```

### PATCH /sessions/:id

Update session details.

**Request Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated description"
}
```

**Response:**
```json
{
  "id": "session-id",
  "title": "Updated Title",
  "description": "Updated description",
  "updatedAt": "2026-04-13T11:00:00Z"
}
```

### POST /sessions/:id/start

Start a live session.

**Response:**
```json
{
  "id": "session-id",
  "status": "live",
  "startedAt": "2026-04-13T20:00:00Z",
  "streamUrl": "https://stream.example.com/session-id"
}
```

### POST /sessions/:id/end

End a live session.

**Response:**
```json
{
  "id": "session-id",
  "status": "ended",
  "endedAt": "2026-04-13T21:30:00Z",
  "duration": 5400,
  "viewerCount": 127,
  "tipCount": 15,
  "totalTips": 85.50
}
```

### GET /sessions/live

List all live sessions.

**Query Parameters:**
- `genre` (optional): Filter by genre
- `limit` (optional): Number of results (default: 20)
- `offset` (optional): Pagination offset

**Response:**
```json
{
  "sessions": [
    {
      "id": "session-id",
      "artist": {
        "stageName": "The Midnight Strummer",
        "slug": "midnight-strummer"
      },
      "title": "Evening Jazz Session",
      "status": "live",
      "viewerCount": 127,
      "startedAt": "2026-04-13T20:00:00Z"
    }
  ],
  "total": 1,
  "limit": 20,
  "offset": 0
}
```

## Payments

### POST /payments/prepare

Prepare a tip transaction.

**Request Body:**
```json
{
  "sessionId": "session-id",
  "amount": "10.00",
  "asset": "XLM",
  "destination": "GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "note": "Great performance!"
}
```

**Response:**
```json
{
  "id": "tip-intent-id",
  "network": "stellar",
  "asset": "XLM",
  "amount": "10.00",
  "destination": "GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "memo": "session-id",
  "submitMode": "manual",
  "expiresAt": "2026-04-13T11:00:00Z"
}
```

### POST /payments/confirm

Confirm a completed transaction.

**Request Body:**
```json
{
  "tipIntentId": "tip-intent-id",
  "transactionHash": "abc123..."
}
```

**Response:**
```json
{
  "id": "tip-id",
  "status": "confirmed",
  "amount": "10.00",
  "asset": "XLM",
  "confirmedAt": "2026-04-13T10:30:00Z"
}
```

## Audit

### GET /audit

Query audit events (admin only).

**Query Parameters:**
- `actor` (optional): Filter by user ID
- `action` (optional): Filter by action type
- `startDate` (optional): Filter by date range
- `endDate` (optional): Filter by date range
- `limit` (optional): Number of results (default: 50)
- `offset` (optional): Pagination offset

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Response:**
```json
{
  "items": [
    {
      "id": "audit-id",
      "actor": "user-id",
      "action": "profile.update",
      "path": "/profile/profile-id",
      "method": "PATCH",
      "metadata": {
        "changes": ["bio", "genres"]
      },
      "createdAt": "2026-04-13T10:00:00Z"
    }
  ],
  "total": 1,
  "limit": 50,
  "offset": 0
}
```

## Error Responses

All endpoints may return error responses in the following format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {}
  }
}
```

### Common Error Codes

- `UNAUTHORIZED` (401): Missing or invalid authentication
- `FORBIDDEN` (403): Insufficient permissions
- `NOT_FOUND` (404): Resource not found
- `VALIDATION_ERROR` (400): Invalid request data
- `CONFLICT` (409): Resource conflict (e.g., duplicate slug)
- `INTERNAL_ERROR` (500): Server error
