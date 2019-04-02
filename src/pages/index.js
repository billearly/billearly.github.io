import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from '../components/global';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderSubTitle
} from '../components/header';
import { ColoredSpan } from '../components/text';
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

          <HeaderContainer>
            <HeaderTitle>
              Hey, I'm <ColoredSpan color={main.colorBlueLight}>Bill</ColoredSpan>
            </HeaderTitle>
            
            <HeaderSubTitle>
              I develop software.
            </HeaderSubTitle>
            
            <HeaderSubTitle>
              You can tell because my website has a picture of a desk with a laptop on it just like every other dev's site.
            </HeaderSubTitle>
          </HeaderContainer>
        </>
      </ThemeProvider>
    </>
  );
}
