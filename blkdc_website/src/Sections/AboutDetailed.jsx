import React from 'react'
import aboutimg from '../Assets/images/landingpage.jpg'
import Card from '../Components/Card'
import leadericon from '../Assets/images/leadership.svg'
import { Eye, Target, Gem } from 'lucide-react'
import ScrollReveal from '../Components/ScrollReveal'

const AboutDetailed = () => {
  return (
    <section id="about-detailed" className='min-h-screen bg-[radial-gradient(circle_at_top_left,#fdfffb_0%,transparent_60%),radial-gradient(circle_at_bottom_right,#d9d9d9_0%,#fdfffb_0%)] pb-12'>
          {/* Header */}
                    <div className="section-header"style={{ backgroundImage: `url(${aboutimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                           <div className="absolute inset-0 bg-[#003521]/70  h-full w-full z-0"/>
                      <h1 className="text-[48px] md:text-2xl lg:text-[72px] horizon uppercase text-white  mb-3 md:mb-4 z-10">
                        About <span className=''>Us</span> 
                      </h1>
                      <p className="text-[#fffced] text-center text-base md:text-[16px] max-w-xl mx-auto leading-relaxed px-4 z-10">
                      Learn more 
                      about the individuals guiding our commitment to progress and good governance.
                      </p>
                    </div>
        
         <div className="wrapper mx-auto px-6 max-w-6xl py-0 flex flex-col gap-8">
            
              {/*the image and About us Text*/}
            <div className="flex flex-col mt-8 lg:flex-row md:flex-row gap-8 lg:gap-22">
                 {/*the image side*/}
                <div className='lg:w-1/2'>
                    <img src={aboutimg} className='block' />
                </div>
                 <div className='lg:w-1/2'>
                 <h1 className='text-[#003521] golant lg:text-[48px] lg:leading-[48px] text-start text-xl'>About Balaka District Council</h1>
                   <ScrollReveal enableBlur={false} textClassName='text-[#0b0b0d] !text-[18px] text-start'>
                        Our goal is to go directly to the most affected communities and ensure 
                        that our people are 
                        being met with compassion, care, and consistency.
                        <span className='text-[#4a4a4a]'> With more than 100 active volunteers
                         contributing thousands of hours each year, their dedication
                          and compassion are at the heart of our meal distribution and
                         community engagement efforts.</span>
                   </ScrollReveal>
                        
                         
                 </div>

            </div>
             {/*bento grid for mission, vision and objectives*/}
             <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[290px]'>
            <Card className="bg-[linear-gradient(to_bottom,#003521,#00442b_13%,#005434_28%,#006942_48%)] lg:col-span-2  transition duration-300">
            <Target className="w-10 h-10 text-[#fffced] z-10" />
            <h4 className="text-[#fffced] pasbile text-lg">Our Mission</h4>
            <p className="text-[#fffced] text-center">
              To provide quality social economic services to all people in th the district through
               active participation of all stakeholders, in order to empower communities and improve the quality of their lives.
            </p>
          </Card>

             <Card className="col-span-1 md:col-span-1 lg:col-span-2 border border-[#003521]/30 shadow-md hover:shadow-xl transition duration-300">
           <Eye className="w-10 h-10 text-[#003521]" />
            <h4 className="text-[#003521] pasbile text-lg">Our Vision</h4>
            <p className="text-[#0b0b0d] text-center leading-relaxed">
              The vision of the council is to be a reliable provider of quality and sustainable socio-economic services.
            </p>
        
          </Card>

             <Card className="col-span-1 md:col-span-1 lg:col-span-2 border border-[#003521]/20 shadow-md hover:shadow-xl transition duration-300 z-10">
           <Gem className="w-10 h-10 text-[#003521]" />
            <h4 className="text-[#003521] pasbile text-lg">Core Values</h4>
            <p className="text-[#0b0b0d] text-center leading-relaxed">
              We envision a resilient, thriving Balaka powered by innovation,
              accountability, and people-centered governance.
            </p>
        
          </Card>

             </div>


        </div>
        
    </section>
  )
}

export default AboutDetailed