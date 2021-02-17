import React from 'react'
import {Button} from '../Button/ButtonElements'
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

const InfoSection = ({
   lightBg, 
   id, 
   imgStart, 
   topLine, 
   lightText, 
   title, 
   darkText, 
   description, 
   buttonLabel, 
   img, 
   alt 
}) => {
   return (
      <>
         <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
               <InfoRow imgStart={imgStart}>
                  <Column1>
                     <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Title lightText={lightText}>{title}</Title>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrapper>
                           <Button to='home'>{buttonLabel}</Button>
                        </BtnWrapper>
                     </TextWrapper>
                  </Column1>
                  <Column2>
                     <ImgWrapper>
                     <Img src={img} alt={alt}/>
                     </ImgWrapper>
                  </Column2>
               </InfoRow>
            </InfoWrapper>
         </InfoContainer>
        
         
      </>
   )
}

export default InfoSection
