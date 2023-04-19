/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { HiBars2, HiChevronDown } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Vercel } from "../../public/assets";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  size: number;
}
export default function NavBar({ size }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="w-full h-[4rem] flex justify-between z-20 bg-transparent backdrop-blur-lg fixed top-0 left-0 items-center p-2 lg:px-20">
      <div className="flex w-24 lg:w-30 p-2 items-center">
       {showMenu ? <Image src={Vercel} width={size} height={size} alt="" /> : <Image src={Vercel} width={size} height={size} alt="" />} 
        {/* <div className="text-white-100 text-md">{showMenu ? "Menu" : `We're on a Mission`}</div> */}
      </div>
      <div className="hidden mt-5 lg:block items-center">
        <ul
          className={`${inter.className} flex gap-7 justify-center items-center`}
        >
          <li className="m-0 max-w-[30ch] text-sm opacity-70 flex items-center hover:px-5 hover:py-1 rounded-3xl hover:bg-slate-200 hover:opacity-100">
            <Link href="/Genesispass" className="flex gap-1 items-center">
              Features 
              <HiChevronDown size="12" /> 
            </Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70 flex items-center bg-white-100 hover:opacity-100">
            <Link href="/Services">Docs</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70  flex items-center bg-white-100 hover:opacity-100 ">
            <Link href="/Project">Templates</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70  flex items-center bg-white-100 hover:opacity-100">
            <Link href="/Nft">Integrations</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70  flex items-center bg-white-100 hover:opacity-100">
            <Link href="/Faqs">Customers</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70  flex items-center bg-white-100 hover:opacity-100">
            <Link href="/Nft">Enterprise</Link>
          </li>
          <li className="mr-12 max-w-[30ch] text-sm opacity-70  flex items-center bg-white-100 hover:opacity-100">
            <Link href="/Faqs">Pricing</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70  flex items-center bg-white-100 hover:opacity-100">
            <Link href="/Genesispass">Contact</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70  flex items-center bg-white-100 hover:opacity-100">
            <Link href="/Services">Login</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-100 py-1.5 px-5 rounded flex items-center bg-black text-white-100">
            <Link href="/Project">Sign Up</Link>
          </li>
        </ul>
      </div>

      {showMenu ? (
        <div className="flex items-center">
          <AiOutlineClose  className="block lg:hidden z-20"
          size={32}
          // color="#FFF"
          onClick={() => setShowMenu(false)} />
        </div>
       
      ) : (
        <div className="flex items-center">
        <HiBars2 className="block lg:hidden z-20"
          size={32}
          onClick={() => setShowMenu(true)} 
          />
        </div>  
      )}
      <div
        className={`${
          showMenu ? "translate-x-0" : "translate-x-[-100%]"
        } z-10 w-full fixed flex p-2 bg-[rgb(241,115,115)] justify-start items-center top-[3.5rem] left-0 transition-transform overflow-y-auto `}
      >
         <ul
          className={`${inter.className} bg-[#fff] z-10 w-full h-full flex flex-col justify-start items-start p-1`}
        >
          <div className="mb-4 flex flex-col items-center w-full ">
          <li className="mb-4 p-1.5 text-sm opacity-70 border rounded-md w-full flex justify-center items-center text-[#666666]">
            <Link href="/Services  ">Login</Link>
          </li>
          <li className="m-0 text-sm p-1.5 flex justify-center border items-center opacity-100 w-full rounded-md bg-[#fafafa] text-[#999999]">
            <Link href="/Project">Sign Up</Link>
          </li>
          </div>
          <li className="mb-2 py-2 text-md items-center w-full  border-b text-[#000]">
            <Link href="/Genesispass" className="flex justify-between items-center">
              Features 
              <HiChevronDown size="16" /> 
            </Link>
          </li>
          <li className="mb-2 py-2 text-md items-center w-full  border-b text-[#000]">
            <Link href="/Services">Docs</Link>
          </li>
          <li className="mb-2 py-2 text-md items-center w-full  border-b text-[#000]">
            <Link href="/Project">Templates</Link>
          </li>
          <li className="mb-2 py-2 text-md items-center w-full  border-b text-[#000]">
            <Link href="/Nft">Integrations</Link>
          </li>
          <li className="mb-2 py-2 text-md items-center w-full  border-b text-[#000]">
            <Link href="/Faqs">Customers</Link>
          </li>
          <li className="mb-2 py-2 text-md items-center w-full  border-b text-[#000]">
            <Link href="/Nft">Enterprise</Link>
          </li>
          <li className="mb-2 py-2 text-md items-center w-full  border-b text-[#000]">
            <Link href="/Faqs">Pricing</Link>
          </li>
          <li className="mb-2 py-2 text-md items-center w-full  border-b text-[#000]">
            <Link href="/Genesispass">Contact</Link>
          </li>
        
        </ul>
      </div>
    </div>
  );
}
