import 'intersection-observer';
import 'object-fit-images';

import React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { ContentWrapper } from '../layout';

const BackgroundSection = ({ className, children }) => (
  <StaticQuery query={graphql`
    query {
      desktop: file(relativePath: { eq: "desk.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `}
   render={data => {
     const imageData = data.desktop.childImageSharp.fluid
     return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
     )
   }
   }
  />
);

const StyledBackground = styled(BackgroundSection)`
  color: ${props => props.theme.colorWhite};
  height: 80vh;
  overflow: hidden;
  position: relative;

  ${ContentWrapper} {
    padding-top: 12.5rem;
  }
`;

const AngledDiv = styled.div`
  background-color: ${props => props.theme.colorGrayLight};
  bottom: -5rem;
  height: 10rem;
  left: -50%;
  position: absolute;
  transform: rotate(-3deg);
  width: 200%;
`;

export const Header = ({ children }) => {
  return (
    <StyledBackground>
      <ContentWrapper>
        <div>
          {children}
        </div>
      </ContentWrapper>

      <AngledDiv />
    </StyledBackground>
  );
}
