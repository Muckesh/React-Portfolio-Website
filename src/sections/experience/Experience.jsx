import { useEffect, useState } from 'react'
import Experiences from './Experiences'

import ExperienceCategories from './ExperienceCategories'
import "react-vertical-timeline-component/style.min.css";
import AOS from 'aos'
import data from './data'
import 'aos/dist/aos.css'
import './experience.css';

const Experience = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])

  const [experiences, setExperience] = useState(data.filter(exp=>exp.category==="Education"));

  const categories = data.map(item => item.category);
  const uniqueCategories = [...new Set(categories)];
  
  const filterExperienceHandler = (category) => {
    // if (category === "all") {
    //   setExperience(data);
    //   return;
    // }
    const filterExperiences = data.filter(project => project.category === category);
    setExperience(filterExperiences);
  }

  return (
    <section id="experience" data-aos="fade-in">
      <h3 className='mr-robot'>Digital Journey</h3>
      <p>
      Peek into my journey through academia and the digital domains of work
      </p>
      

      {/* <div className="container portfolio__container"> */}
        <ExperienceCategories categories={uniqueCategories} onFilterExperiences={filterExperienceHandler}/>
        <Experiences experiences={experiences}/>
      {/* </div> */}










        
    </section>
  )
}

export default Experience


{/*

<VerticalTimeline lineColor="#4db5ff" >
            <VerticalTimelineElement  className="vertical-timeline-element--education" iconStyle={{background:'#4db5ff',color:'#fff'}}
            icon={<FaGraduationCap/>}
            date="2000 - 2014">
              <h3>IT Domain</h3>
              <p>lorem30 jkask san</p>
                
            </VerticalTimelineElement>

            {/*  */}

            // <VerticalTimelineElement className="vertical-timeline-element--education" iconStyle={{background:'#4db5ff',color:'#fff'}}
            // icon={<FaGraduationCap/>}
            // date="2000 - 2014">
            //   <h3>IT Domain</h3>
            //   <p>lorem30 jkask san</p>
                
            // </VerticalTimelineElement>

            {/*  */}

        //     <VerticalTimelineElement data-aos = "fade-up" className="vertical-timeline-element--education" iconStyle={{background:'#4db5ff',color:'#fff'}}
        //     icon={<FaGraduationCap/>}
        //     date="2000 - 2014">
        //       <h3>IT Domain</h3>
        //       <p>lorem30 jkask san</p>
                
        //     </VerticalTimelineElement>

        // </VerticalTimeline>

// */}