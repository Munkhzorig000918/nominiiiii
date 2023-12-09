import React from 'react'
import { Icon } from '@iconify/react'
import ListTable from './ListTable'

const List = () => {
    return (
        <div className='w-2/3 bg-white rounded-20 py-5 space-y-5'>
            <div className='flex items-center justify-between px-5'>
                <h3 className='font-bold text-main-primary text-2xl'>All merchants</h3>
                <div className='p-2 bg-main-background rounded-10'>
                    <Icon icon={"ep:more-filled"} fontSize={24} className='text-special-btn' />
                </div>
            </div>
            <ListTable />
        </div>
    )
}

export default List