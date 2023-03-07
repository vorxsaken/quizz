import Link from 'next/link'
import { useIsomorphicEffect } from '@/animation/useIsomophicEffect';
import { transformBorderAndTextSvg } from '@/utils';
import ButtonSvg from '@/components/ButtonSvg';
import FlyUpInOut from '@/animation/FlyUpInOut';
import { useRouter } from 'next/router';

export default function Home() {
  const text = 'Gabut  Quizz'.split('');
  const router = useRouter();

  const toQuiz = () => {
    transformBorderAndTextSvg('#cont', false).then(() => {
      fetch('https://the-trivia-api.com/api/questions?categories=science&limit=10')
        .then(result => result.json())
        .then(json => {
          localStorage.setItem('quiz', JSON.stringify(json))
        })
      // router.push('/countDown')
    })
  }

  useIsomorphicEffect(() => {
    transformBorderAndTextSvg('#cont', true)
  }, [])

  return (
    <div className='container'>
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
        <ButtonSvg
            id={'cont'}
            hoverId={'resume'}
            text={'resume'}
            onClick={() => toQuiz()}
            attrText={{ opacity: 0 }}
            attrPath={{ strokeDashoffset: 390 }}
          />
          <ButtonSvg
            id={'cont'}
            hoverId={'start'}
            text={'start'}
            onClick={() => toQuiz()}
            attrText={{ opacity: 0 }}
            attrPath={{ strokeDashoffset: 390 }}
          />
          <ButtonSvg
            id={'cont'}
            hoverId={'about'}
            text={'about'}
            onClick={() => transformBorderAndTextSvg('#cont', false)}
            attrText={{ opacity: 0 }}
            attrPath={{ strokeDashoffset: 390 }}
          />
        </div>
      </div>
    </div>
  )
}
