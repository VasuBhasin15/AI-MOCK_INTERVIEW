"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
function Header() {
    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])
  return (
    <div className='flex p-4 items-center justify-between shadow-md'>
        <Image src={"/logo2.png"} width={160} height={100} alt="logo" />
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-indigo-500 hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-indigo-500 font-bold'}`}>DashBoard</li>
            <li  className={`hover:text-indigo-500 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions' && 'text-indigo-500 font-bold'}`}>Questions</li>
            <li  className={`hover:text-indigo-500 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade' && 'text-indigo-500 font-bold'}`}>Upgrade</li>
            <li  className={`hover:text-indigo-500 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how' && 'text-indigo-500 font-bold'}`}>How it Works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header