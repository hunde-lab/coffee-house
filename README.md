<div align="center">

# ☕ KAFFA & EMBER
### *Coffee rooted in origin. Crafted for today.*

An Ethiopian-inspired specialty coffee house web application celebrating exceptional high-altitude micro-lots, artisan roasting, and the sacred ritual of Buna.

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[Live Features](#-key-features) • [Design System](#-design-direction--identity) • [Getting Started](#-getting-started) • [Architecture](#-project-structure)

</div>

---

## 🌿 Overview

**KAFFA & EMBER** is a modern editorial specialty coffee web experience. Inspired by the ancestral birthplace of Arabica coffee in southwestern Ethiopia, the brand merges traditional coffee culture with contemporary café design, specialty micro-lot extractions, and luxury hospitality aesthetics.

> “An Ethiopian-inspired coffee house celebrating exceptional beans, thoughtful roasting, and the sacred ritual of slowing down.”

---

## ✨ Key Features

- 🏛️ **Editorial Hero Experience**: High-impact visual composition featuring highland Arabica metrics (`100% Heirloom Arabica`, `2,200m Elevation`, `Micro-Batch Roasted`), dual CTAs, and ambient scroll indicators.
- 🎯 **Crafted With Intention**: 4 core brand pillar cards showcasing *Specialty Beans*, *Artisan Roasting*, *Ethiopian Roots*, and *The Coffee Ritual*.
- ☕ **Filterable Café Menu**: Comprehensive restaurant menu interface (`ESPRESSO`, `MILK COFFEE`, `ETHIOPIAN COFFEE`, `COLD COFFEE`, `TEA & OTHER`, `FOOD`) with dietary badges (`Single-Origin`, `Signature`, `Vegan`, `Gluten-Free`) and one-click takeaway ordering.
- 📜 **Editorial Storytelling Journey**: Authentic historical narrative tracing the coffee journey through an interactive 4-phase step navigator: `ORIGIN → ROAST → BREW → RITUAL`.
- 🌍 **Single-Origin Experience**: Interactive exploration of Ethiopia’s famed micro-lots (**Yirgacheffe**, **Guji**, **Sidamo**, **Limu**) complete with elevation specs, roast profiles, recommended brew methods, and sensory rating meters (Acidity, Sweetness, Body, Aroma).
- 🛍️ **Takeaway & Whole-Bean Order Drawer**: Slide-out cart with subtotal/tax calculations, grind calibration (Whole Bean, Espresso, V60, French Press), pickup timing selector, and instant order placement simulation.
- 📍 **Visit Us Sanctuary**: Complete café location guide with formatted address placeholders, operating hours, phone/email contacts, and interactive directions modal.
- 📬 **Validated Contact Form**: Full-featured contact interface supporting custom inquiry subjects (*Wholesale*, *Private Buna Ceremonies*, *Media*) with friendly error handling and success state feedback.
- 📱 **Responsive & Accessible**: Optimized for mobile, tablet, and desktop viewports with WCAG keyboard accessibility, focus outlines, and reduced motion support.

---

## 🎨 Design Direction & Identity

- **Color Palette**:
  - `Deep Espresso Brown` (`#1C130E` / `#2A1E17`)
  - `Warm Cream` (`#FAF7F2`)
  - `Soft Beige` (`#F2ECE1` / `#E6DAC8`)
  - `Burnt Copper` (`#C86D51`)
  - `Charcoal & Wood Tones` (`#12100E` / `#4A3728`)
- **Typography**:
  - **Display Headings**: Google Fonts *Playfair Display* (Editorial Serif)
  - **Body & Controls**: Google Fonts *Plus Jakarta Sans* (Clean Modern Sans-Serif)
- **Metadata**: Pre-configured with Open Graph social tags and JSON-LD (`CafeOrCoffeeShop`) structured data for local SEO.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: [React 19](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Performance**: Zero external heavy UI framework dependencies, fast HMR, and optimized production builds.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Local Setup & Running

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hunde-lab/coffee-house.git
   cd coffee-house
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   Outputs production-optimized assets in `dist/`.

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
coffee-house/
├── public/                 # Static assets & favicons
├── src/
│   ├── components/         # Modular UI components
│   │   ├── Navbar.tsx             # Sticky header & mobile menu drawer
│   │   ├── Hero.tsx               # Editorial hero section
│   │   ├── FeaturedCraft.tsx      # 4 intent feature cards
│   │   ├── MenuSection.tsx        # Filterable menu & order triggers
│   │   ├── OurStorySection.tsx    # Story narrative & process timeline
│   │   ├── CoffeeOriginsSection.tsx # Interactive origin explorer
│   │   ├── VisitUsSection.tsx     # Hours, location, map & directions
│   │   ├── ContactSection.tsx     # Validated contact form & socials
│   │   ├── OrderDrawer.tsx        # Takeaway & whole bean ordering cart
│   │   └── Footer.tsx             # Brand summary, hours & newsletter
│   ├── data/
│   │   └── coffeeData.ts          # Structured menu, origin & story data
│   ├── types/
│   │   └── coffee.ts              # TypeScript domain models & interfaces
│   ├── App.tsx                    # Root application component & state
│   ├── index.css                  # Tailwind CSS v4 directives & font imports
│   └── main.tsx                   # Application entry point
├── index.html              # Google Fonts, Open Graph & JSON-LD schema
├── package.json            # Project dependencies & scripts
├── tsconfig.app.json       # Application TypeScript configuration
├── tsconfig.json           # Root TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

<div align="center">

Crafted with care for **KAFFA & EMBER** • Specialty Coffee House

</div>
