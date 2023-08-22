import ProjectCategories from './ProjectCategories'
import Projects from './Projects'
import './portfolio.css'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map(item => item.category);
  const uniqueCategories = ["all",...new Set(categories)];
  
  const filterProjectsHandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }
  
  return (
    <section id="portfolio">
      
      <p>
      Look Out My
      </p>
      {/* Digital Enigmas */}
      <h3 className='mr-robot'>Digital Exploits</h3>
      <div className="container portfolio__container">
        <ProjectCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects}/>
      </div>
    </section >
  )
}

export default Portfolio