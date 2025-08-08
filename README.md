# Al Nabi Hospital Website

![Al Nabi Hospital](https://via.placeholder.com/800x400?text=Al+Nabi+Hospital)

<!-- Replace the placeholder image above with an actual screenshot of your website -->
<!-- Example: ![Al Nabi Hospital](./src/assets/screenshot.png) -->

A modern, responsive website for Al Nabi Hospital built with React, TypeScript, and Tailwind CSS. The website features a luxurious floating chandelier navigation, elegant liquid gradient backgrounds, and sophisticated animations that create a premium medical experience.

## 🌟 Key Features

### 🏥 **Floating Chandelier Navigation**
- **Suspended Design**: Navigation bar appears weightlessly suspended from the top with sophisticated glassmorphism effects
- **Multi-layered Shadows**: Enhanced drop shadows create a true chandelier-like floating illusion
- **Elegant Transparency**: Backdrop blur and refined transparency effects for a premium feel
- **Responsive Behavior**: Adapts beautifully across all screen sizes while maintaining luxury aesthetics

### 🎨 **Liquid Gradient Background System**
- **Silk-like Animation**: Smooth 25-second liquid flow animation with elegant color transitions
- **Premium Color Palette**: Custom gradient using soft whites, pinks, lavenders, and blues
- **Glass-like Effects**: Enhanced transparency and blur effects throughout the design
- **Performance Optimized**: Respects `prefers-reduced-motion` for accessibility

### ✨ **Sophisticated Typography**
- **Medical Authority Fonts**: Cormorant Garamond, DM Serif Display, and Playfair Display
- **Trust & Elegance**: Typography that evokes professionalism and medical expertise
- **Consistent Hierarchy**: Well-structured font weights and sizes across all components

### 🎭 **Advanced Motion Design**
- **Framer Motion Integration**: Professional-grade animations with spring physics
- **Subtle Interactions**: Fade-in, slide-down, and parallax effects
- **Smooth Transitions**: Enhanced hover states with scale and shadow animations
- **Accessibility First**: Reduced motion support for better user experience

### 📱 **Responsive Excellence**
- **Mobile-First Design**: Perfect alignment across mobile, tablet, and desktop
- **Adaptive Components**: Stats, navigation, and content scale beautifully
- **Touch-Friendly**: Optimized interactions for all device types

## 🚀 Live Demo

**Website**: [https://meek-horse-e3aab5.netlify.app](https://meek-horse-e3aab5.netlify.app)

## 🛠 Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for sophisticated animations
- **Smooth Scrolling**: Studio Freight Lenis
- **State Management**: Zustand for lightweight state management
- **Icons**: Lucide React for beautiful SVG icons
- **Date Picker**: React DatePicker for appointment scheduling
- **Build Tool**: Vite for fast development and optimized production builds

## 🎨 Design Features

### Elegant Gradient Background

The website features a luxurious liquid gradient background with:

```css
background: linear-gradient(315deg, 
  hsla(0, 0%, 100%, 1) 0%, 
  hsla(319, 100%, 92%, 1) 12%, 
  hsla(319, 86%, 91%, 1) 30%, 
  hsla(280, 100%, 89%, 1) 50%, 
  hsla(216, 100%, 88%, 1) 100%
);
```

- **Liquid Flow Animation**: 25-second smooth animation creating silk-like movement
- **Responsive Design**: Adapts animation speed and intensity based on screen size
- **Cross-browser Compatibility**: Vendor prefixes and fallbacks included
- **High-resolution Support**: Optimized for retina and high-DPI displays

### Floating Chandelier Navigation

The navigation system features:

- **Glassmorphism Effects**: Advanced backdrop blur and transparency
- **Multi-layered Shadows**: Complex shadow system for true floating appearance
- **Elegant Typography**: Premium serif fonts for medical authority
- **Smooth Interactions**: Spring-based animations with custom easing curves

## 🚀 Getting Started

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

## 📁 Project Structure

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
│   │   ├── Layout.tsx
│   │   ├── Navigation.tsx      # ✨ Enhanced floating chandelier nav
│   │   ├── ParallaxBackground.tsx
│   │   ├── ServicePage.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx           # 📊 Responsive stats component
│   │   ├── Testimonials.tsx
│   │   └── pages/              # Additional pages
│   │       ├── Careers.tsx
│   │       ├── Terms.tsx
│   │       ├── CookiePolicy.tsx
│   │       └── PrivacyPolicy.tsx
│   ├── store/           # State management
│   │   └── bookingStore.ts
│   ├── styles/          # CSS styles
│   │   └── background.css      # 🌊 Liquid gradient animations
│   ├── lib/             # Utilities
│   │   └── lenis.ts
│   ├── App.tsx          # Main application component
│   ├── index.css        # 🎨 Enhanced global styles
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.js   # 🎨 Enhanced Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎯 Key Components

### Enhanced Navigation Component

The `Navigation` component creates a luxurious floating chandelier effect:

```tsx
// Enhanced floating chandelier navigation with glassmorphism
const Navigation: React.FC = () => {
  // Advanced scroll handling with performance optimization
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  
  // Sophisticated animation variants for chandelier effect
  const navVariants: Variants = {
    initial: { 
      y: -120, 
      opacity: 0,
      scale: 0.95,
      filter: 'blur(10px)'
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30,
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  // Dynamic styling with glassmorphism effects
  const getNavStyles = (): React.CSSProperties => ({
    background: `linear-gradient(135deg, 
      rgba(255, 255, 255, ${scrolled ? '0.95' : '0.85'}) 0%,
      rgba(255, 255, 255, ${scrolled ? '0.90' : '0.75'}) 100%
    )`,
    backdropFilter: `blur(${scrolled ? '20px' : '16px'}) saturate(180%)`,
    boxShadow: scrolled 
      ? `0 25px 50px -12px rgba(0, 0, 0, 0.08),
         0 8px 32px rgba(0, 0, 0, 0.04),
         0 0 0 1px rgba(255, 255, 255, 0.05),
         inset 0 1px 0 rgba(255, 255, 255, 0.1)`
      : `0 20px 40px -8px rgba(0, 0, 0, 0.06),
         0 8px 24px rgba(0, 0, 0, 0.04),
         0 0 0 1px rgba(255, 255, 255, 0.05),
         inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
  });
  
  return (
    <motion.nav 
      className="fixed z-50 transition-all duration-700 ease-out"
      variants={navVariants}
      initial="initial"
      animate="animate"
      style={getNavStyles()}
    >
      {/* Navigation content with elegant typography */}
    </motion.nav>
  );
};
```

### Responsive Stats Component

The `Stats` component ensures perfect alignment across all devices:

```tsx
// Responsive stats with elegant animations
const Stats = React.memo(() => {
  const stats = useMemo(() => [
    {
      icon: Users,
      number: 20000,
      suffix: '+',
      label: 'Patients Treated',
      color: 'from-blue-500 to-cyan-500'
    },
    // ... more stats
  ], []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#004F74] to-[#007BBA]">
      {/* Responsive grid: 2 columns on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Responsive typography and spacing */}
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-serif">
              <CountUp end={stat.number} duration={2.5} />
              <span className="text-blue-200">{stat.suffix}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});
```

### Liquid Gradient Background System

Enhanced background with silk-like animations:

```css
/* Enhanced Liquid Gradient Background */
.elegant-gradient-bg {
  background: linear-gradient(315deg, 
    hsla(0, 0%, 100%, 1) 0%, 
    hsla(319, 100%, 92%, 1) 12%, 
    hsla(319, 86%, 91%, 1) 30%, 
    hsla(280, 100%, 89%, 1) 50%, 
    hsla(216, 100%, 88%, 1) 100%
  );
  background-size: 400% 400%;
  animation: liquidFlow 20s ease-in-out infinite alternate;
}

/* Enhanced liquid flow animation */
@keyframes liquidFlow {
  0% {
    background-position: 0% 50%;
    filter: hue-rotate(0deg) saturate(100%) brightness(100%);
  }
  25% {
    background-position: 100% 25%;
    filter: hue-rotate(5deg) saturate(105%) brightness(102%);
  }
  50% {
    background-position: 100% 75%;
    filter: hue-rotate(10deg) saturate(110%) brightness(105%);
  }
  75% {
    background-position: 0% 75%;
    filter: hue-rotate(5deg) saturate(105%) brightness(102%);
  }
  100% {
    background-position: 0% 50%;
    filter: hue-rotate(0deg) saturate(100%) brightness(100%);
  }
}

/* Silk-like shimmer effect */
.silk-shimmer::before {
  content: '';
  position: absolute;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  animation: shimmerMove 3s ease-in-out infinite;
}

/* Enhanced glass morphism effects */
.glass-morphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
```

## 🎨 Design Philosophy

### Medical Authority & Trust
- **Professional Typography**: Serif fonts that convey medical expertise
- **Sophisticated Color Palette**: Calming blues and whites with elegant gradients
- **Clean Layout**: Minimal design that prioritizes content and usability

### Luxury & Elegance
- **Floating Elements**: Chandelier-inspired navigation with weightless appearance
- **Smooth Animations**: Spring-based physics for natural movement
- **Premium Materials**: Glassmorphism and liquid gradients for modern luxury

### Accessibility & Performance
- **Reduced Motion Support**: Respects user preferences for motion sensitivity
- **High Contrast**: Ensures readability across all components
- **Performance Optimized**: Efficient animations and responsive images

## 📱 Responsive Design

### Mobile (320px - 768px)
- **2-column Stats Grid**: Perfect alignment on small screens
- **Compact Navigation**: Touch-friendly mobile menu
- **Optimized Typography**: Scaled font sizes for readability

### Tablet (768px - 1024px)
- **Adaptive Layouts**: Flexible grid systems
- **Enhanced Interactions**: Hover states for touch devices
- **Balanced Spacing**: Optimal padding and margins

### Desktop (1024px+)
- **4-column Stats Grid**: Full desktop layout
- **Advanced Animations**: Complete motion design system
- **Premium Experience**: Full chandelier navigation effects

## 🔧 Configuration

### Tailwind CSS Enhancements

```javascript
// Enhanced Tailwind configuration
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: [
          'Cormorant Garamond',
          'DM Serif Display', 
          'Playfair Display',
          'Georgia',
          'serif'
        ],
      },
      animation: {
        'liquidFlow': 'liquidFlow 20s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
};
```

## 🚀 Deployment

The website is deployed on Netlify with automatic deployments from the main branch.

**Live URL**: [https://meek-horse-e3aab5.netlify.app](https://meek-horse-e3aab5.netlify.app)

### Deploy Your Own

1. Fork this repository
2. Connect to Netlify
3. Deploy with build command: `npm run build`
4. Set publish directory: `dist`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern medical websites and luxury healthcare brands
- **Icons**: Lucide React for beautiful, consistent iconography
- **Animations**: Framer Motion for professional-grade motion design
- **Smooth Scrolling**: Studio Freight Lenis for enhanced user experience
- **Typography**: Google Fonts for elegant serif typefaces

## 🔮 Future Enhancements

- **Dark Mode**: Elegant dark theme with adjusted gradients
- **Micro-interactions**: Enhanced button and form animations
- **Advanced Parallax**: Multi-layer background effects
- **Performance Monitoring**: Real-time performance analytics
- **A11y Improvements**: Enhanced accessibility features

---

**Built with ❤️ for Al Nabi Hospital - Where Healthcare Meets Excellence**