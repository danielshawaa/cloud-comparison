from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

from data.aws_services import AWS_SERVICES, CATEGORIES

app = FastAPI(
    title="AWS Service Comparison API",
    description="Browse and compare AWS services by category, features, and pricing.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/services", summary="List AWS services")
def get_services(
    category: Optional[str] = Query(None, description="Filter by category name"),
    search: Optional[str] = Query(None, description="Search across name, description, and features"),
):
    """Return all AWS services, optionally filtered by category and/or a search string."""
    results = AWS_SERVICES

    if category:
        results = [s for s in results if s["category"].lower() == category.lower()]

    if search:
        q = search.lower()
        results = [
            s for s in results
            if q in s["name"].lower()
            or q in s["description"].lower()
            or any(q in f.lower() for f in s["keyFeatures"])
            or q in s["useCase"].lower()
        ]

    return {"services": results, "total": len(results)}


@app.get("/api/categories", summary="List service categories")
def get_categories():
    """Return the sorted list of all service category names."""
    return {"categories": CATEGORIES}


@app.get("/api/services/{service_id}", summary="Get a single service")
def get_service(service_id: str):
    """Return full details for one service by its ID."""
    for service in AWS_SERVICES:
        if service["id"] == service_id:
            return service
    raise HTTPException(status_code=404, detail=f"Service '{service_id}' not found.")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
