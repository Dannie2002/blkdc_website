import React from 'react'

const Footer = () => {
  return (
    <section className='min-h-[55vh] bg-[#f3e8d3]'>

        <div className="wrapper mx-auto px-4 md:px-6 lg:max-w-6xl py-4 md:py-8">
            

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-5'>
            <div className='col-span-2'>
               <h1 className='text-green text-[22px] golant  mb-3'>About Us</h1>
           <p className='tracking-[0.2px] text-[18px] text-[#0b0b0d]'>Our goal is to go directly to the most affected communities and ensure 
                        that our people are 
                        being met with compassion, care, and consistency. With more than 100 active volunteers
                         contributing thousands of hours each year, their dedication
                          and compassion are at the heart of our meal distribution and
                         community engagement efforts</p>
            </div>
            <div className='col-span-1'>
               <h1 className='text-green text-[22px] golant  mb-3'>Quick Links</h1>
               <ul className='flex flex-col gap-3'>
                <li><a href='#'>Home</a></li>
                <li><a href="">District Overview</a></li>
                <li><a href="">Wards</a></li>
                <li><a href="">Mandate</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-green text-[22px] golant  mb-3'>About Us</h1>
               <ul className='flex flex-col gap-3'>
                <li><a href='#'>Management</a></li>
                <li>District Overview</li>
                <li>Wards</li>
                <li>Dictorates</li>
                </ul>
            </div>
            <div>
                     <h1 className='text-green text-[22px] golant  mb-3'>About Us</h1>
               <ul className='flex flex-col gap-3'>
                <li><a href='#'>Management</a></li>
                <li>District Overview</li>
                <li>Wards</li>
                <li>Dictorates</li>
                </ul>
            </div>

        </div>
        

        

        </div>
        <hr className=''></hr>
        <p className='text-[12px]'>developed by yours truly</p>

    </section>
  )
}

export default Footer