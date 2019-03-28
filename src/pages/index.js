import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from '../components';
import { Temp } from '../components/temp';

export default () => {
  return (
    <>
      <Helmet>
        <title>Bill Early | Software Developer</title>
        <html lang="en" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
      </Helmet>

      <GlobalStyle />

      <Temp />
    </>
  );
}
