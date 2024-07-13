import React from 'react'
import imgTwitter from "@/public/twitter.png"
import imgTelegram from "@/public/telegram.png"
import imgDexscreener from "@/public/dexscreener.svg"
import imgDextools from "@/public/dextools.png"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const twitterLink = "https://twitter.com/ChaseOnETH";
    const telegramLink =  "https://t.me/ChaseOnETH"
    // const websiteLink =  "Website: https://ChaseOnETH.fun"
  return (
    <div className='blue-bg flex items-center justify-center gap-3 py-5'>
        <Link href={twitterLink}>
            <Image src={imgTwitter} alt='twitter' className='w-10'/>
        </Link>
        <Link href={telegramLink}>
            <Image src={imgTelegram} alt='telegram' className='w-12'/>
        </Link>
        <Link href={telegramLink}>
            <Image src={imgDexscreener} alt='dexscreener' className='w-10'/>
        </Link>
        <Link href={telegramLink}>
            <Image src={imgDextools} alt='dextools' className='w-14'/>
        </Link>
    </div>
  )
}

export default Footer