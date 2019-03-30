import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from '../components/global';
import { Temp } from '../components/temp';
import { main } from '../theme';

export default () => {
  return (
    <>
      <Helmet>
        <title>Bill Early | Software Developer</title>
        <html lang="en" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
      </Helmet>

      <ThemeProvider theme={main}>
        <>
          <GlobalStyle />

          <Temp />
        </>
      </ThemeProvider>
    </>
  );
}
