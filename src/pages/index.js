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
  SectionHeader,
  WorkEntry
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
              Experience
            </SectionHeader>

            <WorkEntry
              jobTitle='Software Developer'
              company='Labs at EF Education First'
              timeline='January 2018 - Present'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              color='#ea6161'
            />

            <WorkEntry
              jobTitle='QA Specialist'
              company='Labs at EF Education First'
              timeline='Oct 2014 - Jan 2018'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              bulletPoints={[
                'Created automated UI test infrastructure using Webdriverio and Selenium',
                'Integrated tests with build tools (Teamcity) to run tests remotely on Browserstack'
              ]}
              color='#ea6161'
            />

            <WorkEntry
              jobTitle='Junior QA Specialist'
              company='Labs at EF Education First'
              timeline='March 2013 - Oct 2014'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              bulletPoints={[
                'Testing of responsive websites across mobile/tablet/desktop',
                'Manual testing of new features as well as full site regressions',
                'Coordinating with developers and designers in an agile environment'
              ]}
              color='#ea6161'
            />

            <WorkEntry
              jobTitle='In Game Support'
              company='Turbine | WB Games Boston'
              timeline='November 2012 - March 2013'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              bulletPoints={[
                'Worked directly with users to resolve game quality issues',
                'Coordinated with the development team to track recurring issues'
              ]}
              color='#ea6161'
            />

            <WorkEntry
              jobTitle='QA Tester'
              company='Turbine | WB Games Boston'
              timeline='February 2012 - October 2012'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              bulletPoints={[
                'Writing Content Testplans for upcoming updates',
                'Testing new content and systems to determine if quality standards are met',
                'Investigating player reported issues'
              ]}
              color='#ea6161'
            />
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
