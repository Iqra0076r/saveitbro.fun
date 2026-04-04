/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: "#FFF5F8",
          100: "#FFE8F2",
          200: "#FFDAE8",
          300: "#FFC5DB",
          400: "#FFB3CB",
          500: "#FF9FBB",
          600: "#FF8AAD",
          700: "#FF75A0",
          800: "#FF6092",
          900: "#FF4B85",
          950: "#FF3078",
        },
        "baby-pink": "#FFB3CB",
        "deep-pink": "#FF0066",
      },
      backgroundImage: {
        "gradient-baby": "linear-gradient(135deg, #fff5f8 0%, #ffe8f2 50%, #ffc5db 100%)",
        "gradient-pink": "linear-gradient(135deg, #ffb3cb 0%, #ff8aad 100%)",
        "gradient-soft": "linear-gradient(135deg, rgba(255, 179, 203, 0.1) 0%, rgba(255, 138, 173, 0.05) 100%)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
      },
      boxShadow: {
        "soft": "0 2px 8px rgba(255, 107, 158, 0.15)",
        "soft-lg": "0 8px 24px rgba(255, 107, 158, 0.2)",
        "glow": "0 0 24px rgba(255, 107, 158, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
}
