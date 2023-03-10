import Circle from "@/components/Circle"
import FlyUpInOut from "@/animation/FlyUpInOut"
import ButtonSvg from "@/components/ButtonSvg"

function result() {
    return (
        <div className="container">
            <div className="container container--title text-white text-base">
                <FlyUpInOut
                    durationIn={1}
                    delayOut={0.3}
                    className="container container__block container__card opacity-0"
                >
                    <Circle
                        bgDashArray={500}
                        bgDashOffset={0}
                        bgStrokeWidth={8}
                        bgColor={'rgb(235, 199, 230)'}
                        text={'90%'}
                        textColor={'white'}
                        strokeWidth={13}
                        dashArray={500}
                        dashOffset={180}
                        gradientStart={{ stopColor: "rgb(191, 172, 226)", opacity: 1 }}
                        gradientStop={{ stopColor: "rgb(100, 92, 187)", opacity: 1 }}
                    />
                </FlyUpInOut>
                <FlyUpInOut
                    delayIn={0.2}
                    delayOut={0.2}
                    durationIn={1}
                    className="container container__block container__card opacity-0"
                >
                    Great Beat 🤩
                </FlyUpInOut>
                <FlyUpInOut
                    delayIn={0.3}
                    delayOut={0.1}
                    durationIn={1}
                    className="container container--max-width-md container__block container__card opacity-0 text-small"
                >
                    <div className="container container--justify-start container--row" style={{ alignItems: 'start' }}>
                        <span className="">1.</span>
                        <span className="text-start">What is the fastest animal on earth ?</span>
                    </div>
                    <div className="container container__block container--justify-start container--row py-none">
                        <span className="container__block__base-rect container--justify-start">Your Answear</span>
                        <span>:</span>
                        <span className="text-start">Cheetah</span>
                    </div>
                    <div className="container container__block container--justify-start container--row py-none" style={{ alignItems: 'start' }}>
                        <span className="container__block__base-rect container--justify-start">Correct Answear</span>
                        <span>:</span>
                        <span className="text-start">
                            Cheetah
                        </span>
                    </div>
                </FlyUpInOut>
                <FlyUpInOut
                    delayIn={0.4}
                    durationIn={1}
                    className="container container--max-width-md container__block container__card opacity-0"
                >
                    <ButtonSvg
                        id={'cont'}
                        hoverId={'about'}
                        text={'Again'}
                        attrText={{ opacity: 1 }}
                        attrPath={{ strokeDashoffset: 0 }}
                    />
                </FlyUpInOut>
            </div>
        </div>
    )
}

export default result