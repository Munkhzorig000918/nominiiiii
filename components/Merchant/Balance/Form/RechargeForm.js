import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form"
import { Dropdown } from '../../../shared/Dropdown'

const dummyCryptoCurrencies = [
    { id: 1, name: "ARDX" },
    { id: 2, name: "BTC" },
    { id: 3, name: "USDT" },
]

export const RechargeForm = () => {
    const [selectedCurrency, setSelectedCurrency] = useState(dummyCryptoCurrencies[0])

    const {
        handleSubmit,
        setValue,
        control,
        reset: resetForm,
        formState: { errors },
    } = useForm({
        defaultValues: {
          uid: "",
          symbol: "",
          to: "",
          amount: "",
          remark: ""
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
                        <p>UID:</p>
                    </label>
                </div>
                <Controller 
                    name='uid'
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
                        <p>To</p>
                    </label>
                </div>
                <Controller 
                    name='to'
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
                        <p>Amount</p>
                    </label>
                </div>
                <Controller 
                    name='amount'
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
                <button className='border text-tiny bg-special-btn text-white rounded-5 w-24 py-1.5'>Save</button>
            </div>
        </form>
    )
}