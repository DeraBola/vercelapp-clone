/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from 'next/font/google' 
import Link from 'next/link';
import { CloseSquare, Menu } from 'iconsax-react';
import { useState } from "react";
import { Vercel } from "../../public/assets";
const inter = Inter({ subsets: ['latin'] })

interface Props {
  size: number;
}
export default function NavBar ({ size } : Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="w-full h-[3rem] flex justify-between z-20 bg-transparent backdrop-blur-lg fixed top-0 left-0 items-center py-2 px-2 lg:px-20">
      <div className="flex mt-5 w-30 p-2 items-center">
        <Image src={Vercel} width={size} height={size} alt="" />
        {/* <div className="text-white-100 text-md">{showMenu ? "Menu" : `We're on a Mission`}</div> */}
      </div>
      <div className="hidden mt-5 lg:block items-center">
      <ul className={`${inter.className} flex gap-3 justify-center items-center `}>
          <li className='m-0 max-w-[30ch] text-sm opacity-70 flex items-center pl-5 hover:text-black transition-colors duration-300'><Link href='/Genesispass'>Features</Link></li>
          <li className='m-0 max-w-[30ch] text-sm opacity-70 flex items-center pl-5 hover:text-black transition-colors duration-300'><Link href='/Services'>Docs</Link></li>
          <li className='m-0 max-w-[30ch] text-sm opacity-70 pl-5 hover:text-black transition-colors duration-300'><Link href='/Project'>Templates</Link></li>
          <li className='m-0 max-w-[30ch] text-sm opacity-70 pl-5 hover:text-black transition-colors duration-300'><Link href='/Nft'>Integrations</Link></li>
          <li className='m-0 max-w-[30ch] text-sm opacity-70 pl-5 hover:text-black transition-colors duration-300'><Link href='/Faqs'>Customers</Link></li>
          <li className='m-0 max-w-[30ch] text-sm opacity-70 pl-5 hover:text-black transition-colors duration-300'><Link href='/Nft'>Enterprise</Link></li>
          <li className='mr-12 max-w-[30ch] text-sm opacity-70 pl-5 hover:text-black transition-colors duration-300'><Link href='/Faqs'>Pricing</Link></li>
          <li className='m-0 max-w-[30ch] text-sm opacity-70 pl-5 hover:text-black transition-colors duration-300'><Link href='/Genesispass'>Contact</Link></li>
          <li className='m-0 max-w-[30ch] text-sm opacity-70 pl-5 hover:text-black transition-colors duration-300'><Link href='/Services'>Login</Link></li>
          <li className='m-0 max-w-[30ch] text-sm opacity-70 pl-5 hover:text-black transition-colors duration-300'><Link href='/Project'>Sign Up</Link></li>
        </ul>
        </div>
      
      {showMenu? <CloseSquare className="block lg:hidden relative z-20" size={40} onClick={() => setShowMenu(false) } /> : <Menu className="block lg:hidden relative z-20" size={32} onClick={() => setShowMenu(true)} /> }
      <div className={`${showMenu ? "translate-x-0" : "translate-x-[-100%]"} w-full fixed flex bg-[#0E0E0E] justify-start items-center top-0 left-0 h-full transition-transform`}>
      <ul className='text-white capitalize w-full'>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Genesispass'>GENESIS PASS</Link></li>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Services'>SERVICES</Link></li>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Project'>PROJECTS</Link></li>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Nft'>NFT</Link></li>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Faqs'>FAQ</Link></li>
          <li className='mt-6 flex w-full justify-between items'>
          <p className='text-lg leading-[18px] font-bold pl-5 opacity-40'>PLATFORM</p>
          <p className='text-lg leading-[18px] font-bold pl-5 opacity-40 mr-2'>COMING SOON</p>
        </li>
        </ul>
      </div>
    </div>
  );
}