import React from "react";
import { node, redux, reactjs, metwo } from "../assets/index";
import Aboutme from "./atoms/Aboutme";
function Jumbotron() {
  return (
    <div className=" block lg:flex lg:pt-24 h-full">
      <div className=" w-full lg:w-2/4	pt-28">
        <Aboutme />
      </div>
      <div className=" w-full lg:w-2/4 px-10">
        <img
          src={metwo}
          alt="imageme"
          className="lg:w-full w-3/5 mx-auto lg:mx-0"
        />
        <div className="bg-black p-2 rounded-full z-20 shadow-blue-500 shadow-lg lg:bloxk    absolute top-60  bg-black">
          <img
            src={reactjs}
            alt="imageicon"
            className="z-20 lg:w-8 w-4 h-4 lg:h-8"
          />
        </div>
        <div className="bg-black p-2 rounded-full z-20 shadow-purple-500 shadow-lg lg:bloxk    absolute top-80  bg-black">
          <img src={redux} alt="imageicon" className="lg:w-8 w-4 h-4 lg:h-8" />
        </div>
        <div className="bg-black py-2 px-2 shadow-green-500	shadow-lg lg:bloxk  rounded-full z-20 absolute right-28 top-64">
          <img src={node} alt="imageicon" className="lg:w-8 w-4 h-4 lg:h-8" />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
