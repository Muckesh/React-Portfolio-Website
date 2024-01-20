// Skills.jsx
import React from "react";
import "./skills.css";
import Card from "../../components/Card";
import data from "./data";

const Skills = () => {
  // Separate skills into Frontend and Backend categories
  const frontendSkills = data.filter((skill) => skill.category === "Frontend");
  const backendSkills = data.filter((skill) => skill.category === "Backend");

  return (
    <section id="skills">
      <h3 className="mr-robot">Tech Expertise</h3>
      <p>Dive into my arsenal of tech expertise in various digital domains.</p>

      <div className="container skills__container">
        <div className="skills__cards" data-aos="fade-in">
          <Card className="skills__card">
            <h4>Frontend</h4>
            {frontendSkills.map((item) => (
              <div key={item.id} className="skills__card-item">
                <span className="skills__card-icon">{item.icon}</span>
                <p>{item.title}</p>
              </div>
            ))}
          </Card>

          <Card className="skills__card">
            <h4>Backend</h4>
            {backendSkills.map((item) => (
              <div key={item.id} className="skills__card-item">
                <span className="skills__card-icon">{item.icon}</span>
                <p>{item.title}</p>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
