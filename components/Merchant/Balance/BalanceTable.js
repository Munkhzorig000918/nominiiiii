import { Icon } from "@iconify/react"
import DepositModal from "./DepositModal"

export const BalanceTable = () => {
    return (
        <>
            <DepositModal isShowModal={true} setIsShowModal={null} />
            <div>
                <table class="w-full table-auto">
                    <thead>
                        <tr className='text-sm tracking-wider text-main-cloud bg-gray-100'>
                            <th className='pr-2 py-2 pl-5 font-medium'>
                                <div className='flex items-center space-x-3'>
                                    Token
                                </div>
                            </th>
                            <th className='px-2 py-2 font-medium'>
                                <div className='flex items-center space-x-3'>
                                    Balance
                                </div>
                            </th>
                            <th className='px-2 py-2 font-medium'>
                                <div className='flex items-center space-x-3'>
                                    Value
                                </div>
                            </th>
                            <th className='px-2 py-2 font-medium'>
                                <div className='flex items-center space-x-3'>
                                    Action
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1,2,3].map((item) => {
                            return (
                                <tr key={item} className='tracking-wider font-medium text-main-dark text-sm'>
                                    <td className='pr-2 pl-5 py-3'>
                                        <div className='flex items-center space-x-1'>
                                            <Icon icon={"cryptocurrency-color:btc"} fontSize={25} className="" />
                                            <p>BTC</p>
                                        </div>
                                    </td>
                                    <td className='px-2 py-3 text-main-cloud'>
                                        <div className=''>
                                            0.00
                                        </div>
                                    </td>
                                    <td className='px-2 py-3 text-main-cloud'>
                                        <div className=''>
                                            1.230400 USD
                                        </div>
                                    </td>
                                    <td className='px-2 py-3 text-main-cloud'>
                                        <div className='flex items-center space-x-20'>
                                            <button className="text-special-info tracking-widest">Deposit</button>
                                            <button className="tracking-widest">Withdraw</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}