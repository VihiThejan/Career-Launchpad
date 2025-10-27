# Career Launchpad

AI-Powered IT Career Development Platform

## 🚀 Quick Start

### Local Development

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000

### Demo Login
- Email: `demo@example.com` (or any email)
- Password: `password123` (or any password)

## 📁 Project Structure

```
Career-Launchpad/
├── frontend/          # Next.js 16 frontend application
│   ├── src/
│   ├── package.json
│   └── next.config.ts
└── README.md
```

## ☁️ Cloudflare Pages Deployment

**Important:** Set Root Directory to `frontend`

| Setting | Value |
|---------|-------|
| **Root directory** | `frontend` |
| **Build command** | `npm install && npm run build` |
| **Build output** | `.next` |
| **Node version** | `20` |

📖 See [CLOUDFLARE_FIX.md](./CLOUDFLARE_FIX.md) for detailed instructions.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 with App Router & Turbopack
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand with Persistence
- **Data Fetching:** TanStack Query (React Query)
- **Forms:** React Hook Form + Zod Validation
- **Icons:** Lucide React
- **Charts:** Recharts
- **Animations:** Framer Motion

## ✨ Features

### Completed
- ✅ User Authentication (Mock Login)
- ✅ Multi-step Onboarding Wizard
- ✅ Dashboard with Analytics
- ✅ Course Catalog with Filters
- ✅ Progress Tracking & Skills
- ✅ Career Roadmap Visualization
- ✅ Achievements System

### Coming Soon
- 🚧 Career Assessment Module
- 🚧 AI-Powered Recommendations
- 🚧 Job Matching Engine
- 🚧 Mentor Matching
- 🚧 Real-time Messaging
- 🚧 Resume Builder

## 📚 Documentation

- [Frontend Development Checklist](./FRONTEND_CHECKLIST.md)
- [Cloudflare Pages Setup Guide](./CLOUDFLARE_FIX.md)
- [Phase 5 Complete - Dashboard](./frontend/PHASE_5_COMPLETE.md)
- [Sample Login Documentation](./frontend/SAMPLE_LOGIN_ADDED.md)

## 📦 Files Created

**Total:** ~75 files across 5 completed phases

**Phase Breakdown:**
- Phase 1: Project Setup (32 files)
- Phase 2: UI Components (22 files)
- Phase 3: Authentication (8 files)
- Phase 4: Onboarding (8 files)
- Phase 5: Dashboard (3 pages + layout)

## 🤝 Contributing

This is a development project. For local development:

```bash
# Install dependencies
cd frontend
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## 📝 License

Private project

---

**Built with ❤️ using Next.js 16, TypeScript, and Tailwind CSS**
