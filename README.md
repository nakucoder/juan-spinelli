# Juan Spinelli — Portfolio

Personal portfolio site for Juan Spinelli, a Software Engineer based in Miami, FL.

Live at: [nakucoder.github.io/juan-spinelli](https://nakucoder.github.io/juan-spinelli)

---

## About

Results-driven Software Engineer specializing in back-end development, cloud infrastructure, and AI-powered systems. Recent CS graduate from Miami Dade College with hands-on experience building serverless pipelines, REST APIs, and mobile applications. Currently a Backend Developer Intern at TriMerge Consulting Group while actively developing a portfolio of data and cloud engineering projects targeting Data Engineer and Cloud Engineer roles.

---

## Experience

### Backend Developer Intern — TriMerge Consulting Group, P.A. | Miami, FL
**Mar 2026 – Present**
- Developed and maintained RESTful API endpoints using Node.js/Express, supporting multi-user authentication and role-based access control
- Tested and validated API endpoints using Postman and documented them with Swagger
- Collaborated with frontend developers to integrate backend endpoints, ensuring seamless data flow between client and server
- Participated in code reviews and managed version control using GitHub branching and pull request workflows

**Stack:** Node.js, Express, JWT, RBAC, MongoDB, Postman, Swagger, GitHub Actions

---

### GIS & IoT Intern — City of Coral Gables | Coral Gables, FL
**Sept 2023 – Nov 2023**
- Built a virtual reality model of Coral Gables using Unity and ArcGIS to demonstrate immersive city visualization capabilities
- Enabled intuitive VR navigation via Meta Quest devices with spatially accurate GIS-integrated digital representations
- Worked cross-functionally with GIS and IoT teams to evaluate immersive technologies for future city planning

**Stack:** Unity, ArcGIS, VR, Oculus Meta Quest

---

## Projects

### 🤖 Job Scraper Pipeline
Fully automated, multi-cloud AI-powered job scraper. Pulls 30–50 jobs/day from USAJobs, Remotive, and Jobicy. GCP Cloud Functions handle scraping on a daily schedule, Groq Llama 3.3 70B enriches and scores each listing, Azure Cosmos DB handles deduplication, and AWS Lambda delivers a daily HTML email digest via SES. Full audit trail via DynamoDB telemetry and heartbeat emails on empty days.

- **Stack:** Python, GCP Cloud Functions, Cloud Scheduler, Groq (Llama 3.3 70B), AWS Lambda, S3, SES, API Gateway, DynamoDB, Azure Cosmos DB, React, Vercel, GitHub Actions
- **Dashboard:** [job-scraper-dashboard-taupe.vercel.app](https://job-scraper-dashboard-taupe.vercel.app)
- **Repo:** [github.com/nakucoder/job-scraper-pipeline](https://github.com/nakucoder/job-scraper-pipeline)

---

### 🧠 Athletic Intelligence
AI-powered fitness coaching mobile app with dual personas — OLI (performance mode) and EMI (recovery mode) — powered by Groq Llama 3.3 70B. Features deterministic physiological readiness scoring via fatigue and monotony engines, workout logging, weekly planning system, and a journal with calendar view. Node.js/Express/Prisma backend auto-deployed on Render via Docker.

- **Stack:** React Native, Expo, Node.js, Express, Prisma, PostgreSQL, Groq, Docker, Render, GitHub Actions
- **Repo:** [github.com/nakucoder/athletic-intelligence](https://github.com/nakucoder/athletic-intelligence) (private)

---

### 🌆 Miami Data Dashboard
Live React dashboard visualizing real-time Miami weather, cryptocurrency prices, and stock market data — fetching from AWS API Gateway endpoints backed by serverless Lambda functions and S3 cache.

- **Stack:** React, Vite, Recharts, AWS Lambda, API Gateway, S3, EventBridge, Vercel
- **Demo:** [miami-dashboard-plum.vercel.app](https://miami-dashboard-plum.vercel.app)
- **Repo:** [github.com/nakucoder/miami-dashboard](https://github.com/nakucoder/miami-dashboard)

---

### ⚡ Miami Data Pipeline
Three automated serverless data pipelines collecting live weather, crypto, and stock market data. Migrated from EC2/Docker to AWS Lambda triggered by EventBridge, with API Gateway endpoints, CloudWatch alarms, and SNS alerts.

- **Stack:** Python, FastAPI, AWS Lambda, EventBridge, API Gateway, CloudWatch, SNS, S3, Docker
- **Repo:** [github.com/nakucoder/miami-data-pipeline](https://github.com/nakucoder/miami-data-pipeline)

---

### 🔐 TriMerge Auth System
Secure authentication platform with JWT tokens and role-based access control for enterprise consulting workflows.

- **Stack:** Node.js, Express, JWT, RBAC

---

### 🤖 TriMerge AI Proposal Builder
AI-powered tool that automates and streamlines the creation of consulting proposals using natural language processing.

- **Stack:** Python, AI/NLP, Firebase

---

### 🎮 Tetris Clone
Classic Tetris game built from scratch with collision detection, grid-based state management, line-clearing algorithms, and real-time input handling.

- **Stack:** Python, Pygame
- **Repo:** [github.com/nakucoder/Python-Tetris](https://github.com/nakucoder/Python-Tetris)

---

### 💪 RoboFit Trainer
Cloud-based fitness web application and Android interface to monitor user fitness analytics with Java backend logic and AWS hosting.

- **Stack:** HTML, CSS, JavaScript, Java, AWS, Android SDK
- **Demo:** [nakucoder.github.io/robofit-trainer](https://nakucoder.github.io/robofit-trainer/)
- **Repo:** [github.com/nakucoder/robofit-trainer](https://github.com/nakucoder/robofit-trainer)

---

## Skills

**Languages:** Python, JavaScript, TypeScript, Java, C++, Swift, SQL, HTML, CSS

**Frameworks & Libraries:** React, React Native, Expo, Node.js, Express, FastAPI, Prisma, Pygame, Unity, ArcGIS

**Databases:** PostgreSQL, MongoDB, MySQL, Firebase, Supabase, Azure Cosmos DB, AWS DynamoDB

**Cloud & DevOps:** AWS (Lambda, S3, API Gateway, EventBridge, SES, DynamoDB, CloudWatch, SNS), GCP (Cloud Functions, Cloud Scheduler), Azure (Cosmos DB), Render, Docker, GitHub Actions (CI/CD), Vercel

**AI/ML & Tools:** Groq (Llama 3.3 70B), Anthropic Claude API, LLM APIs, NLP, vector embeddings, Postman, Swagger, VS Code, Android Studio

**Mobile & XR:** Android SDK, SwiftUI, visionOS SDK, RealityKit, ARKit, Oculus Meta Quest SDK

---

## Education

**Bachelor of Science in Software Engineering**
Miami Dade College — December 2025

Relevant coursework: Data Structures, Algorithms, Software Engineering I & II, Database Design

Certifications: Computer Programmer: Mobile Applications Development (Android & iOS); Swift Programming

---

## Running Locally

```bash
npm install
npm run dev
```

---

## Deployment

Deployed via GitHub Pages at `nakucoder.github.io/juan-spinelli`.
