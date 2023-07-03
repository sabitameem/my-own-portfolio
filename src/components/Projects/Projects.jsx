import nextPage from "../../assets/project/Screenshot (2).png";
import linguaViva from "../../assets/project/Screenshot (4).png";
import foodBonkers from "../../assets/project/Screenshot (6).png";
import toyBuilding from "../../assets/project/Screenshot (8).png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { FaEye } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  return (
    <section
      className="py-8 lg:py-24 container mx-auto min-h-[85vh] lg:min-h-[78vh] "
      id="projects"
    >
      <h2 className="section_title text-[34px] font-semibold text-green-800 font-rajdhani">
        Portfolio
      </h2>
      <span className="section_subtitle font-rajdhani text-green-800 flex justify-center lg:mb-24 mb-12">
        Most recent work
      </span>
      {/* photo and text */}
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        className="flex flex-col lg:flex-row justify-between gap-9 my-20 "
      >
        <img
          className="lg:w-[500px] w-full h-[300px]"
          src={linguaViva}
          alt=""
        />
        <div className="lg:px-8 py-auto">
          <p className="font-semibold text-green-800 font-rajdhani">
            LinguaViva
          </p>
          <p className="lg:text-base text-sm text-gray-500">
            Unlock Language Learning with Engaging Online Classes. Explore a
            wide variety of courses in English, Spanish, French, Chinese,Arabic,
            German, and more. Learn from expert instructors passionate about
            sharing their language expertise and cultural insights, all through
            our user-friendly platform.
          </p>
          <div className="flex my-4 items-center gap-2 ">
            <p className="lg:text-base text-sm text-gray-700">
              Used Technology :
            </p>
            <button className="btn btn-sm">React</button>
            <button className="btn btn-sm">Tailwind</button>
            <button className="btn btn-sm">Stripe</button>
          </div>
          <div className="divide-y divide-slate-200 "></div>
          <div className="flex gap-6 items-center mt-5">
            <a
              href="https://lingua-viva-2ba9e.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                Live Site <FaEye></FaEye>
              </button>
            </a>
            <a
              href="https://github.com/sabitameem/lingua-vival-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                Client side{" "}
              </button>
            </a>
            <a
              href="https://github.com/sabitameem/lingua-viva-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                Server side{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* photo and text */}
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        className="flex flex-col lg:flex-row justify-between gap-9 my-20 "
      >
        <img
          className="lg:w-[500px] w-full h-[300px]"
          src={foodBonkers}
          alt=""
        />
        <div className=" lg:px-8  py-auto">
          <p className="font-semibold text-green-800 font-rajdhani">
            Food Bonkers
          </p>
          <p className="lg:text-base text-sm text-gray-500">
            Food Bonkers is captivating Collection of Renowned Chefs Recipes
            with Clear Instructions, Precise Measurements, and Inspiring
            Stories.is an esteemed website that offers a captivating collection
            of renowned chefs famous recipes, accompanied by comprehensive
            details and information. Immerse yourself in the culinary realm as
            you explore a diverse range of delectable dishes, thoughtfully
            curated to cater to all tastes and preferences.
          </p>
          <div className="flex my-4 items-center gap-2 ">
            <p className="lg:text-base text-sm text-gray-700">
              Used Technology :
            </p>
            <button className="btn btn-sm">React</button>
            <button className="btn btn-sm">Bootstrap</button>
          </div>
          <div className="divide-y divide-slate-200 "></div>
          <div className="flex gap-6 items-center mt-5">
            <a
              href="https://silver-frangollo-33d199.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                Live Site <FaEye></FaEye>
              </button>
            </a>
            <a
              href="https://github.com/sabitameem/food-bonkers-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                Client side{" "}
              </button>
            </a>
            <a
              href="https://github.com/sabitameem/food-bonkers-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                Server side{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* photo and text */}
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        className="flex flex-col lg:flex-row justify-between gap-9 my-20 "
      >
        <img className="lg:w-[500px] w-full h-[300px]" src={nextPage} alt="" />
        <div className="lg:px-8 py-auto">
          <p className="font-semibold text-green-800 font-rajdhani">
            Next Page
          </p>
          <p className="lg:text-base text-sm text-gray-500">
            Welcome to Next Page, your ultimate destination for all book lovers.
            As a premier e-commerce website, Next Page boasts an extensive and
            diverse collection of books that cater to a wide range of interests
            and genres. Whether you are an avid reader seeking the latest
            bestsellers or a connoisseur of classic literature, Next Page has
            something special waiting for every book enthusiast.
          </p>
          <div className="flex my-4 items-center gap-2 ">
            <p className="lg:text-base text-sm text-gray-700">
              Used Technology :
            </p>
            <button className="btn btn-sm">React</button>
            <button className="btn btn-sm">Tailwind</button>
          </div>
          <div className="divide-y divide-slate-200 "></div>
          <div className="flex gap-6 items-center mt-5">
            <a
              href="https://super-snickerdoodle-724745.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                Live Site <FaEye></FaEye>
              </button>
            </a>
            <a
              href="https://github.com/sabitameem/next-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                Client side{" "}
              </button>
            </a>
            {/* <a href="https://github.com/sabitameem/lingua-viva-server" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-sm flex gap-1 items-center font-rajdhani">Server side </button>
            </a> */}
          </div>
        </div>
      </div>
      {/* photo and text */}
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        className="flex flex-col lg:flex-row justify-between gap-9 my-20 "
      >
        <img
          className="lg:w-[500px] w-full h-[300px]"
          src={toyBuilding}
          alt=""
        />
        <div className="lg:px-8 py-auto">
          <p className="font-semibold text-green-800 font-rajdhani">
            Toy Building
          </p>
          <p className="lg:text-base text-sm text-gray-500">
            Toy Building is a dynamic e-commerce website that offers a vast
            selection of diverse and exciting toys for all ages. Immerse
            yourself in a world of endless possibilities as you explore our
            extensive collection of building sets, from classic bricks to
            innovative construction kits
          </p>
          <div className="flex my-4 items-center gap-2 ">
            <p className="lg:text-base text-sm text-gray-700">
              Used Technology :
            </p>
            <button className="btn btn-sm">React</button>
            <button className="btn btn-sm">Tailwind</button>
          </div>
          <div className="divide-y divide-slate-200 "></div>
          <div className="flex gap-6 items-center mt-5">
            <a
              href="https://stately-sorbet-30bf7a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                Live Site <FaEye></FaEye>
              </button>
            </a>
            <a
              href="https://github.com/sabitameem/toy-building-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                Client side{" "}
              </button>
            </a>
            <a
              href="https://github.com/sabitameem/toy-cuilding-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm flex gap-1 items-center font-rajdhani">
                Server side{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
