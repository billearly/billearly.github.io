import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from '../components';
import { HeaderContainer } from '../components/header';

export default () => {
  return (
    <>
      <Helmet>
        <title>Bill Early | Software Developer</title>
        <html lang="en" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
      </Helmet>

      <GlobalStyle />

      <HeaderContainer>
        <p>Bill Early,</p>
        <p>Software Developer</p>
      </HeaderContainer>
    </>
  );
}
