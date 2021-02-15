import React, { useState } from 'react';
import Sidebar from '../../components/SideBar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {
   const [isOpen, setIsOpen] = useState(false)

   const toggle = () => {
      setIsOpen(!isOpen)
   }

   return (
      <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
         <HeroSection />
      </>
   )
}

export default Home
