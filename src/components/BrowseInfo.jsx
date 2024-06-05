// src/components/EventInfo.js
import React from 'react';

const EventInfo = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white p-8">
            {/* Left Section */}
            <div className="md:w-3/4 space-y-6">
                <h1 className="text-4xl font-bold text-purple-400">
                    BROWSE
                </h1>
                <p className='text-lg'>
                    BROWSE is a national level student technical symposium, jointly organized every year by the departments of CSE, ISE, MCA, AI & DS and CSE(AI & ML) to enlighten the students about the recent trends, cutting edge technologies and future trends in the information technology and research. Technical events such as programming contest, technical quiz, witty Byte and gaming are organized to provide an opportunity for the students to explore and acquire the technical skills. Sports events are also organized.
                </p>
                <p className='text-lg'>
                    Browse facilitates the overall development of the students and provides an opportunity to volunteer and organize the events, participate and showcase their research work, in teams communicate and collaborate with the students of other colleges to increase exposure of the outside world by interacting with judges from other esteemed organizations.
                </p>
            </div>

            {/* Right Section */}
            <div className="md:w-1/4 flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="text-right">
                    <p className="text-8xl font-bold text-purple-400">8</p>
                    <p className="text-8xl font-bold text-purple-400">May</p>
                    <p className="text-8xl font-bold text-purple-400">2024</p>
                </div>
            </div>
        </div>
    );
}

export default EventInfo;
