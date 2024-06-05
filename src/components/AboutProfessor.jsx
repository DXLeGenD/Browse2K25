import React from "react";
import AboutProfessorBox from './AboutProfessorBox'
const AboutProfessor = () => {
    return (
        <>
            <section>
                <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
                    <AboutProfessorBox />
                    <AboutProfessorBox />
                    <AboutProfessorBox />
                    <AboutProfessorBox />
                </div>
            </section>
        </>
    )
}

export default AboutProfessor;