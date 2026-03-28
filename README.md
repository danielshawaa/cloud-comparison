# AWS Service Comparison

A full-stack web app for browsing and comparing AWS services by category, key features, and pricing.

## Stack

| Layer    | Tech                          |
|----------|-------------------------------|
| Frontend | React 18 + TypeScript + Vite  |
| Styling  | Tailwind CSS                  |
| Backend  | Python + FastAPI + Uvicorn    |

## Project Structure

```
cloud-service-comparison/
├── backend/
│   ├── main.py               # FastAPI app (3 endpoints)
│   ├── requirements.txt
│   └── data/
│       └── aws_services.py   # 33 services across 8 categories
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.ts
    ├── tailwind.config.js
    └── src/
        ├── App.tsx
        ├── api/services.ts   # Fetch helpers
        ├── types/index.ts    # AWSService interface
        ├── utils/styles.ts   # Category colour helpers
        └── components/
            ├── Header.tsx
            ├── SearchBar.tsx
            ├── CategoryFilter.tsx
            ├── ServiceCard.tsx
            └── LoadingSpinner.tsx
```

## Setup & Running

### 1 — Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python main.py
# API runs on http://localhost:8000
# Interactive docs: http://localhost:8000/docs
```

### 2 — Frontend (separate terminal)

```bash
cd frontend
npm install   # already done if you cloned this
npm run dev
# App runs on http://localhost:5173
```

## API Endpoints

| Method | Path                       | Description                              |
|--------|----------------------------|------------------------------------------|
| GET    | `/api/services`            | List all services (supports `?category=` and `?search=`) |
| GET    | `/api/categories`          | List all category names                  |
| GET    | `/api/services/{id}`       | Get a single service by ID               |

## Features

- **33 AWS services** across Compute, Storage, Database, Networking, AI/ML, Security, Analytics, and DevOps
- **Category filter** — click a pill to narrow results
- **Live search** — debounced, searches name, description, features, and use cases
- **Service cards** — category badge, pricing model badge, key features, use cases, and pricing notes
- **Responsive grid** — 1 / 2 / 3 columns depending on screen width

---

Co-Authored-By: Oz <oz-agent@warp.dev>
