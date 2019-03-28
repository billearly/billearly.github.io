import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
  p {
    margin: 0;
  }
`;