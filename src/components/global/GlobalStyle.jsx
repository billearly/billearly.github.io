import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colorWhite};
    color: ${props => props.theme.colorGrayDark};
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;
