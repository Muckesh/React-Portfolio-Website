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
          <h4 className="light-text">{experience.title}</h4>
          <p>lorem30 jkask san</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Experiences;
