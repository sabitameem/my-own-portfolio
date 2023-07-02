import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import image from "../../assets/undraw_contact_us_re_4qqt.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7y89uez",
        "template_fsp370r",
        form.current,
        "7AgAhuAoe_ZljqAl4"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Reset form inputs
          setName("");
          setEmail("");
          setProject("");
          // Show success notification
      toast.success('Your message has been successfully sent.');
        },
        (error) => {
          console.log(error.text);
           // Show error notification
      toast.error('Something went wrong! Please try again.');
        }
      );
  };
  return (
    <section
      className="py-8 lg:py-24 lg:h-screen container mx-auto min-h-[85vh] lg:min-h-[78vh] "
      id="contact"
    >
      <h2 className="section_title text-[34px] font-semibold text-green-800 font-rajdhani ">
        Get in touch
      </h2>
      <span className="section_subtitle font-rajdhani text-green-800 flex justify-center">
        Contact Me
      </span>
      <div className="contact_content flex flex-col lg:flex-row gap-12">
        <img
          className="w-[300px] h-[300px] mx-auto lg:mx-0 lg:w-[500px] lg:h-[450px]"
          src={image}
          alt=""
        />
        <div>
          <h3 className="font-rajdhani text-center my-6 text-gradient">
            Write me your project
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact_form mx-auto lg:mx-4"
          >
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contact_form-input text-[#32612D]"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact_form-div">
              <label className="contact_form-tag">Mail</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contact_form-input text-[#32612D]"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Project</label>
              <textarea
                name="project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="contact_form-input text-[#32612D]"
                placeholder="Write your project"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="btn btn-sm">Send message</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
