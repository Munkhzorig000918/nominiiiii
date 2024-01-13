import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form"
import { Dropdown } from '../../../shared/Dropdown'
import Button from '../../../shared/Button'

const dummyCryptoCurrencies = [
    { id: 1, name: "ARDX" },
    { id: 2, name: "BTC" },
    { id: 3, name: "USDT" },
]

export const TransferForm = () => {
    const [selectedCurrency, setSelectedCurrency] = useState(dummyCryptoCurrencies[0])
    
    const {
        handleSubmit,
        setValue,
        control,
        reset: resetForm,
        formState: { errors },
    } = useForm({
        defaultValues: {
          code: "",
          account: "",
          name: "",
          value: "",
          status: "",
          token: ""
        },
        mode: "onChange",
    })

    const onSubmit = async (v) => {
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between text-sm">
                    <label className="flex items-center space-x-1 text-black font-bold">
                        <span className='text-special-danger'>*</span>
                        <p>Cryptocurrency</p>
                    </label>
                </div>
                <Controller 
                    name='code'
                    control={control}
                    rules={{}}
                    render={({ field }) => (
                        <Dropdown selectedItem={selectedCurrency} setSelectedItem={setSelectedCurrency} list={dummyCryptoCurrencies} />
                    )}
                />
            </div>
            <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between text-sm">
                    <label className="flex items-center space-x-1 text-black font-bold">
                        <span className='text-special-danger'>*</span>
                        <p>From</p>
                    </label>
                </div>
                <Controller 
                    name='account'
                    control={control}
                    rules={{}}
                    render={({ field }) => (
                        <input
                            value={field.value}
                            required={true}
                            className="w-11/12 border rounded-lg p-4"
                            type="text"
                            placeholder='Company: recharging account of the administrator'
                        />
                    )}
                />
            </div>
            <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between text-sm">
                    <label className="flex items-center space-x-1 text-black font-bold">
                        <span className='text-special-danger'>*</span>
                        <p>To</p>
                    </label>
                </div>
                <Controller 
                    name='name'
                    control={control}
                    rules={{}}
                    render={({ field }) => (
                        <input
                            value={field.value}
                            required={true}
                            className="w-11/12 border rounded-lg p-4"
                            type="text"
                            placeholder='Company: recharging account of the administrator'
                        />
                    )}
                />
            </div>
            <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between text-sm">
                    <label className="flex items-center space-x-1 text-black font-bold">
                        <span className='text-special-danger'>*</span>
                        <p>Amount</p>
                    </label>
                </div>
                <Controller 
                    name='value'
                    control={control}
                    rules={{}}
                    render={({ field }) => (
                        <input
                            value={field.value}
                            required={true}
                            className="w-11/12 border rounded-lg p-4"
                            type="text"
                        />
                    )}
                />
            </div>
            <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between text-sm">
                    <label className="flex items-center space-x-1 text-black font-bold">
                        <span className='text-special-danger'>*</span>
                        <p>Remark</p>
                    </label>
                </div>
                <Controller 
                    name='status'
                    control={control}
                    rules={{}}
                    render={({ field }) => (
                        <textarea
                            value={field.value}
                            required={true}
                            className="w-11/12 border rounded-lg p-4"
                            type="text-area"
                        />
                    )}
                />
            </div>
            <div className='pt-10 flex space-x-8'>
                <button className='border text-tiny bg-special-btn text-white rounded-5 w-24 py-1.5'>Submit</button>
                {/* <Button /> */}
            </div>
        </form>
    )
}