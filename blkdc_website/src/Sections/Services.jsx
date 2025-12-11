import React from 'react';
import { HeartPulse, BookOpen, Droplets, Users, FileText, Leaf } from 'lucide-react';

const services = [
  {
    icon: <HeartPulse className="text-[#003521] w-10 h-10 mb-3" />, // blue
    title: 'Health Services',
    description: 'Access to quality healthcare, clinics, and public health programs for all residents.'
  },
  {
    icon: <BookOpen className="text-[#003521] w-10 h-10 mb-3" />, // gold
    title: 'Education & Schools',
    description: 'Support for primary, secondary, and adult education, including school infrastructure.'
  },
  {
    icon: <Droplets className="text-[#003521] w-10 h-10 mb-3" />, // green
    title: 'Water & Sanitation',
    description: 'Provision of clean water, sanitation facilities, and hygiene education.'
  },
  {
    icon: <Users className="text-[#003521] w-10 h-10 mb-3" />, // light blue
    title: 'Community Development',
    description: 'Empowering communities through development projects and social programs.'
  },
  {
    icon: <FileText className="text-[#003521] w-10 h-10 mb-3" />,
    title: 'Licensing & Permits',
    description: 'Issuing business licenses, permits, and official documents for residents and businesses.'
  },
  {
    icon: <Leaf className="text-[#003521] w-10 h-10 mb-3" />,
    title: 'Agriculture Support',
    description: 'Agricultural extension services, farmer training, and support for food security.'
  }
];

const Services = () => (
  <section id='services' className="bg-[#f0f0f0] min-h-screen pb-16">
    <div className="section-header relative text-center py-12 mb-10" style={{ backgroundImage: `url(/src/assets/Images/Bridge_services.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute inset-0 bg-[#003521]/70  h-full w-full z-0"/>
      <h1 className="relative text-2xl uppercase md:text-2xl lg:text-[72px] horizon text-[#e6e7f5] z-10">Our Services</h1>
      <p className="relative text-[#eceef1] lg:text-[18px] text-center max-w-2xl mx-auto mt-3 leading-relaxed z-10">
        Discover a full range of essential services designed to support the people of Balaka.
      </p>
    </div>
    <div className="wrapper mx-auto px-4 lg:max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-[#f7f7f7] border-t-8 border-t-[#0e580f] rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-[#e6e7f5] hover:shadow-lg transition">
            {service.icon}
            <h3 className="text-lg text-[#003521] mb-2 pasbile">{service.title}</h3>
            <p className="text-[#4a4a4a] text-[16px] leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
