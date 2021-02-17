import React from 'react'

const Service = () => {
   return (
      <>
      <ServicesContainer id="started">
         <ServicesTitle>Get started</ServicesTitle>
         <SevicesWrapper>
            <ServicesCard>
               <ServicesIcon src={Icon1}/>
               <ServicesSubtitles>Choose a Wallet</ServicesSubtitles>
               <ServicesText>To get started with Lovecoin, the first thing you need to do is download a compatible crypto wallet application. Visit our Wallets page to see a listing of compatible wallet applications.</ServicesText>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon2}/>
               <ServicesSubtitles>Reduce expenses</ServicesSubtitles>
               <ServicesText>We help reduce your fess and increase your overall revenue.</ServicesText>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon3}/>
               <ServicesSubtitles>Reduce expenses</ServicesSubtitles>
               <ServicesText>We help reduce your fess and increase your overall revenue.</ServicesText>
            </ServicesCard>
         </SevicesWrapper>   
      </ServicesContainer>
         
      </>
   )
}

export default Service
