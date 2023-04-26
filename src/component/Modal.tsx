import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FiArrowUpRight, FiLayers, FiGlobe, FiActivity, FiTerminal } from "react-icons/fi";
import { IoTriangleSharp } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ["latin"] });
interface ModalProps {
    open: boolean;
    close: () => void; 
  }
export default function Modal({ open, close }: ModalProps) {

    return(
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-transparent transition-opacity" />
          </Transition.Child>
  
          <div className="fixed inset-0 z-20 overflow-y-auto">
            <div className="flex h-[14rem] mt-[4.5rem] items-end justify-start p-4 text-center sm:items-center sm:p-0 lg:ml-[20rem] ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#350bdc] p-2 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className={`${inter.className} flex justify-start gap-1 items-center`}>
                    <div className="bg-[#f5f5f5] lg:w-full flex-col rounded">
                      <div className="flex justify-between mb-[8rem] items-center p-3">
                        <span className="text-xs font-light opacity-70">Start Deploying</span>
                        <FiArrowUpRight size={14} />
                      </div>
                      <div className="flex justify-start items-start flex-col px-3 mb-1.5">
                        <div className='flex gap-2 items-center justify-start mb-2'>
                          <IoTriangleSharp />
                         <span className="text-md font-medium tracking-wider leading-1.5">Platform</span> 
                        </div>
                        <span className="text-sm opacity-70 ">Morden infastructure to build the Web.Faster</span>
                      </div>
                    </div>
                    <div className="lg:w-full flex flex-col justify-start items-center bg-[#FFF]">
                      <div className="div1 flex justify-start items-center gap-1">
                        <div className="previews flex flex-col w-full mt-2">
                          <div className="items-center flex gap-2 mb-2">
                          <FaRegComment size="12" />
                          <span className='text-sm font-medium'>Previews</span>
                          </div> 
                            <span className='text-sm opacity-70 w-full'>Zero configuration, more innovation</span>
                        </div>
                        <div className="infrastucrure flex flex-col w-full">
                          <div className="items-center flex gap-2 mb-2">
                          <FiLayers size="12" />
                          <span className=' text-sm font-medium'>Infrastucture</span>
                          </div>
                         <span className='text-sm opacity-70'>Always fast, always online</span>
                        </div>
                      </div>
                      <div className="div2 flex justify-start items-center gap-1">
                      <div className="next flex flex-col w-full">
                          <div className="next1 items-center flex gap-2 mb-2">
                          <SiNextdotjs size="12" />
                          <span className=' text-sm font-medium'>Next.js</span>
                          </div> 
                            <span className=' text-sm opacity-70'>The native Next.js platform</span>
                        </div>
                        <div className="edge flex flex-col w-full">
                          <div className="edge1 items-center flex gap-2 mb-2 w-full">
                          <FiGlobe size="12" />
                          <span className=' text-sm font-medium'>Edge Functions</span>
                          </div>
                         <span className='text-sm opacity-70'>Dynamic pages, static speed</span>
                        </div>
                      </div>
                      <div className="div3 flex justify-start items-center gap-1">
                      <div className="analytics flex flex-col w-full">
                          <div className="ana1 items-center flex gap-2 mb-2">
                          <FiActivity size="12" />
                          <span className=' text-sm font-medium'>Analytics</span>
                          </div> 
                            <span className=' text-sm opacity-70'>Real-time insights, peak performance</span>
                        </div>
                        <div className="api flex flex-col w-full">
                          <div className="cli1 items-center flex gap-2 mb-2">
                          <FiTerminal size="12" />
                          <span className=' text-sm font-medium'>CLI & API</span>
                          </div>
                         <span className=' text-sm opacity-70'>Make the Vecel platform your own</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root> 
    )
}