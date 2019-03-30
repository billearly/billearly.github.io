import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-image: radial-gradient(#0a0a0a 55%,#000000 95%);
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const Text = styled.p`
  color: ${props => props.theme.colorWhite};
  margin: ${props => props.theme.textSpacing} 0;
`;

const OrangeText = styled(Text)`
  color: ${props => props.theme.colorOrange};
`;

export const Temp = () => {
  return (
    <Container>
      <div>
        <Text>What is this?</Text>
        <OrangeText>This is my site</OrangeText>
        <Text>Its not very good</Text>
        <OrangeText>I know, I'm working on it</OrangeText>
      </div>
    </Container>
  );
};
