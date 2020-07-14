const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#efefef',
    heading: '#222',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#1000EE',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#010110',
    heading: '#fff',
    text: '#efefef',
    preFormattedText: '#000',
    link: '#FF6100',
  },
};

export { lightTheme, darkTheme };
