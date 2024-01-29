// Skills.jsx
import React, { useEffect } from "react";
import "./skills.css";
import Card from "../../components/Card";
import data from "./data";

const Skills = () => {
  // Separate skills into Frontend and Backend categories
  const frontendSkills = data.filter((skill) => skill.category === "Frontend");
  const backendSkills = data.filter((skill) => skill.category === "Backend");

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry);
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("show");
  //       } else {
  //         entry.target.classList.remove("show");
  //       }
  //     });
  //   });
  //   const hiddenElements = document.querySelectorAll(".hidden");
  //   hiddenElements.forEach((el) => observer.observe(el));
  // }, []);
  return (
    <section id="skills">
      <h3 className="mr-robot">Tech Expertise</h3>
      <p>Dive into my arsenal of tech expertise in various digital domains.</p>

      <div className="container skills__container">
        <div className="skills__cards" data-aos="fade-in">
          <Card className="skills__card ">
            <h4>Frontend</h4>
            <div className="skills__card-content">
              {frontendSkills.map((item) => (
                <div key={item.id} className="skills__card-item">
                  {/* <span className="skills__card-icon">{item.icon}</span> */}
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="skills__card-icon"
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card className="skills__card ">
            <h4>Backend</h4>
            <div className="skills__card-content">
              {backendSkills.map((item) => (
                <div key={item.id} className="skills__card-item">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="skills__card-icon"
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
