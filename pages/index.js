import Link from 'next/link'
import { useIsomorphicEffect } from '@/animation/useIsomophicEffect';
import { transformBorderAndTextSvg, randomNumber } from '@/utils';
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

  const getQuestionsArray = (questionArrayOfObject) => {
    let questionArray = [];

    questionArrayOfObject.forEach(question => {
      const multipleChoiceArray = [...question.incorrectAnswers, question.correctAnswer];
      var newMultipleChoice = [];

      for(let i = 0; i < 100; i++){
        let ranNum = randomNumber(4);
        if (!newMultipleChoice.some(choice => choice == multipleChoiceArray[ranNum])) {
          newMultipleChoice.push(multipleChoiceArray[ranNum]);
          if(newMultipleChoice.length == 4) break;
        }
      }

      questionArray.push({
        multipleChoice: newMultipleChoice,
        correctAnswer: question.correctAnswer,
        question: question.question
      })
    })

    return questionArray;
  }

  const toQuiz = () => {
    dispatch({type: 'RESET_REDUCER'});
    transformBorderAndTextSvg('#cont', false).then(() => {
      fetch('https://the-trivia-api.com/api/questions?limit=10&tags=islam,japan,cartoons,disney,southeast_asia,football,young_adult,animals')
        .then(result => result.json())
        .then(json => {
          const newQuestion = getQuestionsArray(json);
          const quiz = [ ...newQuestion];
          localStorage.setItem('quiz', JSON.stringify(quiz));
          localStorage.removeItem('userAnswer');
          dispatch({type: 'SET_QUESTIONS', questions: quiz});
          router.push('/quiz')
        })
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
                  onClick={() => console.log(data.questions)}
                  attrText={{ opacity: 0 }}
                  attrPath={{ strokeDashoffset: 390 }}
                />
              )
            }
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
      )}
    </div>
  )
}
