import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
import img1 from '../../../assets/home/img1.jpg'
import img2 from '../../../assets/home/img2.jpeg'
import img3 from '../../../assets/home/img3.webp'
import img4 from '../../../assets/home/img4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        < AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={5000}
            className='text-center h-[60vh] lg:h-[90vh] mb-14' >
            <div className="relative w-full h-full">
                <img src={img1} className="w-full rounded-lg h-full" />
                <div className=" absolute rounded-lg h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-10/12 lg:w-1/2 pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                        <h2 className=' text-4xl lg:text-5xl font-bold text-start'>Power is not revealed by striking hard or often, but by striking true</h2>
                        <p>Our School will make you a strong person , not only physically but also mentally too!</p>
                        <div className='flex gap-5 '>
                            <button className='btn btn-outline text-orange-400 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-400'>See More</button>
                            <button className='btn btn-outline text-white border-0 border-b-4 border-r-4 bg-slate-900'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-full">
                <img src={img2} className="w-full rounded-lg h-full" />
                <div className=" absolute rounded-lg h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-10/12 lg:w-1/2 pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                        <h2 className=' text-4xl lg:text-5xl font-bold text-start'>When you say “I will” with conviction, magic begins to happen</h2>
                        <p>Our School will make you a strong person , not only physically but also mentally too!</p>
                        <div className='flex gap-5 '>
                            <button className='btn btn-outline text-orange-400 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-400'>See More</button>
                            <button className='btn btn-outline text-white border-0 border-b-4 border-r-4 bg-slate-900'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-full">
                <img src={img3} className="w-full rounded-lg h-full" />
                <div className=" absolute rounded-lg h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-10/12 lg:w-1/2 pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                        <h2 className=' text-4xl lg:text-5xl font-bold text-start'>What the mind can perceive, the heart can believe, the body can achieve</h2>
                        <p>Our School will make you a strong person , not only physically but also mentally too!</p>
                        <div className='flex gap-5 '>
                            <button className='btn btn-outline text-orange-400 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-400'>See More</button>
                            <button className='btn btn-outline text-white border-0 border-b-4 border-r-4 bg-slate-900'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-full">
                <img src={img4} className="w-full rounded-lg h-full" />
                <div className=" absolute rounded-lg h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-10/12 lg:w-1/2 pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                        <h2 className=' text-4xl lg:text-5xl font-bold text-start'>Failure is only temporary. Quitting makes it permanent</h2>
                        <p>Our School will make you a strong person , not only physically but also mentally too!</p>
                        <div className='flex gap-5 '>
                            <button className='btn btn-outline text-orange-400 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-400'>See More</button>
                            <button className='btn btn-outline text-white border-0 border-b-4 border-r-4 bg-slate-900'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            </AutoplaySlider>
    );
};

export default Banner;