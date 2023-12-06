import React from "react";
import infosys from "../../images/Infosys.png";

function TopCompanies() {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl font-bold">To complanies hiring</h1>
      <div className="flex flex-col mt-3">
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex h-18 w-36 items-center">
              <img src={infosys} alt="" />
            </div>
          </div>

          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex items-center justify-center">
              <div className="flex h-18 w-36 items-center">
                <img src={infosys} alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex items-center justify-center">
              <div className="flex h-18 w-36 items-center">
                <img src={infosys} alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex items-center justify-center">
              <div className="flex h-18 w-36 items-center">
                <img src={infosys} alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex h-18 w-36 items-center">
              <img src={infosys} alt="" />
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex h-18 w-36 items-center">
              <img src={infosys} alt="" />
            </div>
          </div>
          {/* ............. */}
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex h-18 w-36 items-center">
              <img src={infosys} alt="" />
            </div>
          </div>

          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex items-center justify-center">
              <div className="flex h-18 w-36 items-center">
                <img src={infosys} alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex items-center justify-center">
              <div className="flex h-18 w-36 items-center">
                <img src={infosys} alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex items-center justify-center">
              <div className="flex h-18 w-36 items-center">
                <img src={infosys} alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex h-18 w-36 items-center">
              <img src={infosys} alt="" />
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
            <div className="flex h-18 w-36 items-center">
              <img src={infosys} alt="" />
            </div>
          </div>
        </div>
        <h1 className="flex justify-center mt-3 text-red-500 cursor-pointer">
          View All
        </h1>
      </div>
    </div>
  );
}

export default TopCompanies;
