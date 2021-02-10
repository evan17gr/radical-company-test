import { createGlobalStyle } from 'styled-components';
import Calibre from "./Fonts/Calibre/Calibre-Medium.otf";
import Calibre2 from "./Fonts/Calibre/Calibre-Regular.otf";
import Futura from "./Fonts/Futura bk bt/futura-bk-bt BOOK/FuturaBookBT.ttf";
 

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Calibre-Medium';
        src: url(${Calibre}) format('truetype');
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Calibre-Regular';
        src: url(${Calibre2}) format('truetype');
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Futura';
        src: url(${Futura}) format('truetype');
        font-style: normal;
        font-display: auto;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    body{
        height:100vh;
    }

    h1{
        font-family: 'Calibre-Medium';
        font-size:54px;
        color:#044B35;
    }

    h2{
        font-family: 'Calibre-Medium';
        font-size:45px;
        color:#044B35;
    }

    h3{
        font-family: 'Calibre-Medium';
        font-size:16px;
    }

    p {
        font-family: 'Futura';
        font-size:18px;
        color:#333333;
    }

    figcaption p {
        font-family: 'Calibre-Regular';
        font-size:16px;
    }

    a{
        color:#044B35;
        text-align:center;
        cursor:pointer;
        font-size:14px;
        font-family: 'Calibre-Medium';
    }

    input, select {
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        outline: none;
        border-color:#2ADBCA;
        font-family: 'Calibre-Regular';
        font-size:35px;
        color:#044B35;
    } 

`;
 
export default GlobalStyle;