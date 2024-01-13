import { useState } from "react"
import { Icon } from "@iconify/react"

export const Dropdown = ({ selectedItem, setSelectedItem, list, labelName }) => {
    const [isShowList, setIsShowList] = useState(false)

    const changeItem = (item) => {
        setSelectedItem(item)
        setIsShowList(false)
    }

    return (
        <div className={`${isShowList ? 'rounded-b-none' : ''} cursor-default relative flex items-center justify-between border rounded-md py-3 px-3`}>
            <p className="text-main-dark text-sm">{selectedItem.name}</p>
            <Icon onClick={() => setIsShowList(!isShowList)} icon={"ep:arrow-down"} fontSize={20} className="cursor-pointer text-main-dark" />
            {labelName ? <div className="text-[10px] text-main-cloud absolute z-10 bg-white -top-[8px] left-2">{labelName}</div> : <></>}
            {isShowList ? (
                <div className="z-50 rounded-b-md absolute w-full max-h-[200px] bg-white border top-11 left-0 overflow-y-auto">
                    {list.map((item) => {
                        return (
                            <div key={item} onClick={() => changeItem(item)} className={`${selectedItem === item ? 'bg-gray-100' : ''} p-2 flex items-center space-x-3 hover:bg-gray-100 cursor-pointer`}>
                                <p className="text-sm text-main-dark">{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            ) : <></>}
        </div>
    )
}