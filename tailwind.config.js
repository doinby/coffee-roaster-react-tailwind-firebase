module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-hero-default':
          "url('../src/assets/home/mobile/image-hero-coffeepress.jpg')",
        'about-hero-default':
          "url('../src/assets/about/mobile/image-hero-whitecup.jpg')",
        'about-quality-default':
          "url('../src/assets/about/mobile/bg-quality.png')",
      },
    },
  },
  plugins: [],
};
