import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        background: #F2F2F2;
        color: ${({theme})=> theme.textColor};
        position:relative;
        height:385vh;
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        transition: all 0.25s linear;

    }

    .active{
        visibility:visible;
       opacity:1;
    }

    

`