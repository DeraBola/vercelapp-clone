import { GoPrimitiveDot } from "react-icons/go";
import React from 'react'
import DefaultProduct from "./DefaultProduct";

function ReuseAbleBox() {
  return (
        <div className="divA w-1/2 bg-white-100 shadow-xl border rounded-md">
          <div className="line flex justify-start items-center">
            <div className="dot border-l-0 border-t-0 px-2 py-1 border items-center justify-start flex">
              <GoPrimitiveDot size="24" color="red" />
              <GoPrimitiveDot size="24" color="yellow" />
              <GoPrimitiveDot size="24" color="green" />
            </div>
            <div className="py-1.5 text-sm items-center px-4 flex opacity-60">index.js</div>
            <div className="py-4 px-[13rem] border border-r-0 border-t-0"></div>
          </div>
          <div className="flex h-64 gap-3">
            <div className="mt-3 bg-[#FAFAFA] px-2  flex flex-col">
              <p className="opacity-60">1</p>
              <p className="opacity-60">2</p>
              <p className="opacity-60">3</p>
              <p className="opacity-60">4</p>
              <p className="opacity-60">5</p>
            </div>
          <div className="text">
           <DefaultProduct   />
          </div>
          </div>
        </div>
  )
}

export default ReuseAbleBox
