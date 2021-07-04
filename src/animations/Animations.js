import styled, { keyframes } from 'styled-components';

/** Animations */
export const FadeIn = keyframes`
from {
  opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const FadeInDown = keyframes`
  0% {
    opacity: 0;
      transform: translateY(-30px);
  }

  100% {
    opacity: 1;
      transform: translateY(0);
  }
`;

export const FadeInUp = keyframes`
  0% {
    opacity: 0;
      transform: translateY(+20px);
  }

  100% {
    opacity: 1;
      transform: translateY(0);
  }
`;

