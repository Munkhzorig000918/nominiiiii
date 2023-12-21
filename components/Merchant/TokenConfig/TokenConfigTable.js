import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Toggle } from '../../shared/Toggle'

const TokenConfigTable = () => {
    const [activeRow, setActiveRow] = useState({ id: null, isShow: false })
    const [isActive, setIsActive] = useState(false)

    const toggleDetail = (id) => {
        setActiveRow({ id: id, isShow: activeRow.id === id ? !activeRow.isShow : true })
    }

    console.log("activeRow");
    console.log(activeRow);
    
    return (
        <div>
            <table class="w-full table-auto">
                <thead>
                    <tr className='border-b text-sm text-main-disabled font-medium'>
                        <th className='pb-4 pr-2 pl-5 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>Token ID</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>Display name</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>Display symbol</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>System symbol</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>Network</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>Enable status</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>Deposit status</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 px-2 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>Withdraw status</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                        <th className='pb-4 pl-2 pr-5 font-medium'>
                            <div className='flex items-center space-x-3'>
                                <p>Operation</p>
                                <Icon icon={"ep:arrow-down-bold"} fontSize={17} className='' />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[1,2,3,4].map((item, index) => {
                        return (
                            <>
                                <tr key={item} className='text-main-primary text-sm'>
                                    <td className='pr-2 pl-5 py-4'>
                                        <div className='font-bold'>
                                            {index + 1}
                                        </div>
                                    </td>
                                    <td className='px-2 py-4'>
                                        <div className=''>
                                            Bitcoin
                                        </div>
                                    </td>
                                    <td className='px-2 py-4'>
                                        <div className=''>
                                            BTC
                                        </div>
                                    </td>
                                    <td className='px-2 py-4'>
                                        <div className=''>
                                            BTC
                                        </div>
                                    </td>
                                    <td className='px-2 py-4'>
                                        <div className='font-bold'>
                                            BSC, ETH, POLYGON
                                        </div>
                                    </td>
                                    <td className='px-2 py-4'>
                                        <div className='flex items-center space-x-2'>
                                            <Toggle isActive={isActive} setIsActive={setIsActive} />
                                            <p>Enabled</p>
                                        </div>
                                    </td>
                                    <td className='px-2 py-4'>
                                        <div className='flex items-center space-x-2'>
                                            <Toggle isActive={isActive} setIsActive={setIsActive} />
                                            <p>Enabled</p>
                                        </div>
                                    </td>
                                    <td className='px-2 py-4'>
                                        <div className='flex items-center space-x-2'>
                                            <Toggle isActive={isActive} setIsActive={setIsActive} />
                                            <p>Enabled</p>
                                        </div>
                                    </td>
                                    <td className='pl-2 pr-5 py-4'>
                                        <div onClick={() => toggleDetail(item)} className='cursor-pointer text-special-info flex items-center space-x-2'>
                                            <Icon icon={"ep:arrow-down-bold"} fontSize={17} />
                                            <p>Detail</p>
                                        </div>
                                    </td>
                                </tr>
                                {activeRow.id === item && activeRow.isShow && (
                                    <tr key={item}>
                                        <td colSpan={12} className="bg-gray-100">
                                            <div className='w-full flex justify-center'>
                                                <table className="w-11/12 border-x">
                                                    <thead>
                                                        <tr className='text-sm text-main-disabled'>
                                                            <th className='py-2 pr-2 font-medium'>
                                                                <div className='flex items-center space-x-3'>
                                                                    <p>Network</p>
                                                                    <Icon icon={"ep:arrow-down-bold"} fontSize={15} className='' />
                                                                </div>
                                                            </th>
                                                            <th className='py-2 pr-2 pl-5 font-medium'>
                                                                <div className='flex items-center space-x-3'>
                                                                    <p>Contract symbol</p>
                                                                    <Icon icon={"ep:arrow-down-bold"} fontSize={15} className='' />
                                                                </div>
                                                            </th>
                                                            <th className='py-2 pr-2 pl-5 font-medium'>
                                                                <div className='flex items-center space-x-3'>
                                                                    <p>Enable status</p>
                                                                    <Icon icon={"ep:arrow-down-bold"} fontSize={15} className='' />
                                                                </div>
                                                            </th>
                                                            <th className='py-2 pr-2 pl-5 font-medium'>
                                                                <div className='flex items-center space-x-3'>
                                                                    <p>Deposit status</p>
                                                                    <Icon icon={"ep:arrow-down-bold"} fontSize={15} className='' />
                                                                </div>
                                                            </th>
                                                            <th className='py-2 pr-2 pl-5 font-medium'>
                                                                <div className='flex items-center space-x-3'>
                                                                    <p>Withdraw status</p>
                                                                    <Icon icon={"ep:arrow-down-bold"} fontSize={15} className='' />
                                                                </div>
                                                            </th>
                                                            <th className='py-2 pr-2 pl-5 font-medium'>
                                                                <div className='flex items-center space-x-3'>
                                                                    <p>Operation</p>
                                                                    <Icon icon={"ep:arrow-down-bold"} fontSize={15} className='' />
                                                                </div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className='text-main-primary text-sm'>
                                                            <td className='px-2 py-4'>
                                                                <div>
                                                                    BSC
                                                                </div>
                                                            </td>
                                                            <td className='px-2 py-4'>
                                                                <div>
                                                                    ARDX
                                                                </div>
                                                            </td>
                                                            <td className='px-2 py-4'>
                                                                <div className='flex items-center space-x-2'>
                                                                    <Toggle isActive={isActive} setIsActive={setIsActive} />
                                                                    <p>Enabled</p>
                                                                </div>
                                                            </td>
                                                            <td className='px-2 py-4'>
                                                                <div className='flex items-center space-x-2'>
                                                                    <Toggle isActive={isActive} setIsActive={setIsActive} />
                                                                    <p>Enabled</p>
                                                                </div>
                                                            </td>
                                                            <td className='px-2 py-4'>
                                                                <div className='flex items-center space-x-2'>
                                                                    <Toggle isActive={isActive} setIsActive={setIsActive} />
                                                                    <p>Enabled</p>
                                                                </div>
                                                            </td>
                                                            <td className='px-2 py-4'>
                                                                <div className='flex items-center space-x-2'>
                                                                    <button className='text-special-info'>Edit</button>
                                                                    <button className='text-special-danger'>Remove</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr >
                                )}
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TokenConfigTable