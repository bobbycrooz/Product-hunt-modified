import React from 'react';
import ProductHunt from './Producthunt'
import { GlobalStyles } from './styles/GlobalStyle'
import { defaultTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
       <GlobalStyles/>
       <ProductHunt/>
    </ThemeProvider>
   
  
    </>
  );
}

export default App;
