# Bodymotion Chiropractic and Physiotherapy Website

A modern, high-converting website built with Next.js, React, and TypeScript for Bodymotion Chiropractic and Physiotherapy.

## Features

- **High-Converting Homepage**: Beautiful landing page with hero section, services grid, testimonials, and clear CTAs
- **Appointment Booking**: Integrated booking system that connects to Jane App (https://bodymotion.janeapp.co.uk/)
- **Interactive Chatbot**: AI-powered chatbot that helps visitors book appointments and answer questions
- **Responsive Design**: Fully responsive design that works on all devices
- **Modern UI**: Clean, professional design inspired by Pure Sports Medicine

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar, Footer, and Chatbot
│   ├── page.tsx            # Homepage
│   ├── book/
│   │   └── page.tsx        # Booking page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid
│   ├── WhyChooseUs.tsx     # Features section
│   ├── Process.tsx         # Treatment process
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── CTA.tsx             # Call-to-action section
│   ├── Footer.tsx          # Footer component
│   ├── BookingPage.tsx     # Appointment booking page
│   └── Chatbot.tsx         # Interactive chatbot
└── public/                 # Static assets
```

## Key Features

### Homepage
- Hero section with clear value proposition
- Services grid showcasing all treatments
- Why choose us section
- Treatment process explanation
- Customer testimonials
- Strong call-to-action sections

### Booking Page
- Search and filter practitioners
- View practitioner profiles with ratings
- See available appointment slots
- Direct integration with Jane App booking system
- Maintains homepage URL structure

### Chatbot
- Interactive chat interface
- Quick action buttons
- Appointment booking flow
- Service information
- Contact details

## Customization

### Brand Colors
Update colors in `tailwind.config.ts` to match your brand. The current colors use a professional healthcare palette (teal/green and blue).

### Services
Modify the services array in `components/Services.tsx` to reflect your actual services.

### Practitioners
Update the practitioners data in `components/BookingPage.tsx` with real practitioner information. In production, this should connect to the Jane App API.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the production version:
```bash
npm run build
npm start
```

## Integration with Jane App

The booking system integrates with Jane App at `https://bodymotion.janeapp.co.uk/`. The integration:
- Opens booking in a new window/tab
- Maintains the current URL structure
- Passes user information when available
- Provides a seamless booking experience

## Support

For questions or issues, please contact the development team.

## License

© 2025 Bodymotion Chiropractic and Physiotherapy. All rights reserved.

