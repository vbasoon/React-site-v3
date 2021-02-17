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
import image1 from '../../images/svg-1.svg'

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
   image, 
   alt,
   primary,
   dark,
   dark2  
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
                           <Button to='home'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark = {dark ? 1 : 0}
                              dark2 = {dark2 ? 1 : 0}
                           >{buttonLabel}</Button>
                        </BtnWrapper>
                     </TextWrapper>
                  </Column1>
                  <Column2>
                     <ImgWrapper>
                        <Img src={image1} alt={alt}/>
                     </ImgWrapper>
                  </Column2>
               </InfoRow>
            </InfoWrapper>
         </InfoContainer>
      </>
   )
}

export default InfoSection
