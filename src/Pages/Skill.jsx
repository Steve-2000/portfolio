import React from "react";

const Skill = () => {
  return (
    <div  id="skill" >
      <h1 className="text-gray-900 text-4xl font-bold text-center mt-5 mb-10">
        Skills & Expertise
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-10 bg-gray-5 rounded-lg">
        <div className="bg-gray-200 rounded-xl p-6 shadow-sm hover:scale-105 transition-transform duration-300">
          <h2 className="text-gray-900 font-bold mb-3">Frontend</h2>
          <ul className="list-disc pl-5 text-gray-800 font-semibold space-y-1">
            <li>React</li>
            <li>Angular</li>
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
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
