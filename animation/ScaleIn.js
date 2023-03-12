import AnimateInOut from "./AnimateInOut"

function Scale({ children, delayIn, skipOutro, delayOut, durationIn, durationOut, className }) {
    return (
        <AnimateInOut
            set={{ scale: 0, opacity: 0 }}
            to={{ scale: 1, opacity: 1 }}
            from={{scale: 0, opacity: 0}}
            skipOutro={skipOutro}
            delayOut={delayOut}
            delayIn={delayIn}
            durationIn={durationIn}
            durationOut={durationOut}
            className={className}
            onCompleate={'display: none'}
        >
            {children}
        </AnimateInOut>
    )
}

export default Scale