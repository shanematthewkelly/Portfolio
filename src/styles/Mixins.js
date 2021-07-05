import { css } from 'styled-components';
import cursor from '@images/cursor.png';

export const PrimaryButton = css`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  border: 3px dashed var(--primaryColor);
  text-align: center;

  font-family: "Montserrat", sans-serif;
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
    color: var(--primaryColor);
    border-bottom: 2px dashed var(--primaryColor);
    padding-bottom: 6px;
    cursor: pointer;
}
`;

export const NavNums = css`
  text-transform: uppercase;
  font-size: 0.85rem;
  text-decoration: none;
  color: var(--primaryColor);
`;

export const SectionHeadings = css`
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 1.8rem;
`;

export const SectionNumbers = css`
  font-size: 1.8rem;
  text-decoration: none;
  color: var(--primaryColor);
`;

export const ScenePositioning = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;