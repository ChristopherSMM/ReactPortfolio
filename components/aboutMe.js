import React from 'react';
import styled from 'styled-components';

// Styled components for styling
const AboutMeContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Avatar = styled.img`
  max-width: 200px;
  border-radius: 50%;
`;

const Bio = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <h2>About Me</h2>
      <Avatar src="/path/to/your/avatar.jpg" alt="Developer Avatar" />
      <Bio>
      My name is Christopher Martinez and I am a junior full stack web developer and i am looking to
     improve my skills and better understand how to properly use the 
      skills i have learned throughout the coding bootcamp that i have been a part of throughout this semester in ASU.
      My skills in coding as a developer include JavaScript, CSS,  and React.js,
      With the project i've developed i have come to better understand the development of apps.
      </Bio>
    </AboutMeContainer>
  );
};

export default AboutMe;