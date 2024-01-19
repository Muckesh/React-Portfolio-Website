import { useEffect } from "react";
import HeaderImage from "../../assets/images/meheader.png";
import data from "./data";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderBackground from "../../components/HeaderBackground"; // Import the HeaderBackground component

import "./header.css";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "Tech Enthusiast",
      "Professional Coder",
      "Flutter Developer",
      "Mobile Application Developer",
    ],
    loop: true,
    typeSpeed: 25,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* Include the 3D background component */}
      {/* <HeaderBackground /> */}
      <header id="header">
        <div className="container header__container">
          {/* <div className="header__profile" data-aos = "fade-in" >
          <img src={HeaderImage} alt="Header Portait" />
        </div> */}
          <h5>Hello Friend!</h5>
          {/* <br/> */}
          <h3 data-aos="fade-up">
            I'm <span className="mr-robot">Muckesh k S</span>
          </h3>
          <h4>
            <span>{text}</span>
            {/* <span>Tech Enthusiast</span> */}
            <Cursor cursorBlinking="false" cursorColor="red" />
          </h4>
          <p data-aos="fade-up">
            You are a click away from building your dream website or web app.
            Send me the details of your project for a modern, mobile responsive,
            highly performant website today!
          </p>
          <div className="header__cta" data-aos="fade-up">
            <a href="#contact" className="btn primary">
              Let's Talk
            </a>
            <a href="#portfolio" className="btn light">
              My Work
            </a>
          </div>
          <div className="header__socials">
            {data.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
