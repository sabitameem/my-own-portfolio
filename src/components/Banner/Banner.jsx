import image from "../../assets/profile-pic.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import "./banner.css";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex item-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center  font-secondary lg:text-left">
            <span className="text-white font-rajdhani mb-2 ">Hi, I am</span>
            <div>
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-[44px] lg:text-[55px] mt-3 font-rajdhani font-extrabold "
              >
                SABITA <span>MEEM</span>
              </motion.h1>
            </div>

            <motion.div
              className="mb-6 text-[35px] mt-3 lg:text-[48px] font-rajdhani font-semibold  leading-[1]"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <TypeAnimation
                sequence={["MERN Stack developer", 2000, "Web Designer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation>
            </motion.div>
            <motion.h2
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto  lg:mx-0"
            >
              I specialize in delivering clean code and pixel-perfect designs,
              while bringing websites to life with captivating web animations.
            </motion.h2>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center mb-12 gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <Link to="contact">
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* social */}
            <motion.div variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false,amount:0.7}} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://github.com/sabitameem">
                <FaGithub></FaGithub>
              </a>
              <a href="https://www.linkedin.com/in/sabita-binte-hoque-meem-85a0b6280/">
                <FaLinkedin></FaLinkedin>
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn('down', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false,amount:0.7}} className="profile mr-4 hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px] ">
            <img src={image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
