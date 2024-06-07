import React from "react";
import Navbar from "./NavBar";
import Knowmore from './KnowMore'
import BGMI from '../assets/BGMI.jpeg'
const LifeExtension = () => {
    return (<>
        <Navbar />
        <Knowmore src={BGMI} title="Life Extension" rule1="4 memebers per Team" rule2="Venue : Media Center" venue="MCA LAB , MCA Dept" prize="250" facultyName="Dr. Kiran Kumar T M" facultyNumber="9844379612" s1="Nishanth Kumar" s1p="7337876335" s2="Jithesh Kumar" s2p="9606775937" />
    </>)
}
export default LifeExtension