import React from "react";

const HinduCalendarInfo = () => {
  return (
    <div className="w-full max-w-[1248px] h-[393px] mx-auto mt-[-0px] md:mt-[-250]">
      <div className="flex items-center justify-center mb-4">
        <div className="border-t border-gray-800 w-32 md:w-48"></div>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 px-4 text-center">
          Hindu Calendar
        </h1>
        <div className="border-t border-gray-800 w-32 md:w-48"></div>
      </div>

      <div className="bg-[#fff8e7cc] p-6 md:p-8 rounded-none">
        <p className="mb-3 text-base md:text-lg leading-relaxed">
          In Hindu Calendar, the day starts with local sunrise and ends with
          next day local sunrise.
        </p>
        <p className="mb-3 text-base md:text-lg leading-relaxed">
          As sunrise time is different for all cities, Hindu Calendar made for
          one city is not valid for any other city. Hence it is important to use
          location based Hindu Calendar, like this website. Further, each Hindu
          day consists of five elements which are called angas. These five
          elements are -
        </p>

        <div className="mt-2 space-y-1">
          <p className="text-base md:text-lg font-bold text-[#000]">Tithi</p>
          <p className="text-base md:text-lg font-bold text-[#000]">
            Nakshatra
          </p>
          <p className="text-base md:text-lg font-bold text-[#000]">Yoga</p>
          <p className="text-base md:text-lg font-bold text-[#000]">Karana</p>
          <p className="text-base md:text-lg font-bold text-[#000]">
            Var (name of seven days of a week)
          </p>
        </div>
      </div>
    </div>
  );
};

export default HinduCalendarInfo;
