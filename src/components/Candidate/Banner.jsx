import React from "react";
import hire from "../../images/hire.jpg";

function Banner() {
  return (
    <div>
      <div className="bg-cover bg-center h-auto  py-24 px-10 object-fill relative">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={hire}
          alt=""
        />
        <div className="md:w-1/2 relative z-10 lg:text-white md:text-white sm:text-white text-black">
          <p className="font-bold uppercase text-5xl">We are Hiring</p>
          <p className="text-3xl font-bold mt-3">Python Developer</p>
          <p className="text-2xl mb-10 leading-none">Remote / Hybrid</p>
          <p className="text-2xl mb-10 leading-none">$420 - $500 / Month</p>
          <a
            href="#"
            className="bg-blue-800 py-4 px-8 text-white font-bold uppercase text-xs rounded-xl hover:bg-gray-200 hover:text-gray-800"
          >
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
