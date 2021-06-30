import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { RichText, PrimaryButton } from '@components/Mixins';
import version from '@images/versioning.png'
import '@styles/layout.scss';

const CenteredContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  z-index: 0;
`;

const AppVersion = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 130px;
  margin-left: -25px;
  margin-top: -20px;
  z-index: 10;

  @media all and (max-width: 400px) {
    width: 90px;
    margin-left: -15px;
    margin-top: -15px;
  }
`;

const HideSpline = styled.div`
  position: absolute;
  background-color: rgb(25, 25, 25);
  height: 50px;
  width: 50px;
  right: 0;
  bottom: 0;
`;

const LoadSpline = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
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
  top: 45%;

  @media all and (max-width: 768px) {
    top: 40%;
    width: 100%;
  }
`;

const RichText1 = styled.h1`
  ${RichText};
  color: rgb(55, 210, 117);
`;

const RichText2 = styled.span`
  ${RichText};
  color: #fff;
`;

const Description = styled.h3`
  color: lightgrey;
  font-size: 1rem;
  text-align: center;

  @media all and (max-width: 500px) {
    margin-top: 8px;
    font-size: 0.8rem;
  }
`;

const ContactButton = styled.div`
  ${PrimaryButton};
  margin-top: 3rem;
  width: 40%;

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

const Intro = () => {
    return (
        <CenteredContainer>
            <AppVersion src={version} />
            <HideSpline />
            <LoadSpline src='https://my.spline.design/untitled-2e527db8a1daad763bf5446f9a024746/' />

            <HTMLContent>
                <RichText1>Hi
                    <RichText2>, my name is Shane.</RichText2>
                </RichText1>
                <Description>[ Drag mouse to rotate ]</Description>
                <ContactButton>Get in touch</ContactButton>
            </HTMLContent>

            <NextScrollArrow>
                <a href="#about">
                    <FontAwesomeIcon className="icon" icon={faChevronDown} />
                </a>
            </NextScrollArrow>
        </CenteredContainer>
    )
}

export default Intro;