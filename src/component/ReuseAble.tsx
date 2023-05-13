import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import {
  Adobe,
  Ebay,
  HashiCorp,
  Loom,
  Okta,
  Tailwind,
  Washington,
  UnderArmour,
  Zapier,
} from "../../public/assets";
import ReuseAbleBox from "./ReuseAbleBox";
const inter = Inter({ subsets: ["latin"] });
interface Props {
  size: number;
  sizes: number;
  height: number;
}
function ReuseAble({ size, sizes, height }: Props) {
  return (
    <div className={`${inter.className}  w-full `}>
      <span className="uppercase text-[12px] tracking-[0.2rem] leading-2 flex justify-center text-center text-[#666] font-semibold p-1">
        Trusted by the best frontend teams
      </span>
      <div className="flex flex-col mt-6 justify-center">
        <div className=" items-center text-start gap-20 justify-center flex">
          <div>
            <Image width={size} height={height} src={Adobe} alt="" />
          </div>
          <div>
            <Image width={size} height={height} src={Okta} alt="" />
          </div>
          <div>
            <Image width={size} height={height} src={UnderArmour} alt="" />
          </div>
          <div>
            <Image width={size} height={height} src={Ebay} alt="" />
          </div>
          <div>
            <Image width={size} height={height} src={Zapier} alt="" />
          </div>
        </div>
        <div className=" items-center text-start gap-20 justify-center flex">
          <div>
            <Image width={sizes} height={height} src={Loom} alt="" />
          </div>
          <div>
            <Image width={sizes} height={height} src={HashiCorp} alt="" />
          </div>
          <div>
            <Image width={sizes} height={height} src={Tailwind} alt="" />
          </div>
          <div>
            <Image width={sizes} height={height} src={Washington} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <span className="uppercase text-[12px] tracking-[0.2rem] leading-2 flex justify-center text-center text-[#666] font-semibold p-1 mb-10">
          Explore the vercel way
        </span>
        <div className="w-[1px] h-[8rem] bg-gradient-to-t from-customBlue to-white-100 "></div>
        <div className="flex items-center justify-center w-10 h-10  bg-gradient-to-r from-blue-500 to-teal-400 rounded-full">
          <span className="flex items-center justify-center text-white-100 text-md font-semibold ">
            1
          </span>
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 capitalize mt-6 font-bold text-[2rem]">
          Develop
        </div>
      </div>
      <div className="flex justify-center items-center flex-col ">
        <div className="text-black tracking-[-0.2rem] text-[4rem] font-extrabold">
          Build when inspiration strikes
        </div>
        <span className="mb-[3rem] font-regular tracking-[-0.03rem] text-[20px] opacity-60">
          Free developers from time-consuming, unnecessary processes that
          <br></br> slow your work, so you and your team can focus on creating.
        </span>
      </div>
      <div className="flex w-full gap-5">
        <ReuseAbleBox />
        <div className="divB w-1/2 bg-yellow-950">
          <div className="icon1">
            <span>The complete toolkit for the Web</span>
            <span>
              Everything you need to build your site exactly how you imagine,
              from automatic API handling to built-in image and performance
              optimizations.
            </span>
          </div>
          <div className="icon2">
            <span>
              Connect your pages to any data source, headless CMS, or API and
              make it work in everyone’s dev environment.
            </span>
          </div>
          <div className="icon3">
            <span>
              From caching to Serverless Functions, all our cloud primitives
              work perfectly on localhost.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReuseAble;
