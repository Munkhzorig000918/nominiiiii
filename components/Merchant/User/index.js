import React, { useState } from 'react'
import { UserTable } from './UserTable'
import { Icon } from '@iconify/react'
import { Button } from '../../shared/Button'
import { TransactionTable } from './TransactionTable'
import { BalanceTable } from './BalanceTable'

const UserPermission = () => {
    const [isShowUserDetails, setIsShowUserDetails] = useState(true)
    const [method, setMethod] = useState('transaction')
    
    if (isShowUserDetails) {
        return (
            <div className='w-11/12 space-y-10'>
                <div className='bg-white rounded-20 py-5 flex flex-col space-y-8 px-5'>
                    <div className='flex items-center space-x-1 text-main-primary'>
                        <Icon onClick={() => setIsShowUserDetails(false)} icon={"fe:arrow-left"} fontSize={20} className='cursor-pointer' />
                        <h3 className='font-bold text-2xl'>User information</h3>
                    </div>
                    <div className='flex justify-center items-center space-x-20'>
                        <div className='space-y-2'>
                            <h4 className='text-xl font-bold text-main-dark'>User's ID</h4>
                            <div className='w-[300px] py-2 px-4 border rounded-md'>
                                32265215
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <h4 className='text-xl font-bold text-main-dark'>Register time</h4>
                            <div className='w-[300px] py-2 px-4 border rounded-md'>
                                2023/12/04 17:41:34
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <h4 className='text-xl font-bold text-main-dark'>Login IP</h4>
                            <div className='w-[300px] py-2 px-4 border rounded-md'>
                                202.126.90.93
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center space-x-20'>
                        <Button text={"Freeze withdraw"} />
                        <Button text={"Freeze account"} />
                        <Button text={"Lock asset"} />
                    </div>
                </div>
                <div className='bg-white rounded-20 py-5 flex flex-col space-y-8 px-5'>
                    <div className='flex space-x-8 text-xl font-bold border-b'>
                        <button onClick={() => setMethod('transaction')} className={`${method === 'transaction' ? 'text-main-dark border-special-btn' : 'text-main-disabled border-transparent hover:border-special-btn/50'} pb-4 border-b-[3px]`}>Transaction</button>
                        <button onClick={() => setMethod('balance')} className={`${method === 'balance' ? 'text-main-dark border-special-btn' : 'text-main-disabled border-transparent hover:border-special-btn/50'} pb-4 border-b-[3px]`}>Balance</button>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className="w-80 flex items-center justify-start rounded-5 border border-main-disabled space-x-3 px-3">
                            <Icon className='text-main-disabled' icon={"akar-icons:search"} fontSize={20} />
                            <input className="text-sm bg-transparent py-2 placeholder-main-gray text-main-primary focus:outline-none" placeholder="Search" type="text" />
                        </div>
                        <div className='flex items-center space-x-2 text-main-disabled cursor-pointer'>
                            <Icon icon={"clarity:calendar-line"} fontSize={20} />
                            <p className='font-bold'>Select date</p>
                        </div>
                    </div>
                    {method === 'transaction' ? <TransactionTable /> : <BalanceTable />}
                    <div className='flex items-center justify-end space-x-8 py-4 px-5'>
                        <p>Rows per page: 20</p>
                        <Icon icon={"bxs:down-arrow"} fontSize={20} className='cursor-pointer text-main-disabled' />
                        <p>1-7 of 7</p>
                        <div className='flex items-center space-x-3 text-main-disabled'>
                            <Icon icon={"ep:arrow-left"} fontSize={20} className='cursor-pointer' />
                            <Icon icon={"ep:arrow-right"} fontSize={20} className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className='w-11/12 space-y-10'>
            <div className='bg-white rounded-20 py-5 flex flex-col space-y-8 px-5'>
                <h3 className='font-bold text-main-primary text-2xl'>User & permission</h3>
                <div className='flex space-x-8'>
                    <div className='flex flex-col space-y-3 text-sm'>
                        <label className='font-bold text-main-dark'>Keyword</label>
                        <input className='w-60 bg-transparent border rounded-5 px-3 py-2 focus:outline-none' placeholder='UID' type='text' />
                    </div>
                    <div className='flex flex-col space-y-3 text-sm'>
                        <label className='font-bold text-main-dark'>Keyword</label>
                        <input className='w-60 bg-transparent border rounded-5 px-3 py-2 focus:outline-none' placeholder='Starting time' type='date' />
                    </div>
                    <div className='flex flex-col space-y-3 text-sm'>
                        <label className='font-bold text-main-dark'>Keyword</label>
                        <input className='w-60 bg-transparent border rounded-5 px-3 py-2 focus:outline-none' placeholder='End time' type='date' />
                    </div>
                </div>
                <div className='flex space-x-8 text-tiny text-white'>
                    <button className='bg-special-btn rounded-5 py-2 w-40'>Search</button>
                    <button className='bg-special-btn rounded-5 py-2 w-40'>Export</button>
                </div>
            </div>
            <div className='bg-white rounded-20 py-5 flex flex-col space-y-8 px-5'>
                <div className='text-main-primary text-2xl font-bold'>Data list</div>
                <UserTable />
                <div className='flex items-center justify-end space-x-8 py-4 px-5'>
                    <p>Rows per page: 20</p>
                    <Icon icon={"bxs:down-arrow"} fontSize={20} className='cursor-pointer text-main-disabled' />
                    <p>1-7 of 7</p>
                    <div className='flex items-center space-x-3 text-main-disabled'>
                        <Icon icon={"ep:arrow-left"} fontSize={20} className='cursor-pointer' />
                        <Icon icon={"ep:arrow-right"} fontSize={20} className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPermission