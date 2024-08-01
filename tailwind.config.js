/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all your React component files
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'background': "url('./assets/mask.svg')",
        'background2': "url('./assets/food-recipe.svg')",
      },
      extend: {
        textDecoration: {
          'line-through': 'line-through',
        },
      },
    },
  },
  plugins: [],
};
