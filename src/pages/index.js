import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from '../components/global';
import {
  Header,
  HeaderTitle,
  HeaderSubTitle,
  HeaderIconSection
} from '../components/header';
import {
  CardSection,
  Card,
  SectionHeader
} from '../components/section';
import { IconLink } from '../components/icon';
import { ContentWrapper } from '../components/layout';
import { ColoredSpan } from '../components/text';
import { main } from '../theme';
import { GitHub, Linkedin } from 'react-feather';

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

          <Header>
            <HeaderTitle>
              Hey, I'm <ColoredSpan color={main.colorBlueLight}>Bill</ColoredSpan>
            </HeaderTitle>
            
            <HeaderSubTitle>
              I develop software.
            </HeaderSubTitle>
            
            <HeaderSubTitle>
              You can tell because my website has a picture of a desk with a laptop on it just like every other dev's site.
            </HeaderSubTitle>

            <HeaderIconSection>
              <IconLink
                link='https://github.com/billearly'
                colorIcon='white'
                colorBackground='#ffffff4d'
                colorHover='white'
              >
                <GitHub />
              </IconLink>

              <IconLink
                link='https://www.linkedin.com/in/billearly/'
                colorIcon='white'
                colorBackground='#ffffff4d'
                colorHover='white'
              >
                <Linkedin />
              </IconLink>
            </HeaderIconSection>
          </Header>


          <ContentWrapper>
            <SectionHeader>
              Professional Work
            </SectionHeader>

            <CardSection>
              <Card>
              </Card>

              <Card>
              </Card>

              <Card>
              </Card>
            </CardSection>
          </ContentWrapper>

          <ContentWrapper>
            <SectionHeader>
              Personal Projects
            </SectionHeader>
            
            <CardSection>
              <Card
                title='billearly.github.io'
                body='This website'
              />

              <Card
                title='ISS Site'
                body='Track the position of the International Space Station and its relation to locations across the globe'
              />

              <Card
                title='Short Drive'
                body='A small game about driving mini cars in little worlds'
              />

              <Card
                title='Attention Passengers'
                body='Android game based on public transportation'
              />

              <Card
                title='True Task'
                body=''
              />

              <Card
                title='Stealth Prototype'
                body='Prototype for a PC game greatly inspired by Metal Gear Solid'
              />
            </CardSection>
          </ContentWrapper>
        </>
      </ThemeProvider>
    </>
  );
}
