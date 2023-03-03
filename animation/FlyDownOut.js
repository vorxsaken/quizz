import AnimateOut from "./AnimateOut"

function FlyDownOut({ children, duration, delay, getOut }) {
    return (
        <AnimateOut
            to={{ yPercent: 50, opacity: 0 }}
            duration={duration}
            delay={delay}
            getOut={getOut}
        >
            {children}
        </AnimateOut>
    )
}

export default FlyDownOut