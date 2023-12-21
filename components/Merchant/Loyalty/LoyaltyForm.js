import React from 'react'
import { useForm, Controller } from "react-hook-form"

export const LoyaltyForm = () => {
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
                        <p>Code</p>
                    </label>
                </div>
                <Controller 
                    name='code'
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
                        <p>Payroll account</p>
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
                        />
                    )}
                />
            </div>
            <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between text-sm">
                    <label className="flex items-center space-x-1 text-black font-bold">
                        <span className='text-special-danger'>*</span>
                        <p>Name</p>
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
                        />
                    )}
                />
            </div>
            <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between text-sm">
                    <label className="flex items-center space-x-1 text-black font-bold">
                        <span className='text-special-danger'>*</span>
                        <p>Value</p>
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
                        <p>Status</p>
                    </label>
                </div>
                <Controller 
                    name='status'
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
                        <p>Select Token</p>
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
                        />
                    )}
                />
            </div>
            <div className='pt-10 flex space-x-8'>
                <button className='border border-black text-tiny rounded-5 w-24 py-1.5'>Cancel</button>
                <button className='border text-tiny bg-special-btn text-white rounded-5 w-24 py-1.5'>Save</button>
            </div>
        </form>
    )
}