import { css } from "styled-components";
import Montserrat from '@fonts/Montserrat/Montserrat-Medium.ttf'

const Fonts = css`
@font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('truetype');
    font-style: normal;
    weight: 500;
  }
`;

export default Fonts;