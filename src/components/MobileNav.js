import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

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

const SidebarMenu = styled.aside`
  display: none;

  @media (max-width: 850px) {
    position: fixed;
    height: 100vh;
    width: min(75vw, 350px);
    top: 0;
    bottom: 0;
    right: 0;
    background-color: var(--secondaryColor);
    box-shadow: 0px 4px 8px 0px black;
    outline: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    visibility: ${({ openMenu }) => openMenu ? 'visible' : 'hidden'};
  }
`;

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuToggle = () => setOpenMenu(!openMenu);

  return (
    <>
      <MobileMenu>
        <Helmet>
          <body className={openMenu ? 'blur' : ''}></body>
        </Helmet>
        <Burger
          openMenu={openMenu}
          onClick={menuToggle}>
          <div className="burger">
            <div className="burger-middle" />
          </div>
        </Burger>
        <SidebarMenu openMenu={openMenu}>
        </SidebarMenu>
      </MobileMenu>
    </>
  )
}

export default MobileNav;