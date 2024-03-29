import AnimateOut from "./AnimateOut"

function FlyDownOut({ children, duration, delay, getOut, className, id, style }) {
    return (
        <AnimateOut
            to={{ yPercent: 50, opacity: 0 }}
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

export default FlyDownOut