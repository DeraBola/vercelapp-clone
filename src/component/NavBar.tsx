/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { HiBars2, HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { FiLayers, FiGlobe, FiActivity, FiTerminal } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { useState, useEffect } from "react";
import { Vercel } from "../../public/assets";
import Modal from "./Modal";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  size: number;
}
export default function NavBar({ size }: Props) {
  const data = [
    {
      icon: <FaRegComment size="14" />,
      name: "Previews",
    },
    {
      icon: <FiLayers size="14" />,
      name: "Infrastructure",
    },
    {
      icon: <SiNextdotjs size="14" />,
      name: "Next.js",
    },
    {
      icon: <FiGlobe size="14" />,
      name: "Edge Functions",
    },
    {
      icon: <FiActivity size="14" />,
      name: "Analytics",
    },
    {
      icon: <FiTerminal size="14" />,
      name: "CLI & API",
    },
  ];

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [fix, setFix] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);
  useEffect(() => {
    const setFixed = () => {
      setFix(window.scrollY > 200);
      console.log("window.scrollY");
    };
    window.addEventListener("scroll", setFixed);
    return () => window.removeEventListener("scroll", setFixed);
  });
  return (
    <>
      <div
        className={`${
          fix
            ? "w-full h-[4rem] flex justify-between z-20 bg-transparent backdrop-blur-lg fixed top-0 left-0 items-center px-4 lg:p-2 lg:px-20"
            : "w-full h-[4rem] flex justify-between z-20 bg-transparent backdrop-blur-lg fixed top-0 left-0 items-center px-4 lg:p-2 lg:px-20"
        }`}
      >
        <div className="flex w-24 lg:w-30 items-center z-20 mr-[7rem]">
          {showMenu ? (
            <Image src={Vercel} width={size} height={size} alt="" />
          ) : (
            <Image src={Vercel} width={size} height={size} alt="" />
          )}
        </div>
        <div className="hidden mt-4 lg:mt-1 lg:block items-center">
          <ul
            className={`${inter.className} flex gap-7 justify-center items-center`}
          >
            <li
              className="m-0 max-w-[30ch] text-sm opacity-70 flex items-center hover:px-5 hover:py-1 rounded-3xl hover:bg-slate-200 hover:opacity-100"
              onClick={() => setOpen(true)}
            >
              <Link href="#" className="flex gap-1 items-center">
                Features
                {open ? <HiChevronUp size="12" /> : <HiChevronDown size="12" />}
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
            <AiOutlineClose
              className="block lg:hidden z-20 relative"
              size={32}
              onClick={() => setShowMenu(false)}
            />
          </div>
        ) : (
          <div className="flex items-center">
            <HiBars2
              className="block relative lg:hidden z-20"
              size={32}
              onClick={() => setShowMenu(true)}
            />
          </div>
        )}
      </div>
      <Modal open={open} close={() => setOpen(false)} />
      <div
        className={`${
          showMenu ? "translate-y-0" : "translate-y-[-120%]"
        } z-10 w-full fixed flex py-5 bg-[#fff] justify-start items-center top-[4.5rem] transition-transform !overflow-y-scroll border-red-500 border-2`}
      >
        <ul
          className={`${inter.className} bg-[#fff] z-10 w-full h-full flex flex-col justify-start items-start px-4`}
        >
          <div className="mb-4 flex flex-col items-center w-full ">
            <li className="mb-4 p-1.5 text-sm opacity-70 border rounded-md w-full flex justify-center items-center text-[#666666]">
              <Link href="/Services  ">Login</Link>
            </li>
            <li className="m-0 text-sm p-1.5 flex justify-center border items-center opacity-100 w-full rounded-md bg-[#000] text-[#FFF]">
              <Link href="/Project">Sign Up</Link>
            </li>
          </div>
          <li
            className="mb-2 py-2 text-md items-center w-full  border-b text-[#000]"
            onClick={() => setDropdown(!dropdown)}
          >
            <Link href="#" className="flex justify-between items-center mb-4">
              Features
           {dropdown ? <HiChevronUp size="16" /> : <HiChevronDown size="16" />}   
            </Link>
            {dropdown && (
              <div className="dropdown">
                {data.map((item, index) => (
                  <div className="flex gap-3 mb-4 justify-start items-center" key={`data-${index}`}>
                    {item.icon}
                    <span className="text-md">{item.name}</span>
                  </div>
                ))}
              </div>
            )}
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
