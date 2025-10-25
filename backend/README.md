# Career Launchpad Backend API

Backend REST API for the Career Launchpad platform built with Node.js, Express, TypeScript, and Prisma.

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)

## 🛠 Tech Stack

- **Runtime**: Node.js 20+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)
- **AI Integration**: OpenAI GPT-4
- **Caching**: Redis/IORedis
- **File Storage**: AWS S3
- **Email**: Nodemailer
- **Payments**: Stripe
- **Logging**: Winston
- **Validation**: Express-validator
- **Security**: Helmet, CORS, Rate Limiting

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   │   ├── database.ts      # Prisma database connection
│   │   ├── logger.ts        # Winston logger setup
│   │   ├── redis.ts         # Redis cache configuration
│   │   └── openai.ts        # OpenAI client setup
│   │
│   ├── controllers/     # Route controllers (business logic)
│   │   ├── auth.controller.ts
│   │   ├── user.controller.ts
│   │   ├── career.controller.ts
│   │   ├── learning.controller.ts
│   │   ├── job.controller.ts
│   │   └── ai.controller.ts
│   │
│   ├── middleware/      # Custom middleware
│   │   ├── auth.ts           # JWT authentication & authorization
│   │   ├── errorHandler.ts   # Global error handler
│   │   ├── notFound.ts       # 404 handler
│   │   ├── rateLimiter.ts    # Rate limiting
│   │   └── validator.ts      # Request validation
│   │
│   ├── routes/          # API route definitions
│   │   ├── auth.routes.ts
│   │   ├── user.routes.ts
│   │   ├── career.routes.ts
│   │   ├── learning.routes.ts
│   │   ├── job.routes.ts
│   │   └── ai.routes.ts
│   │
│   ├── services/        # Business logic & external services
│   │   └── email.service.ts
│   │
│   ├── models/          # Prisma models (generated)
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   └── server.ts        # Express app entry point
│
├── tests/               # Test files
├── logs/                # Application logs
├── .env.example         # Environment variables template
├── .gitignore          
├── package.json
├── tsconfig.json        # TypeScript configuration
├── nodemon.json         # Nodemon configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- PostgreSQL database
- Redis server (optional but recommended)

### Installation

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your actual values.

4. **Set up Prisma**
   ```bash
   # Generate Prisma Client
   npm run prisma:generate
   
   # Run database migrations
   npm run prisma:migrate
   
   # (Optional) Seed the database
   npm run seed
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000` (or your configured PORT).

## 📚 API Documentation

### Base URL

```
http://localhost:5000/api/v1
```

### Authentication

Most endpoints require authentication via JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### API Endpoints

#### Authentication (`/api/v1/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register new user | No |
| POST | `/login` | Login user | No |
| POST | `/logout` | Logout user | No |
| POST | `/refresh-token` | Refresh access token | No |
| POST | `/forgot-password` | Request password reset | No |
| POST | `/reset-password` | Reset password with token | No |
| GET | `/verify-email/:token` | Verify email address | No |

#### Users (`/api/v1/users`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/profile` | Get user profile | Yes |
| PUT | `/profile` | Update user profile | Yes |
| POST | `/resume` | Upload resume | Yes |
| DELETE | `/resume` | Delete resume | Yes |
| POST | `/skills` | Add skill | Yes |
| DELETE | `/skills/:skillId` | Remove skill | Yes |
| PUT | `/skills/:skillId` | Update skill proficiency | Yes |

#### Career Paths (`/api/v1/careers`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/assessment` | Submit career assessment | Yes |
| GET | `/paths` | Get all career paths | Yes |
| GET | `/paths/:id` | Get specific career path | Yes |
| POST | `/paths/generate` | Generate new career path (AI) | Yes |
| PUT | `/paths/:id/progress` | Update path progress | Yes |

#### Learning (`/api/v1/learning`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/courses/recommendations` | Get course recommendations | Yes |
| GET | `/courses/:id` | Get course details | Yes |
| POST | `/courses/:id/progress` | Track course progress | Yes |
| GET | `/learning-path` | Get personalized learning path | Yes |

#### Jobs (`/api/v1/jobs`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/search` | Search for jobs | Yes |
| GET | `/matches` | Get AI-matched jobs | Yes |
| GET | `/:id` | Get job details | Yes |
| POST | `/:id/apply` | Apply to job | Yes |
| GET | `/applications/me` | Get user's applications | Yes |
| PUT | `/applications/:id` | Update application status | Yes |

#### AI Features (`/api/v1/ai`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/chat` | Chat with AI career advisor | Yes |
| POST | `/analyze-resume` | AI resume analysis | Yes |
| POST | `/generate-cover-letter` | Generate cover letter | Yes |
| POST | `/career-advice` | Get career advice | Yes |
| POST | `/optimize-linkedin` | LinkedIn profile optimization | Yes |

### Response Format

#### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

#### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error (dev mode only)",
  "stack": "Error stack trace (dev mode only)"
}
```

### Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error

## 🔐 Environment Variables

See `.env.example` for all required environment variables:

```env
# Server
NODE_ENV=development
PORT=5000

# Database
DATABASE_URL="postgresql://..."

# JWT
JWT_SECRET="your-secret"
JWT_EXPIRE="7d"

# OpenAI
OPENAI_API_KEY="sk-..."

# AWS S3
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."

# Redis
REDIS_HOST="localhost"
REDIS_PORT=6379

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="..."
SMTP_PASS="..."

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload

# Building
npm run build            # Compile TypeScript to JavaScript
npm start                # Start production server

# Database
npm run prisma:generate  # Generate Prisma Client
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open Prisma Studio (GUI)
npm run seed             # Seed database with initial data

# Testing
npm test                 # Run all tests
npm run test:watch       # Run tests in watch mode

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run format           # Format code with Prettier
```

### Database Migrations

```bash
# Create a new migration
npx prisma migrate dev --name migration_name

# Apply migrations
npx prisma migrate deploy

# Reset database (WARNING: deletes all data)
npx prisma migrate reset
```

### Adding New Endpoints

1. **Create controller** in `src/controllers/`
2. **Define routes** in `src/routes/`
3. **Add validation** using express-validator
4. **Import routes** in `src/server.ts`
5. **Add tests** in `tests/`

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- auth.test.ts

# Watch mode
npm run test:watch
```

### Test Structure

```
tests/
├── unit/               # Unit tests
│   ├── controllers/
│   ├── services/
│   └── utils/
├── integration/        # Integration tests
│   └── api/
└── e2e/               # End-to-end tests
```

## 🔒 Security Features

- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - Prevent abuse
- **JWT Authentication** - Secure user sessions
- **Password Hashing** - Bcrypt with salt rounds
- **Input Validation** - Express-validator
- **SQL Injection Prevention** - Prisma ORM
- **XSS Protection** - Helmet CSP

## 📊 Logging

Logs are stored in the `logs/` directory:

- `error.log` - Error logs only
- `combined.log` - All logs

Log levels: `error`, `warn`, `info`, `http`, `debug`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
NODE_ENV=production npm start
```

### Deployment Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Configure production database
- [ ] Set secure `JWT_SECRET`
- [ ] Configure Redis for production
- [ ] Set up proper CORS origins
- [ ] Enable HTTPS
- [ ] Set up monitoring (Sentry, etc.)
- [ ] Configure log rotation
- [ ] Set up automated backups
- [ ] Configure rate limits appropriately

### Recommended Platforms

- **Heroku** - Easy deployment with add-ons
- **Railway** - Modern deployment platform
- **AWS EC2** - Full control
- **DigitalOcean** - Simple VPS hosting
- **Render** - Auto-deploy from Git

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 API Rate Limits

- **Default**: 100 requests per 15 minutes
- **Auth endpoints**: 5 requests per 15 minutes
- **AI endpoints**: 20 requests per hour

## 🐛 Troubleshooting

### Database Connection Issues

```bash
# Check database connection
npx prisma db pull

# Regenerate Prisma Client
npx prisma generate
```

### Port Already in Use

```bash
# Kill process on port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Kill process on port 5000 (Linux/Mac)
lsof -ti:5000 | xargs kill -9
```

### Redis Connection Issues

Make sure Redis is running:
```bash
redis-cli ping
# Should return: PONG
```

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/VihiThejan/Career-Launchpad/issues)
- **Documentation**: See project root `/DOCUMENTATION_INDEX.md`

## 📄 License

MIT License - see LICENSE file for details

---

**Built with ❤️ for Career Launchpad**
