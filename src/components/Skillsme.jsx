import React from "react";
import { sql, csstail, skillreact, skillredux } from "../assets";
function Skillsme() {
  return (
    <div className="bg-zinc-900 w-full px-2 lg:px-10 mx-auto">
      <p className="text-center font-mono text-2xl">Skills</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto items-center mt-4">
        <div className="mx-auto bg-gray-400 items-center rounded-lg w-20 h-20 lg:h-40 lg:w-40 p-4 mt-2">
          <img src={skillreact} alt="imageicon" className="lg:w-32 w-10" />
        </div>
        <div className="mx-auto bg-gray-400 items-center rounded-lg w-20 h-20 lg:h-40 lg:w-40 p-4 mt-2">
          <img src={skillredux} alt="imageicon" className="lg:w-40 w-10" />
        </div>
        <div className="mx-auto bg-gray-400 items-center rounded-lg w-20 h-20 lg:h-40 lg:w-40 p-4 mt-2">
          <img src={csstail} alt="imageicon" className="lg:w-32 w-10" />
          <p className="text-center text-white text-xl font-bold mt-2">
            Tailwind CSS
          </p>
        </div>
        <div className="mx-auto bg-gray-400 items-center rounded-lg w-20 h-20 lg:h-40 lg:w-40 p-4 mt-2">
          <img src={sql} alt="imageicon" className="lg:w-40 w-10" />
        </div>
      </div>
    </div>
  );
}

export default Skillsme;
