import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Intro from './Intro'
import { FaExternalLinkAlt } from "react-icons/fa";


const Home = () => {
     const { projects, loading } = useSelector((state) => state.projectreducer);
     
    useEffect(() => {
        console.log('Projects loaded:', projects);
    }, [projects])

  return (
    <>

      <section id="project" className="p-4">
        <h1 className='text-black-500 text-4xl font-bold text-center'>Featured Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-2 mx-2 ms-4 items-center justify-center text-left px-2 mr-2">
      {loading && <p className='col-span-full text-xl font-medium text-red-300 animate-bounce text-center'>Loading projects...</p>}
      {!loading && projects?.length > 0 ? projects.map((item) => (
                <div key={item._id} className="bg-white text-black p-3 rounded">
                      <img src={item.Image[0]?.image || item.Image[1]?.image || item.Image[2]?.image} alt={item.title} className="w-full h-50 object-cover rounded-2xl hover:scale-105 transition-transform duration-300" /> 
      

         
                       <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                       <p className="text-sm">{item.description}</p>
                       <p className="text-sm w-full flex flex-row gap-2"> {item.technologies?.map(
                        (tech, index) => (<span key={index} className="bg-gray-200 text-blue-800 px-2 py-1  rounded-full text-md mx-2 mt-2 ms-3">
                          {tech}
                        </span>
                      )
                       )}</p>
                       <div className="mt-2 ms-4" >
                        <Link to={item.link} className="text-blue-500 hover:underline">
                               View Project <FaExternalLinkAlt className="inline ml-1" />
                         </Link></div>
                 </div>

    )): <p className='col-span-full text-center text-red-500 text-4xl font-bold mt-96'>No projects found.</p>
    }
  </div>
  </section>
  </>
)
}

export default Home