import React from 'react'
import { Icon } from '@iconify/react'

const TransactionTable = () => {
    return (
        <div>
            <table class="w-full table-auto">
                <thead>
                    <tr className='border-b text-sm text-main-disabled font-medium'>
                        <th className='pb-4 pr-2 pl-5'>
                            <div className='flex items-center space-x-3'>
                                <p>ID</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                <p>Type</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                <p>From</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                <p>To</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                <p>Reference</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                <p>Amount</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                <p>Time</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                <p>Status</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='flex justify-center pb-4 pl-2 pr-5'>
                            <div className='flex items-center space-x-3'>
                                <p>Actions</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[1,2,3,4,5].map((item, index) => {
                        return (
                            <tr key={item} className='font-medium text-main-primary text-sm'>
                                <td className='pr-2 pl-5 py-4'>
                                    <div className='font-bold'>
                                        {index + 1}
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className=''>
                                        Withdrawal
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className=''>
                                        CIF88299188
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className=''>
                                        World
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className=''>
                                        -
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className='flex items-center space-x-2'>
                                        <Icon icon={"cryptocurrency-color:btc"} fontSize={25} className='' />
                                        <p className='text-special-danger'>- 0.02909100 BTC</p>
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className='font-bold'>
                                        11 Oct 2023 04:11
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className='bg-special-success/50 text-white rounded-5 px-2 py-1 text-center'>
                                        Success
                                    </div>
                                </td>
                                <td className='pl-2 pr-5 py-4 flex justify-center'>
                                    <div className='text-special-info'>
                                        Detail
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionTable