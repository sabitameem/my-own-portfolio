import front from "../../assets/dpp.jpg";
import { BsPinMapFill } from "react-icons/bs";
import "./about.css";
import Resume from '../../assets/Resume of SabitaMeem.pdf'

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto min-h-[85vh] lg:min-h-[78vh] py-5"
    >
      <div className="flex flex-col lg:flex-row gap-x-20 items-center">
        {/* image */}
        <div className="image-container">
          <img
            src={front}
            alt="Foreground Image"
            className="foreground-image mb-8 lg:mb-2"
          />
        </div>
        {/* text */}
        <div>
          <p className="font-rajdhani font-semibold text-green-700">About Me</p>

          <div className="flex">
            <BsPinMapFill className="text-green-700 mt-1 text-3xl" />
            <p className="font-rajdhani font-semibold text-2xl ml-2">
              A dedicated MERN stack developer{" "}
              <br className="hidden lg:block" /> based in Chittagong, Bangladesh
            </p>
          </div>
          <p className="text-gray-600 my-3">
            Experienced in MERN stack development, I am skilled in HTML, CSS,
            JavaScript, React, Node.js,
            <br className="hidden lg:block" /> Express.js, and MongoDB. I create
            stunning, responsive websites with optimized code and{" "}
            <br className="hidden lg:block" /> cutting-edge techniques. A
            collaborative team player, I excel at crafting engaging web
            interfaces.
            <br className="hidden lg:block" /> With my comprehensive skill set
            and unwavering dedication to excellence, I am ready{" "}
            <br className="hidden lg:block" /> to make a lasting impact as a
            junior MERN stack developer.
          </p>
          <a download='' href={Resume}><button className="btn btn-sm">DownLoad Resume</button></a>
        </div>
      </div>

    </section>
  );
};

export default About;
