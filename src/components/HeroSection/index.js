import React from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP} from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src ={Video}
                type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Desenvolvimento de aplicações performáticas, Mobile e Web, com foco na experiência de usuário.</HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
