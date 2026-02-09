import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";

const FinishTouch = () => {
  return (
    <div id="contact">
        <h1 className='text-black font-bold text-black-500  text-center text-3xl mt-5 '>Let's Work Together</h1>
        <p className='text-gray-500 text-xl text-center mt-7'>Feel free to reach out for collaborations or just a friendly hello 👋
            say 
        </p>
        <div id="finishtouch" className='flex flex-row gap-4 mt-6 text-center justify-center items-center  rounded-xl   '>
            <button className='flex text-white p-2 px-4 text-xl font-extralight bg-blue-600  justify-center items-center gap-2 animate-bounce rounded-xl' style={{animationDelay: '0ms'}}><MdOutlineEmail /> Email</button>
            <button className='flex text-white p-2 px-4 text-xl font-extralight bg-blue-600 rounded-xl  justify-center items-center gap-2 animate-bounce' style={{animationDelay: '200ms'}}><CiLinkedin /> LinkedIn</button>
            <button className='flex text-white p-2 px-4 text-xl font-extralight bg-blue-600 rounded-xl  justify-center items-center gap-2 animate-bounce' style={{animationDelay: '400ms'}}><IoLogoGithub /> GitHub</button>
        </div>


    </div>
  )
}

export default FinishTouch