import React from 'react'
import { Icon } from '@iconify/react'

const ListTable = () => {
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
                                <p>Name</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                <p>Status</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                <p>Merchant products</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                <p>Expire date</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 pl-2 pr-5'>
                            <div className='flex items-center space-x-3'>
                                <p>Actions</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[1,2,3,4].map((item) => {
                        return (
                            <tr key={item} className='font-medium text-main-primary text-sm'>
                                <td className='pr-2 pl-5 py-4'>
                                    <div className='font-bold'>
                                        1
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className=''>
                                        Ard Bit
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className=''>
                                        Active
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className=''>
                                        Waas, Loyalty, Trading
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className='font-bold'>
                                        24.Dec.2024
                                    </div>
                                </td>
                                <td className='pl-2 pr-5 py-4'>
                                    <div className='rounded-20 text-white bg-special-danger px-2 py-[2px] text-center'>
                                        Deactivate
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

export default ListTable