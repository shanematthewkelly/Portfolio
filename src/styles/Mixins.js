import { css } from 'styled-components';
import cursor from '@images/cursor.png';

export const PrimaryButton = css`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  border: var(--border);
  text-align: center;

  font-family: "Lato", sans-serif;
  text-decoration: none;
  color: white;
  cursor: url(${cursor}), pointer;
  text-transform: uppercase;

  @media all and (max-width: 400px) {
    font-size: 0.8rem;
  }

  &:hover {
    background-color: var(--button-hover);
  }

`;

export const IconTheme = css`
  color: var(--primaryColor);
  font-size: 2rem;
  margin-right: 1rem;

  @media all and (max-width: 850px) {
    font-size: 1.6rem;
  }
`;

export const HideOnMobile = css`
  @media all and (max-width: 850px) {
    display: none;
  }
`;

export const RichText = css`
  font-family: "Lato", sans-serif;
  font-size: 3rem;
  text-align: center;

  @media all and (max-device-width: 500px) {
    font-size: 1.8rem;
}
`;

export const NavText = css`
  font-family: "Ubuntu", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 0.9rem;
  text-transform: uppercase;

  &:hover {
    color: var(--primaryColor);
    border-bottom: var(--border);
    padding-bottom: 6px;
    cursor: pointer;
}
`;

export const NavNums = css`
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-size: 0.85rem;
  text-decoration: none;
  color: var(--primaryColor);
`;

export const SectionHeadings = css`
  font-family: 'Lato'; 
  text-decoration: none;
  color: white;
  font-size: 3.5rem;
  text-align: start;

  @media all and (max-width: 650px) {
        font-size: 3.0rem ;
        }
`;

export const SectionNums = css`
  font-family: 'Lato'; 
  text-decoration: none;
  color: var(--primaryColor);
  font-size: 1.2rem;
  text-align: start;

  @media all and (max-width: 650px) {
        font-size: 1rem !important;
        }
`;

export const ScenePositioning = css`
  width: 140%;
  height: 140%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;