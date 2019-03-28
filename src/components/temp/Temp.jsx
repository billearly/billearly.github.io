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
  color: #ffffff;
  margin: 0.25rem 0;
`;

const OrangeText = styled(Text)`
  color: #ffa500;
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
