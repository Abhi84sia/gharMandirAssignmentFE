import React from "react";

const LunarMonthList = () => {
  const sectionData = [
    [
      { id: 1, name: "Chaitra" },
      { id: 2, name: "Vaishakha" },
      { id: 3, name: "Jyeshtha" },
      { id: 4, name: "Ashadha" },
      { id: 5, name: "Shravana" },
      { id: 6, name: "Bhadrapada" },
      { id: 7, name: "Ashwina" },
      { id: 8, name: "Kartika" },
      { id: 9, name: "Margashirsha" },
      { id: 10, name: "Pausha" },
      { id: 11, name: "Magha" },
      { id: 12, name: "Phalguna" },
    ],
    [
      { id: 1, name: "Ashwini" },
      { id: 2, name: "Bharani" },
      { id: 3, name: "Krittika" },
      { id: 4, name: "Rohini" },
      { id: 5, name: "Mrigashira" },
      { id: 6, name: "Ardra" },
      { id: 7, name: "Punarvasu" },
      { id: 8, name: "Pushya" },
      { id: 9, name: "Ashlesha" },
      { id: 10, name: "Magha" },
      { id: 11, name: "Purva Phalguni" },
      { id: 12, name: "Uttara Phalguni" },
      { id: 13, name: "Hasta" },
      { id: 14, name: "Chitra" },
      { id: 15, name: "Swati" },
      { id: 16, name: "Vishakha" },
      { id: 17, name: "Anuradha" },
      { id: 18, name: "Jyeshtha" },
      { id: 19, name: "Mula" },
      { id: 20, name: "Purva Ashadha" },
      { id: 21, name: "Uttara Ashadha" },
      { id: 22, name: "Shravana" },
      { id: 23, name: "Dhanishtha" },
      { id: 24, name: "Shatabhisha" },
      { id: 25, name: "Purva Bhadrapada" },
      { id: 26, name: "Uttara Bhadrapada" },
      { id: 27, name: "Revati" },
    ],
    [
      { id: 1, name: "Vishkambha" },
      { id: 2, name: "Priti" },
      { id: 3, name: "Ayushmana" },
      { id: 4, name: "Saubhagya" },
      { id: 5, name: "Shobhana" },
      { id: 6, name: "Atiganda" },
      { id: 7, name: "Sukarma" },
      { id: 8, name: "Dhriti" },
      { id: 9, name: "Shula" },
      { id: 10, name: "Ganda" },
      { id: 11, name: "Vriddhi" },
      { id: 12, name: "Dhruva" },
      { id: 13, name: "Vyaghata" },
      { id: 14, name: "Harshana" },
      { id: 15, name: "Vajra" },
      { id: 16, name: "Siddhi" },
      { id: 17, name: "Vyatipata" },
      { id: 18, name: "Variyana" },
      { id: 19, name: "Parigha" },
      { id: 20, name: "Shiva" },
      { id: 21, name: "Siddha" },
      { id: 22, name: "Sadhya" },
      { id: 23, name: "Shubha" },
      { id: 24, name: "Shukla" },
      { id: 25, name: "Brahma" },
      { id: 26, name: "Indra" },
      { id: 27, name: "Vaidhriti" },
    ],
    [
      { id: 1, name: "Kinstughna" },
      { id: 2, name: "Bava" },
      { id: 3, name: "Balava" },
      { id: 4, name: "Kaulava" },
      { id: 5, name: "Taitila" },
      { id: 6, name: "Garaja" },
      { id: 7, name: "Vanija" },
      { id: 8, name: "Vishti" },
      { id: 9, name: "Shakuni" },
      { id: 10, name: "Chatushpada" },
      { id: 11, name: "Nagava" },
    ],
    // Section 5 - Ancient Egyptian Months
    [
      { id: 1, name: "Shukla Pratipada" },
      { id: 2, name: "Shukla Dwitiya" },
      { id: 3, name: "Shukla Tritiya" },
      { id: 4, name: "Shukla Chaturthi" },
      { id: 5, name: "Shukla Panchami" },
      { id: 6, name: "Shukla Shashthi" },
      { id: 7, name: "Shukla Saptami" },
      { id: 8, name: "Shukla Ashtami" },
      { id: 9, name: "Shukla Navami" },
      { id: 10, name: "Shukla Dashami" },
      { id: 11, name: "Shukla Ekadashi" },
      { id: 12, name: "Shukla Dwadashi" },
      { id: 13, name: "Shukla Trayodashi" },
      { id: 14, name: "Shukla Chaturdashi" },
      { id: 15, name: "Shukla Purnima" },
      { id: 16, name: "Krishna Pratipada" },
      { id: 17, name: "Krishna Dwitiya" },
      { id: 18, name: "Krishna Tritiya" },
      { id: 19, name: "Krishna Chaturthi" },
      { id: 20, name: "Krishna Panchami" },
      { id: 21, name: "Krishna Shashthi" },
      { id: 22, name: "Krishna Saptami" },
      { id: 23, name: "Krishna Ashtami" },
      { id: 24, name: "Krishna Navami" },
      { id: 25, name: "Krishna Dashami" },
      { id: 26, name: "Krishna Ekadashi" },
      { id: 27, name: "Krishna Dwadashi" },
    ],
    [
      { id: 1, name: "Mesha" },
      { id: 2, name: "Vrishabha" },
      { id: 3, name: "Mithuna" },
      { id: 4, name: "Karka" },
      { id: 5, name: "Simha" },
      { id: 6, name: "Kanya" },
      { id: 7, name: "Tula" },
      { id: 8, name: "Vrishchika" },
      { id: 9, name: "Dhanu" },
      { id: 10, name: "Makara" },
      { id: 11, name: "Kumbha" },
      { id: 12, name: "Meena" },
    ],

    [
      { id: 1, name: "Prabhava" },
      { id: 2, name: "Vibhava" },
      { id: 3, name: "Shukla" },
      { id: 4, name: "Pramoda" },
      { id: 5, name: "Prajapati" },
      { id: 6, name: "Angira" },
      { id: 7, name: "Shrimukha" },
      { id: 8, name: "Bhava" },
      { id: 9, name: "Yuva" },
      { id: 10, name: "Dhata" },
      { id: 11, name: "Ishwara" },
      { id: 12, name: "Bahudhanya" },
      { id: 13, name: "Pramathi" },
      { id: 14, name: "Vikrama" },
      { id: 15, name: "Vrisha" },
      { id: 16, name: "Chitrabhanu" },
      { id: 17, name: "Subhanu" },
      { id: 18, name: "Tarana" },
      { id: 19, name: "Parthiva" },
      { id: 20, name: "Vyaya" },
      { id: 21, name: "Sarvajit" },
      { id: 22, name: "Sarvadhari" },
      { id: 23, name: "Virodhi" },
      { id: 24, name: "Vikriti" },
      { id: 25, name: "Khara" },
      { id: 26, name: "Nandana" },
      { id: 27, name: "Vijaya" },
      { id: 28, name: "Jaya" },
      { id: 29, name: "Manmatha" },
      { id: 30, name: "Durmukha" },
      { id: 31, name: "Hemalambi" },
      { id: 32, name: "Vilambi" },
      { id: 33, name: "Vikari" },
      { id: 34, name: "Sharvari" },
      { id: 35, name: "Plava" },
      { id: 36, name: "Shubhakrit" },
      { id: 37, name: "Shobhakrit" },
      { id: 38, name: "Krodhi" },
      { id: 39, name: "Vishvavasu" },
      { id: 40, name: "Parabhava" },
      { id: 41, name: "Plavanga" },
      { id: 42, name: "Kilaka" },
      { id: 43, name: "Saumya" },
      { id: 44, name: "Sadharana" },
      { id: 45, name: "Virodhakrit" },
      { id: 46, name: "Paridhavi" },
      { id: 47, name: "Pramadi" },
      { id: 48, name: "Aananda" },
      { id: 49, name: "Rakshasa" },
      { id: 50, name: "Nala" },
      { id: 51, name: "Pingala" },
      { id: 52, name: "Kalayukta" },
      { id: 53, name: "Siddharthi" },
      { id: 54, name: "Raudra" },
      { id: 55, name: "Durmati" },
      { id: 56, name: "Dundubhi" },
      { id: 57, name: "Rudhirodgari" },
      { id: 58, name: "Raktaksha" },
      { id: 59, name: "Krodhana" },
      { id: 60, name: "Kshaya" },
    ],
  ];

  const sections = [
    {
      title: "Lunar Month List",
      bgColor: "bg-[#f0eaff]",
      textColor: "text-purple-700",
    },
    {
      title: "Nakshatra List",
      bgColor: "bg-[#fff4e8]",
      textColor: "text-blue-700",
    },
    {
      title: "Yoga Names",
      bgColor: "bg-[#eaf4ff]",
      textColor: "text-green-700",
    },
    {
      title: "Karana Names",
      bgColor: "bg-[#f0eaff]",
      textColor: "text-yellow-700",
    },
    {
      title: "Tithi Names",
      bgColor: "bg-[#edfff5]",
      textColor: "text-red-700",
    },
    {
      title: "Rashi Names",
      bgColor: "bg-[#eaf4ff]",
      textColor: "text-pink-700",
    },
    {
      title: "Samvatsara Names",
      bgColor: "bg-[#f0eaff]",
      textColor: "text-orange-700",
    },
  ];

  return (
    <div className="w-full mx-auto p-4 flex flex-col items-center space-y-12">
      {sections.map((section, sectionIndex) => {
        const months = sectionData[sectionIndex];

        const columns = [[], [], []].map(
          () => [] as { id: number; name: string }[]
        );
        months.forEach((month, index) => {
          columns[index % 3].push(month);
        });

        return (
          <div key={sectionIndex} className="w-full flex justify-center">
            <div className="w-full" style={{ maxWidth: "1248px" }}>
              <div className="flex justify-center mb-4">
                <h2
                  className={`text-xl font-semibold font-[Urbanist san-serif] relative px-6 `}
                >
                  <span className="relative z-10 bg-white px-2">
                    {section.title}
                  </span>
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-400 z-0"></div>
                </h2>
              </div>

              <div className={`${section.bgColor} p-4 sm:p-6 rounded w-full`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 w-full">
                  {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="space-y-3">
                      {column.map((month) => (
                        <div
                          key={month.id}
                          className="flex items-center justify-center"
                        >
                          <div className="inline-flex items-center w-48">
                            <span className="font-medium w-6 text-right">
                              {month.id}.
                            </span>
                            <span className="ml-2 text-center flex-grow">
                              {month.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LunarMonthList;
