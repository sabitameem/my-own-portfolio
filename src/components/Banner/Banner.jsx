import image from '../../assets/profile-pic.jpg';
import {FaGithub,FaLinkedin} from 'react-icons/fa';

import {TypeAnimation} from 'react-type-animation';

import {motion} from 'framer-motion';

import {fadeIn} from '../../variants'
import './banner.css'

const Banner = () => {
    return (
        <section className="section"  id="home">
            <div className='container mx-auto'>
                <div>
                    {/* text */}
                    <div>
                    <div className=''>
                    <span className='text-white mr-4'>Hi, I am</span>
                        <h1>SABITA <span>MEEM</span></h1>
                    </div>
                        <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                            
                            <TypeAnimation 
                            sequence={[
                                'MERN Stack developer',
                                2000,
                                'Web Disgner',
                                2000,

                            ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                            ></TypeAnimation>
                            

                        </div>
                        <p>I specialize in delivering clean code and pixel-perfect designs, while bringing websites to life with captivating web animations. By seamlessly blending functionality with visual appeal, I strive to make every website a truly interactive and engaging experience.</p>
                    </div>
                    {/* image */}
                    <div className='profile'>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;