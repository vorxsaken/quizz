import { randomColor } from "@/utils"
import { useState } from "react"
import RotateAndOpacityIn from "@/animation/RotateAndOpacityIn"
import ScaleIn from "@/animation/ScaleIn"

export default function MultipleChoice() {
    // change this when to dinamic array when other components done
    // data should return by api calls

    const [choices, setChoices] = useState(['Leopard', 'Turtle', 'Cheetah', 'Lion'])
    const Alpha = ['A', 'B', 'C', 'D'];

    return (
        <>
            {
                choices.map((choice, index) => (
                    <RotateAndOpacityIn delayIn={0.1 * (index + 1)} className="container__block__rect">
                        <ScaleIn delayIn={0.8 } durationIn={0.5} className="container container__block text-small">
                            <div className="container__block__multiple-choice" style={{ backgroundColor: randomColor() }}>{Alpha[index]}</div>
                            <span>{choice}</span>
                        </ScaleIn>
                    </RotateAndOpacityIn>
                ))
            }
        </>
    )
}