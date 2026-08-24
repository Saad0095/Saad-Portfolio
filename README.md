# 🚀 Muhammad Saad Bin Khalid — Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live_Demo-saad.devphic.com-10b981?style=for-the-badge&logo=vercel)](https://saad.devphic.com/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Welcome to the official portfolio repository of **Muhammad Saad Bin Khalid** — Full-Stack Developer & SaaS Engineer based in Karachi, Pakistan. Built with React, TypeScript, Tailwind CSS, Framer Motion, and Resend Serverless API.

---

## 🌐 Live Website

🔗 **[https://saad.devphic.com/](https://saad.devphic.com/)**

---

## ✨ Key Features

- ⚡ **Editorial Hero & Typewriter Ticker**: Smooth readiness entrance animations using Framer Motion and rotating Typewriter headings.
- 💼 **Featured Project Showcase**: Interactive display for **CleanMeets CRM** (RBAC, Socket.IO), **SchoolSync SaaS Platform**, **MeetsNex**, and **Devphic Lead Scraper**.
- ✉️ **Serverless Resend Contact Form**: Powered by Vercel Serverless Functions (`/api/contact.ts`) and Vite dev API middleware for safe, instant email delivery to Gmail.
- ❓ **Interactive FAQ Section**: Accordion UI optimized for visitors and AI answer engines.
- 🔍 **Complete SEO & Structured Data**: Built-in Schema.org JSON-LD (`Person`, `WebSite`, `ProfilePage`, `SoftwareApplication`), canonical URLs, `sitemap.xml`, `robots.txt`, Open Graph, and Twitter Cards.
- 🎨 **Sleek Dark Design**: Modern glassmorphism, curated dark palette (`#09090b`), custom cursor, and typography powered by Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*).
- 📱 **100% Mobile & Responsive**: Optimized typography and layouts across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack & Tooling

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript, JavaScript (ES6+) |
| **Styling & UI** | Tailwind CSS v4, Framer Motion, Lucide Icons, React Icons |
| **Backend & APIs** | Vercel Serverless Functions (`api/contact.ts`), Resend SDK |
| **Notifications** | React Toastify |
| **Tooling & Build** | Vite, PostCSS, Git |
| **Deployment** | Vercel |

---

## 📁 Project Architecture

```text
Portfolio Website/
├── api/
│   └── contact.ts               # Vercel Serverless Function (Resend Email Dispatch)
├── public/
│   ├── favicon.png              # Site Favicon
│   ├── og-image.jpg             # Open Graph Social Preview Image
│   ├── robots.txt               # Search Engine Crawler Directives
│   └── sitemap.xml              # XML Sitemap
├── src/
│   ├── assets/                  # Project Screenshots & Resume PDF
│   ├── components/
│   │   ├── ui/
│   │   │   ├── hero-04.tsx      # Main Hero Component
│   │   │   └── typewriter.tsx   # Reusable Typewriter Component
│   │   ├── About.tsx            # Background & Experience
│   │   ├── CapabilityStrip.tsx  # Marquee Capability Strip
│   │   ├── Contact.tsx          # Contact Section Container
│   │   ├── ContactInfo.tsx      # Direct Touchpoints (WhatsApp, Phone, Email)
│   │   ├── FAQ.tsx              # Interactive FAQ Accordion
│   │   ├── Footer.tsx           # Footer Links & Copyright
│   │   ├── Form.tsx             # Contact Form Component
│   │   ├── Hero.tsx             # Hero Wrapper
│   │   ├── LoadingScreen.tsx    # Entrance Loading Overlay
│   │   ├── Navbar.tsx           # Responsive Header Navigation
│   │   ├── Philosophy.tsx       # Engineering Principles
│   │   ├── Projects.tsx         # Featured Work Cards
│   │   ├── Skills.tsx           # Tech Stack & Category Filter
│   │   └── Testimonials.tsx     # Client Recommendations
│   ├── App.tsx                  # Main Root Component
│   └── main.tsx                 # Entry Point
├── index.html                   # HTML Entry with SEO & JSON-LD Schema
├── vite.config.ts               # Vite Configuration & Local Dev API Middleware
└── package.json                 # Dependencies & Build Scripts
```

---

## ⚡ Getting Started (Local Development)

### 1. Prerequisites
Ensure you have **Node.js** (v18+ recommended) and **npm** installed.

### 2. Clone the Repository
```bash
git clone https://github.com/Saad0095/Saad-Portfolio.git
cd Saad-Portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Environment Variables
Create a `.env` file in the project root:
```env
RESEND_API_KEY=re_your_resend_api_key_here
```

### 5. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 📦 Building for Production

To create an optimized production bundle:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

---

## 📬 Contact & Connect

- **Portfolio**: [https://saad.devphic.com/](https://saad.devphic.com/)
- **Email**: [saadbinkhalid1895@gmail.com](mailto:saadbinkhalid1895@gmail.com)
- **WhatsApp**: [+92 321 8797825](https://wa.me/923218797825)
- **LinkedIn**: [Saad Bin Khalid](https://www.linkedin.com/in/saad-bin-khalid-b077b8243/)
- **GitHub**: [@Saad0095](https://github.com/Saad0095)

---

*© 2026 Muhammad Saad Bin Khalid. All rights reserved.*