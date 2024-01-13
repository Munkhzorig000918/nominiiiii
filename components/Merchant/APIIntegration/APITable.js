import React from 'react'
import { Icon } from '@iconify/react'

const APITable = () => {
    return (
        <div>
            <table class="w-full table-auto">
                <thead>
                    <tr className='border-b text-sm text-main-disabled'>
                        <th className='pb-4 pr-2 pl-5 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>API ID</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>Name</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>From</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>Updated Time</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2 font-medium'>
                            <div className='flex items-center justify-end space-x-3'>
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
                                        05d6618eaf802d746097
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className=''>
                                        Ard Bit
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className=''>
                                        11 Oct 2023 04:11
                                    </div>
                                </td>
                                <td className='px-2 py-4'>
                                    <div className=''>
                                        11 Oct 2023 04:11
                                    </div>
                                </td>
                                <td className='pl-2 pr-5 py-4'>
                                    <div className='flex items-center justify-end space-x-8'>
                                        <button className='text-special-info text-sm'>Detail</button>
                                        <button className='text-special-info text-sm'>Edit</button>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="true" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
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

export default APITable