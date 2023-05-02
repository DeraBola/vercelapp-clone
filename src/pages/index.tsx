import { Inter } from "next/font/google";
import { IoTriangleOutline } from "react-icons/io5";
import { SiCircle, SiSnowflake } from "react-icons/si";
import { GiMoebiusTriangle, GiAbstract074, GiSewedShell } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  type Index = 0 | 1 | 2;
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<Index>(0);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const colors = [
    "bg-gradient-to-r from-blue-500 to-teal-400",
    "bg-gradient-to-r from-purple-500 to-pink-500",
    "bg-gradient-to-r from-red-500 to-yellow-400",
  ];
  const borderColors = [
    "linear-gradient(to right, #3B82F6 0%, #34D399 100%)",
    "linear-gradient(to right, #8B5CF6 0%, #EC4899 100%)",
    "linear-gradient(to right, #EF4444 0%, #FBBF24 100%)",
  ];

  const boxShadowColors = [
    "from-blue-500 to-teal-400",
    "from-purple-500 to-pink-5000",
    "from-red-500 to-yellow-400",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(((currentIndex + 1) % 3) as Index);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <main className="flex min-h-screen p-16 border-2  w-full bg-white-100">
      <section className={`${inter.className} mt-20 mx-4 w-full bg-white-100`}>
        <a href="#" className="flex justify-center items-center bg-white-100 ">
          <div className="flex border rounded-r-none  rounded-md py-5 px-8 items-center">
            <div className="flex gap-3 me-5">
              <SiCircle size="26" />
              <GiMoebiusTriangle size="26" />
              <GiAbstract074 size="26" />
              <SiSnowflake size="26" />
              <GiSewedShell size="26" />
            </div>
            <div className="text-medium font-bold">
              Vercel Ship
              <span className="opacity-70 ml-2">
                Starts May
                <span className="inline-block align-top">
                  1<sup>st</sup>
                </span>
                - Live Keynote May
                <span className="inline-block align-top me-1">
                  4<sup>th</sup>
                </span>
                at 9am PST
              </span>
            </div>
          </div>
          <div className="border-l-0 p-4 rounded-l-none items-center border py-5 px-8 rounded-md">
            <FiArrowUpRight size="26" />
          </div>
        </a>
        <div className="div-1 mb-6 flex lg:flex-row flex-col justify-center items-center ">
          <span
            className={`Div1 text-transparent font-extrabold tracking-[-0.3rem] text-[7rem] me-2 bg-clip-text ${
              currentIndex === 0 ? colors[currentIndex] : "bg-black"
            }`}
          >
            Develop.
          </span>
          <span
            className={`Div2 text-transparent bg-clip-text font-extrabold tracking-[-0.3rem] text-[7rem] me-2 ${
              currentIndex === 1 ? colors[currentIndex] : "bg-black"
            }`}
          >
            Preview.
          </span>
          <span
            className={`Div3 text-transparent bg-clip-text font-extrabold tracking-[-0.3rem] text-[7rem] ${
              currentIndex === 2 ? colors[currentIndex] : "bg-black"
            }  `}
          >
            Ship.
          </span>
        </div>
        <div className="div-2 mb-5 flex justify-center items-center mx-[10rem] ">
          <span className="font-regular tracking-[-0.03rem] text-[1.5rem] opacity-70">
            Vercel is a platform for frontend developers, providing the speed
            <br />
            and reliability inovators need to create at the moment of
            inspiration
          </span>
        </div>
        <div className="div-3 mt-14 flex gap-6 lg:flex-row flex-col justify-center items-center">
          <button
            className={`flex px-6 py-2.5 bg-black border-1 font-medium items-center rounded-md ${
              isHovered
                ? "hover:bg-white-100 hover:border-black hover:border-2 transition duration-200"
                : ""
            }`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <IoTriangleOutline
              className={`text-${isHovered ? "black" : "white-100"}`}
              size="24"
            />
            <span
              className={`text-${
                isHovered ? "black" : "white-100"
              } flex items-center ms-2`}
            >
              {isHovered ? "Start Deploying" : "Start Deploying"}
            </span>
          </button>
          <div className="relative">
            <div className={`absolute -inset-4 opacity-10  ${
    currentIndex === 0
      ?   "bg-gradient-to-r from-blue-500 to-teal-400"
      : currentIndex === 1
      ? "bg-gradient-to-r from-purple-500 to-pink-500"
      : "bg-gradient-to-r from-red-500 to-yellow-400"
  } rounded-full blur`}></div>
          <button
            className={`flex relative rounded-md font-medium p-[2px] items-center shadow-md
  ${
    currentIndex === 0
      ?   "bg-gradient-to-r from-blue-500 to-teal-400"
      : currentIndex === 1
      ? "bg-gradient-to-r from-purple-500 to-pink-500"
      : "bg-gradient-to-r from-red-500 to-yellow-400"
  }`}
          >
            <div className="flex items-center px-10 py-[7px] rounded-md justify-center bg-white-100 back">
            Get Demo
            </div>
          </button>
          </div>
        </div>
      </section>
    </main>
  );
}
