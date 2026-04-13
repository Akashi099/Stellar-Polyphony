export type UserRole = "fan" | "artist" | "admin";

export interface User {
  id: string;
  email: string;
  username: string;
  role: UserRole;
  createdAt: string;
}

export interface ArtistProfile {
  id: string;
  userId: string;
  stageName: string;
  slug: string;
  bio: string;
  genres: string[];
  walletAddress: string;
  createdAt: string;
  updatedAt?: string;
}

export type SessionStatus = "draft" | "live" | "ended";

export interface Session {
  id: string;
  artistId: string;
  title: string;
  description: string;
  status: SessionStatus;
  scheduledFor?: string;
  startedAt?: string;
  endedAt?: string;
  viewerCount?: number;
  createdAt: string;
  updatedAt?: string;
}

export interface TipIntent {
  id: string;
  sessionId: string;
  fanId: string;
  amount: string;
  asset: string;
  destination: string;
  note?: string;
  status: "pending" | "confirmed" | "failed";
  createdAt: string;
}

export interface AuditEvent {
  id: string;
  actor: string;
  action: string;
  path: string;
  method: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}
