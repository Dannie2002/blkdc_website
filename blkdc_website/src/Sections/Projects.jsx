import React, {useState} from 'react'
import aboutimg from '../Assets/images/landingpage.jpg'


const Projects = () => {

  const tabs=[
    {id: 1, name: "All Projects"},
    {id: 2, name: "Ongoing Projects"},
    {id: 3, name: "Completed Projects"},
    
  ]

   const ongoingProjects =[
    {id: 1, image:aboutimg, title: "Project1" },
    {id: 2, image:aboutimg, title: "Project2" },
    {id: 3, image:aboutimg, title: "Project3" },
    
  ]
  
  const completedProjects=[
    {id: 1, image:aboutimg, title: "completedProject1" },
    {id: 2, image:aboutimg, title: "completedProject2" },
    {id: 3, image:aboutimg, title: "completedProject3" },
    
  ]
  
const allProjects=[...ongoingProjects, ...completedProjects]
  
const getContentByTab = (tabName) => {
  switch (tabName) {
    case "All Projects":
      return [...ongoingProjects, ...completedProjects];

    case "Ongoing Projects":
      return ongoingProjects;

    case "Completed Projects":
      return completedProjects;

    default:
      return [...ongoingProjects, ...completedProjects]; // fallback
  }
};

const [activeCategory, setActiveCategory] = useState("All Projects");
const currentContent = getContentByTab(activeCategory);



  return (
    <section className='min-h-screen bg-main py-12'>
          {/* Header */}
                    <div className="section-header"style={{ backgroundImage: `url(${aboutimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                           <div className="absolute inset-0 bg-[#071e07]/60  h-full w-full z-0"/>
                      <h1 className="text-2xl md:text-2xl lg:text-[20px] worky text-orange  mb-3 md:mb-4 z-10">
                        About projects <span className=''>Council</span> 
                      </h1>
                      <p className="text-[#eceef1] text-base md:text-[16px] max-w-xl mx-auto leading-relaxed px-4 z-10">
                      Our Executive Management team brings a wealth of expertise and 
                      dedication to the service of Balaka District. Learn more 
                      about the individuals guiding our commitment to progress and good governance.
                      </p>
                    </div>
        
         <div className="wrapper mx-auto px-6 max-w-6xl py-0 flex flex-col gap-8">
          
                {/* Tabs */}
                <div className="flex flex-wrap gap-3 justify-center border-b border-white/10 pb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveCategory(tab.name)}
                            className={`px-5 py-2.5 rounded-xl text-sm golant md:text-base transition-all duration-300 backdrop-blur-md border
                                ${activeCategory === tab.name
                                    ? "bg-secondary border-white/30 text-green shadow-lg"
                                    : "bg-white/10 border-white/10 text-gray-200 hover:bg-white/20 hover:border-white/30"
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
   

        </div>
        
    </section>
  )
}

export default Projects;