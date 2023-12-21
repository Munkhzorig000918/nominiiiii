export const TransactionTable = () => {
    return (
        <div>
            <table class="w-full table-auto">
                <thead>
                    <tr className='text-lg text-main-dark'>
                        <th className='pr-2 pl-5'>
                            <div className='flex items-center space-x-3'>
                                Transaction ID
                            </div>
                        </th>
                        <th className='px-2'>
                            <div className='flex items-center space-x-3'>
                                Send date
                            </div>
                        </th>
                        <th className='px-2'>
                            <div className='flex items-center space-x-3'>
                                Register time
                            </div>
                        </th>
                        <th className='px-2'>
                            <div className='flex items-center space-x-3'>
                                Type
                            </div>
                        </th>
                        <th className='px-2'>
                            <div className='flex items-center space-x-3'>
                                Status
                            </div>
                        </th>
                        <th className='px-2'>
                            <div className='flex items-center space-x-3'>
                                Login IP
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[1,2,3,4,5,6,7,8,9,10].map((item) => {
                        return (
                            <tr key={item} className='font-medium text-main-dark text-sm'>
                                <td className='pr-2 pl-5 py-2'>
                                    <div className=''>
                                        CIF88299188
                                    </div>
                                </td>
                                <td className='px-2 py-2'>
                                    <div className=''>
                                        2023/12/04 17:41:34
                                    </div>
                                </td>
                                <td className='px-2 py-2'>
                                    <div className=''>
                                        2023/12/04 17:41:34
                                    </div>
                                </td>
                                <td className='px-2 py-2'>
                                    <div className=''>
                                        Internal transfer
                                    </div>
                                </td>
                                <td className='px-2 py-2'>
                                    <div className=''>
                                        Natural
                                    </div>
                                </td>
                                <td className='px-2 py-2'>
                                    <div className=''>
                                        127.0.01
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