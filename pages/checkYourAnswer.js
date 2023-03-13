import { useTranstionReducer } from '@/context/TransitionDispatcher';
import { useIsomorphicEffect } from '@/animation/useIsomophicEffect';
import { gsap } from 'gsap';
import CheckAnswCard from '@/components/CheckAnswCard';
import CheckIcon from '../assets/check.svg';
import CrossIcon from '../assets/cross.png';
import { useState } from 'react';
import { useRouter } from 'next/router';
import FlyDownOut from '@/animation/FlyDownOut';
import { saveAnswerToLocalStorage } from '@/utils';

function CheckYourAnswer() {
    const [data, dispatch] = useTranstionReducer();
    const getLastData = data?.choosed[data?.choosed?.length - 1];
    const [isCorrect, setIsCorrect] = useState(false);
    const flipCardTl = gsap.timeline();
    const router = useRouter();
    const [getOut, setGetOut] = useState(false)
    const dataChoosed = data.choosed || [];
    const dataQuestions = data.questions || [];
    const dataChoosedLength = dataChoosed.length || 0;
    const dataQuestionLength = dataQuestions.length || 0;

    useIsomorphicEffect(() => {
        const CHECK_USER_ANSWER = getLastData?.answear[1] == data?.questions[dataChoosedLength - 1]?.correctAnswer;

        gsap.set('#cardCont', {
            transformStyle: 'preserve-3d',
            transformPerspective: 1000
        })

        gsap.set('#cardFront', {
            x: getLastData?.position[0] + 30,
            y: getLastData?.position[1],
            scale: 1.4,
        })

        gsap.set('#cardBack', {
            x: getLastData?.position[0] + 30,
            y: getLastData?.position[1],
            scale: 1.4,
            rotationY: -180
        })

        if (CHECK_USER_ANSWER) setIsCorrect(true);

        flipCardTl.to('#cardFront', { duration: 1.3, rotationY: 180, ease: 'back.inOut' })
        flipCardTl.to('#cardBack', { duration: 1.3, rotationY: 0, ease: 'back.inOut' }, 0).then(() => {
            setGetOut(true);
            let quizObserver = data?.quizObserver + 1;
            saveAnswerToLocalStorage(data?.choosed);
            setTimeout(() => {
                dispatch({ type: 'SET_GETOUT', getOut: false })
                if (data?.quizObserver === dataQuestionLength - 1) {
                    router.replace('/result')
                } else {
                    router.replace('/quiz').then(() => {
                        dispatch({ type: 'UPDATE_OBSERVER', quizObserver: quizObserver });
                        localStorage.setItem('quizObserver', quizObserver);
                    })
                }
            }, 900)
        })
    }, [])

    return (
        <FlyDownOut duration={0.8} getOut={getOut} id='cardCont' className='container' style={{ position: 'fixed' }}>
            <CheckAnswCard
                id={'cardFront'}
                width={getLastData?.size[0] - 61}
                height={getLastData?.size[1]}
                bgColor={getLastData?.bgColor}
                alpha={getLastData?.answear[0]}
                answer={getLastData?.answear[1]}
            />
            <CheckAnswCard
                id={'cardBack'}
                width={getLastData?.size[0] - 61}
                height={getLastData?.size[1]}
                icon={isCorrect ? CheckIcon : CrossIcon}
            />
        </FlyDownOut>
    )
}

export default CheckYourAnswer