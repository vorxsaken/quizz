import Circle from "@/components/Circle"
import FlyUpInOut from "@/animation/FlyUpInOut"
import ButtonSvg from "@/components/ButtonSvg"
import { useState } from "react"
import { useIsomorphicEffect } from "@/animation/useIsomophicEffect";
import { useTranstionReducer } from "@/context/TransitionDispatcher";
import { useRouter } from "next/router";

function result() {
    const [question, setQuestion] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [greetMessage, setGreetMessage] = useState('');
    const [correctPoint, setCorrectPoint] = useState(0);
    const [correctPercentage, setCorrectPercentage] = useState(0);
    const [data, dispatch] = useTranstionReducer();
    const router = useRouter();

    const cleanData = () => {
        // remove local storage data
        localStorage.removeItem('quiz');
        localStorage.removeItem('userAnswer');
        localStorage.removeItem('quizObserver');

        // remove context data
        dispatch({type: 'RESET_REDUCER'});
    }

    useIsomorphicEffect(() => {
        // get data from local storage
        const questions = JSON.parse(localStorage.getItem('quiz'))
        const answers = JSON.parse(localStorage.getItem('userAnswer'));

        // calculate correct answears
        var point = 0;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].correctAnswer == answers[i].answer) {
                point += 10
            }
        }

        // get correct percentage
        let getCorrectPercentage = (point / 100) * 410;
        setCorrectPercentage(410 - getCorrectPercentage);

        // set greet message
        if (point < 30) {
            setGreetMessage('Wtf Bro 😫')
        } else if (point < 60) {
            setGreetMessage('Anda Tukang Ngalamun Ya 🙄')
        } else if (point < 80) {
            setGreetMessage('Nice Beat 😎')
        } else {
            setGreetMessage('Wow IQ Anda Pasti 9999 😮😮')
        }

        // set acquired data to state
        setQuestion(questions);
        setAnswers(answers);
        setCorrectPoint(point);

        // clean all saved data
        cleanData();

    }, [])

    return (
        <div className="container">
            <div className="container container--title text-white text-base">
                <FlyUpInOut
                    durationIn={1}
                    delayOut={1.2}
                    className="container container__block container__card opacity-0"
                >
                    <Circle
                        bgDashArray={500}
                        bgDashOffset={0}
                        bgStrokeWidth={8}
                        bgColor={'rgb(235, 199, 230)'}
                        text={`${correctPoint}%`}
                        textColor={'white'}
                        strokeWidth={13}
                        dashArray={410}
                        dashOffset={correctPercentage}
                        gradientStart={{ stopColor: "rgb(191, 172, 226)", opacity: 1 }}
                        gradientStop={{ stopColor: "rgb(100, 92, 187)", opacity: 1 }}
                    />
                </FlyUpInOut>
                <FlyUpInOut
                    delayIn={0.2}
                    delayOut={1.1}
                    durationIn={1}
                    className="container container__block container__card opacity-0"
                >
                    {greetMessage}
                </FlyUpInOut>
                {question.map((quiz, index) => (
                    <FlyUpInOut
                        key={index}
                        delayIn={0.3 * (index + 1)}
                        delayOut={1.1 - ((index + 1) * 0.1)}
                        durationIn={1}
                        className="container container--max-width-md container__block container__card opacity-0 text-small"
                    >
                        <div className="container container--justify-start container--row" style={{ alignItems: 'start' }}>
                            <span className="">{index + 1}.</span>
                            <span className="text-start">{quiz.question}</span>
                        </div>
                        <div className="container container__block container--justify-start container--row py-none">
                            <span className="container__block__base-rect container--justify-start">Your Answear</span>
                            <span>:</span>
                            <span className="text-start">{answers[index].answer}</span>
                        </div>
                        <div className="container container__block container--justify-start container--row py-none" style={{ alignItems: 'start' }}>
                            <span className="container__block__base-rect container--justify-start">Correct Answear</span>
                            <span>:</span>
                            <span className="text-start">
                                {quiz.correctAnswer}
                            </span>
                        </div>
                    </FlyUpInOut>
                ))}
                <FlyUpInOut
                    delayIn={0.4}
                    durationIn={1}
                    className="container container--max-width-md container__block container__card opacity-0"
                >
                    <ButtonSvg
                        id={'cont'}
                        hoverId={'again'}
                        text={'Again'}
                        onClick={() => router.replace('/countDown/false')}
                        attrText={{ opacity: 1 }}
                        attrPath={{ strokeDashoffset: 0 }}
                    />
                </FlyUpInOut>
            </div>
        </div>
    )
}

export default result