import React from 'react';
import styled from 'styled-components';

const Expander = styled.div`
  background-color: ${props => props.colorHover};
  border-radius: 50%;
  height: 75%;
  opacity: 0;
  position: absolute;
  transition: opacity 0.25s, height 0.25s, width 0.25s;
  transition-timing-function: ease-out;
  width: 75%;

  &:hover {
    height: 100%;
    opacity: 0.2;
    width: 100%;
  }
`;

export const Link = styled.a`
  align-items: center;
  background-color: ${props => props.colorBackground};
  border-radius: 50%;
  display: inline-flex;
  height: 3.5rem;
  justify-content: center;
  position: relative;
  transition: background-color 0.15s;
  width: 3.5rem;

  &:visited {
    color: ${props => props.theme.colorWhite};
  }

  & > svg {
    color: ${props => props.colorIcon};
  }
`;

export const IconLink = ({
  link,
  colorIcon,
  colorBackground,
  colorHover,
  children
}) => {
  return (
    <Link
      href={link}
      colorIcon={colorIcon}
      colorBackground={colorBackground}
    >
      {children}
      
      <Expander
        colorHover={colorHover}
      />
    </Link>
  );
}
