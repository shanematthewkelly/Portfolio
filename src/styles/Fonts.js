import { css } from "styled-components";
import Ubuntu from '@fonts/Ubuntu/Ubuntu-Light.ttf';
import Lato from '@fonts/Lato/Lato-Black.ttf';

const Fonts = css`
@font-face {
    font-family: 'Ubuntu';
    src: url(${Ubuntu}) format('truetype');
    font-style: normal;
    font-weight: 200;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${Lato}) format('truetype');
    font-style: normal;
  }
`;



export default Fonts;