import '@/styles/globals.css'
import Provider from '@/context/Provider'
import { Ubuntu } from "next/font/google"
import blob from "../assets/blob.svg"
import blob2 from "../assets/blob2.svg";
import blob3 from "../assets/blob3.svg";
import blob4 from "../assets/blob4.svg";
import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';
const ubuntu = Ubuntu({subsets: ['latin'], weight: "500"});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const timeLine = gsap.timeline({repeat: -1, repeatDelay: 0.5, yoyo: true});
    timeLine.to('#blob1', {
      x: Math.floor(Math.random() * 1000), 
      y: Math.floor(Math.random() * 1000),
      rotate: 360,
      duration: 10,
      ease: "power1.inOut"
    })
    
    timeLine.to('#blob2', {
      x: Math.floor(Math.random() * 1000), 
      y: -Math.floor(Math.random() * 1000),
      rotate: 360,
      duration: 10,
      ease: "power1.inOut"
    }, '<')

    timeLine.to('#blob3', {
      x: Math.floor(Math.random() * 1000), 
      y: -Math.floor(Math.random() * 1000),
      rotate: 360,
      duration: 10,
      ease: "power1.inOut"
    }, '<0.2')

    timeLine.to('#blob4', {
      x: Math.floor(Math.random() * 1000), 
      y: -Math.floor(Math.random() * 1000),
      rotate: 360,
      duration: 10,
      ease: "power1.inOut"
    }, '<0.3')
  }, [])

  return (
    <Provider>
      <div className='shape-background'>
        <Image id='blob1' className='shape' src={blob} height="300" width="300"></Image>
        <Image id='blob2' className='shape' src={blob2} height="300" width="300"></Image>
        <Image id='blob3' className='shape' src={blob3} height="300" width="300"></Image>
        <Image id='blob4' className='shape' src={blob4} height="300" width="300"></Image>
      </div>
      <div className={ubuntu.className}>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}
