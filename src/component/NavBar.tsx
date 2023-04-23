/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { HiBars2, HiChevronDown } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Vercel } from "../../public/assets";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  size: number;
}
export default function NavBar({ size }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [fix, setFix ] = useState<boolean>(false);
 
  useEffect(() => {
    const setFixed = () => {
      setFix(window.scrollY > 200);
console.log("window.scrollY");
    };
    window.addEventListener("scroll", setFixed);
    return() => window.removeEventListener("scroll", setFixed);
  });
  return (
    <>
    <div className={`${ fix ? "w-full h-[4rem] flex justify-between z-20 bg-transparent backdrop-blur-lg fixed top-0 left-0 items-center px-4 lg:p-2 lg:px-20" : "w-full h-[4rem] flex justify-between z-20 bg-transparent backdrop-blur-lg fixed top-0 left-0 items-center px-4 lg:p-2 lg:px-20" }`}>
      <div className="flex w-24 lg:w-30 items-center z-20">
        {showMenu ? <Image src={Vercel} width={size} height={size} alt="" /> : <Image src={Vercel} width={size} height={size} alt="" />}
      </div>
      <div className="hidden mt-4 lg:mt-1 lg:block items-center">
        <ul
          className={`${inter.className} flex gap-7 justify-center items-center`}
        >
          <li className="m-0 max-w-[30ch] text-sm opacity-70 flex items-center hover:px-5 hover:py-1 rounded-3xl hover:bg-slate-200 hover:opacity-100">
            <Link href="/Genesispass" className="flex gap-1 items-center">
              Features
              <HiChevronDown size="12" />
            </Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70 flex items-center bg-transparent hover:opacity-100">
            <Link href="/Services">Docs</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70  flex items-center bg-transparent hover:opacity-100 ">
            <Link href="/Project">Templates</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70  flex items-center bg-transparent hover:opacity-100">
            <Link href="/Nft">Integrations</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70  flex items-center bg-transparent hover:opacity-100">
            <Link href="/Faqs">Customers</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70  flex items-center bg-transparent hover:opacity-100">
            <Link href="/Nft">Enterprise</Link>
          </li>
          <li className="mr-12 max-w-[30ch] text-sm opacity-70  flex items-center bg-transparent hover:opacity-100">
            <Link href="/Faqs">Pricing</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70  flex items-center bg-transparent hover:opacity-100">
            <Link href="/Genesispass">Contact</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-70  flex items-center bg-transparent hover:opacity-100">
            <Link href="/Services">Login</Link>
          </li>
          <li className="m-0 max-w-[30ch] text-sm opacity-100 py-1.5 px-5 rounded flex items-center bg-black text-white-100">
            <Link href="/Project">Sign Up</Link>
          </li>
        </ul>
      </div>
      {showMenu ? (
        <div className="flex items-center">
          <AiOutlineClose className="block lg:hidden z-20 relative"
            size={32}
            onClick={() => setShowMenu(false)} />
        </div>

      ) : (
        <div className="flex items-center">
          <HiBars2 className="block relative lg:hidden z-20"
            size={32}
            onClick={() => setShowMenu(true)} />
        </div>
      )}
    </div>
    <div
      className={`${showMenu ? "translate-y-0" : "translate-y-[-120%]"} z-10 w-full fixed flex py-5 bg-[#fff] justify-start items-center top-[4.5rem] transition-transform overflow-y-visible`}
    >
        <ul
          className={`${inter.className} bg-[#fff] z-10 w-full h-full flex flex-col justify-start items-start px-2`}
        >
          <div className="mb-4 flex flex-col items-center w-full ">
            <li className="mb-4 p-1.5 text-sm opacity-70 border rounded-md w-full flex justify-center items-center text-[#666666]">
              <Link href="/Services  ">Login</Link>
            </li>
            <li className="m-0 text-sm p-1.5 flex justify-center border items-center opacity-100 w-full rounded-md bg-[#000] text-[#FFF]">
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
      </>
  );
}
