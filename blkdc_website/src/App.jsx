import { useState } from 'react'
import AboutUs from './Sections/AboutUs.jsx'
import ExecutiveManagement from './Sections/ExecutiveManagement.jsx'
import ContactUs from './Sections/ContactUs.jsx'
import AboutDetailed from './Sections/AboutDetailed.jsx'
import Footer from './Sections/Footer.jsx'
import Publications from './Sections/Publications.jsx'
import Projects from './Sections/Projects.jsx'
import LandingPage from './Sections/LandingPage.jsx'
import MainHeader from './Components/MainHeader.jsx'
import Services from './Sections/Services.jsx'




function App() {


  return (
    <>
    <MainHeader />
  <LandingPage />
  <ExecutiveManagement />
  <AboutDetailed />
  <ContactUs />
  <Publications />
  <Projects />
  <Services />
  <Footer />
    </>
  )
}

export default App
