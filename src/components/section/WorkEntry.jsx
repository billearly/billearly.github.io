import React from 'react';
import styled from 'styled-components';

export const WorkEntryContainer = styled.div`
  display: grid;
  grid-column-gap: 3rem;
  grid-template-columns: 1fr 2fr;
  margin: 5rem 0;
`;

const JobTitle = styled.h3`
  border-left: 0.25rem solid ${props => props.color};
  font-size: 2rem;
  margin-bottom: 0.5rem;
  margin-left: -0.75rem;
  margin-top: 0;
  padding-left: 0.5rem;
`;

const Company = styled.p`
  margin-bottom: 0.25rem;
  margin-top: 1rem;
`;

const Timeline = styled.p`

`;

const Description = styled.p`

`;

export const WorkEntry = ({
  jobTitle,
  company,
  timeline,
  description,
  color
}) => {
  return (
    <WorkEntryContainer>
      <div>
        <JobTitle color={color}>
          {jobTitle}
        </JobTitle>
        <Company>{company}</Company>
        <Timeline>{timeline}</Timeline>
      </div>

      <Description>{description}</Description>
    </WorkEntryContainer>
  );
}
