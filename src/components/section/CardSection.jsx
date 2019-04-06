import React from 'react';
import styled from 'styled-components';

const CardSectionContainer = styled.section`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;

  @media only screen and (max-width: 65rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 45rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`;

export const CardSection = ({ children }) => {
  return (
    <CardSectionContainer>
      {children}
    </CardSectionContainer>
  );
}
