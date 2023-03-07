import { useTranstionReducer } from '@/context/TransitionDispatcher';
import { useIsomorphicEffect } from '@/animation/useIsomophicEffect';
import { gsap } from 'gsap';
import CheckAnswCard from '@/components/CheckAnswCard';
import CheckIcon from '../assets/check.svg';
import CrossIcon from '../assets/cross.png';

function checkYourAnswer() {
    const [data, dispatcher] = useTranstionReducer();
    const getLastData = data.choosed[data.choosed.length - 1];
    const flipCardTl = gsap.timeline();

    useIsomorphicEffect(() => {
        gsap.set('#cardCont', {
            transformStyle: 'preserve-3d',
            transformPerspective: 1000
        })

        gsap.set('#cardFront', {
            x: getLastData.position[0] + 30,
            y: getLastData.position[1],
            scale: 1.4,
        })

        gsap.set('#cardBack', {
            x: getLastData.position[0] + 30,
            y: getLastData.position[1],
            scale: 1.4,
            rotationY: -180
        })

        flipCardTl.to('#cardFront', {duration: 1.3, rotationY: 180, ease: 'back.inOut'})
        flipCardTl.to('#cardBack', {duration: 1.3, rotationY: 0, ease: 'back.inOut'}, 0)

    })

    return (
        <div id='cardCont' className='container' style={{ position: 'fixed' }}>
            <CheckAnswCard
                id={'cardFront'}
                width={getLastData.size[0] - 61}
                height={getLastData.size[1]}
                bgColor={getLastData.bgColor}
                alpha={getLastData.answear[0]}
                answer={getLastData.answear[1]}
            />
            <CheckAnswCard
                id={'cardBack'}
                width={getLastData.size[0] - 61}
                height={getLastData.size[1]}
                icon={CrossIcon}
            />
        </div>
    )
}

export default checkYourAnswer