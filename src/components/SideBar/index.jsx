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
} from './SidebarElements'


const Sidebar = () => {
   return (
      <SidebarContainer>
         <Icon>
            <CloseIcon />
         </Icon>
         <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink to='/about'>Get Started</SidebarLink>
               <SidebarLink to='free'>Free Coin</SidebarLink>
               <SidebarLink to='/wallet'>Wallet</SidebarLink>
               <SidebarLink to='/mine'>How to Get</SidebarLink>
               <SidebarLink to='/shop'>Buy</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
               <SidebarRoute to="/contact">Contact</SidebarRoute>
            </SideBtnWrap>
         </SidebarWrapper>
      </SidebarContainer>
   )
}

export default Sidebar
