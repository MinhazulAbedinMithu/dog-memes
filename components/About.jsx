import Image from 'next/image'
import React from 'react'
import imgAbout from "@/public/about-title-with-dog.png"
import localFont from "next/font/local";

const myFont = localFont({
  src: '../public/ROMALIKA.otf',
  variable: "--font-my"
})

const About = () => {
  return (
    <div className='blue-bg py-6 px-2'>
        <div className='flex items-center justify-center pb-5'>
            <Image src={imgAbout} alt='About' className='max-w-[350px] w-full'/>
        </div>
        <div className='max-w-[700px] w-full mx-auto rounded-lg shadow-lg drop-shadow-md bg-gray-300/25 p-6 text-white'>
            <h2 className='text-3xl pb-4 font-bold'>Welcome to <span className={`${myFont.className}`}>Chase on ETH</span>, Where we unleash mayhem and keep you safe on Web3 🐶 </h2>
            <p className='py-2 text-lg'>Forget the dull stuff, Chase is on a wild ride through the ETH Chain, sniffing out scams and shady deals! We&apos;re here to give bad actors a paw pounding with our rad contract address scanner. Think of Chase as your crypto watchdog with a knack for catching sketchy stuff.</p>
            
            <p className='text-lg font-medium'>How we roll:</p>
            <p className='text-lg'>🐶 Scan: Our watchdog sniffs out dodgy contracts and BS transactions.</p>
            <p className='text-lg'>🐶 Alert: Get heads-ups on what&apos;s hot and what&apos;s not.</p>
            <p className='text-lg'>🐶 Protect: Keep your wallet safe and sound from the wilds on Web3</p>

            <p className='pt-2 text-lg'>Ready to roll with Chase? Jump into the memecoin madness, flex our tools, and join the fight to clean up Web3!</p>
        </div>
    </div>
  )
}

export default About