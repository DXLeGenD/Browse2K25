import React from "react";
import Navbar from "./NavBar";
import Knowmore from './KnowMore'
import Tech from '../assets/byte_surge.jpeg'
const Byte = () => {
    return (<>
        <Navbar />
        <Knowmore src={Tech} title="Byte Surge" rule1="2 members per team." rule2="Participants must code in either C or C++." venue="Rohini Computer Center , CSE Dept" prize="100" facultyName="Dr. Srinivasa K" facultyNumber="9844379612" s1="Nishanth Kumar" s1p="7337876335" s2="Jithesh Kumar" s2p="9606775937" />
    </>)
}
export default Byte