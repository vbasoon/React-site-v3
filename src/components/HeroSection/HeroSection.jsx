import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import {
   HeroContainer,
   HeroBg,
   VideoBg,
   HeroContent,
   HeroTitle,
   HeroText,
   HeroBtnWrapper,
   ArrowForward,
   ArrowRight
} from './HeroSectionElements'

import { Button } from '../Button/ButtonElements.js'

const HeroSection = () => {

   const [hover, setHover] = useState(false)

   const onHover = () => {
      setHover(!hover)
   }


   return (
      <HeroContainer id='home'>
         <HeroBg>
            <VideoBg
               autoPlay
               loop
               muted
               src={Video}
               type='video/mp4' />
         </HeroBg>
         <HeroContent>
            <HeroTitle>
               Connect with Us!
         </HeroTitle>
            <HeroText>
               Contact Us and Get Free 100 000 LCoins <br/>
               on your wallet!!!
         </HeroText>
            <HeroBtnWrapper>
               <Button
                  to="started"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}

               >Get started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
            </HeroBtnWrapper>
         </HeroContent>
      </HeroContainer>
   )
}

export default HeroSection
