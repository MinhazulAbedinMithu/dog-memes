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
            <h2 className='text-3xl pb-4 font-bold'>Welcome to <span className={`${myFont.className}`}>$CHASE ON EACH</span></h2>
            <p className='text-lg'>
            Wandy is the ex of the famous Andy. They broke up a while ago and they share a scandal about Andy ⚠️
            <br />

            Wandy cheated with Brett, because he has a higher marketcap and a stronger position then Andy.
            <br />

            Wandy is now a fulfilled woman and is ready to conquer the meme world of crypto, all the biggest memes in the crypto space are whistling at her when she walks by 👀
            <br />

            Be ready, because $WANDY is the hottest chick in town right now! Are you ready to meet her?
            </p>
        </div>
    </div>
  )
}

export default About