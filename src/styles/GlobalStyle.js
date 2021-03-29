import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background: #F2F2F2;
        color: ${({theme})=> theme.textColor};
        position:relative;
        height:100vh;
        transition: all 0.25s linear;
        font-family: 'Nunito Sans', sans-serif;

    }

    .active{
        visibility:visible;
       opacity:1;
    }

    

`