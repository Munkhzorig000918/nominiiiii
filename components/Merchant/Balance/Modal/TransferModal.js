import React, { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Icon } from "@iconify/react"
import { TransferForm } from "../Form/TransferForm"
import { RechargeForm } from "../Form/RechargeForm"

function TransferModal({ isShowModal, setIsShowModal }) {
    const [selectedTab, setSelectedTab] = useState("transfer")
    
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
                        <Dialog.Panel className="tracking-wider w-full max-w-6xl flex items-start justify-center p-6 text-left align-middle transition-all transform bg-white rounded-lg shadow-xl font-coco dark:bg-dark-primary">
                            <div className="w-11/12 space-y-6">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-2">
                                        <h3 className="text-lg tracking-wider text-main-dark font-bold">Transaction Tool</h3>
                                        <span className="text-sm text-main-cloud font-bold">Please use with caution!</span>
                                    </div>
                                    <Icon onClick={() => setIsShowModal(false)} icon={"mdi:remove"} fontSize={25} className="cursor-pointer text-main-dark" />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex-1">
                                        <div className={`${selectedTab === 'transfer' ? 'bg-gradient-to-b from-gray-200 from-50% to-50% to-white'  : 'bg-gradient-to-b from-white from-50% to-50% to-gray-200'} p-[1px] rounded-full`}>
                                            <div onClick={() => setSelectedTab('transfer')} className={`${selectedTab === 'transfer' ? 'text-main-dark' : 'text-main-cloud'} cursor-pointer h-10 w-full font-bold bg-white rounded-full flex justify-center items-center`}>
                                                Merchant internal transfer
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className={`${selectedTab === 'recharge' ? 'bg-gradient-to-b from-gray-200 from-50% to-50% to-white'  : 'bg-gradient-to-b from-white from-50% to-50% to-gray-200'} p-[1px] rounded-full`}>
                                            <div onClick={() => setSelectedTab('recharge')} className={`${selectedTab === 'recharge' ? 'text-main-dark' : 'text-main-cloud'} cursor-pointer h-10 w-full font-bold text-main-cloud bg-white rounded-full flex justify-center items-center`}>
                                                Merchant account recharge
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border border-t-0 rounded-b-lg">
                                    {selectedTab === 'transfer' ? <TransferForm /> : <RechargeForm />}
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

export default TransferModal
