import front from "../../assets/dpp.jpg";
import { BsPinMapFill } from "react-icons/bs";
import "./about.css";
import Resume from "../../assets/Resume of SabitaMeem.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });

  return (
    <section
      id="about"
      className="container mx-auto min-h-[85vh] lg:min-h-[78vh] py-5"
    >
      <div className="flex flex-col lg:flex-row gap-x-20 items-center">
        {/* image */}
        <div data-aos="zoom-in-right" className="image-container">
          <img
            src={front}
            alt="Foreground Image"
            className="foreground-image mb-8 lg:mb-2"
          />
        </div>
        {/* text */}
        <div data-aos="zoom-in-left">
          <p className="font-rajdhani font-semibold text-green-700">About Me</p>

          <div className="flex">
            <BsPinMapFill className="text-green-700 mt-1 text-3xl" />
            <p className="font-rajdhani font-semibold text-2xl ml-2">
              A dedicated MERN stack developer{" "}
              <br className="hidden lg:block" /> based in Chittagong, Bangladesh
            </p>
          </div>
          <div>
            <p className="font-rajdhani font-semibold text-green-700 my-2">
              Personal Info
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 mb-3 font-rajdhani ">
              <div className="">
                <p className="text-gray-600">
                  Full name :{" "}
                  <span className="text-black">Sabita Binte Hoque Meem</span>
                </p>
                <p className="text-gray-600">
                  Address :{" "}
                  <span className="text-black">Chattogram,Bangladesh</span>
                </p>
                <p className="text-gray-600">
                  Age :{" "}
                  <span className="text-black">20 Years</span>
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  Email :{" "}
                  <span className="text-black">sabitameem578@gmail.com</span>
                </p>
                <p className="text-gray-600">
                  Phone :{" "}
                  <span className="text-black">+8801843571638</span>
                </p>
                <p className="text-gray-600">
                  Nationality :{" "}
                  <span className="text-black">Bangladeshi</span>
                </p>
              </div>
            </div>
          </div>
          <a download="" href={Resume}>
            <button className="btn btn-sm">DownLoad Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
