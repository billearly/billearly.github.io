import React from 'react';
import styled from 'styled-components';

export const WorkEntryContainer = styled.div`
  background-color: #ececec;
  border-radius: 0.3rem;
  display: grid;
  grid-column-gap: 3rem;
  grid-template-columns: 1fr 2fr;
  margin: 4rem -2rem;
  padding: 2rem;
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

const BulletList = styled.ul`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  box-shadow: #cecece 0px 0.02rem 0.5rem;
  margin-bottom: 0;
  padding: 1rem;
  padding-left: 2rem;

`;

const BulletItem = styled.li`
  margin: 0.5rem;
`;

const renderBulletPoints = bulletPoints =>
  bulletPoints.map((point, i) =>
    <BulletItem key={i}>
      {point}
    </BulletItem>
  );

export const WorkEntry = ({
  jobTitle,
  company,
  timeline,
  description,
  bulletPoints,
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

      <div>
        <Description>{description}</Description>

        {bulletPoints &&
          <BulletList>
            {renderBulletPoints(bulletPoints)}
          </BulletList>
        }
      </div>
    </WorkEntryContainer>
  );
}
