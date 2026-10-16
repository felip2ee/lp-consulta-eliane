/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#063A29', // esmeralda profundo (superfícies)
        secondary: '#105B41', // esmeralda mais claro (cards)
        accent: '#DCA452', // dourado
        accentHover: '#C48D3F', // dourado escuro (hover)
        background: '#04281C', // fundo da página
        dark: '#02150E', // quase preto esverdeado
        ivory: '#F3EEE4', // marfim: texto no escuro e seções claras
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
      },
      maxWidth: {
        page: '72rem',
        prose: '38rem',
      },
      boxShadow: {
        gold: '0 20px 60px -20px rgba(220, 164, 82, 0.35)',
      },
    },
  },
  plugins: [],
}
