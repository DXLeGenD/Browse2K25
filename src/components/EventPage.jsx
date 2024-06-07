import React from "react";
import Left from './LeftPhoto'
import Right from './RightPhoto'
import NavBar from './NavBar'
import BGMI from '../assets/BGMI.jpeg'
import TechQuiz from '../assets/tech_quiz.jpeg'
import Cyber from '../assets/cyber.jpeg'
import Byte from '../assets/byte_surge.jpeg'
import Witty from '../assets/witty_byte.jpeg'


const EventPage = () => {
    return (
        <>
            <div className="bg-gray-900">
                <NavBar />
                <h1 className="bg-gray-900 text-8xl text-center text-white my-4">Events</h1>
                <Left title="Life Extension" desc="The rise of gaming has sparked a massive wave of interest and now hundreds of gamers are participating in the craze. This event offers a unique opportunity for gamers to polish their abilities and challenge themselves against top-tier talent in college." href="/life_extention" src={BGMI} />
                <Right title="Technical Quiz" desc="A quiz contest tests teams expertise in technology, programming, and technical concepts. Teams compete to showcase their understanding of programming languages, tools, and other aspects of the field." href="/technical_quiz" src={TechQuiz} />
                <Left title="Cyber Etymology" desc="Teams can create derivations from original terms, similar to a game of Scrabble, with a focus on Computer Science and Technology. This adds a creative twist to the challenge." href="/cyber_etymology" src={Cyber} />
                <Right title="Byte Surge" desc="A programming competition that involves giving a set of logical or mathematical problems to the contestants.The contestants are required to write computer programs capable of solving each problem." href="/byte_surge" src={Byte} />
                <Left title="Witty byte" desc="It is an individual techincal talk event. Tech talk will be based on talk realted to a topic scernario or an image given on the spot." href="/witty_byte" src={Witty} />
            </div>
        </>
    )
}

export default EventPage