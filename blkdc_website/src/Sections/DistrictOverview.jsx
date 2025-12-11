import React, { useState } from 'react';
import { Users, MapPinned } from 'lucide-react';
import Card from '../Components/Card.jsx';
import Button from '../Components/Button.jsx';
import FilledButton from'../Components/FilledButton.jsx';
import LocationIcon from '../Components/LocationIcon.jsx';
import SendMessageForm from '../Components/SendMessageForm.jsx';
import aboutimg from '../Assets/images/landingpage.jpg'
import ContactHeader from '../assets/Images/Contact_us.jpg'
import{ ScrollVelocityContainer, ScrollVelocityRow } from "../Components/ScrollVelocity.jsx";
import CardStart from '../Components/CardStart.jsx';
import { motion } from 'framer-motion';
import ImageSlider from '../Components/ImageSlider';
import overviewimg from '../Assets/images/Publications.jpg';
import mapimg from '../Assets/images/map.svg';

const overviewSlides = [
  {
    image: overviewimg,
    overlayClassName: 'bg-gradient-to-r from-[#003521]/80 to-[#779673]/40',
    content: (
      <div className="max-w-2xl mx-auto text-left px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#fffced] mb-4 golant">Location & Size of Balaka</h2>
        <p className="text-[#fffced] text-lg leading-relaxed mb-2">
          Balaka District is located in the Southern Region of the Republic of Malawi. Ntcheu borders it to the northwest, Mangochi to the north, Machinga to the east, Zomba to the southeast, Blantyre to the south, and Neno to the southwest.
        </p>
        <p className="text-[#fffced] text-lg leading-relaxed mb-2">
          The district headquarters is 201 km from Lilongwe, the capital city of Malawi, and about 127 km from Blantyre, the main commercial centre in the country.
        </p>
        <p className="text-[#fffced] text-lg leading-relaxed mb-2">
          The district covers an area of <span className="font-bold">2,193km²</span> representing 2.4% of the total land area of Malawi. It is the 20th largest district in the country and the seventh largest in the Southern Region.
        </p>
        <p className="text-[#fffced] text-lg leading-relaxed mb-2">
          <span className="font-bold">Coordinates:</span> Latitude 14°59'15.38"S, Longitude 34°57'22.23"E
        </p>
      </div>
    ),
  },
  {
    image: mapimg,
    overlayClassName: 'bg-gradient-to-r from-[#003521]/80 to-[#779673]/40',
    content: (
      <div className="max-w-2xl mx-auto text-left px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#fffced] mb-4 golant">Traditional Authorities & Wards</h2>
        <p className="text-[#fffced] text-lg leading-relaxed mb-2">
          Balaka District is divided into several Traditional Authorities and wards, each with its own local leadership and administrative responsibilities. This structure helps in effective governance and service delivery across the district.
        </p>
        <ul className="list-disc pl-6 text-[#fffced]">
          <li>Multiple Traditional Authorities</li>
          <li>Several administrative wards</li>
          <li>Community engagement and representation</li>
        </ul>
      </div>
    ),
  },
  // Add more slides as needed for other district facts
];

const DistrictOverview = () => {

  return (
    <section className="bg-[radial-gradient(circle_at_top_left,#fdfffb_0%,transparent_60%),radial-gradient(circle_at_bottom_right,#d9d9d9_0%,#fdfffb_0%)] min-h-screen pb-12 relative">

             {/* Header */}
        <div className="section-header"style={{ backgroundImage: `url(${ContactHeader})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
               <div className="absolute inset-0 bg-[#003521]/70  h-full w-full z-0"/>
          <h1 className="text-2xl md:text-2xl lg:text-[82px] horizon uppercase text-[#fffced]   mb-3 md:mb-4 z-10">
            District <span className=''>Overview</span> 
          </h1>
          <p className="text-[#eceef1] text-base md:text-[16px] max-w-xl mx-auto leading-relaxed px-4 z-10 text-center">
            Key facts and insights about Balaka District.
          </p>
        </div>
      <div className="wrapper mx-auto px-4 md:px-6 lg:max-w-6xl py-4 md:py-8">

         <div className="box mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[240px]">
             <div className="bg-[#f7f7f7] col-span-2 border-t-8 border-t-[#0e580f] rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-[#e6e7f5] hover:shadow-lg transition">
            <Users className="text-[38px]" />
            <h3 className="text-[42px] text-red-500 mb-2 pasbile">+1,330,543</h3>
            <p className="text-[#4a4a4a] text-[16px] leading-relaxed">Current Expected Population</p>
          </div>

               <div className="bg-[#f7f7f7] col-span-2 border-t-8 border-t-[#0e580f] rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-[#e6e7f5] hover:shadow-lg transition">
            <MapPinned className="text-[38px]" />
            <h3 className="text-[42px] text-[#003521] mb-2 pasbile">Southern Region,</h3>
            <p className="text-[#4a4a4a] text-[16px] leading-relaxed">Malawi</p>
          </div>

               <div className="bg-[#f7f7f7] col-span-2 border-t-8 border-t-[#0e580f] rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-[#e6e7f5] hover:shadow-lg transition">
            <MapPinned className="text-[38px]" />
            <h3 className="text-[42px] text-[#003521] mb-2 pasbile">3 MPS</h3>
            <p className="text-[#4a4a4a] text-[16px] leading-relaxed">Elected Members</p>
            <FilledButton text="View Details" />
          </div>


        </div>

        {/*image slider with some district overview */}
        <div className="mt-16 h-[400px]">
          {/* District Overview Image Slider */}
          <ImageSlider
            slides={overviewSlides}
            interval={7000}
            className="h-full rounded-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default DistrictOverview;