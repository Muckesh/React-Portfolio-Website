import CV from '../../assets/images/linux.jpg'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import './skills.css'
const Skills = () => {
  return (
    <section id="skills" >
      <h3 className='mr-robot'>Tech Expertise</h3>
      <p>Dive into my arsenal of tech expertise in various digital domains.</p>
      
      <div className="container skills__container">
        {/* <div className="skills__left">
          <div className="skills__portrait">
            <img src={AboutImage} alt="skills Img" />
          </div>
        </div> */}
        <div className="skills__right">
          
          <div className="skills__cards" data-aos = "fade-in">
            {
              data.map(item=>(
              <Card key={item.id} className="skills__card">
                <span className='skills__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                {/* <small>{item.desc}</small> */}
              </Card>))
            }
          </div>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et consequuntur atque. Illo vero dignissimos ad deleniti est molestiae illum!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, magni assumenda delectus quidem voluptatum perspiciatis? Maiores illum modi laboriosam nam repudiandae sit veniam ratione ex minima labore! Tenetur tempora, earum ducimus quaerat, autem, dolore porro optio officia praesentium expedita beatae?
            </p>
            <a data-aos = "fade-up" href={CV} download className='btn primary'>Download CV <HiDownload/></a> */}
        </div>
      </div>
    </section>
  )
}

export default Skills