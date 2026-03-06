import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
  
const FinishTouch = () => {
  return (
    <div id="contact" className="px-4 py-6">
        <h1 className='text-black font-bold text-black-500 text-center text-2xl md:text-3xl mt-5'>Let's Work Together</h1>
        <p className='text-gray-500 text-base md:text-xl text-center mt-4 md:mt-7 px-4'>Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
        <div id="finishtouch" className='flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 text-center justify-center items-center px-4'>
           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dilakshanjeganathan@gmail.com&su=Portfolio%20Contact&body=Hi%20Dilakshan%2C%20I%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer" className='flex text-white p-2 px-4 md:px-6 text-base md:text-xl font-extralight bg-blue-600 justify-center items-center gap-2 animate-bounce rounded-xl w-full sm:w-auto' style={{animationDelay: '0ms'}}>
             <MdOutlineEmail /> Email
           </a>
           <a href="https://www.linkedin.com/in/jeganathan-dilakshan-81734b270" target="_blank" rel="noopener noreferrer" className='flex text-white p-2 px-4 md:px-6 text-base md:text-xl font-extralight bg-blue-600 rounded-xl justify-center items-center gap-2 animate-bounce w-full sm:w-auto' style={{animationDelay: '200ms'}}>
             <CiLinkedin /> LinkedIn
           </a>
           <a href="https://github.com/Steve-2000" target="_blank" rel="noopener noreferrer" className='flex text-white p-2 px-4 md:px-6 text-base md:text-xl font-extralight bg-blue-600 rounded-xl justify-center items-center gap-2 animate-bounce w-full sm:w-auto' style={{animationDelay: '400ms'}}>
             <IoLogoGithub /> GitHub
           </a>
        </div>

    </div>
  )
}

export default FinishTouch