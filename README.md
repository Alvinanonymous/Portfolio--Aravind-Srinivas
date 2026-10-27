# Portfolio — Aravind Srinivas

An interactive web portfolio celebrating the work, research, and career trajectory of **Aravind Srinivas** — Co-founder & CEO of [Perplexity AI](https://www.perplexity.ai), AI Researcher, and UC Berkeley Computer Science Ph.D.

Built through prompt engineering with **React 19**, **TypeScript**, **Tailwind CSS v4**, **Motion**, and the **Google Gen AI SDK (`@google/genai`)**, the site combines editorial storytelling, scroll-driven animations, and an interactive AI query bar.

- **Live Demo:** [portfolio-aravind-srinivas.vercel.app](https://portfolio-aravind-srinivas.vercel.app)
- **Repository:** [github.com/Alvinanonymous/Portfolio--Aravind-Srinivas](https://github.com/Alvinanonymous/Portfolio--Aravind-Srinivas)

## Key Features & Sections

- **Interactive AI Hero & Prompt Bar:** Features an editorial hero banner with an interactive prompt query experience powered by the `@google/genai` SDK.
- **Scroll Manifesto (`ScrollManifestoSection`):** Word-by-word scroll reveal (`ScrollWordReveal`) contrasting direct AI answer synthesis with traditional link-based web search.
- **About & Academic Foundation (`AboutSection`):** Chronicles Aravind's journey from Chennai and his Dual Degree (B.Tech + M.Tech) in Electrical Engineering at IIT Madras (2013–2017) to his Ph.D. in Computer Science at UC Berkeley (2017–2021).
- **Perplexity Showcase (`PerplexitySection`):** Highlights core pillars of [Perplexity AI](https://www.perplexity.ai), including Direct Answer Synthesis, Cited Grounding with verifiable sources, and Pro Search & Reasoning.
- **Career & Research Timeline (`JourneySection`):** Interactive milestone timeline tracing roles across OpenAI (Research Intern, 2018; Research Scientist, 2021–2022), DeepMind (Research Intern, 2019), Google (Research Intern, 2020–2021), and founding Perplexity AI (2022–Present).
- **Research Focus (`ResearchSection`):** Covers foundational contributions across Artificial Intelligence, Reinforcement Learning, Contrastive & Self-Supervised Learning, Transformer-based Computer Vision, and Retrieval-Augmented Generation (RAG).
- **Honors & Achievements (`AchievementsSection`):** Showcases recognitions including the IIT Madras Young Alumni Achiever Award (2026), KVPY Fellowship, and National Talent Search Scholarship (NTSE).
- **Press & Media Gallery (`MediaSection`):** Curated visual gallery of keynote talks, fireside chats, and press portraits.
- **Dynamic Visual Effects:** Custom `FluidMeshBackground`, `ScrollReveal`, and `ScrollWordReveal` components for smooth, high-contrast motion design.

## Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework & Language** | React 19, TypeScript (~96.5%), HTML5, CSS3 |
| **Build Tooling** | Vite, `@vitejs/plugin-react`, `tsx`, `esbuild` |
| **Styling & Animation** | Tailwind CSS v4 (`@tailwindcss/vite`), Motion (`motion`), Lucide React (`lucide-react`) |
| **AI & Server Integration** | Google Gen AI SDK (`@google/genai`), Express, `dotenv` |
| **Deployment** | [Vercel](https://portfolio-aravind-srinivas.vercel.app) |

## Project Structure

```text
Portfolio--Aravind-Srinivas/
├── public/
│   ├── aravind-about.png
│   ├── aravind-backdrop.jpg
│   ├── aravind-interview.jpg
│   ├── aravind-portrait.jpg
│   ├── aravind-portrait.png
│   ├── aravind-press.jpg
│   ├── aravind-square.jpg
│   ├── aravind-stage.jpg
│   ├── aravind-talk.jpg
│   ├── perplexity-logo.png
│   ├── perplexity-logo-black.png
│   └── perplexity-logo-white.png
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── FluidMeshBackground.tsx
│   │   ├── Footer.tsx
│   │   ├── JourneySection.tsx
│   │   ├── MediaSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── PerplexitySection.tsx
│   │   ├── ResearchSection.tsx
│   │   ├── ScrollManifestoSection.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── ScrollWordReveal.tsx
│   ├── App.tsx
│   ├── data.ts
│   ├── index.css
│   └── main.tsx
├── .env.example
├── .npmrc
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (configured with `.npmrc` for legacy peer dependencies)
- A **Google Gemini API Key** (for the interactive AI prompt feature)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Alvinanonymous/Portfolio--Aravind-Srinivas.git
   cd Portfolio--Aravind-Srinivas
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Copy the example environment file and add your Gemini API key:

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your key:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` (or the port shown in your terminal) in your browser.

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the production bundle into `dist/` |
| `npm run preview` | Locally previews the production build |
| `npm run lint` | Runs TypeScript type-checking (`tsc --noEmit`) |
| `npm run clean` | Removes build artifacts |

## Featured External Links

- **Perplexity AI:** [perplexity.ai](https://www.perplexity.ai)
- **Aravind Srinivas on X:** [@AravindSrinivas](https://x.com/AravindSrinivas)
- **Aravind Srinivas on LinkedIn:** [linkedin.com/in/aravind-srinivas-16051987](https://www.linkedin.com/in/aravind-srinivas-16051987)

## Author

Created by **Arjun K** ([@Alvinanonymous](https://github.com/Alvinanonymous)) using Prompt Engineering.
