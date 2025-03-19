import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen bg-[#0096ff] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/aroypqmb"
        className="flex flex-col max-w-[600px] w-full">
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-black text-gray-300 text-center'>Contact</p>
          <p className='text-gray-300 py-4'>
            &#92;&#92;Submit the form below or shoot me an email - matthewball337@gmail.com
          </p>
        </div>
        <input type="text" name="name" placeholder="Name"
        className='bg-[#ccd6f6] p-2' />
        <input type="text" name="email" placeholder="Email"
        className='my-4 p-2 bg-[#ccd6f6]' />
        <textarea name="message" placeholder="Message" rows={10}
        className='bg-[#ccd6f6] p-2' />
        <button
        className='text-white border-2 hover:bg-black hover:border-black px-4 py-3 my-8 mx-auto flex items-center'
        type="submit">
          Let&apos;s Collaborate
        </button>
      </form>
    </div>
  )
}

export default Contact;