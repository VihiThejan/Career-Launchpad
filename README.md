# Career Launchpad - Frontend

AI-Powered IT Career Development Platform built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Career-Launchpad/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration values.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

See [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) for detailed information about the project organization.

```
frontend/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Third-party configurations
│   ├── services/       # API services
│   ├── store/          # State management
│   ├── types/          # TypeScript types
│   ├── utils/          # Utility functions
│   ├── constants/      # Constants
│   └── styles/         # Global styles
└── ...config files
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) or Redux Toolkit
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier

# Testing
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run E2E tests
npm run test:coverage # Generate coverage report

# Type Checking
npm run type-check   # Run TypeScript compiler
```

## 🎨 Component Library

The project includes a set of reusable UI components:

- **Button**: Multiple variants and sizes
- **Input**: Text inputs with icons and validation
- **Card**: Flexible card component
- **Modal**: Dialog/modal windows
- **Toast**: Notification system
- **Select**: Dropdown selection
- **Tabs**: Tab navigation
- **Badge**: Status badges
- And more...

## 🔐 Authentication

The application supports multiple authentication methods:

- Email/Password authentication
- OAuth (Google, LinkedIn)
- JWT token-based sessions
- Protected routes
- Role-based access control

## 📱 Features

### Core Features
- ✅ User authentication and authorization
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme support
- ✅ Internationalization (i18n) ready
- ✅ Progressive Web App (PWA) capabilities
- ✅ SEO optimized
- ✅ Accessible (WCAG 2.1 AA compliant)

### User Features
- 📊 Personal dashboard with analytics
- 🎓 Course catalog and learning paths
- 📝 Skills assessment and gap analysis
- 💼 Job board and application tracking
- 👥 Mentorship and networking
- 🤖 AI-powered career recommendations
- 📄 Resume builder and analyzer

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Generate coverage
npm run test:coverage
```

## 📊 Code Quality

- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **Husky**: Git hooks for pre-commit checks

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Docker

```bash
# Build image
docker build -t career-launchpad-frontend .

# Run container
docker run -p 3000:3000 career-launchpad-frontend
```

## 🔧 Configuration

### Environment Variables

See `.env.example` for all available environment variables.

Key variables:
- `NEXT_PUBLIC_API_URL`: Backend API URL
- `NEXTAUTH_SECRET`: NextAuth secret key
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `LINKEDIN_CLIENT_ID`: LinkedIn OAuth client ID

### Tailwind CSS

Customize your theme in `tailwind.config.ts`

## 📝 Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow the existing component structure
- Write meaningful variable and function names
- Add JSDoc comments for complex functions
- Use Prettier for consistent formatting

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🗺️ Roadmap

See [FRONTEND_CHECKLIST.md](../FRONTEND_CHECKLIST.md) for the complete development roadmap.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

---

Built with ❤️ by the Career Launchpad Team
