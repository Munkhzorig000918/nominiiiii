import React, { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Icon } from "@iconify/react"
import Image from "next/image"
import qrImg from '../../../../src/assets/images/qr.jpg'
import { SymbolDropdown } from "../../../shared/SymbolDropdown"
import { Dropdown } from "../../../shared/Dropdown"

function AirdropModal({ isShowModal, setIsShowModal }) {
  return (
    <Transition appear show={isShowModal} as={Fragment}>
      <Dialog
        as="div"
        className="absolute z-50"
        onClose={() => {
          setIsShowModal(false)
        }}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 space-y-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="tracking-wider w-full max-w-4xl p-6 space-y-6 text-left align-middle transition-all transform bg-white rounded-lg shadow-xl font-coco dark:bg-dark-primary">
                <div className="flex items-start justify-between">
                    <h3 className="text-lg tracking-wider text-main-dark font-bold">Airdrop</h3>
                    <Icon onClick={() => setIsShowModal(false)} icon={"mdi:remove"} fontSize={25} className="cursor-pointer text-main-dark" />
                </div>
                <div className="space-y-8">
                    <div className="flex items-start justify-center space-x-4">
                        <div className="flex flex-col items-center space-y-3">
                            <div className="w-10 h-10 rounded-full bg-special-btn text-white text-2xl font-bold flex items-center justify-center">1</div>
                            <p className="text-2xl text-main-primary font-bold">Upload</p>
                        </div>
                        <div className="w-40 mt-4 h-[1px] bg-main-disabled"></div>
                        <div className="flex flex-col items-center space-y-3">
                            <div className="w-10 h-10 rounded-full bg-main-disabled text-white text-2xl font-bold flex items-center justify-center">2</div>
                            <p className="text-2xl text-main-primary font-bold">Data check</p>
                        </div>
                        <div className="w-40 mt-4 h-[1px] bg-main-disabled"></div>
                        <div className="flex flex-col items-center space-y-3">
                            <div className="w-10 h-10 rounded-full bg-main-disabled text-white text-2xl font-bold flex items-center justify-center">3</div>
                            <p className="text-2xl text-main-primary font-bold">Batch bonus</p>
                        </div>
                    </div>
                    <div className="flex justify-between h-[110px] border border-main-secondary rounded-md">
                        <div className="w-[110px] h-full bg-main-terteriary rounded-l-md flex justify-center items-center">
                            <Icon icon={"bytesize:download"} fontSize={30} className="text-special-btn" />
                        </div>
                        <div className="flex-1 flex flex-col space-y-2 items-start justify-center pl-4 py-4 text-sm">
                            <h5 className="font-bold text-main-dark">Fill in inport data information</h5>
                            <p className="text-xs font-medium">
                                Please download the import template first, edit data 
                                according to the template and upload the import file. 
                            </p>
                            <span className="text-special-btn font-medium">Step 1: Download the template.</span>
                        </div>
                    </div>
                    <div className="flex justify-between h-[110px] border border-main-secondary rounded-md">
                        <div className="w-[110px] h-full bg-main-terteriary rounded-l-md flex justify-center items-center">
                            <Icon icon={"bytesize:upload"} fontSize={30} className="text-special-btn" />
                        </div>
                        <div className="flex-1 flex flex-col space-y-2 items-start justify-center pl-4 py-4 text-sm">
                            <h5 className="font-bold text-main-dark">Upload information table</h5>
                            <p className="text-xs font-medium">
                                The file extensions mist be xls, or xlsx (that is Excel format). 
                                The file size should not be larger 
                                than 10mb, and it can import at most 3,000 records.
                            </p>
                            <span className="text-special-btn font-medium">Step 2: Upload import file.</span>
                        </div>
                    </div>
                    <div className="flex rounded-md items-center space-x-3 bg-[#FEEFD0] p-4">
                        <Icon icon={"ph:info-light"} fontSize={25} className="text-[#D59140]" />
                        <div className="flex flex-col">
                            <h5 className="text-sm font-bold">Hot tip</h5>
                            <p className="text-xs font-medium">This module involves the operation of assets, please operate carefully!</p>
                        </div>
                    </div>
                    <div className="space-x-8">
                        <button className='border text-tiny text-main-dark rounded-5 w-24 py-1.5'>Cancel</button>
                        <button className='border text-tiny bg-special-btn text-white rounded-5 w-24 py-1.5'>Next</button>
                    </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default AirdropModal
