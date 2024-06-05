import React from "react";
import OrganizedBox from "./OrganizedBox";

const Organized = () => {
    return (
        <>
            <section >
                <div>
                    <h1 className="text-6xl border-s-8 border-solid border-violet-600 rounded-lg">Organized By</h1>
                    <div className="p-14 flex items-center justify-center flex-wrap gap-3 md:gap-10 ">
                        <OrganizedBox />
                        <OrganizedBox />
                        <OrganizedBox />
                        <OrganizedBox />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Organized;