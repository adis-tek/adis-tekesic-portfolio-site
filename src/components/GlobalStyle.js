import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 1px solid red !important;
}
html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}
body{
    background: white;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
    padding: 1.2rem 4.3rem;
    background: #5fc9f8;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    border-radius: 20px;
    &:hover{
        transform: translate(0px, -7.5px);
    }
    h1 {
        font-family: "Rubik";
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
}
`;

export default GlobalStyle;