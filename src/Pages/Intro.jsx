import React from "react";
import { Link } from "react-router-dom";


const Intro = () => {

  return (

    <div className="flex flex-row gap-4 p-4">
       
      <div className="flex flex-auto bg-white text-white p-4 basis-1/3">
        <img
          src="dp.png"
          alt="profile"
          className=" w-90 h-90 rounded-full object-cover"
        />
      </div>
      <div className="flex-auto bg-gray-100 text-black p-4 basis-2/3 m-3 text-7xl weight-bold font-semibold">
        <h1 className="m-2 ">
          <span className="text-black-500">Hi, I'm</span>{" "}
          <span className="text-blue text-blue-600">Dilakshan</span>
        </h1>
        <h1 className="text-blue-600 ">Jeganathan</h1>

        <p className="text-gray-600  m-4 text-xl font-normal text-left mr-7">
       
          Full-stack developer and designer creating beautiful, functional
          digital experiences,I’m passionate about building modern web applications that solve real-world problems
        </p>
        <div className="mt-6 flex w-1/2 gap-4 text-base">
        <Link 
         to="/#featured-projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('featured-projects')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className="your-button-classes"
        >
         <button className="flex-1 rounded-full border text-white px-4 py-2 bg-blue-600 hover:bg-blue-700">
            View My Work
          </button> </Link> 
          <button
          onClick={(e)=>{
            e.preventDefault
            document.getElementById("finishtouch").scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
          }

          }
           className="flex-1 rounded-full border px-4 py-2 hover:shadow-inset hover:bg-gray-200">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
