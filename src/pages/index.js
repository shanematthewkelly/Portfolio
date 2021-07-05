import React from "react";
import styled from "styled-components";

import Navbar from "@components/Navbar";
import Intro from "@sections/Intro";
import About from "@sections/About";
import Work from "@sections/Work";
import Experience from "@sections/Experience";
import Contact from "@sections/Contact";
import Globals from "@styles/Globals";

const AppSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const GridSection = styled.section`
  min-height: 100vh;
  width: 100%;
  color: #fff;
`;

const IndexPage = () => {
  return (
    <>
      <Globals />
      <Navbar />
      <div id="app-content">
        <AppSection id="intro">
          <Intro />
        </AppSection>

        <GridSection id="about">
          <About />
        </GridSection>

        <AppSection id="work">
          <Work />
        </AppSection>

        <AppSection id="experience">
          <Experience />
        </AppSection>

        <AppSection id="contact">
          <Contact />
        </AppSection>
      </div>
    </>
  )
}

export default IndexPage
