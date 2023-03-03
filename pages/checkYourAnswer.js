import React, { useContext } from 'react'
import { TransitionContext } from '@/context/TransitionContext'
import { useIsomorphicEffect } from '@/animation/useIsomophicEffect';
import { gsap } from 'gsap';

function checkYourAnswer() {
    const [data] = useContext(TransitionContext);
    const getLastData = data.choosed[data.choosed.length - 1];

    useIsomorphicEffect(() => {
        gsap.set('#card', {
            x: getLastData.position[0] + 30,
            y: getLastData.position[1],
            scale: 1.4
        })
    })

    return (
        <div className='container' style={{ position: 'fixed' }}>
            <div
                id='card'
                className='container__block__base-rect'
                style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    height: getLastData.size[1],
                    width: getLastData.size[0] - 61
                }}
            >
                <div className='container__block__rect'>
                    <div className='container container__block text-small'>
                        <div
                            className='container__block__multiple-choice'
                            style={{ backgroundColor: getLastData.bgColor }}
                        >
                            {getLastData.answear[0]}
                        </div>
                        <span>{getLastData.answear[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default checkYourAnswer