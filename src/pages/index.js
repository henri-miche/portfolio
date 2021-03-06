import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObThree } from '../components/InfoSection/Date';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

const Home = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <Navbar toggle={toggle} />
           <SideBar isOpen={isOpen} toggle={toggle} />
            <HeroSection/>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObThree} />
        </>
    )
}

export default Home;
