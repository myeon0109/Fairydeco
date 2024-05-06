'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SignIn, AddressBook } from '@phosphor-icons/react/dist/ssr'
import headerPic from '../../../public/image/logo.png'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
    const router = useRouter()
    const [userId, setUserId] = useState()
    let value

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        value = localStorage.getItem('userId') || ''
        setUserId(value)
    }

    return (
        <div className="flex h-[100px] w-dvw items-center justify-between bg-customYellow px-8">
            <div className="relative flex h-5/6 w-40 items-start justify-center">
                <Link href="/">
                    <Image
                        src={headerPic}
                        alt="Logo"
                        fill={true}
                        sizes="(min-width: 60em) 24vw, (min-width: 28em) 45vw, 100vw"
                    />
                </Link>
            </div>
            {userId ? (
                <Link href="/mypage">
                    <AddressBook size={45} />
                </Link>
            ) : (
                <Link href="/login">
                    <SignIn size={45} />
                </Link>
            )}
        </div>
    )
}
