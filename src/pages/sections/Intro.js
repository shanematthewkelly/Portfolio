import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { RichText, PrimaryButton } from '@components/Mixins';
import { FadeInDown, FadeInUp } from '@components/Animations';
import styled from 'styled-components';
import loadable from '@loadable/component'

import HERO_SCENE from '../../scenes/hero/scene.json';
import '@styles/layout.scss';

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
  width: 40%;
  top: 40%;

  @media all and (max-width: 768px) {
    top: 40%;
    width: 100%;
  }
`;

const RichText1 = styled.h1`
  ${RichText};
  animation: ${FadeInDown} 2.0s ease-in forwards;
  color: rgb(55, 210, 117);
`;

const RichText2 = styled.span`
  ${RichText};
  animation: ${FadeInDown} 2.0s ease-in forwards;
  color: #fff;
`;

const Description = styled.h3`
  color: lightgrey;
  font-size: 1rem;
  text-align: center;
  animation: ${FadeInDown} 2.0s ease-in forwards;

  @media all and (max-width: 500px) {
    margin-top: 8px;
    font-size: 0.8rem;
  }
`;

const ContactButton = styled.div`
  ${PrimaryButton};
  margin-top: 3rem;
  width: 40%;
  animation: ${FadeInUp} 2.0s ease-in forwards;

  @media all and (max-width: 500px) {
    width: 50%;
}
`;

const NextScrollArrow = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 1.3rem;
  left: 48.5%;
`;

/** Loading React-Spline Client-Side in a seperate bundle (requires window object) */
const Spline = loadable(() =>
  import('react-spline')
    .then((res) =>
      res.Spline),
  { ssr: false }
);

const Intro = () => {

  return (
    <>
      <Spline scene={HERO_SCENE} id="hero" />

      <CenteredContainer>
        <HTMLContent>
          <RichText1>Hi
            <RichText2>, my name is Shane.</RichText2>
          </RichText1>
          {typeof window !== 'undefined' && window.innerWidth < 850 ?
            <Description>[ Drag finger to rotate ]</Description>
            :
            <Description>[ Drag mouse to rotate ]</Description>
          }
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