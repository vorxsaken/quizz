import AnimateInOut from "./AnimateInOut";

export default function FlyUpInOut({ children, durationIn, durationOut, delayIn, delayOut, className, skipOutro}) {
    return (
        <AnimateInOut
            set={{yPercent: 100, alpha: 0}}
            to={{yPercent: 0, alpha: 1}}
            from={{yPercent: 100, alpha: 0}}
            durationIn={durationIn}
            durationOut={durationOut}
            delayIn={delayIn}
            delayOut={delayOut}
            className={className}
            skipOutro={skipOutro}
        >
            {children}
        </AnimateInOut>
    )
}