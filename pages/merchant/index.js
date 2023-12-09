import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import List from '../../components/Merchant/List'
import DepositWithdraw from '../../components/Merchant/DepositWithdraw'
import Transactions from '../../components/Merchant/Transactions'
import APIIntegration from '../../components/Merchant/APIIntegration'

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

    if (selectedType === 'list') {
        return <List />
    } else if (selectedType === 'depo-with') {
        return <DepositWithdraw />
    } else if (selectedType === 'transactions') {
        return <Transactions />
    }

    switch (selectedType) {
        case "list":
            return <List />
        case "depo-with":
            return <DepositWithdraw />
        case "transcations":
            return <Transactions />
        case "api-integration":
            return <APIIntegration />
        default:
            return <List />
    }
}

export default MerchangePage