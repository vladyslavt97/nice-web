import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, I am Vlad",
        "I like to code",
        "Check out my portfolio",
    ],
    loop: true,
    delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image 
        className='relative rounded-full h-32 w-32 mx-auto object-covers'
        src="/Vlad.png" alt="vlad" width={1000} height={1000}/>

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 tracking-[15px]'>Web Developer</h2>
        <h1 className='text-5xl lg:6xl font-semibold scroll-px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
          <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}