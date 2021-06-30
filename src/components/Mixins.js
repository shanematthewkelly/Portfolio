import { css } from 'styled-components';

export const PrimaryButton = css`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  border: 3px dashed rgb(55, 210, 117);;
  text-align: center;

  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  cursor: pointer;

  @media all and (max-width: 400px) {
    font-size: 0.8rem;
  }

  &:hover {
    background-color: rgba(55, 210, 117, 0.082);
  }

`;

export const IconTheme = css`
  color: rgb(55, 210, 117);
  font-size: 2rem;
  margin-right: 1rem;

  @media all and (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

export const HideOnMobile = css`
  @media all and (max-width: 850px) {
    display: none;
  }
`;

export const RichText = css`
  font-size: 3rem;
  text-align: center;

  @media all and (max-device-width: 500px) {
    font-size: 1.8rem;
}
`;

export const NavText = css`
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 0.85rem;
  text-transform: uppercase;

  &:hover {
    color: rgb(55, 210, 117);
    border-bottom: 2px dashed rgb(55, 210, 117);;
    padding-bottom: 6px;
    cursor: pointer;
}
`;

export const NavNums = css`
  font-family: "Orbitron" sans-serif !important;
  text-transform: uppercase;
  font-size: 0.85rem;
  text-decoration: none;
  color: rgb(55, 210, 117);
`;