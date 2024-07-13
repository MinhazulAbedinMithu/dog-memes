import React from 'react';
import imgSocial from "@/public/IMG_social.png"
import imgBuy from "@/public/hero-buy.png"
import imgChase from "@/public/chase-on-eth.png"
import Image from 'next/image';
import Link from 'next/link';
import imgTwitter from "@/public/twitter.png"
import imgTelegram from "@/public/telegram.png"
import imgDexscreener from "@/public/dexscreener.svg"
import imgDextools from "@/public/dextools.png"

const Hero = () => {
    const twitterLink = "https://twitter.com/ChaseOnETH";
    const telegramLink =  "https://t.me/ChaseOnETH"
    // const websiteLink =  "Website: https://ChaseOnETH.fun"
  return (
    <div className={`hero-bg w-full min-h-[100vh] h-full relative bg-cover bg-[72%] md:bg-bottom`}>

        <Link href={""}  className='absolute top-2 left-20 md:left-4'>
            <Image src={imgChase} alt='Chase' className='max-w-[220px] md:max-w-[320px] w-full' />
        </Link>

        <Link href={""}  className='absolute top-[20%] md:top-2 right-[23%] md:right-4'>
            <Image src={imgBuy} alt='Buy img' className='w-[160px] md:w-[250px]' />
        </Link>

        {/* <Link href="" className='absolute top-[55%] translate-y-[-45%] right-4'>
            <Image src={imgSocial} alt='Social Icons' className='w-[100px] md:w-auto' />
        </Link> */}
        <div className='absolute top-[55%] translate-y-[-45%] right-4 flex items-center justify-center gap-3 flex-col blue-bg px-2 py-4 rounded-full shadow-xl drop-shadow-xl border-4 border-black'>
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
        
    </div>
  )
}

export default Hero