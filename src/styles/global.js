import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.DARK_400};
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};    
    
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font-family: ${({ theme }) => theme.FONTS.Primary};
    font-size: 1.6rem;
    outline: none;
  }

  button, a {
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
  }
  button:hover, a:hover {
    filter: brightness(0.9);
  }
`
  
