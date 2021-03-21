import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll' 
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
} from './NavElements.js'



const Navbar = ({ toggle }) => {
   const [scrollNav, setScrollNav] = useState(false)

   const changeNav = () => {
      if(window.scrollY >= 80) {
         setScrollNav(true)
      } else {
         setScrollNav(false)
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', changeNav)
   }, []);
   
   const toggleHome = () => {
      scroll.scrollToTop();
   }

   return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
         <Nav scrollNav={scrollNav}>
            <NavbarContainer>
               <NavLogo to='/' onClick={toggleHome}>
                  <h1>LCoin</h1>
               </NavLogo>
               <MobileIcon onClick={toggle}>
                  <FaBars />
               </MobileIcon>
               <NavMenu>
                  <NavItem>
                     <NavLinks 
                        to="started"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                     >
                        Get Started
                     </NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks
                        to="started"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Free Coins</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks
                        to="started"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Wallet</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks 
                        to="started"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Buy</NavLinks>
                  </NavItem>
               </NavMenu>
               <NavBtn>
                  <NavBtnLink to="/signup">Sign Up!</NavBtnLink>
               </NavBtn>
            </NavbarContainer>

         </Nav>
         </IconContext.Provider>      
      </>
   )
}

export default Navbar;
