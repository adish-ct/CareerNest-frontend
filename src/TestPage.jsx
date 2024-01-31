import React from "react";

function TestPage() {
  return (
    <>
      <div>
        <div className="bg-brown-900 flex flex-col lg:flex-row md:flex-row sm:flex-col xl:flex-row gap-4 p-4">
          <div className="bg-blue-gray-400 w-full lg:w-1/2 lg:items-center border-black3200 border-5">
            <h1 className="p-3">Normal</h1>
            <p className="p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
              velit voluptas nisi ipsum voluptates ea temporibus dicta at enim,
              et minima cumque iste quam.
            </p>
          </div>
          <div className="bg-blue-gray-400 w-full lg:w-1/2  lg:items-center border-black3200 border-5">
            <h2 className="p-3">Bigger</h2>
            <p className="p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
              velit voluptas nisi ipsum voluptates ea temporibus dicta at enim,
              et minima cumque iste quam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestPage;
