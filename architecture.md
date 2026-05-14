# Enterprise AI Football Betting Intelligence Platform

## Architecture Overview
The platform uses a **Modular Monolith** architecture following **Clean Architecture** principles, designed for high scalability and real-time responsiveness.

## Core Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Socket.IO.
- **Backend**: FastAPI, Socket.IO, SQLAlchemy (PostgreSQL), Redis Pub/Sub.
- **Task Processing**: Celery + Redis for background ETL and AI workloads.
- **AI Engine**: Hybrid explainability using SHAP values and Poisson-based probability modeling.

## Domain Modules
- `auth`: JWT-based secure authentication.
- `users`: User management and Role-Based Access Control (RBAC).
- `matches`: Global football data management.
- `predictions`: AI-generated match insights.
- `ai_engine`: Model explainability and retraining services.
- `bet_ticket`: Automated ticket generation logic.

## Real-time System
Uses Socket.IO with a Redis manager to broadcast live match updates, odds shifts, and AI recalibrations across distributed backend instances.

## Security & Operations
- **Rate Limiting**: Integrated via SlowAPI.
- **Logging**: Structured JSON logging via Structlog.
- **Deployment**: Full Docker Compose orchestration with automated health checks.
- **Database**: Versioned migrations via Alembic.
