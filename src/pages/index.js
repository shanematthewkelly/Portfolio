import * as React from "react";
import Nav from "@components/nav";

import '@styles/layout.scss';


const IndexPage = () => (
  <>
    <Nav />
    <div className="centered-container">
      <div className="hide"></div>
      <iframe src='https://my.spline.design/first-f22e5e1d3db67df39f06be265a5b906d/' frameborder='0' width='100%' height='100%'></iframe>      <div id="content">
        <h1 className="rich-text">Hi
          <span className="rich-text-2">, my name is Shane.</span></h1>
        <h3 className="desc-header">[ Drag mouse to rotate ]</h3>
      </div>
    </div>
  </>
)

export default IndexPage
