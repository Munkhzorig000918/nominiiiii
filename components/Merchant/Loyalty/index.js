import React from 'react'
import { Icon } from '@iconify/react'
import { LoyaltyForm } from './LoyaltyForm'

const Loyalty = () => {
    return (
        <div className='w-11/12 bg-white rounded-20 space-y-5 py-5'>
            <div className='flex flex-col space-y-10 border-b p-5 pb-0'>
                <div className="w-80 flex items-center justify-start rounded-5 border border-main-disabled space-x-3 px-3">
                    <Icon className='text-main-disabled' icon={"akar-icons:search"} fontSize={20} />
                    <input className="text-sm bg-transparent py-2 placeholder-main-gray text-main-primary focus:outline-none" placeholder="Asset name" type="text" />
                </div>
                <div className='flex items-end space-x-8'>
                    <div className='py-2 px-3 border-b-[3px] border-special-btn text-main-dark text-xl font-bold cursor-pointer'>Main</div>
                    <div className='py-2 px-3 border-b-[3px] border-transparent text-main-disabled text-xl font-bold cursor-pointer'>Conditions</div>
                    <div className='py-2 px-3 border-b-[3px] border-transparent text-main-disabled text-xl font-bold cursor-pointer'>Limit</div>
                </div>
            </div>
            <div className='p-5'>
                <LoyaltyForm />
            </div>
        </div>
    )
}

export default Loyalty