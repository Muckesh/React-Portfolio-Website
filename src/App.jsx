
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services'
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Experience from './sections/experience/Experience';

import {useRef, useState, useEffect} from 'react'
import Skills from './sections/skills/Skills';

const App = () => {
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0)

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if(siteYPostion < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPostion > (mainRef?.current?.getBoundingClientRect().y + 20)) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 1500);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPostion])


  return (
    <main ref={mainRef}>
        <Navbar/>
        <Header/>
        <About/>
        <Skills/>
        <Experience />
        {/* <Services/> */}
        <Portfolio/>
        {/* <Testimonials/>
        <FAQs/> */}
        <Contact/>
        <Footer/>
        {showFloatingNav && <FloatingNav/>}
    </main>
  )
}

export default App