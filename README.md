# AI Analytics Dashboard

A modern, production-grade analytics dashboard built with Next.js 15, TypeScript, and AI-powered insights.

---

## Tech Stack

**Core**

- [Next.js 15](https://nextjs.org) — App Router, Server Components
- [TypeScript](https://typescriptlang.org) — strict mode
- [React 19](https://react.dev)

**UI & Styling**

- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- [shadcn/ui](https://ui.shadcn.com) — accessible component library
- [Storybook 8](https://storybook.js.org) — component documentation

**Data & State**

- [TanStack Table](https://tanstack.com/table) — headless data table
- [Recharts](https://recharts.org) — composable chart library
- [Zustand](https://zustand-demo.pmnd.rs) — client state management
- [TanStack Query](https://tanstack.com/query) — server state management
- [Zod](https://zod.dev) — schema validation

**Auth**

- [NextAuth v5](https://authjs.dev) — JWT-based authentication

**Testing**

- [Vitest](https://vitest.dev) — unit testing
- [Testing Library](https://testing-library.com) — component testing
- [Playwright](https://playwright.dev) — E2E testing

**Tooling**

- ESLint + Prettier — code quality
- Husky + lint-staged — pre-commit hooks
- GitHub Actions — CI/CD pipeline

---

## Features

- **Authentication** — secure login with JWT session management and route protection
- **Overview Dashboard** — metric cards, area charts, top pages table
- **Analytics Page** — sortable, filterable, paginated data table with TanStack Table
- **Design System** — custom CSS token system, dark/light mode, Storybook documentation
- **CI/CD** — automated lint and type-check on every push

---

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

### Environment Variables

```bash
AUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
```

---

## Scripts

```bash
npm run dev          # development server
npm run build        # production build
npm run lint         # ESLint
npm test             # unit tests
npm run test:watch   # watch mode
npm run test:coverage # coverage report
npm run storybook    # component explorer
```

---

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # login page
│   └── (dashboard)/     # protected dashboard pages
├── components/
│   ├── ui/              # shadcn base components
│   └── features/        # domain-specific components
├── lib/
│   ├── auth.ts          # NextAuth config
│   ├── mock-data.ts     # mock data
│   └── utils.ts         # helpers
├── tests/
│   ├── unit/            # Vitest unit tests
│   └── e2e/             # Playwright E2E tests
└── types/               # global TypeScript types
```
