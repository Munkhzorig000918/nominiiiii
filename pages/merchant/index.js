import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import List from '../../components/Merchant/List'
import DepositWithdraw from '../../components/Merchant/DepositWithdraw'
import Transactions from '../../components/Merchant/Transactions'
import APIIntegration from '../../components/Merchant/APIIntegration'
import TokenConfig from '../../components/Merchant/TokenConfig'
import Loyalty from '../../components/Merchant/Loyalty'
import UserPermission from '../../components/Merchant/User'
import Balance from '../../components/Merchant/Balance'

const MerchangePage = () => {
    const router = useRouter()
    const [selectedType, setSelectedType] = useState("list")
    
    useEffect(() => {
        if (router.query?.menu) {
            setSelectedType(router.query.menu)
        } else {
            setSelectedType("list")
        }
    }, [router])

    switch (selectedType) {
        case "list":
            return <List />
        case "depo-with":
            return <DepositWithdraw />
        case "transcations":
            return <Transactions />
        case "api-integration":
            return <APIIntegration />
        case "token":
            return <TokenConfig />
        case "loyalty":
            return <Loyalty />
        case "user-permission":
            return <UserPermission />
        case "balance":
            return <Balance />
        default:
            return <List />
    }
}

export default MerchangePage