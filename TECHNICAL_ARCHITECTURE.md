# Technical Architecture - Career Launchpad

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                            │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Web App    │  │  Mobile Web  │  │  PWA (Future)│        │
│  │  (Next.js)   │  │  (Responsive)│  │              │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTPS
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      APPLICATION LAYER                          │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐   │
│  │              Next.js 16 (App Router)                   │   │
│  │                                                        │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │   │
│  │  │  React 19    │  │  TypeScript  │  │ Tailwind CSS│ │   │
│  │  │  Components  │  │  Type Safety │  │   Styling   │ │   │
│  │  └──────────────┘  └──────────────┘  └─────────────┘ │   │
│  │                                                        │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │           Server Components                     │  │   │
│  │  │  (SSR, RSC, ISR, Edge Functions)               │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  └────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API/BUSINESS LAYER                         │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐   │
│  │              Next.js API Routes                        │   │
│  │                                                        │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐  │   │
│  │  │Authentication│  │Career Path  │  │  Learning    │  │   │
│  │  │   Routes     │  │   Routes    │  │   Routes     │  │   │
│  │  └─────────────┘  └─────────────┘  └──────────────┘  │   │
│  │                                                        │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐  │   │
│  │  │  Job Match  │  │ User Profile│  │   AI Service │  │   │
│  │  │   Routes    │  │   Routes    │  │   Routes     │  │   │
│  │  └─────────────┘  └─────────────┘  └──────────────┘  │   │
│  └────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
┌─────────────────────────────┐  ┌──────────────────────────────┐
│      DATA LAYER             │  │   EXTERNAL SERVICES          │
│                             │  │                              │
│  ┌───────────────────────┐ │  │  ┌────────────────────────┐ │
│  │   PostgreSQL DB       │ │  │  │   OpenAI GPT-4 API     │ │
│  │  (Prisma ORM)         │ │  │  │  (Career Recommendations)│
│  │                       │ │  │  └────────────────────────┘ │
│  │  ├─ Users            │ │  │                              │
│  │  ├─ Profiles         │ │  │  ┌────────────────────────┐ │
│  │  ├─ Skills           │ │  │  │   AWS S3 / Cloudinary  │ │
│  │  ├─ Career Paths     │ │  │  │   (File Storage)       │ │
│  │  ├─ Courses          │ │  │  └────────────────────────┘ │
│  │  ├─ Jobs             │ │  │                              │
│  │  ├─ Applications     │ │  │  ┌────────────────────────┐ │
│  │  └─ Assessments      │ │  │  │  Job Board APIs        │ │
│  └───────────────────────┘ │  │  │  (LinkedIn, Indeed)    │ │
│                             │  │  └────────────────────────┘ │
│  ┌───────────────────────┐ │  │                              │
│  │  Vector Database      │ │  │  ┌────────────────────────┐ │
│  │  (Pinecone/pgvector)  │ │  │  │  Learning Platform APIs│ │
│  │  (Semantic Search)    │ │  │  │  (Coursera, Udemy)     │ │
│  └───────────────────────┘ │  │  └────────────────────────┘ │
│                             │  │                              │
│  ┌───────────────────────┐ │  │  ┌────────────────────────┐ │
│  │   Redis Cache         │ │  │  │  Email Service         │ │
│  │   (Session, API)      │ │  │  │  (SendGrid/Resend)     │ │
│  └───────────────────────┘ │  │  └────────────────────────┘ │
│                             │  │                              │
│                             │  │  ┌────────────────────────┐ │
│                             │  │  │  Payment Gateway       │ │
│                             │  │  │  (Stripe)              │ │
│                             │  │  └────────────────────────┘ │
└─────────────────────────────┘  └──────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────────┐
│              MONITORING & ANALYTICS LAYER                       │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│  │   Sentry    │  │   Vercel    │  │   Google    │           │
│  │(Error Track)│  │  Analytics  │  │  Analytics  │           │
│  └─────────────┘  └─────────────┘  └─────────────┘           │
└─────────────────────────────────────────────────────────────────┘
```

## Component Architecture

### Frontend Component Hierarchy

```
App (layout.tsx)
├── Header
│   ├── Logo
│   ├── Navigation
│   │   ├── NavLink[]
│   │   └── UserMenu
│   └── MobileMenu
│
├── Main Content (page.tsx)
│   │
│   ├── Public Pages
│   │   ├── LandingPage
│   │   │   ├── Hero
│   │   │   ├── Features
│   │   │   ├── Testimonials
│   │   │   ├── Pricing
│   │   │   └── CTA
│   │   │
│   │   └── AuthPages
│   │       ├── LoginForm
│   │       ├── RegisterForm
│   │       └── ForgotPasswordForm
│   │
│   └── Dashboard (Protected)
│       ├── DashboardLayout
│       │   ├── Sidebar
│       │   │   ├── NavItems[]
│       │   │   └── UserProfile
│       │   │
│       │   └── DashboardContent
│       │       │
│       │       ├── Overview
│       │       │   ├── WelcomeCard
│       │       │   ├── StatsGrid
│       │       │   ├── ProgressChart
│       │       │   └── QuickActions
│       │       │
│       │       ├── Profile
│       │       │   ├── ProfileForm
│       │       │   ├── ResumeUpload
│       │       │   ├── SkillsManager
│       │       │   └── SocialLinks
│       │       │
│       │       ├── CareerPath
│       │       │   ├── AssessmentWizard
│       │       │   ├── PathwaysGrid
│       │       │   ├── PathDetails
│       │       │   └── RoadmapTimeline
│       │       │
│       │       ├── Learning
│       │       │   ├── CourseRecommendations
│       │       │   ├── CourseCard[]
│       │       │   ├── ProgressTracker
│       │       │   └── LearningPath
│       │       │
│       │       ├── Jobs
│       │       │   ├── JobSearch
│       │       │   ├── JobCard[]
│       │       │   ├── ApplicationTracker
│       │       │   └── InterviewSchedule
│       │       │
│       │       └── Analytics
│       │           ├── ProgressCharts
│       │           ├── SkillsRadar
│       │           └── CareerTrajectory
│
└── Footer
    ├── Links
    ├── Social
    └── Copyright
```

## Data Flow Architecture

### User Authentication Flow

```
┌──────────┐      ┌──────────────┐      ┌──────────────┐      ┌──────────┐
│  User    │──1──▶│ Login Form   │──2──▶│ NextAuth API │──3──▶│ Database │
│          │      │              │      │              │      │          │
└──────────┘      └──────────────┘      └──────────────┘      └──────────┘
     ▲                                          │
     │                                          │4. JWT Token
     │                                          ▼
     │                                   ┌──────────────┐
     └──────────────5. Redirect──────────│   Session    │
                                         │   Store      │
                                         └──────────────┘
```

### Career Path Generation Flow

```
┌──────────┐     ┌───────────────┐     ┌──────────────┐
│  User    │─1──▶│  Assessment   │─2──▶│  Save to DB  │
│          │     │  Form         │     │              │
└──────────┘     └───────────────┘     └──────────────┘
                                              │
                                              │3. Send data
                                              ▼
                        ┌──────────────────────────────────────┐
                        │      AI Processing Pipeline          │
                        │                                      │
                        │  ┌────────────┐    ┌─────────────┐ │
                        │  │  Format    │───▶│  OpenAI API │ │
                        │  │  Prompt    │    │  Request    │ │
                        │  └────────────┘    └─────────────┘ │
                        │                           │         │
                        │                           │4. Response
                        │                           ▼         │
                        │                    ┌─────────────┐ │
                        │                    │   Parse &   │ │
                        │                    │  Validate   │ │
                        │                    └─────────────┘ │
                        └──────────────────────────────────────┘
                                              │
                                              │5. Career Paths
                                              ▼
                                     ┌──────────────────┐
                                     │   Store Career   │
                                     │   Paths in DB    │
                                     └──────────────────┘
                                              │
                                              │6. Display
                                              ▼
                                     ┌──────────────────┐
                                     │   Dashboard UI   │
                                     └──────────────────┘
```

### Real-time Features Flow (Future)

```
┌──────────┐                  ┌──────────────┐
│  User A  │──1. Send Msg────▶│  WebSocket   │
│          │                  │   Server     │
└──────────┘                  └──────────────┘
                                     │
                              2. Broadcast
                                     │
                    ┌────────────────┼────────────────┐
                    ▼                ▼                ▼
              ┌──────────┐    ┌──────────┐    ┌──────────┐
              │  User B  │    │  User C  │    │  User D  │
              └──────────┘    └──────────┘    └──────────┘
```

## State Management Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Application State                    │
│                                                         │
│  ┌───────────────┐  ┌───────────────┐  ┌────────────┐ │
│  │  Server State │  │  Client State │  │   Cache    │ │
│  │ (React Query) │  │   (Zustand)   │  │  (Redis)   │ │
│  │               │  │               │  │            │ │
│  │ - User Data   │  │ - UI State    │  │ - API      │ │
│  │ - Career Paths│  │ - Form State  │  │   Responses│ │
│  │ - Courses     │  │ - Modals      │  │ - Sessions │ │
│  │ - Jobs        │  │ - Toasts      │  │            │ │
│  └───────────────┘  └───────────────┘  └────────────┘ │
└─────────────────────────────────────────────────────────┘
```

## Security Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Security Layers                      │
│                                                         │
│  Layer 1: Network Security                             │
│  ├─ HTTPS/TLS Encryption                               │
│  ├─ CORS Configuration                                 │
│  └─ Rate Limiting                                      │
│                                                         │
│  Layer 2: Authentication & Authorization               │
│  ├─ JWT Tokens                                         │
│  ├─ Session Management                                 │
│  ├─ OAuth 2.0 (Google, LinkedIn)                      │
│  └─ Role-Based Access Control (RBAC)                  │
│                                                         │
│  Layer 3: Application Security                        │
│  ├─ Input Validation (Zod)                            │
│  ├─ SQL Injection Prevention (Prisma ORM)             │
│  ├─ XSS Protection                                     │
│  ├─ CSRF Protection                                    │
│  └─ Content Security Policy (CSP)                     │
│                                                         │
│  Layer 4: Data Security                               │
│  ├─ Encryption at Rest                                │
│  ├─ Secure Password Hashing (bcrypt)                  │
│  ├─ PII Data Protection                               │
│  └─ Regular Backups                                   │
│                                                         │
│  Layer 5: Monitoring & Incident Response              │
│  ├─ Error Tracking (Sentry)                           │
│  ├─ Security Audits                                   │
│  ├─ Vulnerability Scanning                            │
│  └─ Incident Response Plan                            │
└─────────────────────────────────────────────────────────┘
```

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Vercel Platform                          │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐   │
│  │                Production Environment                   │   │
│  │                                                        │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │   │
│  │  │  Edge Network│  │  Serverless  │  │  Static     │ │   │
│  │  │    (CDN)     │  │  Functions   │  │  Assets     │ │   │
│  │  └──────────────┘  └──────────────┘  └─────────────┘ │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐   │
│  │                Preview Environments                     │   │
│  │  (Automatic deployment for each PR)                    │   │
│  └────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Connection
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Database Hosting                             │
│              (Railway / Supabase / Neon)                        │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │  Production  │  │  Staging DB  │  │  Development │        │
│  │   Database   │  │              │  │   Database   │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
└─────────────────────────────────────────────────────────────────┘
```

## CI/CD Pipeline

```
┌──────────────┐
│  Git Push    │
│  to GitHub   │
└──────┬───────┘
       │
       ▼
┌─────────────────────────────────────────┐
│         GitHub Actions                  │
│                                         │
│  1. ┌────────────────────────┐        │
│     │  Lint & Type Check     │        │
│     └────────────────────────┘        │
│                │                       │
│                ▼                       │
│  2. ┌────────────────────────┐        │
│     │   Run Unit Tests       │        │
│     └────────────────────────┘        │
│                │                       │
│                ▼                       │
│  3. ┌────────────────────────┐        │
│     │  Build Next.js App     │        │
│     └────────────────────────┘        │
│                │                       │
│                ▼                       │
│  4. ┌────────────────────────┐        │
│     │  Run E2E Tests         │        │
│     └────────────────────────┘        │
└─────────────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────┐
│         Deploy to Vercel                │
│                                         │
│  ┌──────────────────┐                  │
│  │  Preview Deploy  │ (for PRs)        │
│  └──────────────────┘                  │
│           │                             │
│           ▼                             │
│  ┌──────────────────┐                  │
│  │  Production      │ (on merge)       │
│  │  Deployment      │                  │
│  └──────────────────┘                  │
└─────────────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────┐
│      Post-Deployment Checks             │
│                                         │
│  - Smoke Tests                          │
│  - Database Migrations                  │
│  - Cache Invalidation                   │
│  - Monitoring Alerts Setup              │
└─────────────────────────────────────────┘
```

## Scalability Considerations

### Horizontal Scaling
- Serverless functions auto-scale
- Database read replicas for read-heavy operations
- CDN for static assets distribution
- Load balancing via Vercel Edge Network

### Vertical Scaling
- Database connection pooling
- Efficient database indexing
- Query optimization with Prisma
- API response caching

### Performance Optimizations
```
Frontend:
├─ Code splitting
├─ Image optimization (Next.js Image)
├─ Lazy loading components
├─ Server-side rendering (SSR)
└─ Static site generation (SSG) for public pages

Backend:
├─ Database query optimization
├─ Redis caching layer
├─ API response compression
├─ Efficient data pagination
└─ Background job processing
```

## Technology Decision Matrix

| Requirement | Technology Choice | Alternative | Justification |
|------------|------------------|-------------|---------------|
| Frontend Framework | Next.js 16 | Remix, Nuxt | Best React framework, excellent DX, built-in optimizations |
| Language | TypeScript | JavaScript | Type safety, better DX, fewer runtime errors |
| Styling | Tailwind CSS | Styled Components | Utility-first, fast development, small bundle |
| Database | PostgreSQL | MongoDB | Relational data, ACID compliance, Prisma support |
| ORM | Prisma | TypeORM | Type-safe, great DX, auto-generated types |
| Auth | NextAuth.js | Clerk, Auth0 | Open-source, flexible, Next.js native |
| AI Provider | OpenAI | Anthropic | Best performance, extensive features |
| Hosting | Vercel | Netlify, AWS | Best Next.js support, edge network, zero config |
| State | React Query + Zustand | Redux | Simpler, less boilerplate, better performance |

---

**Document Version**: 1.0  
**Last Updated**: October 25, 2025  
**Status**: Architecture Approved
