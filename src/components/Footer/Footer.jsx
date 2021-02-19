import React from 'react'
import {
   FooterContainer, 
   FooterWrap, 
   FooterLinkContainer, 
   FooterLinkWrapper, 
   FooterLinkItems,
   FooterLinkTitle,
   FooterLink
} from './FooterElements'


const Footer = () => {
   return (
      <>
         <FooterContainer>
            <FooterWrap>
               <FooterLinkContainer>
                  <FooterLinkWrapper>
                  <FooterLinkItems>
                     <FooterLinkTitle>
                        <FooterLink to='/'>About Us</FooterLink>
                        <FooterLink to='/'>How it work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                     </FooterLinkTitle>
                  </FooterLinkItems>
                  </FooterLinkWrapper>
                  <FooterLinkWrapper>
                  <FooterLinkItems>
                     <FooterLinkTitle>
                        <FooterLink to='/'>A</FooterLink>
                        <FooterLink to='/'>H</FooterLink>
                        <FooterLink to='/'>T</FooterLink>
                        <FooterLink to='/'>C</FooterLink>
                        <FooterLink to='/'>I</FooterLink>
                        <FooterLink to='/'>T</FooterLink>
                     </FooterLinkTitle>
                  </FooterLinkItems>
                  </FooterLinkWrapper>
                  <FooterLinkWrapper>
                  <FooterLinkItems>
                     <FooterLinkTitle>
                        <FooterLink to='/'>A</FooterLink>
                        <FooterLink to='/'>H</FooterLink>
                        <FooterLink to='/'>T</FooterLink>
                        <FooterLink to='/'>C</FooterLink>
                        <FooterLink to='/'>I</FooterLink>
                        <FooterLink to='/'>T</FooterLink>
                     </FooterLinkTitle>
                  </FooterLinkItems>
                  </FooterLinkWrapper>

               </FooterLinkContainer>
            </FooterWrap>
         </FooterContainer>
         
      </>
   )

}   

export default Footer
