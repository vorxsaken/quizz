function Circle({
    text,
    textColor, 
    bgCircleId, 
    bgDashArray, 
    bgDashOffset,
    bgStrokeWidth, 
    bgColor,
    dashArray, 
    dashOffset,
    strokeWidth, 
    circleId, 
    gradientStart, 
    gradientStop
}) {
    return (
        <>
            <svg width="150" height="150">
                <path
                    id={bgCircleId}
                    d="M 75 10 A 1 1 0 0 0 75 140 A 1 1 0 0 0 75 10 Z"
                    stroke={bgColor}
                    strokeDasharray={bgDashArray}
                    strokeDashoffset={bgDashOffset}
                    strokeWidth={bgStrokeWidth}
                    strokeLinecap="round"
                    fill="none">
                </path>
                <text
                    x="52"
                    y="83"
                    fill={textColor}
                >
                    {text}
                </text>
                <defs>
                    <linearGradient
                        id="grad1"
                        x1="30%"
                        x2="100%"
                        y1="0%"
                        y2="0%"
                    >
                        <stop offset="0%" style={gradientStart} />
                        <stop offset="100%" style={gradientStop} />
                    </linearGradient>
                </defs>
                <path
                    id={circleId}
                    d="M 75 10 A 1 1 0 0 0 75 140 A 1 1 0 0 0 75 10 Z"
                    strokeLinecap="round"
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    stroke="url(#grad1)"
                    strokeWidth={strokeWidth}
                    fill="none"
                >
                </path>
            </svg>
        </>
    )
}

export default Circle