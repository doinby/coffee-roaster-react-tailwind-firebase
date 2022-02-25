module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FEFCF7',
      black: '#333D4B',
      grey: '#83888F',
      'dark-cyan': '#0E8784',
      'dark-grey': '#333D4B',
      'pale-orange': '#FDD6BA',
      'light-cream': '#FEFCF7',
    },
    extend: {
      spacing: {
        'default-margin-x': '1.5rem',
      },

      backgroundImage: {
        // Home Page
        'home-hero-default':
          "url('../src/assets/home/mobile/image-hero-coffeepress.jpg')",

        // About Page
        'about-hero-default':
          "url('../src/assets/about/mobile/image-hero-whitecup.jpg')",
        'about-quality-default':
          "url('../src/assets/about/mobile/bg-quality.png')",

        // Subscribe Page
        'subscribe-hero-default':
          "url('../src/assets/subscribe/mobile/image-hero-blackcup.jpg')",

        // Shared between pages
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography', require('@tailwindcss/forms')),
    require('daisyui'),
  ],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
