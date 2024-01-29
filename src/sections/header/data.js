import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const data = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/muckeshks/",
    icon: <FaLinkedinIn />,
  },
  { id: 2, link: "https://leetcode.com/muckesh/", icon: <SiLeetcode /> },
  { id: 3, link: "mailto:muckesh671@gmail.com", icon: <HiOutlineMail /> },
  { id: 4, link: "https://github.com/Muckesh", icon: <AiFillGithub /> },
];

export default data;
