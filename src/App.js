import React, { useState, useEffect } from 'react'

import ProductHunt from './Producthunt'
import { GlobalStyles } from './styles/GlobalStyle'
import { defaultTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import MobileView from './MobileView'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

 function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}







function App() {

  const {  width } = useWindowDimensions();

  return (
    <>
    <ThemeProvider theme={defaultTheme}>
       <GlobalStyles/>
       {
         width <= 900 ? <MobileView/> : <ProductHunt/> 
       }
       
    </ThemeProvider>
   
  
    </>
  );
}

export default App;
