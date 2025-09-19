
# SaasLMS

Converso - SaasLMS is a modern, real-time AI teaching platform built with Next.js, React, TypeScript, and Tailwind CSS. It allows users to create, customize, and interact with AI-powered learning companions across a variety of subjects, with secure authentication and subscription-based access.

---

## 🌟 Key Features

### Authentication & Security

- Secure authentication powered by Clerk
- Protected routes and middleware
- Social sign-in options
- User role management

### AI Learning Companions

- Create and customize AI teaching assistants
- Subject-specific expertise
- Interactive learning sessions
- Voice interaction capabilities
- Real-time responses

### Subscription System

- Flexible pricing tiers
- Feature-based access levels
- Integrated payment processing
- Subscription management

### Modern UI/UX

- Responsive design with Tailwind CSS
- Custom UI components with Shadcn UI
- Interactive animations
- Mobile-first approach
- Dark/light mode support

---

## 🚀 Getting Started

Follow these steps to get started:

1. **Install dependencies:**

```bash
npm install
```

1. **Set up environment variables:**

```bash
# .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
```

1. **Run the development server:**

```bash
npm run dev
```

1. **Access the application:**

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 📁 Project Structure

```plaintext
saaslms/
├── app/                   # Next.js App Router pages
│   ├── companions/        # AI companions features
│   │   ├── new/          # Companion creation form
│   │   ├── [id]/         # Individual companion view
│   │   └── page.tsx      # Companions gallery
│   ├── my-journey/       # Learning progress
│   ├── sign-in/          # Authentication
│   ├── subscription/     # Pricing plans
│   ├── layout.tsx        # Root layout with auth
│   └── page.tsx          # Landing page
├── components/           # Reusable components
│   ├── ui/              # Shadcn UI components
│   └── ...              # Custom components
├── constants/           # Static data & configs
├── lib/                # Utility functions
├── public/             # Static assets
│   ├── icons/         # UI icons
│   └── images/        # Content images
├── types/             # TypeScript definitions
└── ...               # Config files

---

## 🌐 Routes & Features

| Route | Description | Access | Components |
|-------|-------------|---------|------------|
| `/` | Landing page with featured companions | Public | `CTA`, `CompanionList` |
| `/companions` | AI companions gallery | Protected | `CompanionCard`, `NavItems` |
| `/companions/new` | Create custom companions | Protected | `CompanionForm` |
| `/companions/[id]` | Interactive learning sessions | Protected | `Chat`, `VoiceControl` |
| `/my-journey` | Learning progress dashboard | Protected | `Progress`, `History` |
| `/sign-in` | Clerk authentication | Public | `SignIn`, `SignUp` |
| `/subscription` | Subscription plans | Protected | `PricingCards` |

### Route Details

- **/** - Landing page featuring:
  - Highlighted learning companions
  - Interactive demos
  - Call-to-action sections
  - Features overview

- **/companions** - Main companion gallery:
  - Filterable companion list
  - Subject categories
  - Search functionality
  - Quick-access actions

- **/companions/new** - Companion creation with:
  - Customization options
  - Subject selection
  - Personality settings
  - Teaching style configuration

- **/companions/[id]** - Learning session featuring:
  - Real-time interactions
  - Voice controls
  - Session history
  - Learning progress

- **/my-journey** - Personal dashboard with:
  - Learning statistics
  - Session history
  - Achievement tracking
  - Progress visualization

- **/sign-in** - Authentication powered by:
  - Clerk integration
  - Social sign-in options
  - Secure authentication
  - User management

- **/subscription** - Subscription management:
  - Pricing tiers
  - Feature comparison
  - Payment processing
  - Plan management

---

## ⚙️ Configuration & Environment

- **Next.js**: Configured via `next.config.ts` (default settings, can be extended)
- **TypeScript**: Strict mode, path aliases (`@/*`)
- **Tailwind CSS**: Custom theme in `app/globals.css`, config in `postcss.config.mjs`
- **ESLint**: Next.js and TypeScript rules in `eslint.config.mjs`
- **Fonts**: Google Fonts (`Bricolage Grotesque`)
- **Component Library**: Radix UI, custom UI components

---

## 📦 Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint

---

## 🛠️ Tech Stack

### Core
- Next.js 14 with App Router
- React 19
- TypeScript 5
- Tailwind CSS 3

### Authentication & Security
- Clerk Authentication
- Protected routes
- Middleware integration
- Social sign-in support

### UI Components
- Shadcn UI
- Radix UI primitives
- Custom components
- Responsive design system

### Forms & Validation
- React Hook Form
- Zod validation
- Server actions
- Type-safe schemas

### Development Tools
- ESLint
- PostCSS
- Prettier
- TypeScript strict mode

---

## 📄 License

MIT

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [React Hook Form](https://react-hook-form.com)

