import React from 'react'
import imgTwitter from "@/public/twitter.png"
import imgTelegram from "@/public/telegram.png"
import imgDexscreener from "@/public/dexscreener.svg"
import imgDextools from "@/public/dextools.png"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const link = ""
  return (
    <div className='blue-bg flex items-center justify-center gap-3 py-5'>
        <Link href={link}>
            <Image src={imgTwitter} alt='twitter' className='w-10'/>
        </Link>
        <Link href={link}>
            <Image src={imgTelegram} alt='telegram' className='w-12'/>
        </Link>
        <Link href={link}>
            <Image src={imgDexscreener} alt='dexscreener' className='w-10'/>
        </Link>
        <Link href={link}>
            <Image src={imgDextools} alt='dextools' className='w-14'/>
        </Link>
    </div>
  )
}

export default Footer