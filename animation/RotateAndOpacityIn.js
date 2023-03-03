import AnimateInOut from "./AnimateInOut"

function RotateAndOpacityIn({ children, delayIn, delayOut, durationIn, durationOut, className }) {
    return (
        <AnimateInOut
            set={{ rotation: -120, opacity: 0, scale: 0 }}
            to={{ rotation: 0, opacity: 1, scale: 1 }}
            delayIn={delayIn}
            durationIn={durationIn}
            className={className}
            skipOutro={true}
        >
            {children}
        </AnimateInOut>
    )
}

export default RotateAndOpacityIn