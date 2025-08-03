# Al Nabi Hospital Website

![Al Nabi Hospital](https://via.placeholder.com/800x400?text=Al+Nabi+Hospital)

<!-- Replace the placeholder image above with an actual screenshot of your website -->
<!-- Example: ![Al Nabi Hospital](./src/assets/screenshot.png) -->

A modern, responsive website for Al Nabi Hospital built with React, TypeScript, and Tailwind CSS. The website features a beautiful, elegant gradient background with parallax effects and provides comprehensive information about the hospital's services and facilities.

## Features

- **Modern UI/UX Design**: Elegant gradient background with parallax effects and subtle animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Scrolling**: Enhanced user experience with smooth scrolling using Lenis
- **Interactive Components**: Animated UI elements using Framer Motion
- **Service Showcase**: Detailed information about various medical services
- **Doctor Profiles**: Showcase of hospital's medical professionals
- **Appointment Booking**: Interactive appointment scheduling system
- **Testimonials**: Patient reviews and testimonials
- **Contact Information**: Easy access to hospital contact details

## Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for smooth animations
- **Smooth Scrolling**: Studio Freight Lenis
- **State Management**: Zustand for lightweight state management
- **Icons**: Lucide React for beautiful SVG icons
- **Date Picker**: React DatePicker for appointment scheduling
- **Build Tool**: Vite for fast development and optimized production builds

## Visual Features

### Elegant Gradient Background

The website features a modern, elegant, and realistic linear gradient background with:

- Linear gradient at 315 degrees with specific HSLA color stops (pure white, soft pink, light blush, gentle lavender, airy blue)
- Fluid and responsive design that dynamically shifts on scroll or mouse movement
- Subtle parallax shimmer effect for enhanced visual appeal
- Light grain texture overlay for added realism
- Cross-browser compatibility and high-resolution screen support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/al-nabi-hospital.git
   cd al-nabi-hospital
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── public/              # Static assets
├── src/                 # Source files
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── BookingModal.tsx
│   │   ├── Contact.tsx
│   │   ├── Doctors.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── ParallaxBackground.tsx
│   │   ├── ServicePage.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   └── Testimonials.tsx
│   ├── store/           # State management
│   │   └── bookingStore.ts
│   ├── styles/          # CSS styles
│   │   └── background.css
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Key Components

### ParallaxBackground

The `ParallaxBackground` component creates an elegant gradient background with parallax effects that respond to mouse movement and scrolling.

```tsx
// src/components/ParallaxBackground.tsx
import React, { useEffect, useState } from 'react';
import '../styles/background.css';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ children }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Handle mouse movement for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      
      setOffset({ x, y });
    };
    
    // Handle scroll for additional parallax effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollFactor = scrollY * 0.002;
      
      document.documentElement.style.setProperty('--scroll-y', `${scrollFactor}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="parallax-container min-h-screen">
      {/* Gradient background with parallax effect */}
      <div 
        className="parallax-layer elegant-gradient-bg" 
        style={{ 
          transform: `translate3d(${offset.x * 0.5}px, ${offset.y * 0.5}px, 0)`,
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Grain texture overlay */}
      <div className="grain-overlay" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
```

#### Gradient Background CSS

The elegant gradient background is implemented in `background.css` with cross-browser support and high-resolution display optimization:

```css
/* Background Styles */
.elegant-gradient-bg {
  background-image: linear-gradient(315deg, hsla(216, 100%, 88%, 1) 0%, hsla(280, 100%, 89%, 1) 25%, hsla(319, 86%, 91%, 1) 50%, hsla(319, 100%, 92%, 1) 75%, hsla(0, 0%, 100%, 1) 100%);
  background-size: 200% 200%;
  animation: shimmer 15s ease-in-out infinite alternate;
}

/* Grain texture overlay */
.grain-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Animation for the shimmer effect */
@keyframes shimmer {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

### Hero Section

The `Hero` component displays the main landing section with a call-to-action for booking appointments and exploring services. It features animated text and buttons using Framer Motion for a dynamic user experience.

```tsx
// Excerpt from src/components/Hero.tsx
<motion.div 
  className="text-center space-y-8 max-w-4xl mx-auto"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="space-y-4">
    <motion.h1 
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Trusted Healthcare, 
      <span className="text-[#38bdf8]"> Compassionate Care</span>
    </motion.h1>
    <motion.p 
      className="text-xl text-blue-100 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Providing exceptional medical services with 24/7 emergency care, experienced doctors, and family-centered approach to your health and wellness.
    </motion.p>
  </div>
  
  {/* CTA Buttons */}
  <motion.div 
    className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
    <motion.button
      onClick={() => setIsModalOpen(true)}
      className="glassmorphism-button text-white px-8 py-4 rounded-3xl font-semibold transition-all duration-300 transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Calendar className="h-5 w-5" />
      <span>Book Appointment</span>
    </motion.button>
  </motion.div>
</motion.div>
```

### Services Section

The `Services` component showcases the various medical services offered by the hospital, including cardiology, neurology, pediatrics, and more. Each service is presented as an interactive card with an icon, title, and description.

```tsx
// Excerpt from src/components/Services.tsx
const services: Service[] = [
  {
    id: 'cardiology',
    icon: Heart,
    title: 'Cardiology',
    description: 'Advanced heart care with cutting-edge diagnostics and treatments.',
  },
  {
    id: 'neurology',
    icon: Brain,
    title: 'Neurology',
    description: 'Expert care for brain and nervous system disorders.',
  },
  {
    id: 'pediatrics',
    icon: Baby,
    title: 'Pediatrics',
    description: 'Specialized care for infants, children, and adolescents.',
  },
  // More services...
];
```

The services are displayed in a responsive grid layout with smooth animations when they come into view.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern healthcare websites
- Icons provided by Lucide React
- Smooth scrolling powered by Studio Freight Lenis