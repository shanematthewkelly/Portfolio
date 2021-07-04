import React, { useEffect, useState } from 'react';
import { NavText, NavNums, HideOnMobile, IconTheme } from '@styles/Mixins';
import MobileNav from '@components/MobileNav';

import styled from 'styled-components';

const Nav = styled.nav`
  box-shadow: ${({ navScroll }) =>
    (navScroll ? 'var(--nav-scroll-shadow)' : '')};
  background-color: ${({ navScroll }) =>
    (navScroll ? 'var(--nav-scroll);' : 'transparent')};
  transition: ${({ navScroll }) =>
    (navScroll ? '0.3s ease-in' : '0.3s ease-out')}; 
    backdrop-filter: ${({ navScroll }) =>
    (navScroll ? 'blur(10px)' : 'none')}; 
    
  top: 0;
  width: 100vw;
  position: fixed;
  height: 4.5rem;
  z-index: 2;
  @media all and (max-width: 768px) {
    height: 4.2rem;
  }
`;

const NavContainer = styled.ul`
  padding: 1.7rem 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  @media all and (max-width: 768px) {
    padding: 0.0rem 0;
  }
`;

const NavItem = styled.li`
  list-style: none;
  margin-right: 3rem;
  @media all and (max-width: 768px) {
        margin-right: 0;
      }
`;

const AppLogo = styled.li`
  margin-right: auto;
  margin-left: 2rem;
  list-style: none;
  ${NavText}
`;

const NavbarText = styled.span`
  ${NavText}
`;

const NavbarNum = styled.a`
  ${HideOnMobile}
  ${NavNums}
`;

const MobileMenu = styled.li`
  ${IconTheme}
  list-style: none;

  @media all and (min-width: 850px) {
    display: none;
  }
`;



const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);

  const isNavScrolling = () => {
    if (window.pageYOffset >= 50) {
      setNavScroll(true)
    } else {
      setNavScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', isNavScrolling);

    return () => {
      window.removeEventListener('scroll', isNavScrolling);
    }
  }, []);


  return (
    <>
      <Nav navScroll={navScroll}>
        <NavContainer>

          <AppLogo>
            <NavbarText>Shane Dev</NavbarText>
          </AppLogo>

          <NavItem>
            <NavbarNum href="#about">01.&nbsp;
              <NavbarText>
                About
              </NavbarText>
            </NavbarNum>
          </NavItem>

          <NavItem>
            <NavbarNum href="#work">02.&nbsp;
              <NavbarText>
                Work
              </NavbarText>
            </NavbarNum>
          </NavItem>

          <NavItem>
            <NavbarNum href="#experience">03.&nbsp;
              <NavbarText>
                Experience
              </NavbarText>
            </NavbarNum>
          </NavItem>

          <NavItem>
            <NavbarNum href="#contact">04.&nbsp;
              <NavbarText>
                Contact
              </NavbarText>
            </NavbarNum>
          </NavItem>

          {/* Mobile Menu */}
          <MobileNav />
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar;