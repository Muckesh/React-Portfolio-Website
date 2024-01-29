import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import { FaGraduationCap } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";

import "aos/dist/aos.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Experiences = ({ experiences }) => {
  return (
    <VerticalTimeline lineColor="#4db5ff" data-aos="fade-up">
      {experiences.map((experience) => (
        <VerticalTimelineElement
          key={experience.id}
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#4db5ff", color: "#fff" }}
          icon={
            experience.category === "Education" ? (
              <FaGraduationCap />
            ) : (
              <BsBriefcaseFill />
            )
          }
          contentStyle={{ background: "#2c2c6c" }}
          date={experience.date}
        >
          <h4>{experience.organization}</h4>
          <br />
          <h5 className="light-text">{experience.title}</h5>
          <ul className="list">
            {experience.desc.map((point, index) => (
              <li className="list-item" key={index}>
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Experiences;
