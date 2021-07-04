import React, { useState } from "react";
import styled from "styled-components";

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: block;
  }
`;

const Burger = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: flex;
    position: relative;
    right: 5px;
    z-index: 5;
    padding: 15px;
    background-color: transparent;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
    &:hover {
    border: dashed 2px var(--primaryColor);
    }
  }
  .burger {
    display: inline-block;
    position: relative;
    width: var(--burger-width);
    height: 24px;
  }
  .burger-middle {
    position: absolute;
    top: 50%;
    width: var(--burger-width);
    height: 2px;
    border-radius: 4px;
    background-color: var(--primaryColor);
    
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${({ openMenu }) => openMenu ? `0.12` : `0deg`};
    transform: rotate(${({ openMenu }) => openMenu ? `225deg` : `0deg`});
    transition-timing-function: cubic-bezier(
      ${({ openMenu }) => openMenu ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      width: var(--burger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--primaryColor);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${({ openMenu }) => openMenu ? `100%` : `120%`};
      top: ${({ openMenu }) => openMenu ? `0` : `-10px`};
      opacity: ${({ openMenu }) => openMenu ? 0 : 1};
      transition: ${({ openMenu }) =>
    openMenu ? 'var(--burger-before-active)' : 'var(--burger-before)'};
    }
    &:after {
      width: ${({ openMenu }) => openMenu ? `100%` : `80%`};
      bottom: ${({ openMenu }) => openMenu ? `0` : `-10px`};
      transform: rotate(${({ openMenu }) => openMenu ? `-90deg` : `0`});
      transition: ${({ openMenu }) => (openMenu ? 'var(--burger-after-active)' : 'var(--burger-after)')};
    }
}
`;

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <MobileMenu>
        <Burger
          openMenu={openMenu}
          onClick={() => setOpenMenu(!openMenu)}>
          <div className="burger">
            <div className="burger-middle" />
          </div>
        </Burger>
      </MobileMenu>
    </>
  )
}

export default MobileNav;