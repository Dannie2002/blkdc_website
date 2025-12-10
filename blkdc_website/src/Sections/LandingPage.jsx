import React from 'react';
import aboutimg from "../Assets/images/landingpage.jpg";
import ImageSlider from '../Components/ImageSlider';
import servicepic from '../Assets/images/Bridge_services.jpg';
import News from '../Assets/images/News.webp';
import NewsSlideContent from './NewsSlideContent';
import TransparencySlideContent from './TransparencySlideContent';
import WelcomeSlideContent from './WelcomeSlideContent';
import ServicesSlideContent from './ServicesSlideContent';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';




const slides = [
  {
    image: aboutimg,
    overlayClassName: 'bg-gradient-to-r from-[#201f1c]/95 to-[#1e5081]/15',
    content: <WelcomeSlideContent />,
  },
  {
    image: News,
    overlayClassName: 'bg-gradient-to-r from-[#201f1c]/95 to-[#779673]/15',
    content: <NewsSlideContent />,
  },
  {
    image: aboutimg,
    overlayClassName: 'bg-gradient-to-r from-[#201f1c]/95 to-[#1e5081]/15',
    content: <TransparencySlideContent />,
  },
  {
    image: servicepic,
    overlayClassName: 'bg-gradient-to-r from-[#201f1c]/95 to-[#779673]/15',
    content: <ServicesSlideContent />,
  },
  
  
];
const Hero = () => (
  <section id="home" className="min-h-[80vh]">
    <ImageSlider slides={slides} interval={7000} className="h-[80vh] min-h-[80vh]"> {/* No children prop needed for content rendering */}
    </ImageSlider>
  </section>
);
export default Hero;