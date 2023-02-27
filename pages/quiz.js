import { useEffect, useState } from "react"
import { motion, useTime } from "framer-motion";

export default function quiz() {
    const [time, setTime] = useState(5);
    
    useEffect(() => {
        if (time !== 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
    }, [time])

    const timerVariant = {
        hidden: {
            pathLength: 0,
        },
        visible: {
            pathLength: 5,
            transition: {
                pathLength: {
                    duration: 5,
                    ease: "linear"
                }
            }
        }
    }

    return (
        <div className="container">
            <div className="container container--title container__block">
                Gabut Quizz
            </div>
            <div className="container container--row container__block">
                what is the fastest animal in the world ?
            </div>
            <div className="container container--row container__block">
                <motion.svg initial="hidden" animate="visible" height="150" width="150">
                    <path d="M 75 10 A 1 1 0 0 0 75 140 A 1 1 0 0 0 75 10 Z"
                        stroke="gray"
                        strokeWidth={2}
                        strokeLinecap="round"
                        fill="none">
                    </path>
                    <text x="52" y="83" fill="white">0:0{time}</text>
                    <motion.path
                        variants={timerVariant}
                        d="M 75 10 A 1 1 0 0 0 75 140 A 1 1 0 0 0 75 10 Z"
                        strokeLinecap="round"
                        stroke="red"
                        strokeWidth={6}
                        fill="none"
                    >
                    </motion.path>
                </motion.svg>
            </div>
        </div>
    )
}