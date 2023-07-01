import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsTools, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-3 w-full overflow-hidden z-50">
      <div className="container mx-auto ">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt></BiHomeAlt>
          </Link>
          {/* user */}
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser></BiUser>
          </Link>
          {/* sklills */}
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsTools></BsTools>
          </Link>
          {/* projects */}
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsBriefcase></BsBriefcase>
          </Link>
          {/* contact */}
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquareText></BsChatSquareText>
          </Link>
        </div>

        <div className="wi-full flex justify-center mb-0 items-center">
          <p className="text-white/50">copyright</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
