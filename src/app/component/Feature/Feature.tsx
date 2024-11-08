import React from "react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link"

const Feature = () => {
  return (
    <div className="bg-gray-100 h-screen max-w-full ">
      <div className=" flex ml-48 items-start text-2xl font-bold mt-10">
        <h1 className="mt-14">Featured New Cars</h1>
      </div>

      <div className="flex ml-48 space-x-8 mt-10 cursor-pointer hover:text-black  mb-7 ">
        <h1 className="font-bold  py-2 px-2 hover:bg-blue-400 text-lg decoration-blue-700 underline">
          Popular
        </h1>
        <h1 className="hover:bg-blue-400 py-2 px-2">Upcoming</h1>
        <h1 className="hover:bg-blue-400 py-2 px-2">Newly Launched</h1>
      </div>
      <div className="flex space-x-2 justify-evenly  ">
        <div className="w-300 ml-40 items-center bg-white space-x-2  space-y-2">
          <Image
            src={"/corolla.jpg"}
            width={250}
            height={300}
            alt="image here"
          />
          <Link href="/corolla">
            <h1 className="text-center text-xl font-semibold text-blue-800">
              Toyota Corolla
            </h1>
          </Link>
          <h1 className="text-center text-green-400 text-sm">
            PKR 59.7 - 75.5 lacs
          </h1>
          <div className="flex justify-center space-x-2 items-center bg-white">
            <FaRegStar className="bg-orange-500" />
            <FaRegStar className="bg-orange-500 " />
            <FaRegStar className="bg-orange-500" />
            <FaRegStar />
            <FaRegStar /> <h1 className="text-sm"> 623 Reviews</h1>
          </div>
        </div>
        <div className="w-300 items-center bg-white space-x-3 space-y-2">
          <Image src={"/image.png"} width={250} height={300} alt="image here" />
          <Link href="/alto">
            
            <h1 className="text-center text-xl font-semibold mt-10 text-blue-800">
              Suzuki Alto
            </h1>
          </Link>
          <h1 className="text-center text-green-400 text-sm">
            PKR 23.3 - 30.5 lacs
          </h1>
          <div className="flex justify-center space-x-2 ">
            <FaRegStar className="bg-orange-500" />
            <FaRegStar className="bg-orange-500 " />
            <FaRegStar className="bg-orange-500" />
            <FaRegStar />
            <FaRegStar /> <h1 className="text-sm"> 200 Reviews</h1>
          </div>
        </div>
        <div className="w-300 items-center bg-white space-x-2 space-y-2">
          <Image
            src={"/Honda_City_Front.jpg"}
            width={250}
            height={300}
            alt="image here"
          />
          <Link href="/honda">
            <h1 className="text-center text-xl font-semibold text-blue-800">
              Honda City
            </h1>
          </Link>
          <h1 className="text-center text-green-400 text-sm">
            PKR 46.5 - 58.5 lacs
          </h1>
          <div className="flex justify-center space-x-2">
            <FaRegStar className="bg-orange-500" />
            <FaRegStar className="bg-orange-500 " />
            <FaRegStar className="bg-orange-500" />
            <FaRegStar />
            <FaRegStar /> <h1 className="text-sm"> 456 Reviews</h1>
          </div>
        </div>
        <div className="w-300 items-center bg-white space-x-2 text-gray-600 space-y-2">
          <Image src={"/civic.jpg"} width={250} height={300} alt="image here" />
          <Link href="/civic">
          
            <h1 className="text-center text-lg font-semibold text-blue-800">
              Honda Civic
            </h1>
          </Link>

          <h1 className="text-center text-green-400 text-sm">
            PKR 86.6 - 99.0 lacs
          </h1>
          <div className="flex justify-center space-x-2">
            <FaRegStar className="bg-orange-500" />
            <FaRegStar className="bg-orange-500 " />
            <FaRegStar className="bg-orange-500" />
            <FaRegStar />
            <FaRegStar /> <h1 className="text-sm"> 361 Reviews</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
