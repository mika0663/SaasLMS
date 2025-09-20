
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


## What's new / Important changes

- Clerk authentication: the sign-in page is implemented as a catch-all route at `app/sign-in/[[...sign-in]]/page.tsx` to satisfy Clerk's requirements for the `SignIn` component.
- Middleware: `middleware.ts` now uses Clerk's server middleware and explicitly allows public routes (e.g., `/`, `/sign-in(.*)` and webhook endpoints). This prevents protected middleware from blocking authentication pages.
- Client-side search & filters: `components/SearchInput.tsx` and `components/SubjectFilters.tsx` update the URL query parameters (topic & subject) and push navigation using `next/navigation`'s `router.push(..., { scroll: false })`. Both components initialize their local state from `useSearchParams()` so the UI stays in sync with the URL.
- Companion routing fix: `components/CompanionCard.tsx` links to `/companions/[id]` (dynamic route). Ensure `app/companions/[id]/page.tsx` exists to render companion sessions.

---

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Add environment variables (create `.env.local`):

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret

# Add any other keys your app depends on (Stripe, etc.)
```

3. Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

---

## Key Files & Behavior

- `app/sign-in/[[...sign-in]]/page.tsx` — Clerk `SignIn` mounted in a catch-all route. This prevents routing errors Clerk warns about when the component is mounted in a non-catch-all.
- `middleware.ts` — Uses Clerk server middleware; `publicRoutes` allow access to sign-in and webhook endpoints. The matcher is configured to avoid Next static assets.
- `components/SearchInput.tsx` — Client component that:
  - Reads `topic` from URL via `useSearchParams()`
  - Keeps local input state in sync with URL
  - Pushes URL updates with a debounce (so typing doesn't flood history)
  - Removes the `topic` query param when the input is cleared
- `components/SubjectFilters.tsx` — Similar behavior for `subject` query key; updates the URL when selection changes. Uses `Select` from local UI primitives.
- `components/CompanionCard.tsx` — Links to `/companions/${id}`; ensure dynamic page exists to avoid 404s.
- `app/companions/page.tsx` — Server component that:
  - Uses `authGuard()` (server-side) to protect the route
  - Reads `searchParams` for `subject` and `topic` and calls `getAllCompanions({ subject, topic })` to fetch filtered results

---

## Routing and Auth Notes

- The app uses Clerk for auth; server-side `authGuard()` redirects unauthenticated users to `/sign-in`.
- The sign-in route is public and mounted at a catch-all to support Clerk's `SignIn` component.
- Middleware excludes `_next/static`/images and `favicon.ico` from matching so static assets aren't processed by the middleware.



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


## Dev Notes and Troubleshooting

- If clicking a companion's `Launch Lesson` results in 404, confirm `app/companions/[id]/page.tsx` exists and the Link is `href={`/companions/${id}`}`.
- If Clerk SignIn throws errors about routing, confirm the catch-all `[[...sign-in]]` route exists and middleware allows `/sign-in(.*)`.
- If client-side filtering/searching doesn't refresh results:
  - Ensure `app/companions/page.tsx` reads `searchParams` and forwards `subject` and `topic` into the data fetch used by the Server Component. Example:

```ts
const subject = searchParams.subject || '';
const topic = searchParams.topic || '';
const companions = await getAllCompanions({ subject, topic });
```

- Tailwind: if styling on UI primitives isn't applied, confirm `tailwind.config.js` includes `app/**/*` and `components/**/*` in `content`.

---

## Scripts

- `npm run dev` — run dev server
- `npm run build` — build production
- `npm run start` — start built app

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

## Next Steps / Suggestions

- Add server-side tests for protected routes and middleware behavior.
- Add unit tests for `SearchInput` and `SubjectFilters` to validate URL sync behavior.
- Add e2e tests for the sign-in flow and companion session navigation.

---

## License

MIT
  - Social sign-in options

  - Secure authentication
