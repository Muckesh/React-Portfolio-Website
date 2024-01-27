import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillMessage, AiFillCode } from "react-icons/ai";

const data = [
  { id: 1, link: "#", icon: <AiFillHome /> },
  // {id: 2, link: '#about', icon: <BsPersonFill/>},
  { id: 2, link: "#skills", icon: <AiFillCode /> },
  { id: 3, link: "#experience", icon: <MdHomeRepairService /> },
  { id: 4, link: "#portfolio", icon: <AiFillAppstore /> },
  { id: 5, link: "#contact", icon: <AiFillMessage /> },
];

export default data;
