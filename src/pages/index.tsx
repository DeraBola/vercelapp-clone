import { Inter } from "next/font/google";
import { IoTriangleOutline } from "react-icons/io5";
import { SiCircle, SiSnowflake } from "react-icons/si";
import { GiMoebiusTriangle, GiAbstract074, GiSewedShell } from "react-icons/gi";
import {FiArrowUpRight} from "react-icons/fi";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen p-16 border-2  w-full bg-blue-500">
      <section className={`${inter.className} mt-20 mx-4 w-full bg-pink-700`}>
        <div className="flex justify-center items-center bg-white-100 ">
          <div className="flex border-r-0 border-1 rounded-md py-2 px-4 items-center">
          <div className="flex gap-3 me-5">
            <SiCircle size="16" />
            <GiMoebiusTriangle size="16" />
            <GiAbstract074 size="16" /> 
            <SiSnowflake size="16" />
            <GiSewedShell size="16" />
          </div>
          <div className="text-medium opacity-70"> <span className="text-black opacity-100 ">Vercel Ship</span>  Starts May1st - Live Keynote May 4th at 9am PST</div>
          </div>
          
          <div className="border-l-0 p-4 items-center border-1 rounded-md">
            <FiArrowUpRight />
          </div>
        </div>
        <div className="div-1 mb-6 flex lg:flex-row flex-col justify-center items-center ">
          <span className="Div1 font-extrabold tracking-[-0.3rem] text-[7rem] me-2">
            Develop.
          </span>
          <span className="Div2 font-extrabold tracking-[-0.3rem] text-[7rem] me-2">
            Preview.
          </span>
          <span className="Div3 font-extrabold tracking-[-0.3rem] text-[7rem]">
            Ship.
          </span>
        </div>
        <div className="div-2 mb-5 flex justify-center items-center mx-[10rem] ">
          <span className="font-regular tracking-[-0.03rem] text-[1.5rem] opacity-70">
            Vercel is a platform for frontend developers, providing the speed{" "}
            <br />
            and reliability inovators need to create at the moment of
            inspiration
          </span>
        </div>
        <div className="div-3 mt-14 flex gap-6 lg:flex-row flex-col justify-center items-center">
          <button className="flex px-6 py-2.5 bg-black border-1 font-medium items-center p-2 rounded-md">
            <IoTriangleOutline color="white" size="24" />
            <span className="text-white-100 flex items-center ms-2">Start Deploying</span>
          </button>
          <button className=" bg-white-100 flex border-1 border-pink-600 items-center px-10 py-2.5 rounded-md font-medium ">Get a Demo</button>
        </div>
      </section>
    </main>
  );
}
