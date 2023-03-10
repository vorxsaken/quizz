import AnimateOut from "./AnimateOut"

function ScaleOut({ children, duration, delay, getOut, className, id, style }) {
    return (
        <AnimateOut
            to={{ scale: 0, opacity: 0 }}
            duration={duration}
            delay={delay}
            getOut={getOut}
            className={className}
            id={id}
            style={style}
        >
            {children}
        </AnimateOut>
    )
}

export default ScaleOut