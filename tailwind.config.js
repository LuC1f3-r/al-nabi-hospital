/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notable: ["Notable", "sans-serif"],
        amoresa: ["Amoresa", "cursive"],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
        serif: [
          "Cormorant Garamond",
          "DM Serif Display",
          "Playfair Display",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
      colors: {
        primary: {
          // Enhanced primary color palette with better contrast ratios
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#007BBA", // Main brand color
          600: "#0369a1",
          700: "#004F74", // Secondary brand color
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        gray: {
          // Enhanced gray palette for better readability
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      spacing: {
        // Enhanced spacing scale for better consistency
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      screens: {
        // Enhanced responsive breakpoints
        xs: "475px",
        "3xl": "1600px",
      },
      animation: {
        // Enhanced animations with better performance
        fadeIn: "fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        slideUp: "slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        slideDown: "slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        slideLeft: "slideLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        slideRight: "slideRight 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-slow": "bounce 2s infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 123, 186, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 123, 186, 0.4)" },
        },
      },
      backgroundImage: {
        // Enhanced gradient backgrounds
        "elegant-gradient":
          "linear-gradient(315deg, hsla(216, 100%, 88%, 1) 0%, hsla(280, 100%, 89%, 1) 25%, hsla(319, 86%, 91%, 1) 50%, hsla(319, 100%, 92%, 1) 75%, hsla(0, 0%, 100%, 1) 100%)",
        "elegant-gradient-animated":
          "linear-gradient(315deg, hsla(216, 100%, 88%, 1) 0%, hsla(280, 100%, 89%, 1) 25%, hsla(319, 86%, 91%, 1) 50%, hsla(319, 100%, 92%, 1) 75%, hsla(0, 0%, 100%, 1) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        // Enhanced shadow system
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
        medium: "0 4px 16px rgba(0, 0, 0, 0.08)",
        hard: "0 8px 32px rgba(0, 0, 0, 0.12)",
        glow: "0 0 20px rgba(0, 123, 186, 0.3)",
        "glow-lg": "0 0 40px rgba(0, 123, 186, 0.2)",
      },
      borderRadius: {
        // Enhanced border radius scale
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backdropBlur: {
        // Enhanced backdrop blur options
        xs: "2px",
      },
      typography: {
        // Enhanced typography plugin configuration
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#334155",
            lineHeight: "1.7",
            p: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
            },
            h1: {
              fontWeight: "700",
              letterSpacing: "-0.025em",
            },
            h2: {
              fontWeight: "700",
              letterSpacing: "-0.025em",
            },
            h3: {
              fontWeight: "600",
              letterSpacing: "-0.025em",
            },
            "h4, h5, h6": {
              fontWeight: "600",
            },
            strong: {
              fontWeight: "600",
            },
            a: {
              color: "#007BBA",
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": {
                color: "#004F74",
                textDecoration: "underline",
              },
            },
            code: {
              backgroundColor: "#f1f5f9",
              padding: "0.25rem 0.375rem",
              borderRadius: "0.25rem",
              fontSize: "0.875em",
              fontWeight: "500",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
      container: {
        // Enhanced container configuration
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    // Add typography plugin for better text styling
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".text-pretty": {
          "text-wrap": "pretty",
        },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-thin": {
          "scrollbar-width": "thin",
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: theme("colors.gray.100"),
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: theme("colors.primary.500"),
            borderRadius: "4px",
            "&:hover": {
              background: theme("colors.primary.600"),
            },
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
