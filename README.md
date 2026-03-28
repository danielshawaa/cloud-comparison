AWS Service Comparison

Live Demo:
https://danielshawaa.github.io/cloud-comparison/

Overview

This project is a web application that helps users explore and compare AWS services across different categories such as compute, storage, databases, AI/ML, and networking.

The goal of the project was to build a simple interface where users can search, filter, and compare cloud services side-by-side to better understand their use cases and pricing models.

This project was built as part of my learning process while studying cloud architecture and AWS services.

I used modern web tools along with AI-assisted development tools (Warp AI) to help generate and iterate on parts of the code while I focused on understanding the architecture, APIs, and user experience.

Live Website

https://danielshawaa.github.io/cloud-comparison/

Key Features

• Browse 30+ AWS services across major cloud categories
• Search AWS services by name, description, or features
• Filter services by category (Compute, Storage, AI/ML, etc.)
• View service descriptions, pricing models, and common use cases
• Compare up to three services side-by-side
• Responsive layout for desktop and mobile

Technologies Used

Frontend
React 18
TypeScript
Vite
Tailwind CSS

Backend
Python
FastAPI
Uvicorn

Deployment
GitHub Pages
GitHub Actions

Project Architecture

The application is structured as a typical full-stack project with a separate frontend and backend.

Frontend

React application for UI and filtering logic
Tailwind used for styling
Vite used for fast builds and development

Backend

FastAPI service providing endpoints for AWS service data
Lightweight REST API used by the frontend

Deployment

The frontend is deployed as a static site using GitHub Pages
GitHub Actions automatically builds and deploys the site on push
What I Learned

Through this project I gained experience with:

• Building REST APIs using FastAPI
• Creating responsive React applications with TypeScript
• Structuring frontend and backend projects
• Deploying static web applications with GitHub Pages
• Using AI-assisted development tools (Warp AI) to speed up iteration while still understanding the code and architecture

Future Improvements

• Add more AWS services and categories
• Add diagrams explaining AWS service architecture
• Add real pricing examples and comparisons
• Improve UI/UX and filtering capabilities
• Add authentication and user favorites
Co-Authored-By: Oz <oz-agent@warp.dev>
