import * as React from "react"
import '../styles/layout.scss'


const IndexPage = () => (
  <>
    <div className="centered-container">
      <div className="hide"></div>
      <iframe src='https://my.spline.design/untitled-b29297043a1c6af210ecd66f1992ec99/' frameborder='0' width='100%' height='100%'></iframe>

      <div id="content">
        <h1 className="rich-text">Hi
          <span className="rich-text-2">, my name is Shane.</span></h1>
        <h3 className="desc-header">[ Drag mouse to rotate ]</h3>
      </div>
    </div>
  </>
)

export default IndexPage
