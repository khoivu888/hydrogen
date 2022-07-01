module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            hr: {
              borderColor: theme('colors.gray.200'),
              borderTopWidth: '1px',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            'ol > li::before': {
              color: theme('colors.gray.900'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.900'),
            },
          },
        },
      }),
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
    },
    fontSize: {
      caption: ['12px', '20px'],
      body: ['14px', '20px'],
      heading: ['16px', '24px'],
      'title-6': ['18px', '28px'],
      'title-5': ['24px', '36px'],
      'title-4': ['32px', '44px'],
      'title-3': ['52px', '64px'],
      'title-2': ['72px', '92px'],
      'title-1': ['92px', '116px'],
    },
    textColor: {
      primary: '#FC6514',
      white: '#FFFFFF',
    },
    color: {
      primary: '#FC6514',
      white: '#FFFFFF',
    },
    backgroundColor: {
      primary: '#FC6514',
      white: '#FFFFFF',
    },
    borderColor: {
      primary: '#FC6514',
      white: '#FFFFFF',
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
