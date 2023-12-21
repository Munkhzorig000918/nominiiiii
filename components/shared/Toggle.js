export const Toggle = ({ isActive, setIsActive }) => {
    return (
        <div onClick={() => setIsActive(!isActive)} className={`${isActive ? 'bg-special-info' : 'bg-main-disabled'} flex items-center font-bold w-12 h-6 rounded-full`}>
            <div className={`${isActive ? 'bg-white translate-x-6' : 'bg-main-background translate-x-[2px]'} duration-300 transition-all w-[22px] h-[22px] rounded-full`}></div>
        </div>   
    )
}