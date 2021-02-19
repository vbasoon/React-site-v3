import React from 'react'
import Icon1 from '../../images/icon1.svg'
import Icon2 from '../../images/icon2.svg'
import Icon3 from '../../images/icon3.svg'
import {
   ServicesContainer, 
   ServicesWrapper, 
   ServicesCard,
   ServicesTitle, 
   ServicesSubtitle, 
   ServicesText,
   ServicesIcon
 } from './ServiceElements'

const Service = () => {
   return (
      <>
      <ServicesContainer id="started">
         <ServicesTitle>Get started</ServicesTitle>
         <ServicesWrapper>
            <ServicesCard>
               <ServicesIcon src={Icon1}/>
               <ServicesSubtitle>Choose a Wallet</ServicesSubtitle>
               <ServicesText>To get started with Lcoin, the first thing you need to do is download a compatible crypto wallet application. Visit our Wallets page to see a listing of compatible wallet applications.</ServicesText>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon2}/>
               <ServicesSubtitle>Claim your Free Coins (Airdrop)</ServicesSubtitle>
               <ServicesText>After you setup a wallet application, the next step is to acquire your first Lovecoin tokens. Unlike 99% of other cryptocurrencies, Lcoin is unique because we airdrop each new member free Lcoin tokens. At the moment each new member gets 50,000 FREE Lcoins, just for signing up!</ServicesText>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon3}/>
               <ServicesSubtitle>Invest in Lcoin</ServicesSubtitle>
               <ServicesText>Do you believe in the mission of Lcoin? Want to make money while spreading cryptocurrency adoption worldwide? If so, purchasing Lcoins at the current market price could be a great opportunity for exponential profits.</ServicesText>
            </ServicesCard>
         </ServicesWrapper>   
      </ServicesContainer>
         
      </>
   )
}

export default Service
