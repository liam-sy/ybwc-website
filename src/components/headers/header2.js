// Header.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import logoImage from "logo.png"

const HeaderContainer = tw.header`fixed top-0 left-0 w-full z-50 bg-white shadow-md`;
const Content = tw.div`mx-auto flex justify-between items-center py-4 px-12`;
const Logo = styled.a`
  ${tw`flex items-center text-lg font-bold text-gray-800 mr-4`}
  img {
    ${tw`w-16 h-12 mr-2`} 
  }
`;


const NavLinks = tw.nav`hidden lg:flex items-center space-x-8`;
const NavLink = tw.a`text-gray-700 hover:text-primary-500 transition duration-300`;
const PhoneNumber = tw.span`font-bold text-primary-500 text-xl sm:text-2xl tracking-wide`;

const MobileNav = motion(styled.div`
  ${tw`lg:hidden flex flex-col items-center bg-white absolute top-[100%] inset-x-0 shadow-md py-4`}
`);
const ToggleButton = tw.button`lg:hidden focus:outline-none text-gray-800`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <HeaderContainer>
      <Content>
        <Logo href="/">
         <img src={logoImage} alt="Logo" />
         Young Bros Window Cleaning
         </Logo>

        <NavLinks>
          {/* <NavLink href="#about">About</NavLink> */}
          <NavLink href="#services-section">Services</NavLink>
          <NavLink href="#contact-us-section">Contact</NavLink>
          <NavLink><PhoneNumber>(412) 423-5874</PhoneNumber></NavLink>
        </NavLinks>

        <ToggleButton onClick={toggleMenu}>
          {menuOpen ? <CloseIcon width="24" height="24" /> : <MenuIcon width="24" height="24" />}
        </ToggleButton>
      </Content>

      <MobileNav
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* <NavLink href="#about" onClick={toggleMenu}>About</NavLink> */}
        <NavLink href="#services-section" onClick={toggleMenu}>Services</NavLink>
        <NavLink href="#contact-us-section" onClick={toggleMenu}>Contact</NavLink>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;
