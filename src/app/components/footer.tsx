// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };
  

  return (
    <div className="min-h-[8vh] bg-gray-50">
      <Head>
        <title>Ghar Mandir</title>
        <meta
          name="description"
          content="Ghar Mandir - Aapki shraddha humari zimmedari"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-12 pt-10">
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="bg-white border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 p-3"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="ml-2 text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-md text-lg px-12 py-3 text-center"
            >
              Go
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-4">
                <Image
                  src="/Ghar-Mandir-logo_vFINAL 1.png"
                  alt="Ghar Mandir Logo"
                  width={240}
                  height={100}
                  priority
                />
              </div>
              <p className="text-gray-700 text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-black">Astronomy</h2>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/solar-eclipse"
                className="text-gray-700 hover:text-amber-600"
              >
                Solar Eclipse
              </Link>
              <Link
                href="/lunar-eclipse"
                className="text-gray-700 hover:text-amber-600"
              >
                Lunar Eclipse
              </Link>
              <Link
                href="/vernal-equinox"
                className="text-gray-700 hover:text-amber-600"
              >
                Vernal Equinox
              </Link>
              <Link
                href="/summer-solstice"
                className="text-gray-700 hover:text-amber-600"
              >
                Summer Solstice
              </Link>
            </nav>
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-black">Astrology</h2>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/full-moon-dates"
                className="text-gray-700 hover:text-amber-600"
              >
                Full Moon Dates
              </Link>
              <Link
                href="/new-moon-dates"
                className="text-gray-700 hover:text-amber-600"
              >
                New Moon Dates
              </Link>
              <Link
                href="/planetary-positions"
                className="text-gray-700 hover:text-amber-600"
              >
                Planetary Positions
              </Link>
              <Link
                href="/graha-asta-uday"
                className="text-gray-700 hover:text-amber-600"
              >
                Graha Asta & Uday
              </Link>
            </nav>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-4 text-black">Muhurat</h2>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/marriage-dates"
                  className="text-gray-700 hover:text-amber-600"
                >
                  Marriage Dates
                </Link>
                <Link
                  href="/griha-pravesh"
                  className="text-gray-700 hover:text-amber-600"
                >
                  Griha Pravesh
                </Link>
                <Link
                  href="/buying-car"
                  className="text-gray-700 hover:text-amber-600"
                >
                  Buying Car
                </Link>
                <Link
                  href="/property-purchase"
                  className="text-gray-700 hover:text-amber-600"
                >
                  Property Purchase
                </Link>
              </nav>
            </div>

            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-4 text-black">
                Panchang
              </h2>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/panchak"
                  className="text-gray-700 hover:text-amber-600"
                >
                  Panchak
                </Link>
                <Link
                  href="/ganda-moola"
                  className="text-gray-700 hover:text-amber-600"
                >
                  Ganda Moola
                </Link>
                <Link
                  href="/bhadra-vichar"
                  className="text-gray-700 hover:text-amber-600"
                >
                  Bhadra Vichar
                </Link>
                <Link
                  href="/rahu-kalam"
                  className="text-gray-700 hover:text-amber-600"
                >
                  Rahu Kalam
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="mt-16 border-t border-gray-300"></div>

        {/* Footer */}
        <footer className="mt-4 mb-8">
          <p className="text-gray-600">
            © 2025 by Abhishek Chaurasiya Design. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
