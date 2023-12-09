import { Icon } from '@iconify/react'

export const Button = ({ isActive = true, text, onClick, icon }) => {
    return (
        <button onClick={isActive && onClick} className={`${isActive ? 'bg-special-btn text-white' : 'bg-main-background border-[0.5px] border-main-disabled text-main-disabled'} flex items-center space-x-3 rounded-5 font-medium px-4 py-2 text-tiny tracking-widest`}>
            {icon && <Icon icon={icon} fontSize={20} />}
            <p className={isActive ? 'text-white' : 'text-black'}>{text}</p>
        </button>
    )
}