import React from "react";
import SitLogo from '../assets/sit_logo.jpg'
const AboutCollege = () => {
    return (
        <>
            <section className="flex flex-col items-center p-6 bg-gray-800 text-white">
                <div className="mb-6">
                    <img src={SitLogo} alt="SIT Logo" className="w-32 h-32 object-contain" />
                </div>
                <h1 className="text-2xl font-bold mb-4" id="sit">Siddaganga Institute Of Technology</h1>
                <div className="w-full max-w-4xl mb-6">
                    <iframe
                        id="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.3755737218844!2d77.12390611475944!3d13.326897890623469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02e826fb691ef%3A0xe78608813c36f380!2sSiddaganga%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1655443131208!5m2!1sen!2sin"
                        width="100%"
                        height="450px"
                        className="border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div id="location_pin_animation" className="flex items-center justify-center">
                    <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                    <lord-icon
                        src="https://cdn.lordicon.com/zzcjjxew.json"
                        trigger="loop"
                        colors="primary:#ffffff,secondary:#ffffff"
                        state="loop-spin"
                        style={{ width: '70px', height: '70px' }}
                    ></lord-icon>
                </div>
            </section>
        </>
    );
};

export default AboutCollege;
