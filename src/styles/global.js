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
    background: ${({ theme }) => theme.GRADIENTS.BACKGROUND_200};
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    font-family:${({ theme }) => theme.FONTS.Primary};
    font-size: 1.6rem;

    -webkit-font-smoothing: antialiased;
  }
  
`
