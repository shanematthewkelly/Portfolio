import React from "react";

import Navbar from "@components/Navbar";
import Intro from "@pages/Intro";
import About from "@sections/About";
import Work from "@sections/Work";
import Experience from "@sections/Experience";
import Contact from "@sections/Contact";

import '@styles/layout.scss';

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Intro />

      <section id="about">
        <About />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default IndexPage
