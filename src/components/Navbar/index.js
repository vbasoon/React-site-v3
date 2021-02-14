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
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
   return (
      <>
         <Nav>
            <NavbarContainer>
               <NavLogo to='/'>
                  <h1>Logo</h1>
               </NavLogo>
               <MobileIcon>

               </MobileIcon>
               <NavMenu>
                  <NavItem>
                     <NavLinks to="about">About</NavLinks>
                  </NavItem>
               </NavMenu>
            </NavbarContainer>
            <MobileIcon>
               <FaBars />
            </MobileIcon>
         </Nav>
      </>
   )
}

export default Navbar;
