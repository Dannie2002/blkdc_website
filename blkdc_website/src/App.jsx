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
import NewsInDetails from './Sections/NewsInDetails.jsx'
import Sectors from './Sections/Sectors.jsx'
import DistrictOverview from './Sections/DistrictOverview.jsx'


function App() {


  return (
    <>
    <MainHeader />
  <LandingPage />
  <ExecutiveManagement />
  <AboutDetailed />
  <ContactUs />
  <Publications />
  <NewsInDetails />
  <Projects />
  <Services />
  <Sectors />
  <DistrictOverview />
  <Footer />
    </>
  )
}

export default App
