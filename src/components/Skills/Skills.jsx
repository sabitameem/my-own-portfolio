import "./skills.css";
import { HiCheckCircle } from "react-icons/hi";

const Skills = () => {
  return (
    <section
      className="py-8 lg:py-24 lg:h-screen container mx-auto min-h-[85vh] lg:min-h-[78vh] "
      id="skills"
    >
      <h2 className="section_title text-[34px] font-semibold text-green-800 font-rajdhani ">
        Skills
      </h2>
      <span className="section_subtitle font-rajdhani mb-16 text-green-800 flex justify-center">
        My technical level
      </span>{" "}
      {/* box */}
      <div className="flex flex-col lg:flex-row gap-y-12 justify-between font-rajdhani">
        {/* frontend */}
        <div className="content">
          <p className="title my-3 text-center">Frontend Developer</p>
          <div className=" grid grid-cols-2 gap-16">
            <div className="">
              {/* html */}
              <div className="lg:w-[90px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">HTML</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
              {/* css */}
              <div className="lg:w-[90px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">CSS</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
              {/* JS */}
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">JavaScript</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
            </div>
            <div>
              {/* bootstrap */}
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Bootstrap</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">
                  Intermediate
                </p>
              </div>
              {/* tailwind */}
              <div className="lg:w-[90px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Tailwind</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
              {/* html */}
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">React</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className="content">
          <p className="title my-3 text-center">Backend Developer</p>
          <div className=" grid grid-cols-2 gap-16">
            <div className="">
              {/* mongo */}
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">MongoDB</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
              {/* express */}
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Express Js</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">
                  Intermediate
                </p>
              </div>
              {/* rest */}
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Rest API</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center ml-2">
                  Intermediate
                </p>
              </div>
            </div>
            <div>
              {/* node */}
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Node JS</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
              {/* es6 */}
              <div className="lg:w-[90px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">ES6</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Basic</p>
              </div>
              {/* firebase */}
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Firebase</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
            </div>
          </div>
        </div>
        {/* Tools */}
        <div className="content">
          <p className="title my-3 text-center">Tools</p>
          <div className=" grid grid-cols-2 gap-16">
            <div className="">
              {/* git */}
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Git</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
              {/* vercel */}
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Vercel</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">
                  Intermediate
                </p>
              </div>
            </div>
            <div>
              {/* figma */}
              <div className="lg:w-[110px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Figma</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
              {/* netlify */}
              <div className="lg:w-[90px] py-3">
                <div className="flex gap-2 items-center">
                  <HiCheckCircle></HiCheckCircle>
                  <span className="text-base">Netlify</span>{" "}
                </div>
                <p className="text-sm text-gray-400 lg:text-center">Advance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
