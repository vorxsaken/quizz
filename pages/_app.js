import '@/styles/globals.css'
import TransitionProvider from '@/context/TransitionProvider'
import { Ubuntu } from "next/font/google"
import blob from "../assets/blob.png"
import blob2 from "../assets/blob2.png";
import blob3 from "../assets/blob3.png";
import blob4 from "../assets/blob4.png";
import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import TransitionLayout from '@/animation/TransitionLayout';
const ubuntu = Ubuntu({ subsets: ['latin'], weight: "500" });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const timeLine = gsap.timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true });
    timeLine.to('#blob1', {
      x: Math.floor(Math.random() * 800),
      y: Math.floor(Math.random() * 500),
      rotate: 360,
      duration: 10,
      ease: "power1.inOut"
    })

    timeLine.to('#blob2', {
      x: Math.floor(Math.random() * 1000),
      y: -Math.floor(Math.random() * 800),
      rotate: 360,
      duration: 15,
      ease: "power1.inOut"
    }, '<')

    timeLine.to('#blob3', {
      x: Math.floor(Math.random() * 500),
      y: -Math.floor(Math.random() * 1000),
      rotate: 360,
      duration: 20,
      ease: "power1.inOut"
    }, '<')

    timeLine.to('#blob4', {
      x: Math.floor(Math.random() * 800),
      y: -Math.floor(Math.random() * 1000),
      rotate: 360,
      duration: 18,
      ease: "power1.inOut"
    }, '<')
  }, [])

  return (
    <TransitionLayout>
      <TransitionProvider>
        <div className='shape-background'>
          <Image id='blob1' className='shape' src={blob}></Image>
          <Image id='blob2' className='shape' src={blob2} ></Image>
          <Image id='blob3' className='shape' src={blob3} ></Image>
          <Image id='blob4' className='shape' src={blob4} ></Image>
        </div>
        <div className={ubuntu.className}>
          <Component {...pageProps} />
        </div>
      </TransitionProvider>
    </TransitionLayout>
  )
}
