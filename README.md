# AWS Service Comparison

## Live Demo
https://danielshawaa.github.io/cloud-comparison/

---

## Overview

This project is a web application that helps users explore and compare AWS services across different categories such as compute, storage, databases, AI/ML, and networking.

The goal of the project was to build a simple interface where users can search, filter, and compare cloud services side-by-side to better understand their use cases and pricing models.

This project was built as part of my learning process while studying cloud architecture and AWS services.

I used modern web tools along with AI-assisted development tools (Warp AI) to help generate and iterate on parts of the code while focusing on understanding the architecture, APIs, and user experience.

---

# Key Features

- Browse 30+ AWS services across major cloud categories
- Search AWS services by name, description, or features
- Filter services by category (Compute, Storage, AI/ML, etc.)
- View service descriptions, pricing models, and common use cases
- Compare up to three services side-by-side
- Responsive layout for desktop and mobile

---

# Technologies Used

## Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS

## Backend
- Python
- FastAPI
- Uvicorn

## Deployment
- GitHub Pages
- GitHub Actions

---

# Project Architecture

The application is structured as a full-stack project with separate frontend and backend layers.

## Frontend
- React application responsible for UI rendering and filtering logic
- Tailwind CSS for styling
- Vite for fast builds and development

## Backend
- FastAPI service providing endpoints for AWS service data
- Lightweight REST API used by the frontend

## Deployment
- The frontend is deployed as a static site using GitHub Pages
- GitHub Actions automatically builds and deploys the site on every push

---

# What I Learned

Through this project I gained experience with:

- Building REST APIs using FastAPI
- Creating responsive React applications with TypeScript
- Structuring frontend and backend projects
- Deploying static web applications using GitHub Pages
- Using AI-assisted development tools (Warp AI) to accelerate development while still understanding the architecture and implementation

---

# Future Improvements

- Add more AWS services and categories
- Add architecture diagrams explaining AWS services
- Include real pricing comparisons
- Improve UI/UX and filtering features
- Add authentication and saved service comparisons

---

# Author

**Daniel Shawa**

SMU student interested in cloud computing, product management, and building tools that simplify complex technology concepts.
• Add authentication and user favorites
Co-Authored-By: Oz <oz-agent@warp.dev>
