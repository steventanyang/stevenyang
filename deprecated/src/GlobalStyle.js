import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Source Code Pro', monospace;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Source Code Pro', monospace;
  }

  p {
    font-family: 'Source Code Pro', monospace;
  }
`;

export default GlobalStyle;
