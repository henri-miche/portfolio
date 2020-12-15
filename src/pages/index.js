import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
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
        </>
    )
}

export default Home;
