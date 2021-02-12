import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
background: #000;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960) {
   transition: 0.8s all ease;
} 
   `

export NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   height: 80px;
   z-index: 1;
   padding: 0 24px;
   min-width: 1100px;
`

export NavLogo = styled()