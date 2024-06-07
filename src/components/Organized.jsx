import React from "react";
import OrganizedBox from "./OrganizedBox";
import CSE from '../assets/CSE.jpeg'
import ISE from '../assets/ISE.jpeg'
import AIDS from '../assets/AIDS.jpeg'
import MCA from '../assets/MCA.jpeg'
const Organized = () => {
    return (
        <>
            <section >
                <div>
                    <h1 className="text-6xl border-s-8 border-solid border-violet-600 rounded-lg">Organized By</h1>
                    <div className="p-14 flex items-center justify-center flex-wrap gap-3 md:gap-10 ">
                        <OrganizedBox src={CSE} title="Department of Computer Science and Engineering(and AI & ML)" />
                        <OrganizedBox src={MCA} title="Department of Master of Computer Application" />
                        <OrganizedBox src={AIDS} title="Department of Artificial Intelligence and Data Science" /><OrganizedBox src={ISE} title="Department of Information Science and Engineering" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Organized;