import Logo from "../../assets/images/black linux.jpg";
import data from "./data";
import { HiDownload } from "react-icons/hi";

import { IoIosColorPalette } from "react-icons/io";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.tile}</a>
            </li>
          ))}
        </ul>
        {/* <button id="theme__icon">
          <HiDownload />
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
