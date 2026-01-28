# Qvault

An educational platform connecting students and teachers with resources for exam preparation and learning support.

## Overview

Qvault is a modern web application built with Next.js that provides a comprehensive platform for:
- **Students**: Access past papers, bookmark resources, participate in interactive activities, and chat with peers
- **Teachers**: Upload educational materials, manage student interactions, and monitor engagement through dashboards
- **Public Users**: Browse subjects, explore features, and learn more about the platform

## Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **UI Components**: Radix UI with custom component library
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Utilities**: clsx, date-fns, cmdk
- **Analytics**: Vercel Analytics

### Backend & Authentication
- **Database & Auth**: [Supabase](https://supabase.com/)
  - PostgreSQL database
  - Row-level security (RLS)
  - Built-in authentication
- **Server-Side Client**: `@supabase/ssr` for middleware and server components
- **Middleware**: Custom authentication middleware

## Project Structure

```
├── app/                          # Next.js app router
│   ├── page.tsx                  # Home/landing page
│   ├── layout.tsx                # Root layout
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── resources/                # Resources page
│   ├── auth/                     # Authentication pages
│   │   ├── login/
│   │   ├── sign-up/
│   │   ├── error/
│   │   └── sign-up-success/
│   ├── student/                  # Student dashboard & features
│   │   ├── dashboard/
│   │   ├── activities/
│   │   ├── bookmarks/
│   │   ├── chat/
│   │   └── past-papers/
│   └── teacher/                  # Teacher dashboard & features
│       ├── dashboard/
│       ├── messages/
│       └── upload/
├── components/                   # Reusable React components
│   ├── ui/                       # Shadcn/ui-inspired components
│   ├── landing/                  # Landing page components
│   ├── student/                  # Student-specific components
│   ├── teacher/                  # Teacher-specific components
│   └── theme-provider.tsx        # Theme configuration
├── lib/                          # Utility functions & helpers
│   ├── utils.ts                  # Common utilities
│   └── supabase/                 # Supabase integration
│       ├── client.ts             # Client-side Supabase
│       ├── server.ts             # Server-side Supabase
│       └── middleware.ts         # Auth middleware
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Mobile detection
│   └── use-toast.ts             # Toast notifications
├── public/                       # Static assets
├── scripts/                      # Database & utility scripts
│   └── 001_create_schema.sql    # Initial schema setup
├── styles/                       # Global styles
├── middleware.ts                 # Next.js middleware
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies & scripts
```

## Getting Started

### Prerequisites
- Node.js 18+ or higher
- pnpm (or npm/yarn)
- Supabase account

### Environment Setup

Create a `.env.local` file in the project root:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Set up the database:
```bash
# Run the schema initialization script in Supabase SQL Editor
# File: scripts/001_create_schema.sql
```

### Development

Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
pnpm start
```

## Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks

## Features

### Public
- Landing page with hero section and feature showcase
- Subject browsing
- About and contact pages
- Resource discovery

### Student Portal
- Personalized dashboard
- Past papers repository
- Activity-based learning
- Bookmark management
- Peer chat functionality

### Teacher Portal
- Content management dashboard
- Upload and organize educational materials
- Student message management
- Progress tracking

### Authentication
- Email/password sign-up and login
- Secure session management
- Role-based access control
- Post-signup success page

## Database Schema

The project uses PostgreSQL with Supabase. Initialize the database using the provided SQL schema:

```sql
-- See: scripts/001_create_schema.sql
```

Key tables include:
- Users (with authentication)
- Student profiles
- Teacher profiles
- Resources/Past papers
- Bookmarks
- Messages/Chat

## Styling

The project uses Tailwind CSS with a custom component library based on Radix UI primitives. Components are located in `components/ui/` and follow a consistent design pattern.

### Theme Configuration
- Dark/light mode support via `theme-provider.tsx`
- Tailwind configuration in `tailwind.config.ts`
- CSS variables for theming

## Authentication & Security

- Supabase handles user authentication
- Row-Level Security (RLS) enforces data privacy
- Custom middleware in `middleware.ts` protects routes
- Server-side Supabase client for secure operations
- Client-side Supabase for user-initiated actions

## Deployment

Deploy to Vercel (recommended for Next.js):

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy with a single click

## Contributing

[Add your contribution guidelines here]

## License

[Add your license information here]

## Support

For issues or questions, please [create an issue or contact support].

---

**Built with ❤️ for education**
