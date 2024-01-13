import { useState } from "react"
import { Icon } from "@iconify/react"

export const SymbolDropdown = ({ selectedItem, setSelectedItem, list }) => {
    const [isShowList, setIsShowList] = useState(false)

    const changeItem = (item) => {
        setSelectedItem(item)
        setIsShowList(false)
    }
    
    return (
        <div className={`${isShowList ? 'rounded-b-none' : ''} cursor-default relative flex items-center justify-between border rounded-md py-3 px-3`}>
            <div className="flex items-center space-x-2">
                <Icon icon={selectedItem.icon} fontSize={25} className="" />
                <p className="text-sm text-main-dark">{selectedItem.symbol}</p>
            </div>
            <div className="flex items-center space-x-3">
                <p className="text-xs text-main-cloud">Balance {selectedItem.balance}</p>
                <Icon onClick={() => setIsShowList(!isShowList)} icon={"ep:arrow-down"} fontSize={20} className="cursor-pointer text-main-dark" />
            </div>
            {isShowList ? (
                <div className="z-50 rounded-b-md absolute w-full max-h-[200px] bg-white border top-12 left-0 overflow-y-auto">
                    {list.map((item) => {
                        return (
                            <div onClick={() => changeItem(item)} className={`${selectedItem === item ? 'bg-gray-100' : ''} p-2 flex items-center space-x-3 hover:bg-gray-100 cursor-pointer`}>
                                <Icon icon={item.icon} fontSize={25} className="" />
                                <p className="text-sm text-main-dark">{item.symbol}</p>
                            </div>
                        )
                    })}
                </div>
            ) : <></>}
        </div>
    )
}