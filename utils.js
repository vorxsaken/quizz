import { useEffect, useRef } from "react";


export function randomColor() {
    const color = ['#FF1700', '#FF8E00', '#FFE400', '#06FF00', '#7D0633', '#31112C', '#00ADB5', '#393E46'];
    const random = Math.floor(Math.random() * color.length);

    return color[random]
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