import React from "react";
import Image from "next/image";
import { BiMobile } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="border border-gray-100 p-6 bg-blue-950 opacity-120 text-sm mt-0 ">
      <header className="bg-blue-950 text-gray-200">
        <div>
          <div className="flex justify-between items-center  mt-0 border-b border-gray-500 bodder-opacity-89 mb-6 bg-blue-950 opacity-120">
            
              <BiMobile className="bg-red-900 opacity-80 ml-32" />
            
            <h3 className="ml- space-x-3 pr-80 mr-48">Download App Via SMS</h3>
            <div className="flex justify-end">
              <h3 className="ml-64 pl-30 mr-1 text-red-600">اُردو </h3>
              <button className="ml-85 pl-5 text-end  border-l-2 border-gray-500 border-opacity-89 space-x-2">
                Sign In
              </button>
              <button className="mr-8 pl-4  ml-3 border-l-2 border-gray-500 border-opacity-89  ">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div>
          <nav>
            <ul className="flex  items-center justify-evenly">
              <Image
                src={"/logo.png"}
                width={150}
                height={150}
                alt="logo image"
                className="bg-gray-800 opacity-60"
              />
              <li>UsedCars</li>
              <li>NewCars</li>
              <li>Bikes</li>
              <li>AutoStore</li>
              <li>Vedeos</li>
              <li>Forms</li>
              <li>Blogs</li>
              <li>More</li>
              <button className="py-2 px-8 bg-red-800  border-blue-950-rounded-x1">
                Post an Ad
              </button>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
