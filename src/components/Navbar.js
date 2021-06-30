import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { NavText, NavNums, HideOnMobile, IconTheme } from '@components/Mixins';
import '@styles/layout.scss';

const Nav = styled.nav`
  box-shadow: ${({ navScroll }) =>
    (navScroll ? '0px 4px 14px 0px #111111;' : '0px 0px 0px 0px transparent;')};
  background-color: ${({ navScroll }) =>
    (navScroll ? 'rgb(25, 25, 25, 0.9);' : 'transparent')};
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
    height: 3.8rem;
  }
`;

const NavContainer = styled.ul`
  padding: 1.7rem 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media all and (max-width: 768px) {
    padding: 1.2rem 0;
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
            <NavbarNum>01.&nbsp;
              <NavbarText>
                About
              </NavbarText>
            </NavbarNum>
          </NavItem>

          <NavItem>
            <NavbarNum>02.&nbsp;
              <NavbarText>
                Work
              </NavbarText>
            </NavbarNum>
          </NavItem>

          <NavItem>
            <NavbarNum>03.&nbsp;
              <NavbarText>
                Experience
              </NavbarText>
            </NavbarNum>
          </NavItem>

          <NavItem>
            <NavbarNum>04.&nbsp;
              <NavbarText>
                Contact
              </NavbarText>
            </NavbarNum>
          </NavItem>

          {/* Mobile Menu */}
          <MobileMenu>
            <FontAwesomeIcon className="nav-menu" icon={faEquals} />
          </MobileMenu>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar;