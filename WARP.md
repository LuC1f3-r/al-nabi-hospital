# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Al Nabi Hospital is a modern, luxurious healthcare website built with Next.js 15, React 18, TypeScript, and the App Router. The project features sophisticated animations, glassmorphism design, and a unique "floating chandelier navigation" system.

## Development Commands

### Primary Development
```bash
npm run dev          # Start Next.js development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run Next.js ESLint
```

### Testing & Quality
```bash
# No test setup currently - tests can be added with Vitest or Jest
npm run lint         # Check code quality with Next.js ESLint
```

## Architecture Overview

### Core Technology Stack
- **Frontend**: Next.js 15 + React 18 + TypeScript
- **Routing**: Next.js App Router with file-based routing
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion with spring physics
- **Smooth Scrolling**: Lenis (@studio-freight/lenis)
- **State Management**: Zustand (lightweight store)
- **Icons**: Lucide React
- **Deployment**: Vercel (Next.js optimized)

### Project Structure
```
app/
├── layout.tsx           # Root layout with metadata
├── page.tsx             # Home page
├── careers/
│   └── page.tsx         # Careers page
├── terms/
│   └── page.tsx         # Terms & conditions page
├── privacy-policy/
│   └── page.tsx         # Privacy policy page
├── cookie-policy/
│   └── page.tsx         # Cookie policy page
└── services/
    └── [serviceId]/
        └── page.tsx     # Dynamic service pages
src/
├── components/          # React components (all with 'use client')
│   ├── Navigation.tsx   # Floating chandelier navigation
│   ├── Hero.tsx         # Landing section with animations
│   ├── Stats.tsx        # Responsive statistics with CountUp
│   ├── About.tsx        # About section
│   ├── Services.tsx     # Services grid
│   ├── Doctors.tsx      # Doctor profiles
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Contact.tsx      # Contact form
│   ├── Layout.tsx       # Layout wrapper component
│   ├── BookingModal.tsx # Appointment booking modal
│   ├── ParallaxBackground.tsx # Background effects
│   ├── Chatbot/         # AI chatbot components
│   └── pages/           # Page components (Terms, Privacy, etc.)
├── store/
│   └── bookingStore.ts  # Zustand store for modal state
├── lib/
│   └── lenis.ts         # Smooth scrolling configuration
├── styles/
│   └── background.css   # Liquid gradient animations
└── index.css            # Global styles and typography
public/
└── assets/              # Static assets (images, videos)
```

## Key Architectural Patterns

### Navigation System
The `Navigation.tsx` component implements a sophisticated "floating chandelier" design:
- **Dynamic Sizing**: Shrinks on scroll with smooth transitions
- **Glassmorphism**: Advanced backdrop blur and transparency effects
- **Scroll Progress**: Visual progress indicator
- **Responsive Design**: Adapts to mobile, tablet, and desktop
- **Scrollspy**: Highlights active sections automatically

### State Management
Uses Zustand for lightweight state management:
- `bookingStore.ts`: Handles booking modal state and selected doctor

### Animation Framework
Framer Motion powers all animations with:
- Spring physics for natural movement
- Reduced motion support for accessibility
- Staggered animations for list items
- Scroll-triggered animations

### Background System
Sophisticated gradient animation system:
- Liquid gradient with 20-second animation cycle
- Silk-like shimmer effects
- Parallax layers for depth
- Performance optimized with `prefers-reduced-motion`

## Styling Architecture

### Tailwind Configuration
Extended configuration with:
- **Custom Color Palette**: Primary blues and enhanced grays
- **Typography**: Serif fonts (Cormorant Garamond, DM Serif Display, Playfair Display)
- **Animations**: Custom keyframes for fade, slide, float, shimmer
- **Responsive Breakpoints**: Extended with `xs: 475px` and `3xl: 1600px`
- **Custom Utilities**: Glass morphism, scrollbar styling, text wrapping

### CSS Architecture
- **Global Styles**: `index.css` with typography and base styles
- **Component Styles**: Tailwind classes with occasional CSS modules
- **Animation Styles**: `background.css` for complex background effects

### Design System
- **Color Scheme**: Medical blues (#007BBA, #004F74) with elegant gradients
- **Typography Hierarchy**: Serif fonts for authority, sans-serif for readability
- **Spacing Scale**: Consistent using Tailwind's extended spacing
- **Shadow System**: Custom shadows for glassmorphism effects

## Component Guidelines

### Navigation Component
- Complex scroll handling with performance optimizations
- Mobile-first responsive design
- TypeScript interfaces for configuration
- Memoization for performance

### Animation Components
- Always check `useReducedMotion()` for accessibility
- Use spring physics for natural movement
- Implement proper cleanup in useEffect hooks
- Optimize with `will-change` CSS property

### Form Components
- React DatePicker integration with custom styling
- Zustand for state management
- Validation with proper error handling

## Development Guidelines

### Performance Optimization
- Lazy loading for route components
- Memoization with `React.memo` for expensive components
- Intersection Observer for scroll-triggered animations
- CSS `will-change` for animation performance

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Grid systems that adapt (2-column mobile → 4-column desktop)
- Touch-friendly interactions on mobile
- Optimized animations for different screen sizes

### Accessibility
- Reduced motion support throughout
- Proper ARIA labels and semantic HTML
- Keyboard navigation support
- High contrast text with text shadows

## Common Development Tasks

### Adding New Pages
1. Create component in `src/components/pages/`
2. Add route to `App.tsx` with lazy loading
3. Update navigation in `Navigation.tsx` config
4. Ensure responsive design and animations

### Modifying Animations
1. Check existing animations in `tailwind.config.js`
2. Update Framer Motion variants in components
3. Test with `prefers-reduced-motion`
4. Verify performance impact

### Styling Updates
1. Use Tailwind classes first
2. Add custom utilities to Tailwind config if needed
3. Complex animations go in `background.css`
4. Maintain design system consistency

## Build & Deployment

### Production Build
The build process:
1. TypeScript compilation with strict mode
2. Next.js bundling with automatic optimizations
3. Tailwind CSS purging
4. Asset optimization and image optimization
5. Static generation for optimal performance

### Deployment (Vercel)
- Automatic deployment from git pushes
- Build command: `npm run build`
- Framework: Next.js (auto-detected)
- Environment: Node 18+
- Edge functions and CDN optimization

## Browser Support
- Modern browsers with ES2020 support
- CSS Grid and Flexbox required
- Backdrop-filter support for glassmorphism
- Intersection Observer API

## Performance Considerations
- Next.js App Router for optimal performance and SEO
- Automatic code splitting and lazy loading
- Server-side rendering (SSR) capabilities
- Static generation where possible
- Efficient animation with Framer Motion
- Smooth scrolling with Lenis
- Optimized images with Next.js Image component
- Edge runtime compatibility for global performance
