import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Title, SecondaryTitle, PrimaryButton } from '@styles/Mixins';
import styled from 'styled-components';
import loadable from '@loadable/component'
import HERO_SCENE from '@scenes/hero/scene.json';

import { FadeIn, FadeInUp, FadeInDown } from '@animations/Animations';

const ContentAnimation = styled.div`
  animation: ${FadeInDown} 2s ease-in forwards;
`;

const CenteredContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

const HTMLContent = styled.div`
  text-align: center;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50%;
  top: 30%;

  @media all and (max-width: 1200px) {
    width: 100%;
    top: 40%;
  }
`;

const Name = styled.span`
  ${Title};
  color: #fff;
`;

const Stack = styled.h1`
  ${SecondaryTitle}
  color: rgb(55, 210, 117);
`;

const ContactButton = styled.div`
  ${PrimaryButton};
  margin-top: 3rem;
  width: 40%;
  animation: ${FadeInUp} 2s ease-in forwards;


  @media all and (max-width: 500px) {
    width: 50%;
}
`;

const NextScrollArrow = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 1.3rem;
  left: 48.5%;
  animation: ${FadeIn} 2s ease-in forwards;

  @media all and (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

/** Loading 'React-Spline' client-side in a seperate bundle with loadable components (requires window object) */
const Spline = loadable(() =>
  import('react-spline')
    .then((res) =>
      res.Spline),
  { ssr: false }
);

const Intro = () => {

  return (
    <>
      <CenteredContainer>
        <Spline scene={HERO_SCENE} id="hero" />
        <HTMLContent>
          <ContentAnimation>
            <Name>Shane Kelly</Name>
            <Stack>Full-Stack Developer</Stack>
          </ContentAnimation>
          <ContactButton>Get in touch</ContactButton>
        </HTMLContent>

        <NextScrollArrow>
          <a href="#about">
            <FontAwesomeIcon className="icon" icon={faChevronDown} />
          </a>
        </NextScrollArrow>
      </CenteredContainer>
    </>
  )
}

export default Intro;