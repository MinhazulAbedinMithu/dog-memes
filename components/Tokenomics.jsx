import React from 'react'
import imgTitle from "@/public/tokenomics.png"
import Image from 'next/image'
import localFont from "next/font/local";
// import imgToken1 from "@/public/token-1.png";
// import imgToken2 from "@/public/token-2.png";
// import imgToken3 from "@/public/token-3.png";
const myFont = localFont({
    src: '../public/ROMALIKA.otf',
    variable: "--font-my"
  })

const tokenomicsData = [
    {
        img: "/token-1.png",
        title: "1B supply"
    },
    {
        img: "/token-2.png",
        title: "0% tax"
    },
    {
        img: "/token-3.png",
        title: "1ERC20"
    },
]

const Tokenomics = () => {
  return (
    <div className='blue-bg py-6 w-full px-2'>
        <div className='flex items-center justify-center py-6'>
            <Image src={imgTitle} alt='Tokenomics' className='max-w-[600px] w-full'/>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-4'>
            {/* {
                tokenomicsData.map((item, index) => 
                    <div key={index} style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: 'cover'
                    }}>
                        <h4>{item.title}</h4>
                    </div>)
            } */}

            <div className='token-1'>
                <h4 className={`${myFont.className}`}>1B supply</h4>
            </div>
            <div className='token-2'>
                <h4 className={`${myFont.className}`}>0% tax</h4>
            </div>
            <div className='token-3 '>
                <h4 className={`${myFont.className}`}>1ERC20</h4>
            </div>
        </div>
    </div>
  )
}

export default Tokenomics