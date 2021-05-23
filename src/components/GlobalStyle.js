import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //outline: 1px solid red !important;
    color: rgba(5, 5, 5, 1);
    font-family: 'Roboto', sans-serif;
}

a {
    text-decoration: none;
}
html, body {
    overflow-x: hidden;
    @media (max-width: 1700px){
        font-size: 75%;
    }
}

body {
    position: relative;
}

`;

export default GlobalStyle;