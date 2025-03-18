import { createGlobalStyle } from "styled-components";
import { THEME } from "./../common/theme";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size:62.5%;
}

body{
    height: 100vh;
    background: linear-gradient(${THEME.color.background}, ${THEME.color.secondary});
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
}

h1, h2, {
    font-size: 6rem;
    color: ${THEME.color.header};
  }

 h3 {
    font-size: 4rem;
     color: ${THEME.color.secondary};
    }

  p {
    font-size: 3rem;
    color: ${THEME.color.text};
  }

  button{
  
  }

  .logo {
    width: 50%;
    justify-self: center;
  }

`;
