import React from 'react'

const SendMessageForm = (className="") => {
  return (
    <div className='w-full'>
         <form className=''>
        <div className='mb-4 flex flex-col gap-1'>
          <label className='text-[#fffced]'>Name</label>
            <input
            className="text-input"
            type="text"
            id="name"
            name="name"
        
          />
             <label className="block text-[#fffced]" htmlFor="email">
            Email
          </label>
             <input
            className="text-input"
            type="email"
            id="email"
            name="email"
          />
           <label className="block mb-1 text-[#fffced]" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 rounded  border-[#e1dcc3] bg-[#F3E8D3]/90 text-[#0b0b0d] border-none focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]  resize-none"
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