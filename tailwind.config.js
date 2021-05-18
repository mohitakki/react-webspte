module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#e5e6e8',
      },
      amber: {
        darkest: '#F59E0B',
        dark: '#FCD34D',
        DEFAULT: '#FBBF24',
        light: '#FDE68A',
        lightest: '#fff1ce',
      },
      green: {
        darkest: '#047857',
        dark: '#059669',
        DEFAULT: '#10B981',
        light: '#6EE7B7',
        lightest: '#A7F3D0',
      },
    }
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
