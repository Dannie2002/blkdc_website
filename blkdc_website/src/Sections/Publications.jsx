import React, { useState } from 'react'
import Publications_pc from '../assets/Images/Publications.jpg'
import aboutimg from '../Assets/images/landingpage.jpg'
import Exc from '../assets/Images/head.jpg'
import Exc2 from '../assets/Images/Exc2.jpg'
import Button from '../Components/Button'
import NewsSection from '../Components/MediaCenter/NewsUpdates'
import Downloads from '../Components/MediaCenter/Downloads'
import Gallery from '../Components/MediaCenter/Gallery'
import Announcements from '../Components/MediaCenter/Announcements'
import UpcomingEvents from '../Components/MediaCenter/UpcomingEvents'
import PressReleases from '../Components/MediaCenter/PressReleases'

const Publications = () => {
    const tabs = [
        { id: 1, name: "News Updates" },
        { id: 2, name: "Upcoming Events" },
        { id: 3, name: "Announcements" },
        { id: 4, name: "Press Releases" },
        { id: 5, name: "Gallery" },
        { id: 6, name: "Downloads" },
    ]

    const newsUpdates = [
        { id: 1, image: aboutimg, title: "Council Approves Landmark K500 Million Project for Rural Electrification in Three Traditional Authorities", date: "March 15, 2024" },
        { id: 2, image: Exc, title: "Balaka Police Launches Community Policing Initiative to Tackle Rising Petty Crime in Market Areas", date: "March 12, 2024" },
        { id: 3, image: Exc2, title: "New Health Center Opens in Remote Village, Serving Over 5,000 Residents", date: "March 10, 2024" },
        { id: 4, image: aboutimg, title: "District Council Partners with NGOs to Improve Water Access in Rural Communities", date: "March 8, 2024" },
    ]

    const upcomingEvents = [
        { id: 1, image: Exc, title: "Annual District Council Meeting - All Stakeholders Welcome", date: "April 20, 2024" },
        { id: 2, image: Exc2, title: "Youth Empowerment Workshop: Skills Development and Entrepreneurship", date: "April 25, 2024" },
        { id: 3, image: aboutimg, title: "Community Health Outreach Program - Free Medical Screening", date: "May 5, 2024" },
        { id: 4, image: Exc, title: "Environmental Conservation Day - Tree Planting Initiative", date: "May 15, 2024" },
    ]

    const announcements = [
  
    ]

    const pressReleases = [
        { id: 1, image: Exc, title: "Official Statement on District Budget Allocation for 2024", date: "March 14, 2024" },
        { id: 2, image: Exc2, title: "Council Leadership Meets with International Development Partners", date: "March 11, 2024" },
    ]

    const getContentByTab = (tabName) => {
        switch (tabName) {
            case "News Updates": return newsUpdates
            case "Upcoming Events": return upcomingEvents
            case "Announcements": return announcements
            case "Press Releases": return pressReleases
            case "Gallery": return newsUpdates
            case "Downloads": return []
            default: return newsUpdates
        }
    }

    const [activeCategory, setActiveCategory] = useState("News Updates")
    const currentContent = getContentByTab(activeCategory)

    return (
        <section className="card-gradient-super min-h-screen py-12">
            
            {/* Header */}
            <div
                className="section-header relative text-center py-24 "
                style={{
                    backgroundImage: `url(${Publications_pc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
               <div className="absolute inset-0 bg-[#071e07]/70  h-full w-full z-0"/>
                <h1 className="relative lg:text-[22px] worky text-orange z-10">
                    Media Center
                </h1>
                <p className="relative text-[#eceef1] max-w-2xl mx-auto mt-3 leading-relaxed z-10">
                    Stay informed with the latest official news, upcoming events, and visual highlights from the Balaka District Council.
                </p>
            </div>

            <div className="wrapper mx-auto px-4 md:px-6 lg:max-w-6xl py-12">

                {/* Tabs */}
                <div className="flex flex-wrap gap-3 justify-center border-b border-white/10 pb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveCategory(tab.name)}
                            className={`px-5 py-2 rounded-full text-sm golant md:text-base transition-all duration-300 backdrop-blur-md border
                                ${activeCategory === tab.name
                                    ? "bg-[#F4E9D7] border-white/30 text-green shadow-lg"
                                    : "bg-white/10 border-white/10 text-gray-200 hover:bg-white/20 hover:border-white/30"
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Content */}
                    <div className="mt-8">
      {activeCategory === "News Updates" && <NewsSection data={newsUpdates} />}
      {activeCategory === "Upcoming Events" && <UpcomingEvents data={upcomingEvents} />}
      {activeCategory === "Announcements" && <Announcements data={announcements} />}
      {activeCategory === "Press Releases" && <PressReleases data={pressReleases} />}
      {activeCategory === "Gallery" && <Gallery data={newsUpdates} />}
      {activeCategory === "Downloads" && <Downloads />}
    </div>

            </div>
        </section>
    )
}

export default Publications
