import AboutImage from '../../assets/images/bitmoji1.jpg'
import CV from '../../assets/images/linux.jpg'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import './about.css'
const About = () => {
  return (
    <section id="about" >
      <p>Get To Know</p>
      <h3 className='mr-robot'>Whoami</h3>
      <div className="container about__container">
        {/* <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Img" />
          </div>
        </div> */}
        <div className="about__right">
          
          <div className="about__cards" data-aos = "fade-in">
            {
              data.map(item=>(
              <Card key={item.id} className="about__card">
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                {/* <small>{item.desc}</small> */}
              </Card>))
            }
          </div>
            <p>
            I'm a digital alchemist, transforming lines of code into visual poetry. With a passion for creativity and an unwavering commitment to innovation, I navigate the digital realm, crafting immersive experiences that defy convention. Join me on this journey through the binary wilderness, where pixels dance to the rhythm of imagination.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, magni assumenda delectus quidem voluptatum perspiciatis? Maiores illum modi laboriosam nam repudiandae sit veniam ratione ex minima labore! Tenetur tempora, earum ducimus quaerat, autem, dolore porro optio officia praesentium expedita beatae?
            </p> */}
            <a data-aos = "fade-up" href={CV} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About