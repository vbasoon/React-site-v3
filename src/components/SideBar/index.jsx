import React from 'react'
import {
   SidebarContainer,
   Icon,
   CloseIcon,
   SidebarWrapper,
   SidebarMenu,
   SidebarLink
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
         </SidebarWrapper>
      </SidebarContainer>
   )
}

export default Sidebar
