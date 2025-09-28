module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        accent: '#8B5CF6',
        soft: '#F8FAFC'
      },
      boxShadow: {
        'card': '0 10px 30px rgba(15,23,42,0.08)'
      }
    }
  },
  plugins: []
}
