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
      router.push('/quiz')
    })
  }

  useIsomorphicEffect(() => {
    transformBorderAndTextSvg('#cont', true)
  }, [])

  return (
    <div className='container'>
      <div className='container container--distant container--full container__block text-white text-medium'>
        <div className='container container--attached'>
          <div className='container text-small'>
            chuaxx
          </div>
          <div className='container container--row container--attached-md container__block text-white'>
            {
              text.map((word, index) => (
                <FlyUpInOut key={index} className={'text-xl opacity-0'} delayIn={0.05 * index} delayOut={0.03 * index}>
                  {word}
                </FlyUpInOut>
              ))
            }
          </div>
        </div>
        <div className='container container--attached'>
          <ButtonSvg
            id={'cont'}
            text={'start'}
            onClick={() => toQuiz()}
            attrText={{ opacity: 0 }}
            attrPath={{ strokeDashoffset: 390 }}
          />
          <ButtonSvg
            id={'cont'}
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
