import React from "react";

const Panchang = () => {
  return (
    <div className="max-w-[1248px] w-full mx-auto px-4 py-40 md:py-16 lg:py-20 relative z-10">
      <div className="flex items-center justify-center mb-8 md:mb-10">
        <div className="h-px bg-gray-400 w-16 sm:w-20"></div>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 px-4 text-center">
          Panchang
        </h1>
        <div className="h-px bg-gray-400 w-16 sm:w-20"></div>
      </div>

      <div className="bg-blue-50 p-4 sm:p-6 rounded-md shadow-md relative z-20 mt-6 md:mt-10">
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
          In Hindu Calendar, all five elements together are called Panchang. (In
          Sanskrit: Panchang = Pancha (five) + Ang (part)). Hence, Hindu
          Calendar which shows all five elements for each day is called
          Panchang. In South India, Panchang is known as Panchangam.
        </p>
      </div>
    </div>
  );
};

export default Panchang;
