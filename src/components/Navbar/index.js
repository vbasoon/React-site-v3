import React from 'react'
import {
   Nav,
   NavbarContainer,
   NavLogo,
   MobileIcon,
   NavMenu,
   NavItem,
   NavLinks,
   NavBtn,
   NavBtnLink
} from './NavElements'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
   return (
      <>
         <Nav>
            <NavbarContainer>
               <NavLogo to='/'>
                  <h1>LCoin</h1>
               </NavLogo>
               <MobileIcon>
                  <FaBars />
               </MobileIcon>
               <NavMenu>
                  <NavItem>
                     <NavLinks to="/about">Get Started</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="free">Free Coin</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="/wallet">Wallet</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="/mine">How to Get</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="/shop">Buy</NavLinks>
                  </NavItem>
               </NavMenu>
               <NavBtn>
                  <NavBtnLink>Contact me!</NavBtnLink>
               </NavBtn>
            </NavbarContainer>

         </Nav>
      </>
   )
}

export default Navbar;
