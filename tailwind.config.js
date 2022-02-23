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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // color: theme('colors.gray.800'),
            // ...
          },
        },
      }),

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
          "url('../src/assets/subscribe/desktop/image-hero-blackcup.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography', require('@tailwindcss/forms'))],
};
