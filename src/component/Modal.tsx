import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BsArrowUpRight } from "react-icons/bs";
import { IoTriangleSharp } from "react-icons/io";
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
            <div className="flex h-[14rem] mt-[3rem] items-end justify-start p-4 text-center sm:items-center sm:p-0 lg:ml-[16.5rem] md:">
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
                  <div className="flex justify-start w-full">
                    <div className="bg-[#f5f5f5] w-full">
                      <div className="flex justify-between">
                        <span>Start Deploying</span>
                        <BsArrowUpRight />
                      </div>
                      <div className="dvi">
                        <div className=''>
                          <IoTriangleSharp />
                         <span>Platform</span> 
                        </div>
                        <span>Morden Infastructure</span>
                      </div>
                    </div>
                    <div className="w-full">
                      START PREVIEWS
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