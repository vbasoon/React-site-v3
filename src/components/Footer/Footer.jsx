import React from 'react'
import {
   FooterContainer, 
   FooterWrap, 
   FooterLinkContainer, 
   FooterLinkWrapper, 
   FooterLinkItems,
   FooterLinkTitle,
   FooterLink,
   SocialMedia,
   SocialMediaWrap,
   SocialLogo,
   WebsiteRights,
   SocialIcons,
   SocialIconLink

} from './FooterElements'

import {
   FaFacebook, 
   FaInstagram, 
   FaYoutube, 
   FaTwitter, 
   FaLinkedin
} from 'react-icons/fa'

const Footer = () => {
   return (
      <>
         <FooterContainer>
            <FooterWrap>
               <FooterLinkContainer>
                  <FooterLinkWrapper>
                     <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                           <FooterLink to='/'>How it work</FooterLink>
                           <FooterLink to='/'>Testimonials</FooterLink>
                           <FooterLink to='/'>Careers</FooterLink>
                           <FooterLink to='/'>Investors</FooterLink>
                           <FooterLink to='/'>Terms of Services</FooterLink>
                     </FooterLinkItems>
                     <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                           <FooterLink to='/'>How it work</FooterLink>
                           <FooterLink to='/'>Testimonials</FooterLink>
                           <FooterLink to='/'>Careers</FooterLink>
                           <FooterLink to='/'>Investors</FooterLink>
                           <FooterLink to='/'>Terms of Services</FooterLink>
                     </FooterLinkItems>
                     
                  </FooterLinkWrapper>
                  <FooterLinkWrapper>
                     <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                           <FooterLink to='/'>How it work</FooterLink>
                           <FooterLink to='/'>Testimonials</FooterLink>
                           <FooterLink to='/'>Careers</FooterLink>
                           <FooterLink to='/'>Investors</FooterLink>
                           <FooterLink to='/'>Terms of Services</FooterLink>
                     </FooterLinkItems>
                     <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                           <FooterLink to='/'>How it work</FooterLink>
                           <FooterLink to='/'>Testimonials</FooterLink>
                           <FooterLink to='/'>Careers</FooterLink>
                           <FooterLink to='/'>Investors</FooterLink>
                           <FooterLink to='/'>Terms of Services</FooterLink>
                     </FooterLinkItems>
                     
                  </FooterLinkWrapper>
               </FooterLinkContainer>
               <SocialMedia>
                  <SocialMediaWrap>
                     <SocialLogo to="/">
                        Logo
                     </SocialLogo>
                     <WebsiteRights>LCoin r {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                     <SocialIcons>
                        <SocialIconLink 
                           to="/" 
                           target="_blank"
                           aria-label="Facebook">
                              <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink 
                           to="/" 
                           target="_blank"
                           aria-label="Instagram">
                              <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink 
                           to="/" 
                           target="_blank"
                           aria-label="Youtube">
                              <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink 
                           to="/" 
                           target="_blank"
                           aria-label="Twitter">
                              <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink 
                           to="/" 
                           target="_blank"
                           aria-label="Linkedin">
                              <FaLinkedin/>
                        </SocialIconLink>
                     </SocialIcons>
                  </SocialMediaWrap>
               </SocialMedia>
            </FooterWrap>
         </FooterContainer>
         
      </>
   )

}   

export default Footer
