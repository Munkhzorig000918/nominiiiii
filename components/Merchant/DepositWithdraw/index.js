import { Icon } from '@iconify/react'
import React from 'react'
import { Button } from '../../shared/Button'
import DepoWithTable from './DepoWithTable'

const DepositWithdraw = () => {
    return (
        <div className='w-5/6 bg-white rounded-20 py-5 space-y-5'>
            <div className='flex items-center justify-between px-5'>
                <div className='flex items-center space-x-4'>
                    <input className='w-80 bg-transparent text-sm placeholder:text-main-disabled text-main-primary border-[0.5px] border-main-disabled rounded-5 py-2 pl-8 pr-4 focus:outline-none' type='text' placeholder='Record ID / Tx ID' />
                    <Button text={"Search"} />
                    <div className='flex items-center space-x-2 rounded-5 border-[0.5px] border-main-disabled py-2 px-4'>
                        <Icon icon={"material-symbols:tune"} fontSize={20} className='text-main-primary' />
                        <p className='text-tiny font-medium'>Filters</p>
                    </div>
                </div>
                <div className='cursor-pointer flex items-center space-x-1 bg-main-background rounded-5 border border-main-disabled py-2 px-3'>
                    <Icon icon={"bi:filetype-xlsx"} fontSize={20} className='text-main-primary' />
                    <p className='text-sm'>Export XLSX</p>
                </div>
            </div>
            <div className='flex space-x-3 pb-4 px-5'>
                <Button isActive={false} text={"Deposit"} />
                <Button isActive={true} text={"Withdraw"} />
            </div>
            <DepoWithTable />
            <div className='flex items-center justify-end space-x-8 py-4 border-t px-5'>
                <p>Rows per page: 20</p>
                <Icon icon={"bxs:down-arrow"} fontSize={20} className='cursor-pointer text-main-disabled' />
                <p>1-7 of 7</p>
                <div className='flex items-center space-x-3 text-main-disabled'>
                    <Icon icon={"ep:arrow-left"} fontSize={20} className='cursor-pointer' />
                    <Icon icon={"ep:arrow-right"} fontSize={20} className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default DepositWithdraw