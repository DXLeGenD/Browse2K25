import React from "react";
import Navbar from "./NavBar";
import Knowmore from './KnowMore'
import Tech from '../assets/witty_byte.jpeg'
const Witty = () => {
    return (<>
        <Navbar />
        <Knowmore src={Tech} title="Witty Byte" rule1="Individual Participation." rule2="Usage of offensive words lead to immediate elimination." venue="MCA Seminal Hall , MCA Dept" prize="50" facultyName="Dr.Ashwini B P" facultyNumber="9844379612" s1="Nishanth Kumar" s1p="7337876335" s2="Jithesh Kumar" s2p="9606775937" />
    </>)
}
export default Witty