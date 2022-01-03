import React, { useState } from "react";

function Navbar() {
  const [toogle, settoogle] = useState(false);
  return (
    <div className="bg-zinc-800	z-60 w-full px-10 py-4 lg:flex items-center fixed top">
      <div className="flex justify-between text-white items-center">
        <div className="items-center">
          <p className="font-mono font-bold text-lg">{`Lordgent`}</p>
        </div>
        <div>
          <button
            className="lg:hidden block"
            onClick={() => settoogle(!toogle)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={` ${
          toogle ? "block" : "hidden"
        } lg:flex block gap-6 ml-0 lg:ml-20 items-center`}
      >
        <div className="mt-2 py-2 xs:text-right">
          <p className="text-white hover:text-green-400 text-sm font-mono">
            I'am
          </p>
        </div>
        <div className="mt-2 py-2 xs:text-right">
          <p className="text-white hover:text-green-400 text-sm font-mono">
            Skills
          </p>
        </div>
        <div className="mt-2 py-2 xs:text-right">
          <p className="text-white hover:text-green-400 text-sm font-mono">
            Projects
          </p>
        </div>
        <div className="mt-2 py-2 xs:text-right">
          <p className="text-white hover:text-green-400 text-sm font-mono">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
