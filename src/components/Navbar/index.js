import React from 'react'
import {
   Nav,
   NavbarContainer,
   NavLogo,
   MobileIcon,
   NavMenu,
   NavItem,
   NavLinks
} from './NavElements'

const Navbar = () => {
   return (
      <>
         <Nav>
            <NavbarContainer>
               <NavLogo to='/'>
                  <h1>Logo</h1>
               </NavLogo>
               <MobileIcon>
                  <FaBars />
               </MobileIcon>
               <NavMenu>
                  <NavItem>
                     <NavLinks to="about">About</NavLinks>
                  </NavItem>
               </NavMenu>
            </NavbarContainer>
         </Nav>
      </>
   )
}

export default Navbar;
