import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function randomColor() {
    const color = ['#FFBC42', '#D81159', '#8F2D56', '#218380', '#73D2DE', '#EE6055', '#60D394', '#FFD97D'];
    const random = Math.floor(Math.random() * color.length);

    return color[random]
}

export function randomNumber(range) {
    return Math.floor(Math.random() * range)
}

export function saveAnswerToLocalStorage(answers){
    let newAnswers = [...answers.map(answer => {
        return {
            answer: Array.isArray(answer.answear) ? answer.answear[1] : answer.answear
        }
    })]

    localStorage.setItem('userAnswer', JSON.stringify(newAnswers));
}

export const transformBorderAndTextSvg = (id, animatedOnMounted, delay) => {
    return new Promise(resolve => {
        const elArray = gsap.utils.toArray(id);
        const transformTL = gsap.timeline({ paused: true, delay: delay || 0.2 });
        let query = null;
        let counter = 0;

        if (animatedOnMounted) {
            elArray.forEach((el) => {
                query = gsap.utils.selector(el);
                transformTL
                    .fromTo(query('#childText'), { y: -5, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, counter)
                    .fromTo(query('#childBorder'), { strokeDashoffset: 390 }, { strokeDashoffset: 0, duration: 0.8 }, '<0.1')

                counter += 0.1
            })

            return transformTL.play();
        }

        elArray.forEach((el) => {
            query = gsap.utils.selector(el);
            transformTL
                .to(query('#childText'), { y: 5, opacity: 0, duration: 0.5 }, counter)
                .to(query('#childBorder'), { strokeDashoffset: 390, duration: 0.8 }, '<0.1')

            counter += 0.1;
        })

        transformTL.play().then(() => {
            resolve(true)
        })
    })
}

export function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback])

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay)

            return () => clearInterval(id);
        }
    }, [delay])
}