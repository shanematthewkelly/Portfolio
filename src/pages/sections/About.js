import React from 'react';
import styled from 'styled-components';

import {
    SectionNumbers,
    SectionHeadings,
    ScenePositioning
}
    from '@styles/Mixins';
import { PrimaryButton } from '@styles/Mixins';
import { Grid, GridItem } from '@components/Layout';

import ABOUT_SCENE from '@scenes/about/scene.json';
import loadable from '@loadable/component';

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
`;

const StyledInfo = styled.div`

 p{
    padding-top: 10px;
    font-family: 'Montserrat';
    line-height: 25px;
  }

 ul.tech-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      /* font-family: 'Montserrat'; */
      font-size: 0.9rem;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--primaryColor);
        font-size: 1rem;
        line-height: 12px;
      }
    }
  }
`;

const HeadingNum = styled.h1`
    ${SectionNumbers}
`;

const Heading = styled.span`
    ${SectionHeadings}
`;

const SplineDesktopScene = styled.div`
    ${ScenePositioning}
`;

const Spline = loadable(() =>
    import('react-spline')
        .then((res) =>
            res.Spline),
    { ssr: false }
);

const About = () => {
    const techs = ['Dart', 'Android', 'React', 'Node', 'Express', 'Vue', 'Laravel', 'Wordpress']

    return (
        <>
            <Grid>
                <GridItem>
                    <AboutContainer>
                        <StyledInfo>
                            <div>
                                <HeadingNum>01.&nbsp;<Heading>About Me</Heading></HeadingNum>
                            </div>
                            <br />

                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Nam egestas orci et iaculis iaculis. Nunc
                                    accumsan augue a mauris mollis egestas.</p>

                                <p>Nam non nulla ullamcorper, dictum mauris et, mattis
                                    ligula. Quisque convallis mattis dolor vel tempor.</p>

                                <p>Vestibulum ac quam mollis, volutpat est nec, vulputate
                                    erat. Suspendisse potenti. Vestibulum faucibus dui
                                    tortor. In aliquet luctus sapien et facilisis.</p>
                            </div>

                            <ul className="tech-list">
                                {techs && techs.map((techs, i) => <li key={i}>{techs}</li>)}
                            </ul>
                        </StyledInfo>
                    </AboutContainer>
                </GridItem>

                <GridItem>
                    <SplineDesktopScene>
                        <Spline scene={ABOUT_SCENE} id="about-spline" />
                    </SplineDesktopScene>
                </GridItem>
            </Grid>
        </>
    )
}

export default About;