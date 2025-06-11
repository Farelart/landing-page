module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulsate: {
          '0%': { transform: 'scale(0.9)', opacity: 1 },
          '50%': { transform: 'scale(1.2)', opacity: 0.7 },
          '100%': { transform: 'scale(1.5)', opacity: 0 }
        }
      },
      animation: {
        pulsate: 'pulsate 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  }
}