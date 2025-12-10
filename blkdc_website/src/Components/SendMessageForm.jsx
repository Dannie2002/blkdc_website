import React from 'react'

const SendMessageForm = (className="") => {
  return (
    <div className='w-full'>
         <form className=''>
        <div className='mb-4 flex flex-col gap-1'>
          <label className='text-[#4a4a4a]'>Name:</label>
            <input
            className="text-input"
            type="text"
            id="name"
            name="name"
        
          />
             <label className="block text-[#4a4a4a]" htmlFor="email">
            Email:
          </label>
             <input
            className="text-input"
            type="email"
            id="email"
            name="email"
          />
           <label className="block mb-1 text-[#4a4a4a]" htmlFor="message">
            Message:
          </label>
          <textarea
            className="w-full px-4 py-2 rounded  border-[#4a4a4a]/40 bg-[#f6f6f7]/90 text-[#0b0b0d] border focus:outline-none focus:ring-2 focus:ring-[#f6f6f7]/20  resize-none"
            id="message"
            name="message"
            rows={8}
          />    

        </div>
      </form>
    </div>
  )
}

export default SendMessageForm