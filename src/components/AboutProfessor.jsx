import React from "react";
import AboutProfessorBox from './AboutProfessorBox'
const AboutProfessor = () => {
    return (
        <>
            <section>
                <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
                    <AboutProfessorBox title="PRESIDENT BY" name="Dr. M. N. Channabasappa" designation="DIRECTOR" place="SIT" />
                    <AboutProfessorBox title="Guests of Honour" name="Dr. Shivakumaraiah" designation="CEO" place="SIT" />
                    <AboutProfessorBox title="PRESIDENT" name="Dr Premasudha B G" designation="Professor and Head" place="Department of MCA" />
                    <AboutProfessorBox title="PRESIDENT BY" name="Dr. N.R.Sunitha" designation="Professor and Head" place="Department of CSE" />
                </div>
            </section>
        </>
    )
}

export default AboutProfessor;