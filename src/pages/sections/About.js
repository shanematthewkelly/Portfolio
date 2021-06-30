import React from 'react';
import styled from 'styled-components';

import { PrimaryButton } from '@components/Mixins';

export const Section = styled.div`
  ${PrimaryButton};
  margin-top: 3rem;
  width: 40%;

  @media all and (max-width: 500px) {
    width: 50%;
}
`;

const About = () => {
    return (
        <>
            <Section>About section</Section>
            {/* <div className="in-touch-btn">About section</div> */}
        </>
    )
}

export default About;