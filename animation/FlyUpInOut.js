import AnimateInOut from "./AnimateInOut";

export default function FlyUpInOut({ children, durationIn, durationOut, delayIn, delayOut, className, skipOutro}) {
    return (
        <AnimateInOut
            set={{yPercent: 100, autoAlpha: 0}}
            to={{yPercent: 0, autoAlpha: 1}}
            from={{y: 50, autoAlpha: 0}}
            durationIn={durationIn}
            durationOut={durationOut}
            delayIn={delayIn}
            delayOut={delayOut}
            className={className}
            skipOutro={skipOutro}
            onCompleate={'display: none'}
        >
            {children}
        </AnimateInOut>
    )
}