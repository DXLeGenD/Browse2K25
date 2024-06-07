import React from "react";
import Navbar from "./NavBar";
import Knowmore from './KnowMore'
import Tech from '../assets/cyber.jpeg'
const Cyber = () => {
    return (<>
        <Navbar />
        <Knowmore src={Tech} title="Cyber Etymology" rule1="Upto 3 members per team." rule2="Two Rounds : Prelims & Finals." venue="Vasudha Lab , ISE Dept" prize="150" facultyName="Dr. Nagaratna B Chittaragi" facultyNumber="9844379612" s1="Nishanth Kumar" s1p="7337876335" s2="Jithesh Kumar" s2p="9606775937" />
    </>)
}
export default Cyber