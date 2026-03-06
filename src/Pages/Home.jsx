import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Intro from './Intro'
import { FaExternalLinkAlt } from "react-icons/fa";

// Vite bundles & hashes all assets at build time
const assetImages = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,svg}', { eager: true });
const localImageMap = Object.fromEntries(
  Object.entries(assetImages).map(([path, mod]) => [path.split('/').pop().toLowerCase(), mod.default])
);

const Home = () => {
     const { projects, loading } = useSelector((state) => state.projectreducer);
     
    useEffect(() => {
        console.log('Projects loaded:', projects);
        console.log('Is array?', Array.isArray(projects));
    }, [projects])

  return (
    <>

      <section id="project" className="p-4 md:p-6">
        <h1 className='text-black-500 text-2xl md:text-4xl font-bold text-center mb-4'>Featured Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 md:px-4 items-start text-left">
      {loading && <p className='col-span-full text-xl font-medium text-red-300 animate-bounce text-center'>Loading projects...</p>}
      {!loading && Array.isArray(projects) && projects.length > 0 ? projects.map((item) => (
            <div key={item._id} className="bg-white text-black p-4 md:p-5 rounded-lg shadow-sm h-full flex flex-col">
                      <img src={localImageMap[(item.Image[0]?.image || item.Image[1]?.image || item.Image[2]?.image)?.toLowerCase()]} alt={item.title} loading="lazy" className="w-full h-48 md:h-56 object-cover rounded-2xl hover:scale-105 transition-transform duration-300" /> 
      

         
                       <h2 className="text-lg md:text-xl font-bold mb-0 mt-3 min-h-10">{item.title}</h2>
                       <p className="text-sm md:text-base text-gray-700 min-h-12">{item.description}</p>
                       <div className="flex flex-wrap gap-2 mt-2 min-h-10 content-start"> {item.technologies?.map(
                        (tech, index) => (<span key={index} className="bg-gray-200 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                          {tech}
                        </span>
                      )
                       )}</div>
                       <div className="mt-auto pt-2" >
                        <Link to={item.link} className="text-blue-500 hover:underline text-sm md:text-base">
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