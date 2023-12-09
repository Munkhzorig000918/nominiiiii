import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image';
import { Icon } from '@iconify/react';

const menus = [
    { path: "/", text: "Dashboard / Analytics", icon: "material-symbols:home" },
    { path: "/merchant", text: "Merchant", icon: "tdesign:cart", submenus: [ 
        { path: "", text: "List" },
        { path: "depo-with", text: "Deposit / Withdraw" },
        { path: "transactions", text: "Transactions" },
        { path: "api-integration", text: "API integration" },
        { path: "token", text: "Token configuration" },
        { path: "loyalty", text: "Loyalty" },
        { path: "user-permission", text: "User & permission" },
        { path: "balance", text: "Balance" },
     ] },
    // { path: "/transaction", text: "Transactions", icon: "grommet-icons:transaction" },
    // { path: "/balance", text: "Balance", icon: "ph:wallet-fill" },
    // { path: "/escrow", text: "Escrow management", icon: "carbon:book" },
    // { path: "/exchange", text: "Exchange management", icon: "mingcute:exchange-baht-line" },
    // { path: "/loyalty", text: "Loyalty management", icon: "material-symbols:loyalty" },
    // { path: "/users", text: "Users", icon: "solar:user-bold" },
    // { path: "/analytics", text: "Analytics & report", icon: "grommet-icons:analytics" },
    // { path: "/configs", text: "Configurations", icon: "solar:settings-linear" },
    // { path: "/backup", text: "Backup & recovery", icon: "material-symbols:lock" },
]

const Layout = ({ children }) => {
    const router = useRouter()

    const [activeMenu, setActiveMenu] = useState("")
    const [subMenu, setSubMenu] = useState("")
    
    useEffect(() => {
        if (router.route) {
            setActiveMenu(router.route)
        } else {
            setActiveMenu("")
        }

        if (router.query?.menu) {
            setSubMenu(router.query.menu)
        } else {
            setSubMenu("")
        }
    }, [router])

    return (
        <div className="w-screen min-h-screen h-screen bg-main-background flex items-start">
            <div className="h-full w-[290px] bg-white">
                <div className="h-[100px] flex items-center justify-center border-b border-main-background">
                    <h3 className="uppercase text-main-primary text-xl font-bold">cystody dashboard</h3>
                </div>
                <div className='pt-5 pl-8 space-y-3'>
                    {menus.map((menu) => {
                        return (
                            <div key={menu.path}>
                                <div onClick={() => router.push(menu.path)} key={menu.path} className='relative flex items-center space-x-3 py-4 cursor-pointer'>
                                    <Icon icon={menu.icon} fontSize={20} className={`${menu.path === activeMenu ? 'text-black' : 'text-main-disabled'}`} />
                                    <p className={`${menu.path === activeMenu ? 'text-main-primary' : 'text-main-disabled'} font-bold`}>{menu.text}</p>
                                    <div className={`${menu.path === activeMenu ? 'bg-special-btn' : 'bg-transparent'} absolute w-1 h-10 top-center right-0 rounded-lg`}></div>
                                </div>
                                {menu.path === activeMenu && menu?.submenus ? (
                                    <div className='border-t pt-4 pl-8 space-y-8'>
                                        {menu.submenus.map((item) => {
                                            return (
                                                <div key={item.path} className={`${subMenu === item.path ? 'font-bold text-main-primary' : 'text-main-disabled font-medium'} cursor-pointer`}>
                                                    <Link href={`${menu.path}${item.path ? `?menu=${item.path}` : ''}`} key={item.path}>{item.text}</Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                                ) : <></>}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="h-full px-5" style={{ width: "calc(100% - 290px)" }}>
                <div className="h-[150px] w-full flex items-center justify-between pb-2">
                    <h1 className="text-main-primary font-bold text-4xl">Main Dashboard</h1>
                    <div className="flex items-center rounded-10 bg-white p-[10px] space-x-12">
                        <div className="flex items-center justify-between rounded-20 bg-main-background space-x-3 px-3">
                            <Icon className='text-main-primary' icon={"akar-icons:search"} fontSize={20} />
                            <input className="text-sm bg-transparent py-3 placeholder-main-gray text-main-primary focus:outline-none" placeholder="Search" type="text" />
                        </div>
                        <div className='flex items-center space-x-3'>
                            <Image
                                priority
                                src="/icons/Notification.svg"
                                height={25}
                                width={25}
                                alt="Follow us on Twitter"
                            />
                            <Image
                                priority
                                src="/icons/Gear.svg"
                                height={25}
                                width={25}
                                alt="Follow us on Twitter"
                            />
                            <Image
                                className='rounded-full'
                                src="/images/profile.png"
                                objectFit='contain'
                                height={45}
                                width={45}
                                alt="Follow us on Twitter"
                            />
                        </div>
                    </div>
                </div>
                <main className='pt-3'>{children}</main>
            </div>
        </div>
    )
}

export default Layout