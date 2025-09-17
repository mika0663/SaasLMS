
# SaasLMS

Converso - SaasLMS is a modern, real-time AI teaching platform built with Next.js, React, TypeScript, and Tailwind CSS. It allows users to create, customize, and interact with AI-powered learning companions across a variety of subjects.

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure

```
saaslms/
├── app/
│   ├── companions/
│   │   ├── new/           # Companion builder form
│   │   ├── [id]/          # Individual companion session page
│   │   └── page.tsx       # Companions library
│   ├── my-journey/        # User profile/journey
│   ├── sign-in/           # Sign-in page
│   ├── subscription/      # Subscription info
│   ├── layout.tsx         # Root layout with Navbar
│   └── page.tsx           # Home page
├── components/            # UI and feature components
├── constants/             # Static data (subjects, colors, etc.)
├── lib/                   # Utility functions
├── public/                # Static assets (icons, images)
├── types/                 # TypeScript types
├── ...
```

---

## 🌐 Main Routes & Features

| Route                        | Description                                                      |
|------------------------------|------------------------------------------------------------------|
| `/`                          | Home page with featured companions and recent sessions           |
| `/companions`                | Companions library: browse all available companions              |
| `/companions/new`            | Build a new companion: interactive form for customization        |
| `/companions/[id]`           | View a companion's session: details and learning session         |
| `/my-journey`                | User profile/journey: track your learning progress               |
| `/sign-in`                   | Sign-in page: user authentication                               |
| `/subscription`              | Subscription info: view and manage your subscription             |

### Route Details

- **/**: The landing page. Highlights popular companions and recent learning sessions. Uses `CompanionCard`, `CompanionList`, and `CTA` components.
- **/companions**: Displays a list of all companions. Each companion links to its own session page.
- **/companions/new**: A form-driven page to create and personalize a new learning companion. Uses `CompanionForm`.
- **/companions/[id]**: Dynamic route for each companion's session. Displays session details and interactive features.
- **/my-journey**: User's profile and learning journey overview.
- **/sign-in**: Authentication page for users.
- **/subscription**: Information and management for user subscriptions.

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

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Zod (form validation)
- React Hook Form
- Radix UI
- ESLint

---

## 📄 License

MIT

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Vercel Deployment](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

