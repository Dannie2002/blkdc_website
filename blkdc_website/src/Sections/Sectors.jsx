import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const sectors = [
  {
    image: "/src/assets/Images/news.webp",
    title: 'Finance',
    description: 'To formulate economic and fiscal policies that seek to manage district financial and material resources.'
  },
  {
    image: "/src/assets/Images/education.webp",
    title: 'Social Walfare',
    description: 'The Ministry of Gender, Children Disability and Social Welfare is mandated to promote gender equality and protect...'
  },
  {
    image: "/src/assets/Images/water.webp",
    title: 'Agriculture',
    description: 'Agriculture is considered the engine of Malawis economic growth since, between 2005 and 2011, more than 80 percent of..'
  },
  {
    image: "/src/assets/Images/community.webp",
    title: 'Health',
    description: 'The Vision of the health sector is to achieve a state of health for all the people of Malawi that would enable them to lead a'
  },
  {
    image: "/src/assets/Images/licensing.webp",
    title: 'Lands',
    description: 'The Department exists to provide Decent and Affordable Housing and resolve land issues.'
  },
  {
    image: "/src/assets/Images/agriculture.webp",
    title: 'Education',
    description: 'The vision for the education sector is to be a catalyst for socio-economic development, industrial growth and inst'
  },
   {
    image: "/src/assets/Images/agriculture.webp",
    title: 'Macoha',
    description: 'MACOHA, a Malawian governmental agency, are at the forefront of work to help men and women with disabilities.'
  },
   {
    image: "/src/assets/Images/agriculture.webp",
    title: 'Water',
    description: 'The mandate of the Ministry is to ascertain a sustainable provision of water supply and sanitation services.'
  },
   {
    image: "/src/assets/Images/agriculture.webp",
    title: 'Youth',
    description: 'The functions of the sector are to coordinate the youth development  by setting the Youth Development agenda, .'
  },
   {
    image: "/src/assets/Images/agriculture.webp",
    title: 'Labour',
    description: 'The Ministry of Labour is mandated to provide policy direction and guidance on all labour administration and vocational training matters.'
  },
  
    {
    image: "/src/assets/Images/agriculture.webp",
    title: 'Community',
    description: 'The sector oversees initiatives of  Economic Empowerment Community Capacity Building and  Adult Literacy.'
  },

     {
    image: "/src/assets/Images/agriculture.webp",
    title: 'Disaster',
    description: 'Department of Disaster Management Affairs (DODMA) is a Malawi Govt agency for improving and safeguarding the....'
  },
];

const Sectors = () => (
  <section id='services' className="bg-[#f0f0f0] min-h-screen pb-16">
    <div className="section-header relative text-center py-12 mb-10" style={{ backgroundImage: `url(/src/assets/Images/Bridge_services.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute inset-0 bg-[#003521]/70  h-full w-full z-0"/>
      <h1 className="relative text-2xl uppercase md:text-2xl lg:text-[72px] horizon text-[#e6e7f5] z-10">Council sectors</h1>
      <p className="relative text-[#eceef1] lg:text-[18px] text-center max-w-2xl mx-auto mt-3 leading-relaxed z-10">
        Discover a full range of essential services designed to support the people of Balaka.
      </p>
    </div>
    <div className="wrapper mx-auto px-4 lg:max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectors.map((sector, idx) => (
          <div key={idx} className="bg-[#f7f7f7] rounded-xl shadow-md  flex flex-col items-center text-start border border-[#e6e7f5] hover:shadow-lg transition">
            <img src={sector.image} alt={sector.title} className="w-full h-44 object-cover" />
            <div className='p-8'>
            <h3 className="text-lg text-[#003521] mb-2 pasbile">{sector.title}</h3>
            <p className="text-[#4a4a4a] text-[16px] leading-relaxed">{sector.description}</p>
            <motion.a  
         
                        className='mt-4 golant lg:text-[17px] text-center text-[#003521] tracking-wide bg-transparent border hover:border-none hover:text-[#fffced] border-[#003521] rounded-[12px] px-[20px] py-[12px] flex items-center justify-center w-48 group btn-fill-sweep hover:-translate-y-2 transition duration-300 ease-in-out mx-auto lg:mx-0'
                       initial={{ opacity: 0, x: -60 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
                              >
               <span className="group-hover:text-white">Learn More</span>
             <ArrowUpRight className='ml-2 text-[#003521] group-hover:text-white'/>
           </motion.a>
           </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Sectors;
