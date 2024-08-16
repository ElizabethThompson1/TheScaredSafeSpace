import React from 'react';
import { AboutHeader } from '../components/About/Header/Header';
import AboutMission from '../components/About/AboutMission/AboutMission';
import { Bio } from '../components/About/Bio/Bio';

const AboutPage = () => {
    return (
        <>
        <AboutHeader/>
        <AboutMission/>
        <Bio/>
        </>
    )
}

export default AboutPage
