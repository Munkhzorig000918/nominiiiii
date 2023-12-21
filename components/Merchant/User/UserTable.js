export const UserTable = () => {
    return (
        <div>
            <table class="w-full table-auto">
                <thead>
                    <tr className='text-lg font-bold text-main-dark'>
                        <th className='w-1/4 pb-4 pr-2 pl-5'>
                            <div className='flex items-center space-x-3'>
                                UID
                            </div>
                        </th>
                        <th className='w-1/3 pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                Register time
                            </div>
                        </th>
                        <th className='w-1/4 pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                Login IP
                            </div>
                        </th>
                        <th className='w-1/6 pb-4 px-2'>
                            <div className='flex items-center space-x-3'>
                                Operation
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
                                        32265215
                                    </div>
                                </td>
                                <td className='px-2 py-2'>
                                    <div className=''>
                                        2023/12/04 17:41:34
                                    </div>
                                </td>
                                <td className='px-2 py-2'>
                                    <div className=''>
                                        202.126.90.93
                                    </div>
                                </td>
                                <td className='px-2 py-2'>
                                    <div className='bg-special-btn text-white font-medium w-40 py-2 text-center rounded-5'>
                                        View details
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