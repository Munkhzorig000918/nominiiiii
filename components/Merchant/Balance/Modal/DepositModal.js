import React, { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Icon } from "@iconify/react"
import Image from "next/image"
import qrImg from '../../../../src/assets/images/qr.jpg'
import { SymbolDropdown } from "../../../shared/SymbolDropdown"
import { Dropdown } from "../../../shared/Dropdown"

const dummyData = [
  { id: 1, symbol: "BTC", balance: "0.00000000", icon: "cryptocurrency-color:btc" },
  { id: 1, symbol: "USDT", balance: "0.10000000", icon: "cryptocurrency-color:usdt" },
  { id: 1, symbol: "BNB", balance: "0.02000000", icon: "cryptocurrency-color:bnb" },
]

const dummyData2 = [
  { id: 1, name: "Bitcoin (NATIVE)" },
  { id: 2, name: "Tether (NATIVE)" },
  { id: 3, name: "Binance coin (NATIVE)" },
]

function DepositModal({ isShowModal, setIsShowModal }) {
  const [selectedSymbol, setSelectedSymbol] = useState(dummyData[0])
  const [selectedItem, setSelectedItem] = useState(dummyData2[0])
  
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
              <Dialog.Panel className="tracking-wider w-full max-w-md p-6 space-y-6 text-left align-middle transition-all transform bg-white rounded-lg shadow-xl font-coco dark:bg-dark-primary">
                <div className="flex items-start justify-between">
                    <h3 className="text-lg tracking-wider text-main-dark font-bold">Deposit</h3>
                    <Icon onClick={() => setIsShowModal(false)} icon={"mdi:remove"} fontSize={25} className="cursor-pointer text-main-dark" />
                </div>
                <div className="space-y-8">
                    <div className="space-y-4">
                      <SymbolDropdown selectedItem={selectedSymbol} setSelectedItem={setSelectedSymbol} list={dummyData} />
                      <Dropdown selectedItem={selectedItem} setSelectedItem={setSelectedItem} list={dummyData2} labelName={"Select Network"} />
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white rounded-md p-4">
                          <Image 
                            src={qrImg.src}
                            alt="qr"
                            width={200}
                            height={200}
                          />
                        </div>
                    </div>
                    <div>
                      <p className="text-main-cloud text-sm">Address</p>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm">bc1qv639qnudvpfal23um40s3f0z0rpp7kh2afrry9</span>
                        <Icon icon={"bi:copy"} fontSize={20} className="cursor-pointer text-main-dark" />
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-xs text-main-cloud">
                      <li>Send only <span className="text-main-primary font-bold">BTC</span> to this address</li>
                      <li>Ensure the network is <span className="text-main-primary font-bold">Bitcoin (NATIVE)</span></li>
                    </ul>
                    <div className="w-full rounded-md p-4 bg-special-warning/10 flex items-center space-x-3">
                        <Icon icon={"ph:warning-fill"} fontSize={20} className="text-special-warning" />
                        <p className="text-[#7E4706] font-bold text-xs">Waiting for deposit...</p>
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

export default DepositModal
