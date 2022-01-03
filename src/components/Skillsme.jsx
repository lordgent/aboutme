import React from "react";
import { sql, csstail, skillreact, skillredux } from "../assets";
function Skillsme() {
  return (
    <div className="bg-zinc-900 w-full px-10 mx-auto">
      <p className="text-center font-mono text-2xl">Skills</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto items-center mt-4">
        <div className="mx-auto bg-gray-400 items-center rounded-lg h-40 w-40 p-4 mt-2">
          <img src={skillreact} alt="imageicon" className="w-32" />
        </div>
        <div className="mx-auto bg-gray-400 items-center rounded-lg h-40 w-40 p-4 mt-2">
          <img src={skillredux} alt="imageicon" className="w-40" />
        </div>
        <div className="mx-auto bg-gray-400 items-center rounded-lg h-40 w-40 p-4 mt-2">
          <img src={csstail} alt="imageicon" className="w-32" />
          <p className="text-center text-white text-xl font-bold mt-2">
            Tailwind CSS
          </p>
        </div>
        <div className="mx-auto bg-gray-400 items-center rounded-lg h-40 w-40 p-4 mt-2">
          <img src={sql} alt="imageicon" className="w-40" />
        </div>
      </div>
    </div>
  );
}

export default Skillsme;
