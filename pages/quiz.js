import Timer from "@/components/Timer"
import FlyUpInOut from "@/animation/FlyUpInOut"
import MultipleChoice from "@/components/MultipleChoice"
import { useState } from "react"
import { useIsomorphicEffect } from "@/animation/useIsomophicEffect";
import { useTranstionReducer } from "@/context/TransitionDispatcher";
import FlyDownOut from "@/animation/FlyDownOut";

export default function quiz() {
    const [el, setEl] = useState();
    const [data, dispatch] = useTranstionReducer();

    useIsomorphicEffect(() => {
        const elRect = document.getElementById('timer').getBoundingClientRect();
        setEl(elRect);
    }, [])

    return (
        <div className="container">
            <FlyDownOut getOut={data.getOut}>
                <FlyUpInOut
                    delayIn={0.5}
                    skipOutro={true}
                    className={"container container--title container__block text-white text-medium"}>
                    Gabut Quizz
                </FlyUpInOut>
            </FlyDownOut>
            <FlyDownOut getOut={data.getOut}>
                <FlyUpInOut
                    delayIn={0.6}
                    skipOutro={true}
                    className={"container container__block text-white text-medium"}>
                    what is the fastest animal in the world ?
                </FlyUpInOut>
            </FlyDownOut>
            <span id="timer">
                <FlyDownOut getOut={data.getOut}>
                    <FlyUpInOut
                        delayIn={0.7}
                        skipOutro={true}
                        className="container container--row container__block text-white text-base">
                        <Timer />
                    </FlyUpInOut>
                </FlyDownOut>
            </span>
            <div className="container container--row container__block">
                <MultipleChoice el={el} />
            </div>
        </div>
    )
}