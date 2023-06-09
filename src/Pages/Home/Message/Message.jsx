import React, { useEffect } from 'react';
import img1 from '../../../assets/back.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Message = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="hero h-[90vh] mb-20" style={{ backgroundImage: `url(${img1})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center bg-white w-10/12">
                <div className="max-w-md py-10" data-aos="fade-down" data-aos-duration="1000">
                    <h1 className="mb-10 text-4xl font-bold">Art Of Defense</h1>
                    <p className="font-semibold">A black belt is just a white belt who never quit.</p>
                    <p className="font-semibold my-5">Martial arts is not just about fighting, it's about building character.</p>
                    <p className="font-semibold">Success in martial arts is a journey, not a destination.</p>
                </div>
            </div>
        </div>
    );
};

export default Message;