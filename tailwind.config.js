/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E63946',
          dark: '#D62839',
        },
        navy: '#1D3557',
        muted: '#457B9D',
        mint: '#F1FAEE',
        secondary: {
          DEFAULT: '#002395',
          light: '#3457D5',
        },
        cream: '#F8F5F2',
        text: {
          main: '#1E293B',
          secondary: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'button': '16px',
        'chip': '12px',
        'input': '16px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'cta': '0 4px 14px rgba(230, 57, 70, 0.3)',
        'card': '0 8px 24px rgba(0, 35, 149, 0.15)',
        'button': '0 4px 12px rgba(255, 71, 87, 0.4)',
      },
      backgroundImage: {
        'avatar-gradient': 'linear-gradient(135deg, #ff6b81, #ff4757)',
        'badge-gradient': 'linear-gradient(90deg, #002395, #ed2939)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}

