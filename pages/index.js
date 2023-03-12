import { useIsomorphicEffect } from '@/animation/useIsomophicEffect';
import { transformBorderAndTextSvg } from '@/utils';
import ButtonSvg from '@/components/ButtonSvg';
import FlyUpInOut from '@/animation/FlyUpInOut';
import { useRouter } from 'next/router';
import { useTranstionReducer } from '@/context/TransitionDispatcher';
import { useState } from 'react';

export default function Home() {
  const text = 'Gabut  Quizz'.split('');
  const router = useRouter();
  const [data, dispatch] = useTranstionReducer();
  const [quiz, setQuiz] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);

  const Link = (link) => {
    transformBorderAndTextSvg('#cont', false).then(() => {
      router.push(link)
    })
  }

  useIsomorphicEffect(() => {
    setisLoaded(true);
  }, [])

  useIsomorphicEffect(() => {
    setQuiz(JSON.parse(localStorage.getItem('quiz')));

    if (quiz) dispatch({ type: 'SET_QUESTIONS', questions: quiz });

    transformBorderAndTextSvg('#cont', true);
  }, [isLoaded])

  return (
    <div className='container'>
      {isLoaded && (
        <div className='container container--distant container--full container__block text-white text-medium'>
          <div className='container container--attached'>
            <div className='container container--row container--attached-md container__block text-white'>
              {
                text.map((word, index) => (
                  <FlyUpInOut
                    key={index}
                    className={'text-xl opacity-0'}
                    delayIn={0.05 * index}
                    delayOut={0.02 * index}
                  >
                    {word}
                  </FlyUpInOut>
                ))
              }
            </div>
          </div>
          <div className='container container--attached'>
            {
              quiz && (
                <ButtonSvg
                  id={'cont'}
                  hoverId={'resume'}
                  text={'resume'}
                  onClick={() => Link('/countDown/true')}
                  attrText={{ opacity: 0 }}
                  attrPath={{ strokeDashoffset: 390 }}
                />
              )
            }
            <ButtonSvg
              id={'cont'}
              hoverId={'start'}
              text={'start'}
              onClick={() => Link('/countDown/false')}
              attrText={{ opacity: 0 }}
              attrPath={{ strokeDashoffset: 390 }}
            />
            <ButtonSvg
              id={'cont'}
              hoverId={'about'}
              text={'about'}
              onClick={() => Link('/about')}
              attrText={{ opacity: 0 }}
              attrPath={{ strokeDashoffset: 390 }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
