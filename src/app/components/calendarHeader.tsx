import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from 'axios';
const url = process.env.NEXT_PUBLIC_PANCHANG_API_URL;


interface PanchangData {
  day: String;
  sunrise: String;
  sunset: String;
  moonrise: String;
  moonset: String;
  vedic_sunrise: String;
  vedic_sunset: String;
  tithi_name: String;
  nak_name: String;
  yog_name: String;
  purnimanta: String;
  paksha: String;
  ritu: String;
  sun_sign: String;
  moon_sign: String;
}

export default function ResponsiveDivs() {
  const [apiData, setApiData] = useState<PanchangData | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  console.log(apiData);

  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const weekdayColors = [
    "bg-[#ad0b0bcc]",
    "bg-[#fae6b8]",
    "bg-[#fae6b8]",
    "bg-[#fae6b8]",
    "bg-[#fae6b8]",
    "bg-[#fae6b8]",
    "bg-[#fae6b8]",
  ];

  const getCurrentMonthDates = (month: number, year: number) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const totalDaysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const dates = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);
    const emptyDays = Array(firstDayOfWeek).fill(null);
    return [...emptyDays, ...dates];
  };

  const getHindiMonthName = (month: number): string => {
    const hindiMonths = [
      "माघ",
      "फाल्गुन",
      "चैत्र",
      "वैशाख",
      "ज्येष्ठ",
      "आषाढ़",
      "श्रावण",
      "भाद्रपद",
      "आश्विन",
      "कार्तिक",
      "मार्गशीर्ष",
      "पौष",
    ];
    return hindiMonths[month];
  };

  const getEnglishMonthName = (month: number): string => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month];
  };

  const hindiMonth = getHindiMonthName(currentMonth);
  const englishMonth = getEnglishMonthName(currentMonth);


  const fetchPanchangData = async (
    day: number,
    month: number,
    year: number
  ) => {
    const apiUrl = `${url}/api/panchang`;
  
    const bodyData = {
      day,
      month,
      year,
    };
  
    try {
      const response = await axios.post(apiUrl, bodyData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: PanchangData = response.data;
      setApiData(data);
    } catch (error) {
      console.error("Error fetching Panchang data:", error);
    }
  };
  

  useEffect(() => {
    const today = new Date();
    fetchPanchangData(
      today.getDate(),
      today.getMonth() + 1,
      today.getFullYear()
    );
  }, []);

  const generateCalendarData = (dates: Array<number | null>) => {
    const weeks: Array<Array<number | null>> = [];
    let currentWeek: Array<number | null> = [];
    dates.forEach((date) => {
      currentWeek.push(date);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      weeks.push(currentWeek);
    }
    return weeks;
  };

  const currentMonthDates = getCurrentMonthDates(currentMonth, currentYear);
  const calendarData = generateCalendarData(currentMonthDates).map((week) => {
    return week.map((date) => ({
      day: date,
      tithi: date ? "" : "",
      nakshatra: date ? "" : "",
    }));
  });

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateSelect = (day: number): void => {
    if (day) {
      setSelectedDate(day);
      fetchPanchangData(day, currentMonth + 1, currentYear);
    }
  };

  const handleDateInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const selected = new Date(e.target.value);
    const day = selected.getDate();
    const month = selected.getMonth();
    const year = selected.getFullYear();

    setCurrentMonth(month);
    setCurrentYear(year);
    setSelectedDate(day);
    fetchPanchangData(day, month + 1, year);
  };

  return (
    <div className="flex flex-col items-center gap-2 p-4 font-[Urbanist, sans-serif] w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-1 w-full">
        <div className="w-full md:w-[403px] h-[75px] p-4 text-white text-center flex items-center justify-center bg-[linear-gradient(to_right,#545456,#2b251e)] text-[16px] font-medium">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>

        <div className="w-full md:w-[845px] h-[75px] p-4 text-white flex items-center justify-between bg-[linear-gradient(to_right,#545456,#2b251e)] px-6 text-[16px] font-medium border border-gray-400 divide-x divide-gray-400 relative">
          <button onClick={goToPreviousMonth} className="text-[24px]">
            ❮
          </button>
          <div className="text-center flex-1">
            <div className="text-[20px] font-semibold">
              {englishMonth} {currentYear}
            </div>
            <div className="text-[14px] text-gray-300 font-normal">
              {hindiMonth} {currentYear}
            </div>
          </div>
          <button onClick={goToNextMonth} className="text-[24px]">
            ❯
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-1 w-full">
        <div className="w-full md:w-[403px] h-[75px] p-4 bg-[#f0edff] text-[16px] font-medium border border-gray-400 relative flex">
          <div className="w-1/3 h-full flex items-center justify-center flex-col">
            <Image
              src="/Frame.svg"
              alt="Add to Google Calendar"
              width={24}
              height={24}
            />
            <p className="mt-2 text-center text-[10px] text-gray-700">
              Add To Google
              <br /> Calendar
            </p>
          </div>
          <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-gray-400"></div>

          <div className="w-1/3 h-full flex items-center justify-center flex-col">
            <Image
              src="/mdi_event-add.svg"
              alt="Add Events"
              width={24}
              height={24}
            />
            <p className="mt-2 text-center text-[10px] text-gray-700">
              Add Events to
              <br />
              Panchang
            </p>
          </div>
          <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-gray-400"></div>

          <div className="w-1/3 h-full flex items-center justify-center flex-col">
            <Image
              src="/line-md_download.svg"
              alt="Download ICS"
              width={24}
              height={24}
            />
            <p className="mt-2 text-center text-[10px] text-gray-700">
              Download ICS File of
              <br />
              Panchangam
            </p>
          </div>
        </div>

        <div className="w-full md:w-[845px] h-[75px] p-4 bg-transparent border border-gray-400 flex items-center justify-between">
          <div className="w-[45%] relative">
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full p-2 border border-gray-400 rounded-md pl-10 text-gray-700"
            />
            <Image
              src="/locationicon.png"
              alt="Location Icon"
              width={24}
              height={24}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
          </div>

          <div className="w-[45%] relative">
            <input
              type="date"
              onChange={handleDateInputChange}
              className="w-full p-2 border border-gray-400 rounded-md pl-10 text-gray-700"
            />
            <Image
              src="/calenderIcon.png"
              alt="Calendar Icon"
              width={24}
              height={24}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-1 w-full mt-4">
        <div className="w-full md:w-[403px] bg-[rgba(240,237,255,1)] p-4 overflow-auto">
          <div className="text-[16px] text-black space-y-2">
            {apiData && (
              <div>
                <p className="mb-4 text-black">Day: {apiData.day}</p>
                <p className="mb-4 text-black">Sunrise: {apiData.sunrise}</p>
                <p className="mb-4 text-black">Sunset: {apiData.sunset}</p>
                <p className="mb-4 text-black">Moonrise: {apiData.moonrise}</p>
                <p className="mb-4 text-black">Moonset: {apiData.moonset}</p>
                <p className="mb-4 text-black">
                  Vedic Sunrise: {apiData.vedic_sunrise}
                </p>
                <p className="mb-4 text-black">
                  Vedic Sunset: {apiData.vedic_sunset}
                </p>
                <p className="mb-4 text-black">Tithi: {apiData.tithi_name}</p>
                <p className="mb-4 text-black">Nakshatra: {apiData.nak_name}</p>
                <p className="mb-4 text-black">Yog: {apiData.yog_name}</p>
                <p className="mb-4 text-black">
                  Purnimanta: {apiData.purnimanta}
                </p>
                <p className="mb-4 text-black">Paksha: {apiData.paksha}</p>
                <p className="mb-4 text-black">Ritu: {apiData.ritu}</p>
                <p className="mb-4 text-black">Sun Sign: {apiData.sun_sign}</p>
                <p className="mb-4 text-black">
                  Moon Sign: {apiData.moon_sign}
                </p>
              </div>
            )}
          </div>
          <button
            onClick={() =>
              (window.location.href = "https://gharmandir.in/mandir/vip-puja/")
            }
            className="bg-[#65558f] text-white py-2 px-4 rounded-md hover:bg-[#65558f]"
          >
            Book Now
          </button>
        </div>

        <div className="w-full md:w-[845px]">
          <div className="w-full mt-0">
            <div className="grid grid-cols-7 w-full border border-gray-300">
              {weekdays.map((weekday, index) => (
                <div
                  key={index}
                  className={`text-center p-4 font-bold border border-gray-300 ${weekdayColors[index]}`}
                >
                  {weekday}
                </div>
              ))}
            </div>

            {calendarData.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 w-full">
                {week.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`border border-gray-300 p-2 min-h-32 ${weekdayColors[dayIndex]} cursor-pointer`}
                    onClick={() => {
                      if (day.day !== null) {
                        handleDateSelect(day.day);
                      }
                    }}
                  >
                    {day.day && (
                      <div className="flex flex-col items-center">
                        <div
                          className={`text-2xl font-bold ${
                            day.day === selectedDate ? "text-blue-600" : ""
                          }`}
                        >
                          {day.day}
                        </div>
                        <div className="text-xs mt-1">{day.tithi}</div>
                        <div className="text-xs mt-1">{day.nakshatra}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
