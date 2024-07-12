import React from 'react';
import imgBg from "@/public/bg.png"
import imgSocial from "@/public/IMG_social.png"
import imgBuy from "@/public/hero-buy.png"
import imgChase from "@/public/hero-chase.png"
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={`hero-bg w-full min-h-[100vh] h-full relative bg-cover bg-[70%] md:bg-bottom`}>

        <Link href={""}  className='absolute top-2 left-4'>
            <Image src={imgChase} alt='Chase' className='max-w-[450px] w-full' />
        </Link>

        <Link href={""}  className='absolute top-[19%] md:top-2 right-[23%] md:right-4'>
            <Image src={imgBuy} alt='Buy img' className='w-[200px] md:w-[250px]' />
        </Link>

        <Link href="" className='absolute top-[55%] translate-y-[-45%] right-4'>
            <Image src={imgSocial} alt='Social Icons' className='w-[100px] md:w-auto' />
        </Link>
        
    </div>
  )
}

export default Hero