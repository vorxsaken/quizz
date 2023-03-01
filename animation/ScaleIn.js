import AnimateInOut from "./AnimateInOut"

function Scale({ children, delayIn, delayOut, durationIn, durationOut, className }) {
    return (
        <AnimateInOut
            set={{ scale: 0.1 }}
            to={{ scale: 1 }}
            skipOutro={true}
            delayIn={delayIn}
            durationIn={durationIn}
            className={className}
        >
            {children}
        </AnimateInOut>
    )
}

export default Scale