'use client'

import { useEffect, useState } from "react"

export default function User({ params }: { params: Promise<{ name: string }> }) {

    const [userName, setUserName] = useState<string>('')

    useEffect(() => {
        params.then(p => {
            setUserName(p.name)
        })
    }, [])
    
    return (
        <h1>{ userName }</h1>
    )
}