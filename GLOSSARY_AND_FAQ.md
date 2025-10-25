# Project Glossary & FAQ

## Table of Contents
1. [Technical Glossary](#technical-glossary)
2. [Project-Specific Terms](#project-specific-terms)
3. [Frequently Asked Questions](#frequently-asked-questions)
4. [Troubleshooting Guide](#troubleshooting-guide)

---

## Technical Glossary

### A

**API (Application Programming Interface)**  
A set of protocols and tools for building software applications. In this project, we use REST APIs for client-server communication.

**ATS (Applicant Tracking System)**  
Software used by employers to manage job applications. Our resume builder optimizes for ATS compatibility.

**Authentication**  
The process of verifying user identity (who you are).

**Authorization**  
The process of verifying user permissions (what you can do).

### C

**CDN (Content Delivery Network)**  
A distributed network of servers that delivers web content based on geographic location. Vercel provides this automatically.

**CI/CD (Continuous Integration/Continuous Deployment)**  
Automated process of testing and deploying code changes.

**CORS (Cross-Origin Resource Sharing)**  
Security feature that controls which domains can access your API.

**CSP (Content Security Policy)**  
Security standard to prevent XSS attacks and other code injection attacks.

**CRUD (Create, Read, Update, Delete)**  
The four basic operations for persistent storage.

### D

**DAU/MAU (Daily/Monthly Active Users)**  
Metrics tracking user engagement.

**DX (Developer Experience)**  
The experience developers have while using a framework or tool.

### E

**E2E Testing (End-to-End Testing)**  
Testing complete user flows from start to finish.

**Edge Functions**  
Server-side code that runs at edge locations close to users for better performance.

### I

**ISR (Incremental Static Regeneration)**  
Next.js feature that updates static pages after deployment without rebuilding the entire site.

### J

**JWT (JSON Web Token)**  
Secure way to transmit information between parties as a JSON object.

### O

**OAuth**  
Open standard for authorization, used for "Sign in with Google/LinkedIn" features.

**ORM (Object-Relational Mapping)**  
Technology that converts data between incompatible systems. We use Prisma.

### P

**Prisma**  
Modern database toolkit providing type-safe database access.

**Progressive Web App (PWA)**  
Web app that uses modern capabilities to deliver app-like experience.

### R

**RBAC (Role-Based Access Control)**  
Security approach that restricts system access based on user roles.

**RSC (React Server Components)**  
React components that render on the server, reducing client-side JavaScript.

### S

**SEO (Search Engine Optimization)**  
Practice of increasing website visibility in search engines.

**SSR (Server-Side Rendering)**  
Rendering web pages on the server instead of the client.

**SSG (Static Site Generation)**  
Pre-rendering pages at build time.

### T

**TypeScript**  
Strongly typed superset of JavaScript.

**tRPC**  
End-to-end typesafe APIs without code generation.

### V

**Vector Database**  
Database optimized for storing and querying vector embeddings (used in AI features).

---

## Project-Specific Terms

### Career Path
A personalized roadmap showing steps from current position to target career goal, including skills to learn, certifications to obtain, and experience to gain.

### Career Assessment
Comprehensive evaluation of user's skills, interests, personality, and goals to determine suitable career paths.

### Learning Roadmap
Structured sequence of courses, resources, and milestones to develop specific skills or reach career goals.

### Skills Gap Analysis
Comparison between user's current skills and skills required for target role, identifying areas for development.

### Job Matching Score
Algorithm-generated score indicating how well a job posting matches user's profile, skills, and career goals.

### Profile Completion Score
Percentage indicating how much of user's profile is filled out, encouraging comprehensive profiles for better recommendations.

### Mentor Match
AI-powered system connecting users with mentors based on career goals, industry, and experience level.

### Career Trajectory
Visual representation of user's career progression over time, including roles, skills gained, and milestones achieved.

---

## Frequently Asked Questions

### Development

**Q: What Node.js version should I use?**  
A: Node.js 20.x or higher is recommended. Check with `node --version`.

**Q: How do I reset my local database?**  
A: Run `npx prisma migrate reset` - WARNING: This deletes all data.

**Q: The development server won't start. What should I do?**  
A: Check:
1. Port 3000 is not already in use
2. All dependencies are installed (`npm install`)
3. Environment variables are set correctly
4. No syntax errors in your code

**Q: How do I add a new dependency?**  
A: Use `npm install <package-name>` and commit the updated `package.json` and `package-lock.json`.

**Q: Should I use `npm` or `yarn`?**  
A: Stick with `npm` for consistency across the team.

### Database

**Q: How do I create a new database migration?**  
A: After modifying `schema.prisma`, run:
```bash
npx prisma migrate dev --name descriptive_migration_name
```

**Q: How do I view my database data?**  
A: Use Prisma Studio: `npx prisma studio`

**Q: What if migrations fail?**  
A: Check:
1. Database connection is working
2. No conflicting migrations
3. Schema syntax is correct
4. Use `npx prisma migrate reset` as last resort (deletes data)

### Authentication

**Q: How do I test OAuth locally?**  
A: Set up OAuth callback URLs in Google/LinkedIn console to include `http://localhost:3000`.

**Q: Users can't log in after deployment. Why?**  
A: Check:
1. `NEXTAUTH_URL` environment variable is set correctly
2. `NEXTAUTH_SECRET` is set in production
3. OAuth callback URLs include production domain

### Deployment

**Q: How do I deploy to production?**  
A: Push to `main` branch. Vercel automatically deploys. Ensure:
1. All environment variables are set in Vercel
2. Database is accessible from Vercel
3. Build succeeds locally first

**Q: Preview deployments aren't working. Why?**  
A: Check:
1. Vercel GitHub integration is enabled
2. Build logs for errors
3. Environment variables are set for preview environments

### AI Integration

**Q: OpenAI API calls are failing. What should I check?**  
A: Verify:
1. `OPENAI_API_KEY` is set correctly
2. API key has sufficient credits
3. Rate limits aren't exceeded
4. Network connection is stable

**Q: AI responses are inconsistent. How can I improve them?**  
A: Consider:
1. More specific prompts
2. Adding examples in prompts
3. Temperature settings
4. Using GPT-4 instead of GPT-3.5

### Performance

**Q: Pages are loading slowly. How can I optimize?**  
A: Check:
1. Use Next.js Image component
2. Implement proper caching
3. Reduce bundle size
4. Use SSR/SSG where appropriate
5. Check database query performance

**Q: How do I analyze bundle size?**  
A: Run `npm run build` and check the output, or use:
```bash
npm install -D @next/bundle-analyzer
```

### Testing

**Q: How do I run tests?**  
A: Use `npm test` for unit tests, `npm run test:e2e` for end-to-end tests (when implemented).

**Q: How much test coverage is required?**  
A: Aim for 80% coverage on business logic, 100% on critical paths like authentication and payment processing.

---

## Troubleshooting Guide

### Common Issues

#### Issue: "Module not found" errors

**Symptoms:** Import statements fail, TypeScript errors

**Solutions:**
1. Run `npm install` to ensure all dependencies are installed
2. Check import paths are correct
3. Verify `tsconfig.json` path aliases
4. Restart TypeScript server in VS Code (Cmd/Ctrl + Shift + P > "TypeScript: Restart TS Server")

---

#### Issue: Database connection fails

**Symptoms:** "Can't reach database server" error

**Solutions:**
1. Check `DATABASE_URL` in `.env.local`
2. Ensure database server is running
3. Verify database credentials
4. Check firewall settings
5. Test connection: `npx prisma db pull`

---

#### Issue: Build fails in production but works locally

**Symptoms:** Vercel deployment fails, local build succeeds

**Solutions:**
1. Check all environment variables are set in Vercel
2. Run `npm run build` locally to catch issues
3. Check for case-sensitive file path issues
4. Review Vercel build logs
5. Ensure all dependencies are in `dependencies`, not `devDependencies`

---

#### Issue: Styles not applying

**Symptoms:** Components render without styling

**Solutions:**
1. Check Tailwind CSS is configured correctly
2. Ensure `globals.css` is imported in `layout.tsx`
3. Verify class names are correct
4. Check for CSS specificity conflicts
5. Clear browser cache
6. Restart dev server

---

#### Issue: API routes return 404

**Symptoms:** API calls fail with 404 error

**Solutions:**
1. Verify API route file naming (must be `route.ts`)
2. Check file is in correct `app/api/` directory
3. Ensure HTTP method is exported (GET, POST, etc.)
4. Check for typos in API path
5. Restart dev server

---

#### Issue: Prisma Client out of sync

**Symptoms:** TypeScript errors about Prisma Client types

**Solutions:**
1. Run `npx prisma generate` to regenerate client
2. Restart TypeScript server
3. Check `schema.prisma` for syntax errors
4. Delete `node_modules/.prisma` and regenerate

---

#### Issue: NextAuth session not persisting

**Symptoms:** Users logged out on page refresh

**Solutions:**
1. Check `NEXTAUTH_SECRET` is set
2. Verify session strategy in NextAuth config
3. Check cookie settings (secure, sameSite)
4. Clear browser cookies
5. Check database session table

---

#### Issue: High OpenAI API costs

**Symptoms:** Unexpected charges

**Solutions:**
1. Implement response caching
2. Add rate limiting
3. Use GPT-3.5 instead of GPT-4 where appropriate
4. Reduce max_tokens in API calls
5. Monitor usage in OpenAI dashboard
6. Set up billing alerts

---

#### Issue: Slow query performance

**Symptoms:** API responses take too long

**Solutions:**
1. Add database indexes
2. Use `prisma.$queryRaw` for complex queries
3. Implement pagination
4. Add Redis caching layer
5. Use database query explain plans
6. Consider database read replicas

---

### Debug Checklist

Before asking for help, have you:

- [ ] Checked the console for errors?
- [ ] Verified environment variables are set?
- [ ] Run `npm install` recently?
- [ ] Restarted the dev server?
- [ ] Checked the documentation?
- [ ] Searched existing issues on GitHub?
- [ ] Tried clearing cache/cookies?
- [ ] Tested in incognito mode?
- [ ] Checked the network tab for failed requests?
- [ ] Reviewed recent code changes?

---

### Getting Help

#### Internal Resources
1. Check this documentation first
2. Review code comments
3. Check Slack/Discord channels
4. Ask team members in daily standup

#### External Resources
1. **Next.js Docs**: https://nextjs.org/docs
2. **Prisma Docs**: https://www.prisma.io/docs
3. **TypeScript Handbook**: https://www.typescriptlang.org/docs/handbook/
4. **Stack Overflow**: Tag questions with relevant technologies
5. **GitHub Discussions**: For feature requests and questions

#### Reporting Bugs
When reporting bugs, include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Error messages/screenshots
- Environment (OS, Node version, browser)
- Relevant code snippets

---

## Best Practices Quick Reference

### Code Quality
- Use TypeScript strict mode
- Write descriptive variable names
- Keep functions small and focused
- Comment complex logic
- Use async/await over promises

### Git Commits
- Write clear commit messages
- Use conventional commit format
- Commit frequently
- Keep commits focused on single changes
- Don't commit secrets or `.env` files

### Performance
- Use React Server Components when possible
- Implement proper loading states
- Optimize images with Next.js Image
- Minimize client-side JavaScript
- Use database indexes

### Security
- Never commit secrets
- Validate all user inputs
- Sanitize data before display
- Use parameterized queries (Prisma handles this)
- Keep dependencies updated
- Implement proper CORS

### Testing
- Test critical user flows
- Write tests before fixing bugs
- Use meaningful test descriptions
- Mock external services
- Test edge cases

---

**Document Version**: 1.0  
**Last Updated**: October 25, 2025  
**Maintained By**: Development Team
