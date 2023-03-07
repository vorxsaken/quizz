import { randomColor } from "@/utils"
import {  useState } from "react"
import RotateAndOpacityIn from "@/animation/RotateAndOpacityIn"
import ScaleIn from "@/animation/ScaleIn"
import { gsap } from "gsap"
import { useTranstionReducer } from "@/context/TransitionDispatcher"
import { useRouter } from "next/router"

export default function MultipleChoice({ el }) {
    // change this to dinamic array when other components done
    // data should return by api calls

    const [data, dispatch] = useTranstionReducer();
    const [choices, setChoices] = useState(['Leopard', 'Turtle', 'Cheetah', 'Lion'])
    const Alpha = ['A', 'B', 'C', 'D'];
    const router = useRouter();

    const animateSelected = (id) => {
        // get x, y element from choice element
        const choiceEl = document.getElementById(`choice-${id}`).getBoundingClientRect();
        const choiceElX = choiceEl.left;
        const choiceElY = choiceEl.top;

        // get x, y point from timer element
        const timerElX = el.left;
        const timerElY = el.top;

        // get window center point
        const windowX = window.innerWidth / 2;
        const windowY = window.innerHeight / 2;

        // get new x, y coordinate relative to choice and timer element 
        const rectX = Math.round((timerElX - choiceElX));
        const rectY = Math.round((timerElY - choiceElY));

        // get center point from window and new selected rect choice 
        const windowPoint = (windowY - windowX);
        const rectPoint = (rectY - rectX);

        // get value to set new selected rect choice fit timer element
        const point = (windowPoint / rectPoint) + 20;
        dispatch({ type: 'SET_GETOUT', getOut: true });

        for (let x = 0; x < 4; x++) {
            if (`choice-${x}` != `choice-${id}`) {
                gsap.to(`#choice-${x}`, {
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power4.out'
                })
            }
        }

        gsap.to(`#choice-${id}`, {
            x: rectX + point,
            y: rectY + point,
            scale: 1.4,
            duration: 1,
            ease: 'power4.out',
        }).then(() => {
            const getNewChoice = document.getElementById(`choice-${id}`).getBoundingClientRect();
            const getAlphaEl = document.getElementById(`alpha-${id}`);
            const bgColor = window.getComputedStyle(getAlphaEl).backgroundColor;
            const x = getNewChoice.left;
            const y = getNewChoice.top;
            const width = getNewChoice.width;
            const height = getNewChoice.height

            dispatch({
                type: 'SET_ANSWEAR',
                answear: [Alpha[id], choices[id]],
                position: [x, y],
                size: [width, height],
                bgColor: bgColor
            })

            router.replace('/checkYourAnswer');
        })
    }

    return (
        <>
            {
                choices.map((choice, index) => (
                    <div
                        className="container__block__base-rect"
                        key={choice}
                        id={`choice-${index}`}
                        onClick={() => animateSelected(index)}>
                        <RotateAndOpacityIn
                            delayIn={0.1 * (index + 1)}
                            className="container__block__rect"
                        >
                            <ScaleIn
                                delayIn={0.8}
                                durationIn={0.5}
                                className="container container__block text-small"
                            >
                                <div
                                    id={`alpha-${index}`}
                                    className="container__block__multiple-choice"
                                    style={{ backgroundColor: randomColor() }}
                                >
                                    {Alpha[index]}
                                </div>
                                <span>{choice}</span>
                            </ScaleIn>
                        </RotateAndOpacityIn>
                    </div>
                ))
            }
        </>
    )
}