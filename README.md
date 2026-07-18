# 🌌 Northstar Jobs — Premium SaaS Job Board

Northstar Jobs is a premium, design-forward, frontend-only job board experience inspired by industry-leading SaaS platforms like **Vercel, Stripe, Linear, and LinkedIn Jobs**. Built with **Next.js 15, React 19, Tailwind CSS, and Framer Motion**, it delivers a highly polished, accessible, and responsive interface tailored for modern talent and thoughtful employers.

---

## 🚀 Features

### 🔍 1. Advanced Search & Filtering
- **Multi-criteria Filtering**: Filter jobs dynamically by **Location**, **Category**, **Experience Level**, **Employment Type**, **Salary Range**, and **Remote Only**.
- **Instant Search**: Real-time search across job titles, company names, and descriptions.
- **Dynamic Sorting**: Sort jobs by **Featured**, **Most Recent**, **Highest Salary**, and **Title A-Z**.

### 💾 2. State Persistence & LocalStorage
- **Shortlist / Saved Jobs**: Bookmark roles to revisit later. State is fully persisted in `localStorage`.
- **Recently Viewed**: Tracks and displays the last 4 jobs viewed by the user on the homepage.
- **Application Tracker**: Apply to roles via an interactive modal and track submitted applications in one place.

### 🎨 3. Premium SaaS UI/UX
- **Ambient Glow Backgrounds**: Layered radial gradients creating a modern, dark-mode aesthetic.
- **Micro-interactions**: Smooth hover states, active button scaling, and Framer Motion page transitions.
- **Custom Reusable Components**: Built-in accessible components including **Tabs, Accordions, Dropdowns, Avatars, Badges, Empty States, and Loading Spinners**.
- **Toast Notifications**: Non-blocking success and info toasts that slide in from the bottom-right.

---

## 📂 Folder Structure

```text
├── app/                      # Next.js App Router pages
│   ├── applications/         # Applied jobs tracking page
│   ├── companies/            # Company directory & dynamic slug pages
│   ├── jobs/                 # Job board & dynamic job details pages
│   ├── profile/              # User career profile page
│   ├── globals.css           # Global styles & premium SaaS theme variables
│   └── layout.tsx            # Root layout with global providers
├── components/               # Reusable React components
│   ├── features/             # Feature-specific components (JobCard, Filters, etc.)
│   ├── layout/               # Layout wrappers (Navbar, Footer, PageShell)
│   ├── providers/            # Global Context Providers (Theme, Job State)
│   └── ui/                   # Reusable UI primitives (Button, Badge, Avatar, etc.)
├── hooks/                    # Custom React hooks (useLocalStorage)
├── lib/                      # Data fetching utilities & mock data accessors
├── data/                     # Mock JSON datasets (Jobs, Companies, Skills)
└── types/                    # TypeScript type definitions
```

---

## 🛠️ Tech Stack & Setup

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🧠 Assumptions & Decisions

1. **Frontend-Only Architecture**: To ensure maximum performance and zero latency, all data operations (filtering, sorting, saving, and applying) are handled entirely on the client side using React state and persisted via `localStorage`.
2. **Hydration Mismatch Prevention**: Implemented an `isMounted` check inside the global `JobProvider` to prevent Next.js hydration mismatches when reading from `localStorage` during server-side rendering.
3. **Premium Dark Mode**: Designed with a default dark-first theme inspired by Linear and Vercel, utilizing semi-transparent borders (`border-white/5`) and deep background colors (`#030303`).

---

## 🔮 Future Improvements

- **Rich Text Editor**: Integrate a rich text editor for posting new jobs.
- **Resume Parser**: Allow users to upload resumes in the profile section and auto-fill application forms.
- **Interactive Analytics**: Add a dashboard for employers to track application views and click-through rates.
- **Real-time Chat**: Implement a mock real-time messaging system between candidates and hiring managers.


## 🚀 Deployment

The application is deployed on **Vercel** and is accessible through the live demo link below.

| Resource | Link |
|----------|------|
| 🌐 Live Demo (Vercel) | https://job-poster-kappa.vercel.app/ |
| 📂 GitHub Repository | https://github.com/harish-2807/Job-Poster |
| 📖 Project Documentation (PDF) | https://drive.google.com/file/d/1Ay-RZfeosRcd8DcKap2IZ01Wjc6mWSFJ/view?usp=sharing |
| Demo video - https://drive.google.com/file/d/1l9y3QXXHcdzy3PGRG3-KMeksGZUuXenn/view?usp=sharing

> **Note:** The application is automatically deployed through a GitHub Actions CI/CD pipeline. Every successful push to the main branch triggers a new build and deployment on Vercel.
