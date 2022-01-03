import React from "react";
import { aboutme } from "../assets/index";
function Aboutme() {
  return (
    <div className="px-4 bg-zinc-900 h-full pt-10 pb-10">
      <p className="text-center font-mono text-2xl mb-2">About me</p>
      <div className="lg:flex block px-10 lg:px-40 items-center">
        <div className="w-3/5 mx-auto lg:mx-0">
          <img src={aboutme} alt="imageme" className="w-80 " />
        </div>
        <div className="w-full lg:w-3/5 mx-auto lg:mx-0">
          <p className="font-mono text-xs mt-4">
            Saya Memiliki kemampuan dalam membuat Web dan basic Aplikasi
            Android. Stack yang sering saya gunakan adalah <b>Front-End</b>:
            ReactJs/NextJs - React Native - TailwindCss - Bootstrap dan
            <b> Back-End</b>: ExpressJs - ORM Sequelize - Mysql, mampu berkerja
            dalam Tim maupun Individu dan saya suka Belajar hal baru khususnya
            di dunia Programming
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
