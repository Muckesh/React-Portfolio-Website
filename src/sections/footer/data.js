import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#skills", title: "Skills" },
  { id: 3, link: "#experience", title: "Experience" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.instagram.com/muckeshks/",
    icon: <AiOutlineInstagram />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/muckeshks/",
    icon: <FaLinkedinIn />,
  },
  { id: 3, link: "https://leetcode.com/muckesh/", icon: <SiLeetcode /> },
  { id: 4, link: "https://github.com/Muckesh", icon: <AiFillGithub /> },
];
