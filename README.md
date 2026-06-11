# BCI Pro Exam Platform

Next.js App Router version for Rajasthan Basic Computer Instructor preparation.

## Run locally

```bash
npm install
npm run dev
```

## Vercel

- Framework: Next.js
- Root Directory: ./
- Install Command: npm install
- Build Command: npm run build

Add these environment variables in Vercel Production:

```env
MONGODB_URI=your_mongodb_atlas_uri
NEXT_PUBLIC_DEFAULT_USER_ID=default-user
NEXT_PUBLIC_STUDY_START_DATE=2026-03-10
NEXT_PUBLIC_STUDY_DAYS=65
NEXT_PUBLIC_STUDY_TIME_ZONE=Asia/Kolkata
APP_RATE_LIMIT_PER_MINUTE=120
```

The home page and learning pages do not require MongoDB to open. Dashboard/tests show empty safe data if MongoDB is unreachable instead of crashing the full app.

Health check:

```txt
/api/health
```
