import Image from "next/image"

function CheckAnswCard({ id, height, width, bgColor, alpha, answer, icon }) {
    return (
        <div
            id={id}
            className='container__block__base-rect container__block_base-rect--flipable'
            style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                height: height,
                width: width,
            }}
        >
            <div className='container__block__rect'>
                <div className={`container container__block ${icon ? '' : 'text-small'}`}>
                    {icon ? (
                        <Image
                            src={icon}
                            loading='lazy'
                            alt="correct"
                            width={70}
                            height={70}
                        />
                    ) : (
                        <>
                            <div
                                className='container__block__multiple-choice'
                                style={{ backgroundColor: bgColor }}
                            >
                                {alpha}
                            </div>
                            <span className={answer?.length > 21 ? 'text-extra-small' : ''}>{answer}</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

CheckAnswCard.defaultProps = {
    bgColor: 'white'
}
export default CheckAnswCard