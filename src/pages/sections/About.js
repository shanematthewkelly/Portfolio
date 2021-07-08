import React from 'react';
import styled from 'styled-components';

import { StaticImage } from 'gatsby-plugin-image';
import { SectionHeadings, SectionNums } from '@styles/Mixins';
import { PrimaryButton } from '@styles/Mixins';
import { Grid, GridItem } from '@components/Layout';

import Carousel from '@components/Swiper';

/**
 *  @ignore
*/
export const Section = styled.div`
  ${PrimaryButton};
  margin-top: 3rem;
  width: 40%;

  @media all and (max-width: 500px) {
    width: 50%;
}
`;

const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 3rem;

    @media all and (max-width: 600px) {
        padding-left: 2rem;
    }
`;

const StyledInfo = styled.div`

 p {
    padding-top: 15px;
    font-size: 1.1rem;
    line-height: 1.6rem;
    font-family: 'Ubuntu';
    color: lightgrey;

    a {
        color: var(--primaryColor);
        text-decoration: none;
    }
  }
`;

const StyledPhoto = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    @media all and (max-width: 600px) {
        margin-top: 40px;
    }

    .wrapper {
        border: var(--border);
        height: 305px;
        width: 304px;

        @media all and (max-width: 600px) {
            height: 250px;
            width: 250px;
        }
    }

    .about-photo {
        margin-left: -30px;
        margin-top: -30px;
        box-shadow: var(--box-shadow);
        transition: 0.5s ease-in-out;

        @media all and (max-width: 600px) {
            width: 246px;
        }

        &:hover {
            transform:translate(30px,30px);
            transition: transform 0.5s ease-in-out;
            box-shadow: none;
        }
    }
`;

const HeadingNum = styled.div`
    ${SectionNums}
`;

const Heading = styled.span`
    ${SectionHeadings}
`;

const About = () => {
    const IADT = 'https://iadt.ie/'

    return (
        <>
            <Grid>
                <GridItem>
                    <AboutContainer>
                        <StyledInfo>
                            <HeadingNum>01. ---------------------------------</HeadingNum>
                            <Heading>About <br /> <span style={{ color: `var(--primaryColor)` }}>Me. </span></Heading>
                            <br />

                            <div>
                                <p>Hey! My name is Shane and I am a young, enthusiastic software
                                    engineer based in Dublin, Ireland. I have just graduated from college
                                    with a Bachelors First-Class Honours degree in Creative Computing at
                                    <a href={IADT}> IADT.</a></p>

                                <p>Below are some frameworks, technologies and tools I have experience with.</p>
                            </div>
                        </StyledInfo>
                        <div>
                            <Carousel />
                        </div>
                    </AboutContainer>
                </GridItem>

                <GridItem>
                    <StyledPhoto>
                        <div className="wrapper">
                            <StaticImage
                                src='../../images/shane.jpg'
                                className="about-photo"
                                width={300}
                                quality={95}
                                alt="ShanePhoto"
                            />
                        </div>
                    </StyledPhoto>
                </GridItem>
            </Grid>
        </>
    )
}

export default About;