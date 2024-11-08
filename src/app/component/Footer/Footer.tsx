import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-blue-950  max-h-screen">
      <div className="  text-gray-300 flex  flex-wrap justify-between  ">
        <div className=" space-y-0  ">
          <h1 className=" py-4 font-bold px-4 text-lg text-center">
            Cars By Make
          </h1>
          <ul>
           <li className="text-right px-6 flex text-sm "> Toyota Cars for Sale</li>
          <li className="text-right px-6 flex text-smx"> Suzuki Cars for Sale </li>
         <li className="text-right px-6 flex text-sm">Honda Cars for Sale </li>
         <li className="text-right px-6 flex text-sm"> Daihatsu Cars for Sale</li>
         <li className="text-right px-6 flex text-sm"> Mitsubishi Cars for Sale </li>
         <li className="text-right px-6 flex text-sm">Nissan Cars for Sale</li>
          <li className="text-right px-6 flex text-sm">Mercedes Cars for Sale</li>
          <li className="text-right px-6 flex text-sm">Hyundai Cars for Sale</li>
          <li className="text-right px-6 flex text-sm"> BMW Cars for Sale</li>

          </ul>
        </div>
        <div>
          <h1 className="py-4 font-bold text-center px-4 text-lg">
            Cars By City
          </h1>
          <ul>
          
          <li className="text-right px-6 flex text-sm ">   Cars in Karachi </li>
          <li className="text-right px-6 flex text-sm "> Cars in Lahore </li>
          <li className="text-right px-6 flex text-sm ">  Cars in Islamabad </li>
          <li className="text-right px-6 flex text-sm ">  Cars in Rawalpindi</li>
          <li className="text-right px-6 flex  text-sm"> Cars in Peshawar</li>
          <li className="text-right px-6 flex text-sm ">  Cars in Faisalabad</li>
          <li className="text-right px-6 flex text-sm "> Cars in Multan </li>
          <li className="text-right px-6 flex text-sm ">  Cars in Gujranwala </li>
          <li className="text-right px-6 flex text-sm ">  Cars in Sialkot</li>
          <li className="text-right px-6 flex text-sm ">   Cars in Sargodha</li>
          </ul>
        </div>
        <div>
          <h1 className="py-4 font-bold text-center px-4 text-lg">Explore PakWheels</h1>
        <ul>
          <li className="text-right px-6 flex  text-sm">    Used Cars</li>
          <li className="text-right px-6 flex text-sm ">    Used Bikes </li>
          <li className="text-right px-6 flex text-sm ">   New Cars </li>
          <li className="text-right px-6 flex text-sm ">   Auto Parts & Accessories</li>
          <li className="text-right px-6 flex  text-sm">   Cool Rides</li>
          <li className="text-right px-6 flex text-sm ">   Forums</li>
          <li className="text-right px-6 flex text-sm ">   Autoshow </li>
          <li className="text-right px-6 flex  text-sm"> Sitemap</li>
          </ul>
        </div>
        <div>
    
          <h1 className="py-4 font-bold text-center px-4 text-lg">PakWheels.com</h1>
          <ul>
          <li className="text-right px-6 flex  text-sm">  About PakWheels.com</li>
          <li className="text-right px-6 flex  text-sm"> Our Products</li>
           <li className="text-right px-6 flex text-sm ">  Advertise With Us</li>
          <li className="text-right px-6 flex  text-sm">  How To Pay</li>
           <li className="text-right px-6 flex text-sm ">   FAQs</li>
           <li className="text-right px-6 flex text-sm ">  Refunds & Returns </li>
          <li className="text-right px-6 flex text-sm "> Careers Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className="py-4 font-bold text-center px-4 text-lg">Cars by Category</h1>
        <ul>
          <li className="text-right px-6 flex text-sm "> Jeep</li>
          <li className="text-right px-6 flex text-sm "> Japanese Cars </li> 
          <li className="text-right px-6 flex text-sm "> Imported Cars </li>
          <li className="text-right px-6 flex text-sm "> Automatic Cars</li>
          <li className="text-right px-6 flex text-sm "> Low Priced Cars</li>
          <li className="text-right px-6 flex  text-sm"> 4x4 Cars</li>
          <li className="text-right px-6 flex  text-sm">  660cc Cars</li>
          <li className="text-right px-6 flex text-sm "> 1000cc Cars</li>
          </ul>
        </div>
     <div>
          <h1 className="py-4 font-bold text-center px-4 text-lg">Cars by Color</h1>
          <ul>
          <li className="text-right px-6 flex ">    White Cars</li>
          <li className="text-right px-6 flex text-sm ">  Silver Cars</li>
          <li className="text-right px-6 flex text-sm "> Black Cars</li>
          <li className="text-right px-6 flex  text-sm">  Grey Cars</li>
          <li className="text-right px-6 flex  text-sm">  Blue Cars</li>
          <li className="text-right px-6 flex  text-sm">   Red Cars</li>
          <li className="text-right px-6 flex  text-sm">  Green Cars</li>
          <li className="text-right px-6 flex  text-sm">  Gold Cars</li>
          </ul>
        </div>
  
        <div>
          <h1 className="py-4 font-bold text-center px-4 text-3xl mt-7">Subscribe to our Newsletter</h1>
          <input type="text" placeholder="name@gmail.com "className=" py-2 mb-20 max-w-[200px] ml-10"  />
          <input type="text"placeholder="Subcribe"  className="bg-green-900 px-0 mb-20 py-2 max-w-[100px] text-blue-950" />
        </div>
        <div>
          <h1 className="text-3xl py-2 mt-7">Follow Us</h1>
          <div className="flex space-x-4">
          <AiFillTwitterCircle className="size-12 rounded-xl" />
                   <CiFacebook className="size-12 rounded-xl" />
     <TiSocialYoutubeCircular className="size-12  rounded-xl" />
                <FaInstagram className="size-12   rounded-xl" />

          </div>
        </div>
    
      </div>
      <footer className="place-items-center text-gray-300  ">
        <h1 className="text-lg mb-40 pb-20">ALL  copyright reserved</h1>
      </footer>
  
      
    </div>
  );
};

export default Footer