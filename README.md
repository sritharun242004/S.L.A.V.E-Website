# ASSO S.L.A.V.É. Website

**Savoir • Langue • Art • Voyage • Échange**

A modern, responsive website for ASSO S.L.A.V.É., an intellectual laboratory bringing together people from diverse backgrounds around creative, educational, and sustainable projects.

## Features

- **Bilingual Support**: Full English/French language switching
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Premium animations, glassmorphism effects, and particle backgrounds
- **French Theme**: Navy blue, orange-red, and white color palette inspired by the association's logo

## Pages

1. **Home** - Hero section, association preview, Rails of Time highlight, partner universities
2. **Association** - About us, history timeline, core values, motto
3. **Projects** - Rails of Time project details, phases, curators, academic partners
4. **Contact** - Contact form, contact information, legal details

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **i18n**: react-i18next for multilingual support
- **UI Components**: shadcn/ui

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for Netlify deployment. Simply connect your GitHub repository to Netlify and it will automatically build and deploy.

### Environment Variables

No environment variables are required for basic functionality.

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
│   ├── layout/      # Header, Footer
│   └── ui/          # shadcn/ui components
├── hooks/           # Custom React hooks
├── i18n/            # Internationalization
│   └── locales/     # EN/FR translation files
├── lib/             # Utility functions
├── pages/           # Page components
└── styles/          # CSS styles
```

## Color Palette

- **Primary Blue**: `#0055A4` (French Blue)
- **Navy Blue**: `#003D6B` (Dark Navy from logo)
- **Accent Red**: `#D85D28` (Orange-Red from logo)
- **Background**: `#F8F7F4` (Warm cream)

## License

All rights reserved by ASSO S.L.A.V.É.

## Contact

- **Phone**: +33 6 42 00 12 80
- **Email**: asso.slave@gmail.com
- **Location**: Université Bordeaux Montaigne, Bordeaux, France
