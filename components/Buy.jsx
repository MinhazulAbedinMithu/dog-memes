import React from 'react'
import imgBuy from "@/public/hero-buy.png"
import Link from 'next/link'
import Image from 'next/image'

const Buy = () => {
  return (
    <div className='buy-bg min-h-[80vh] h-full w-full relative'>
        <Link href={""}  className='absolute top-[15%] md:top-[17%] right-[10%] md:right-[25%]'>
            <Image src={imgBuy} alt='Buy img' className='w-[250px] md:w-[350px]' />
        </Link>
    </div>
  )
}

export default Buy