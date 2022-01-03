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
        <img
          src={reactjs}
          alt="imageicon"
          width="45"
          className="z-20 absolute shadow-blue-500	shadow-lg lg:bloxk   top-60 rounded-full bg-black p-2"
        />
        <div className="bg-black p-2 rounded-full z-20 shadow-purple-500 shadow-lg lg:bloxk    absolute top-80  bg-black">
          <img src={redux} alt="imageicon" width="30" className=" " />
        </div>
        <div className="bg-black py-4 px-2 shadow-green-500	shadow-lg lg:bloxk  rounded-full z-20 absolute right-28 top-64">
          <img src={node} alt="imageicon" width="40" />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
