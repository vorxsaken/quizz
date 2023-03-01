import AnimateInOut from "./AnimateInOut";

export default function FlyUpInOut({ children, durationIn, durationOut, delayIn, delayOut, className}) {
    return (
        <AnimateInOut
            set={{yPercent: 100, opacity: 0}}
            to={{yPercent: 0, opacity: 1}}
            from={{yPercent: 100, opacity: 0}}
            durationIn={durationIn}
            durationOut={durationOut}
            delayIn={delayIn}
            delayOut={delayOut}
            className={className}
        >
            {children}
        </AnimateInOut>
    )
}