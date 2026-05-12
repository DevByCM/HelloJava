# Architecture Document: AI Football Betting Intelligence

## 1. System Overview
The platform is designed as a distributed SaaS ecosystem composed of a FastAPI backend, a React frontend, and a Celery-based background worker system for data ingestion and ML processing.

## 2. Components
- **Backend (FastAPI)**: REST API handling auth, user management, match data, and bet ticket retrieval.
- **Frontend (React)**: Modern dashboard with role-based view locking.
- **Worker (Celery)**: Background task processor for ETL and Prediction pipelines.
- **Database (PostgreSQL)**: Relational storage for users, matches, and predictions.
- **Cache (Redis)**: Task queue broker and caching layer.

## 3. Data Flow
1. **Ingestion**: Celery Beat triggers `sync_and_predict` hourly.
2. **ETL**: Fetches data from Football-Data.org, normalizes and stores in DB.
3. **ML Engine**: Baseline Poisson model generates probabilities and confidence scores.
4. **Ticket Generator**: Combines high-confidence picks into optimized slips (~2.0 odds).
5. **UI**: React dashboard consumes API, applying JWT-based access control.

## 4. Security
- JWT for authentication.
- Password hashing via bcrypt.
- Role-Based Access Control (RBAC) enforced at the API level.
- Dockerized environment with Nginx reverse proxy.
