import blob from "../assets/blob.png"
import blob2 from "../assets/blob2.png";
import blob3 from "../assets/blob3.png";
import blob4 from "../assets/blob4.png";
import Image from 'next/image';
import { useIsomorphicEffect } from "@/animation/useIsomophicEffect";
import { gsap } from 'gsap';
import { randomNumber } from "@/utils";

export default function Background() {
    
    useIsomorphicEffect(() => {
        const timeLine = gsap.timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true });
        timeLine.to('#blob1', {
            x: randomNumber(800),
            y: randomNumber(500),
            rotate: 360,
            duration: 10,
            ease: "power1.inOut"
        })

        timeLine.to('#blob2', {
            x: randomNumber(1000),
            y: randomNumber(-800),
            rotate: 360,
            duration: 15,
            ease: "power1.inOut"
        }, '<')

        timeLine.to('#blob3', {
            x: randomNumber(800),
            y: randomNumber(-1000),
            rotate: 360,
            duration: 20,
            ease: "power1.inOut"
        }, '<')

        timeLine.to('#blob4', {
            x: randomNumber(800),
            y: randomNumber(-1000),
            rotate: 360,
            duration: 18,
            ease: "power1.inOut"
        }, '<')
    }, [])

    return (
        <div className='shape-background'>
            <Image id='blob1' className='shape' src={blob} alt="blob 1" ></Image>
            <Image id='blob2' className='shape' src={blob2} alt="blob 2" ></Image>
            <Image id='blob3' className='shape' src={blob3} alt="blob 3" ></Image>
            <Image id='blob4' className='shape' src={blob4} alt="blob 4" ></Image>
        </div>
    )
}