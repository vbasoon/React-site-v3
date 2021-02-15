import React from 'react'
import {
   SidebarContainer,
   Icon,
   CloseIcon,
   SidebarWrapper,
   SidebarMenu,
   SidebarLink,
   SideBtnWrap,
   SidebarRoute
} from './SidebarElements.js'


const Sidebar = ({ isOpen, toggle }) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon>
            <CloseIcon onClick={toggle} />
         </Icon>
         <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink
                  to='about'
                  onClick={toggle}>
                  Get Started
               </SidebarLink>
               <SidebarLink
                  to='free'
                  onClick={toggle}>
                  Free Coin
               </SidebarLink>
               <SidebarLink
                  to='wallet'
                  onClick={toggle}>
                  Wallet
               </SidebarLink>
               <SidebarLink
                  to='mine'
                  onClick={toggle}>
                  How to Get
               </SidebarLink>
               <SidebarLink
                  to='shop'
                  onClick={toggle}>
                  Buy
               </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
               <SidebarRoute to="contact">Contact</SidebarRoute>
            </SideBtnWrap>
         </SidebarWrapper>
      </SidebarContainer>
   )
}

export default Sidebar
