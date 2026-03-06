import React from "react";

const Skill = () => {
  return (
    <div id="skill" className="px-4 py-6">
      <h1 className="text-gray-900 text-2xl md:text-4xl font-bold text-center mt-5 mb-6 md:mb-10">
        Skills & Expertise
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 p-4 md:p-10 bg-gray-5 rounded-lg">
        <div className="bg-gray-200 rounded-xl p-6 shadow-sm hover:scale-105 transition-transform duration-300">
          <h2 className="text-gray-900 font-bold mb-3">Frontend</h2>
          <ul className="list-disc pl-5 text-gray-800 font-semibold space-y-1">
            <li>React.Js</li>
           <li>JavaScript</li>
            <li>Tailwind CSS</li>
             
          </ul>
        </div>

        <div className="bg-gray-200 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
          <h2 className="text-gray-900 font-bold mb-3">Backend</h2>
          <ul className="list-disc pl-5 text-gray-800 font-semibold space-y-1">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST API</li>
          </ul>
        </div>

        <div className="bg-gray-200 rounded-xl p-6 hover:scale-105  transition-transform duration-300">
          <h2 className="text-gray-900 font-bold mb-3">Database</h2>
          <ul className="list-disc pl-5 text-gray-800 font-semibold space-y-1">
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="bg-gray-200 rounded-xl p-6 shadow-sm hover:scale-105 transition-transform duration-300">
          <h2 className="text-gray-900 font-bold mb-3">Tools</h2>
          <ul className="list-disc pl-5 text-gray-800 font-semibold space-y-1">
            <li>Git / GitHub</li>
            <li>Postman</li>
            <li>Figma</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="bg-gray-200 rounded-xl p-6 shadow-sm hover:scale-105 transition-transform duration-300">
          <h2 className="text-gray-900 font-bold mb-3">Soft Skills</h2>
          <ul className="list-disc pl-5 text-gray-800 font-semibold space-y-1">
            <li>Problem Solving</li>
            <li>Critical Thinking</li>
           
            <li>Time Management</li>
            <li>Adaptability</li>
             <li>Communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
