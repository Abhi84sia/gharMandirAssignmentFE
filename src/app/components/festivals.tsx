import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-[55rem]  bg-white p-4">
      <Head>
        <title>March 2025 Festivals</title>
        <meta name="description" content="Festival Calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-[1248px] min-h-screen mx-auto overflow-hidden">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            March 2025 Festivals
          </h1>
          <div className="flex items-center justify-center">
            <div className="h-px bg-gray-500 w-24 md:w-36"></div>
            <h2 className="text-3xl font-semibold text-gray-800 mx-4">
              Phalguna 2081 - Chaitra 2082
            </h2>
            <div className="h-px bg-gray-500 w-24 md:w-36"></div>
          </div>
        </div>

        <div className="bg-[#f0edff] p-4 rounded-lg h-full">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-9">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center rounded-lg border-b border-[#65558f] h-[68px] md:h-[78px] w-full"
              >
                <div className="bg-[#65558f] text-white p-2 sm:p-3 w-[61px] md:w-[81px] h-full text-center flex flex-col justify-center items-center flex-shrink-0 rounded-l-lg">
                  <span className="text-lg sm:text-xl font-bold leading-tight">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm leading-tight">
                    Saturday
                  </span>
                </div>

                <div className="p-2 sm:p-3 flex-1 rounded-r-lg ">
                  <span className="text-gray-800 text-xs sm:text-sm leading-tight">
                    Phulera Dooj, Chandra Darshana
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
