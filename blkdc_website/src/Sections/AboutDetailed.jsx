import React from 'react'
import aboutimg from '../Assets/images/landingpage.jpg'
import Card from '../Components/Card'
import leadericon from '../Assets/images/leadership.svg'
import { Eye, Target } from 'lucide-react'
import ScrollReveal from '../Components/ScrollReveal'

const AboutDetailed = () => {
  return (
<<<<<<< HEAD
    <section className='min-h-screen card-gradient-super py-12'>
=======
    <section id="about-detailed" className='min-h-screen bg-main py-12'>
>>>>>>> 10d54b3 (Improving the landing page)
          {/* Header */}
                    <div className="section-header"style={{ backgroundImage: `url(${aboutimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                           <div className="absolute inset-0 bg-[#071e07]/60  h-full w-full z-0"/>
                      <h1 className="text-2xl md:text-2xl lg:text-[27px] worky text-orange  mb-3 md:mb-4 z-10">
                        About Balaka District <span className=''>Council</span> 
                      </h1>
                      <p className="text-[#eceef1] text-base md:text-[16px] max-w-xl mx-auto leading-relaxed px-4 z-10">
                      Our Executive Management team brings a wealth of expertise and 
                      dedication to the service of Balaka District. Learn more 
                      about the individuals guiding our commitment to progress and good governance.
                      </p>
                    </div>
        
         <div className="wrapper mx-auto px-6 max-w-6xl py-0 flex flex-col gap-8">
            
              {/*the image and About us Text*/}
            <div className="flex flex-col mt-8 lg:flex-row md:flex-row gap-8 lg:gap-12">
                 {/*the image side*/}
                <div className='lg:w-1/2'>
                    <img src={aboutimg} className='block' />
                </div>
                 <div className='lg:w-1/2'>
<<<<<<< HEAD
                   <ScrollReveal enableBlur='false' textClassName='text-[#fff2df] !text-[22px]  text-center'>
=======
                 <h1 className='text-orange golant text text-center text-xl'>About Balaka District Council</h1>
                   <ScrollReveal enableBlur='false' textClassName='text-[#ffffff] !text-[18px] text-center'>
>>>>>>> 10d54b3 (Improving the landing page)
                        Our goal is to go directly to the most affected communities and ensure 
                        that our people are 
                        being met with compassion, care, and consistency.<span className='text-[#ff7700]'> With more than 100 active volunteers
                         contributing thousands of hours each year, their dedication
                          and compassion are at the heart of our meal distribution and
                         community engagement efforts.</span>
                   </ScrollReveal>
                        
                         
                 </div>

            </div>
             {/*bento grid for mission, vision and objectives*/}
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[270px]'>
            <Card className="bg-[#F3E8D3] lg:col-span-2  transition duration-300">
            <Target className="w-10 h-10 text-orange z-10" />
            <h4 className="text-green golant text-2xl">Our Mission</h4>
            <p className="text-[#0b0b0d] text-center">
              To provide quality social economic services to all people in th the district through
               active participation of all stakeholders, in order to empower communities and improve the quality of their lives.
            </p>
          </Card>

             <Card className="card-gradient-warm col-span-1 md:col-span-1 lg:col-span-2 bg-secondary shadow-md hover:shadow-xl transition duration-300">
           <Eye className="w-10 h-10 text-orange" />
            <h4 className="text-green golant text-2xl">Our Vision</h4>
            <p className="text-[#0b0b0d] text-center leading-relaxed">
              The vision of the council is to be a reliable provider of quality and sustainable socio-economic services.
            </p>
        
          </Card>

             <Card className="col-span-1 md:col-span-1 lg:col-span-2 bg-[#F3E8D3] shadow-md hover:shadow-xl transition duration-300 z-10">
           <Eye className="w-10 h-10 text-orange" />
            <h4 className="text-green golant text-2xl">Core Values</h4>
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