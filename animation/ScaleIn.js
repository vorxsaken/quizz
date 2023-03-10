import AnimateInOut from "./AnimateInOut"

function Scale({ children, delayIn, skipOutro, from, delayOut, durationIn, durationOut, className }) {
    return (
        <AnimateInOut
            set={{ scale: 0, opacity: 0 }}
            to={{ scale: 1, opacity: 1 }}
            from={{scale: 0, opacity: 0}}
            skipOutro={skipOutro}
            delayIn={delayIn}
            durationIn={durationIn}
            className={className}
            onCompleate={'display: none'}
        >
            {children}
        </AnimateInOut>
    )
}

export default Scale