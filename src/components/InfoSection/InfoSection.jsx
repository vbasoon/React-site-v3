import React from 'react'
import {Button} from 'react-scroll'
import {
   InfoContainer, 
   InfoWrapper, 
   InfoRow, 
   Column1, 
   Column2, 
   TextWrapper, 
   TopLine, 
   Title, 
   Subtitle, 
   BtnWrapper, 
   Img, 
   ImgWrapper 
} from './InfoElements'

const InfoSection = () => {
   return (
      <>
         <InfoContainer>
            <InfoWrapper>
               <InfoRow>
                  <Column1>
                     <TextWrapper>
                        <TopLine>TopLine</TopLine>
                        <Title>Heading</Title>
                        <Subtitle>Subtitle</Subtitle>
                        <BtnWrapper>
                           <Button to='home' />
                        </BtnWrapper>
                     </TextWrapper>
                  </Column1>
                  <Column2>
                     <ImgWrapper>
                     <Img />
                     </ImgWrapper>
                  </Column2>
               </InfoRow>
            </InfoWrapper>
         </InfoContainer>
        
         
      </>
   )
}

export default InfoSection
