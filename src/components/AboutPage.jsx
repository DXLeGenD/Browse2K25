import NavBar from './NavBar'
import React from 'react'
import BrowseInfo from './BrowseInfo'
import Organized from './Organized'
import AboutCollege from './AboutCollege'
import AboutProfessor from './AboutProfessor'


const AboutPage = () => {
    return (
        <>
            <NavBar />
            <BrowseInfo />
            <Organized />
            <AboutCollege />
            <AboutProfessor />
        </>
    )
}
export default AboutPage;