
function ButtonSvg({ text, id, onClick, attrText, attrPath }) {
    
    return (
        <svg id={id} width={200} height={75} onClick={onClick}>
            <text
                id='childText'
                x='50%'
                y='50%'
                dominantBaseline='middle'
                textAnchor='middle'
                fill='white'
                className='text-medium'
                {...attrText}
            >
                {text}
            </text>
            <path
                id='childBorder'
                fill='none'
                stroke='white'
                strokeLinecap='round'
                strokeDasharray={390}
                strokeWidth={2}
                d='M 50 10 L 150 10 A 1 1 0 0 1 150 65 L 50 65 A 1 1 0 0 1 50 10 Z'
                {...attrPath}
            />
        </svg>
    )
}

export default ButtonSvg