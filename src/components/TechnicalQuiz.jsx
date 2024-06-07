import React from "react";
import Navbar from "./NavBar";
import Knowmore from './KnowMore'
import Tech from '../assets/tech_quiz.jpeg'
const TechnicalQuiz = () => {
    return (<>
        <Navbar />
        <Knowmore src={Tech} title="Technical Quiz" rule1="2 members per team." rule2="Two Rounds : Prelims & Finals." venue="Prelims : Linux Lab , CSE Dept.
Finals : Birla Auditorium" prize="100" facultyName="Dr. Prashanth G K" facultyNumber="9844379612" s1="Nishanth Kumar" s1p="7337876335" s2="Jithesh Kumar" s2p="9606775937" />
    </>)
}
export default TechnicalQuiz