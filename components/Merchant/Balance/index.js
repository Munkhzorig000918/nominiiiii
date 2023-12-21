import { Icon } from '@iconify/react'
import React from 'react'
import { BalanceTable } from './BalanceTable'

const Balance = () => {
    return (
        <div className='w-full space-y-10'>
            <div className='bg-[#E9F0FF] rounded-20 py-5 flex items-center justify-between px-5'>
                <div className='space-y-3 text-main-primary tracking-widest'>
                    <h2 className='font-bold text-3xl'>Balance</h2>
                    <div className='flex items-end space-x-2'>
                        <Icon icon={"simple-icons:hive-blockchain"} fontSize={20} className='rotate-90' />
                        <p className='font-bold text-4xl'>1000.00 ARDX</p>
                    </div>
                </div>
                <div className='flex items-center space-x-3 font-medium text-sm'>
                    <button className='rounded-14 text-special-btn border border-special-btn w-60 py-3'>Deposit</button>
                    <button className='rounded-14 text-special-btn border border-special-btn w-60 py-3'>Transfer</button>
                    <button className='rounded-14 text-special-btn border border-special-btn w-60 py-3'>Airdrop</button>
                </div>
            </div>
            <div className='bg-white rounded-20 py-5 flex flex-col space-y-8 px-5'>
                <div className="w-80 flex items-center justify-start rounded-5 border border-main-disabled space-x-3 px-3">
                    <Icon className='text-main-disabled' icon={"akar-icons:search"} fontSize={20} />
                    <input className="text-sm tracking-widest bg-transparent py-2 placeholder-main-gray text-main-primary focus:outline-none" placeholder="Search" type="text" />
                </div>
                <BalanceTable />
            </div>
        </div>
    )
}

export default Balance