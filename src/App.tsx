
import  {useState} from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Global } from '@mantine/core';

import DashboardApp from './view/DashboardApp'; 

const App = () => {
  const [colorScheme, setColorScheme] =  useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ 
        colorScheme,
        fontFamily: 'Manrope, sans-serif',
        fontFamilyMonospace: 'Manrope, sans-serif',
        headings: { fontFamily: 'Manrope, sans-serif' },
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1275,
          xl: 1800,
        },
        colors: {
            // override dark colors here to change them for all components
            dark: [
              '#d5d7e0',
              '#acaebf',
              '#8c8fa3',
              '#666980',
              '#4d4f66',
              '#34354a',
              '#2b2c3d',
              '#1d1e30',
              '#0c0d21',
              '#ffffff',
            ],
            brand: [
            '#425EBE', 
            '#425EBE', 
            '#F7F8FA', 
            '#8E9AA0', 
            '#2D363A', 
            '#425EBE', 
            '#425EBE', 
            '#425EBE', 
            '#425EBE',
            '#425EBE',
          ],
        },
        primaryColor: 'brand',
    }} 
    withGlobalStyles
    withNormalizeCSS
    >
        <Global
          styles={(theme) => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
            },
            body: {
              margin: 0
            },
          })}
        />
        <DashboardApp />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App



