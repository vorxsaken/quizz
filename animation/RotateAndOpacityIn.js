import AnimateInOut from "./AnimateInOut"

function RotateAndOpacityIn({ children, delayIn, from, delayOut, skipOutro, durationIn, durationOut, className}) {
    return (
        <AnimateInOut
            set={{ rotation: -120, opacity: 0, scale: 0 }}
            to={{ rotation: 0, opacity: 1, scale: 1 }}
            from={{ opacity: 0, y: 50 }}
            delayIn={delayIn}
            durationIn={durationIn}
            className={className}
            skipOutro={skipOutro}
            onCompleate={'display: none'}
        >
            {children}
        </AnimateInOut>
    )
}

export default RotateAndOpacityIn