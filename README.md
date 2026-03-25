# CryptoVerse Platform

A premium Web3/SaaS landing page for a crypto education and trading simulation platform, built with modern web technologies.

## 🚀 Overview

CryptoVerse is a platform designed for learning cryptocurrency trading, including memecoins and everything related to crypto education. The interface features a dark, minimal SaaS-style layout with simulated dashboards, glassmorphic cards, custom micro-animations, and real-time market data components.

## 🧱 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

*Note: Built completely from scratch. No heavy UI component libraries like shadcn/ui or Radix were used—only raw accessible React implementation with Tailwind utility classes.*

## 📂 Project Structure

```text
cryptoverse/
├── app/
│   ├── layout.tsx         # Root layout with Grid & Blur logic
│   ├── page.tsx           # Assembly of all Landing Page sections 
│   ├── globals.css        # Tailwind directives and core variables
├── components/
│   ├── layout/            # Navbar.tsx, Footer.tsx
│   ├── landing/           # All individual page sections (Hero, DashboardPreview, etc.)
│   ├── ui/                # Reusable base logic (Button.tsx, Card.tsx, Badge.tsx)
├── lib/
│   ├── mockData.ts        # Modular data structures for features, FAQs, content
│   ├── utils.ts           # Class merge utilities (`cn()`)
```

## 🛠️ Getting Started

To run the application locally on your machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ☁️ Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

**Method 1: Deploy with Git (Recommended)**
1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and click "Add New Project".
3. Import your repository. Vercel automatically detects Next.js configurations.
4. Click "Deploy".

**Method 2: Deploy with Vercel CLI**
In your terminal, you can easily trigger a build directly to Vercel without committing to GitHub:
```bash
npx vercel --prod
```
