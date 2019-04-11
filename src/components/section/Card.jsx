import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${props => props.theme.colorWhite};
  border-radius: 0.4rem;
  box-shadow: #0000001f 0px 0.06em 0.5em;
  height: 14rem;
  padding: 1rem;
`;

export const Card = ({ title, body }) => {
  return (
    <CardContainer>
      <p>{title}</p>
      <p>{body}</p>
    </CardContainer>
  );
};
