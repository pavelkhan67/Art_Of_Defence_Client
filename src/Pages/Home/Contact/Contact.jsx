import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='bg-slate-900 text-center text-white mb-20'>
            <p className='pt-16 pb-6 text-3xl font-bold' data-aos="fade-down-right" data-aos-duration="1000">Phone: +88 000000000</p>
            <p className='pb-16 text-3xl font-bold' data-aos="fade-down-left" data-aos-duration="1000">Email: abc@gmail.com</p>
        </div>
    );
};

export default Contact;