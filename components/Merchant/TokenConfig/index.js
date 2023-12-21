import { Icon } from "@iconify/react"
import { Button } from "../../shared/Button"
import TokenConfigTable from "./TokenConfigTable"

const TokenConfig = () => {
    return (
        <div className='w-11/12 bg-white rounded-20 py-5 space-y-5'>
            <div className='flex items-center justify-start px-5 space-x-8'>
                <div className="w-80 flex items-center justify-start rounded-5 border border-main-disabled space-x-3 px-3">
                    <Icon className='text-main-disabled' icon={"akar-icons:search"} fontSize={20} />
                    <input className="text-sm bg-transparent py-2 placeholder-main-gray text-main-primary focus:outline-none" placeholder="Asset name" type="text" />
                </div>
                <Button text={"Search"} />
                <Button text={"Automatic listing"} />
                <Button text={"Add token"} />
            </div>
            <TokenConfigTable />
        </div>
    )
}

export default TokenConfig