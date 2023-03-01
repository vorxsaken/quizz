import Timer from "@/components/Timer"
import FlyUpInOut from "@/animation/FlyUpInOut"
import MultipleChoice from "@/components/MultipleChoice"

export default function quiz() {
    return (
        <div className="container">
            <FlyUpInOut delayIn={0.5} className={"container container--title container__block text-white text-medium"}>
                Gabut Quizz
            </FlyUpInOut>
            <FlyUpInOut delayIn={0.6} className={"container container--title container__block text-white text-medium"}>
                what is the fastest animal in the world ?
            </FlyUpInOut>
            <FlyUpInOut delayIn={0.7} className="container container--row container__block text-white text-base">
                <Timer />
            </FlyUpInOut>
            <div className="container container--row container__block">
                <MultipleChoice />                
            </div>
        </div>
    )
}