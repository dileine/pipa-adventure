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

  div{
    font-size:2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }

  p {
    font-size: 3rem;
    color: ${THEME.color.text};
  }

  a{
  font-size: 2rem;
   color: green;
  
  }

  button{
    font-size: 2rem;
    color: ${THEME.color.text};
    border: none;
    border-radius: 25px;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        background: ${THEME.color.primary};
    }
  }

  .logo {
    width: 50%;
    justify-self: center;
  }

  .container{
  margin: 5rem;
  border: 2px solid ${THEME.color.text};
  border-radius: 10px;
  padding: 2rem;
  background-color: ${THEME.color.background};

`;
