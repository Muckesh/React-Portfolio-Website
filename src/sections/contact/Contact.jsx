import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import contacts from './data'
import './contact.css'

const Contact = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <section id='contact'>
      <h3 className='mr-robot'>Ping Me</h3>
      <p>
      Transmit a message through any of the links below.
      </p>
      
      <div className="container contact__container" data-aos = "fade-up"  >
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target='_blank' rel='noopener noreferrer'>{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact