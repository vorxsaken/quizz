import { useIsomorphicEffect } from "@/animation/useIsomophicEffect";
import Layout from "@/components/Layout";
import Slice from "@/components/Slice"
import { useTranstionReducer } from "@/context/TransitionDispatcher";
import { useInterval, randomNumber } from "@/utils"
import { useRouter } from "next/router";

export default function CountDown() {
    const THE_API_URL = 'https://the-trivia-api.com/api/questions?limit=10&tags=islam,japan,cartoons,disney,southeast_asia,young_adult,animals,technology,religion'
    const router = useRouter();
    const [data, dispatch] = useTranstionReducer();
    const { resume } = router.query

    const getQuestionsArray = (questionArrayOfObject) => {
        let questionArray = [];

        questionArrayOfObject.forEach(question => {
            const multipleChoiceArray = [...question.incorrectAnswers, question.correctAnswer];
            var newMultipleChoice = [];

            for (let i = 0; i < 100; i++) {
                let ranNum = randomNumber(4);
                if (!newMultipleChoice.some(choice => choice == multipleChoiceArray[ranNum])) {
                    newMultipleChoice.push(multipleChoiceArray[ranNum]);
                    if (newMultipleChoice.length == 4) break;
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

    useIsomorphicEffect(() => {
        if (resume === 'false') {
            dispatch({ type: 'RESET_REDUCER' });
            fetch(THE_API_URL)
                .then(result => result.json())
                .then(json => {
                    const newQuestion = getQuestionsArray(json);
                    const quiz = [...newQuestion];
                    localStorage.setItem('quiz', JSON.stringify(quiz));
                    localStorage.setItem('quizObserver', 0);
                    localStorage.removeItem('userAnswer');
                    dispatch({ type: 'SET_QUESTIONS', questions: quiz });
                })
        }
    }, [])

    useInterval(() => {
        router.replace('/quiz');
    }, 4800)

    return (
        <Layout title={'countdowm'}>
            <div className="container" style={{ position: 'fixed', top: '50%' }}>
                {/* countdown 3 */}
                <Slice delayIn={0} delayOut={1} style={{ top: -100 }}>
                    <svg id="slice" width="104" height="53" viewBox="0 0 104 47" fill="none" className="container__slice">
                        <path d="M47.6 143C44 143 40.2 142.733 36.2 142.2C32.2 141.8 28.3333 141.2 24.6 140.4C20.8667 139.6 17.4667 138.733 14.4 137.8C11.3333 136.867 8.93333 136 7.2 135.2L13 110.4C16.4667 111.867 20.8667 113.467 26.2 115.2C31.6667 116.8 38.4 117.6 46.4 117.6C55.6 117.6 62.3333 115.867 66.6 112.4C70.8667 108.933 73 104.267 73 98.4C73 94.8 72.2 91.8 70.6 89.4C69.1333 86.8667 67.0667 84.8667 64.4 83.4C61.7333 81.8 58.5333 80.7333 54.8 80.2C51.2 79.5333 47.3333 79.2 43.2 79.2H31.6V55.2H44.8C47.7333 55.2 50.5333 54.9333 53.2 54.4C56 53.8667 58.4667 53 60.6 51.8C62.7333 50.4667 64.4 48.7333 65.6 46.6C66.9333 44.3333 67.6 41.5333 67.6 38.2C67.6 35.6667 67.0667 33.4667 66 31.6C64.9333 29.7333 63.5333 28.2 61.8 27C60.2 25.8 58.2667 24.9333 56 24.4C53.8667 23.7333 51.6667 23.4 49.4 23.4C43.6667 23.4 38.3333 24.2667 33.4 26C28.6 27.7333 24.2 29.8667 20.2 32.4L9.6 10.6C11.7333 9.26666 14.2 7.86666 17 6.39999C19.9333 4.93333 23.1333 3.6 26.6 2.4C30.0667 1.19999 33.7333 0.199996 37.6 -0.600002C41.6 -1.40001 45.8 -1.80001 50.2 -1.80001C58.3333 -1.80001 65.3333 -0.800007 71.2 1.2C77.2 3.06667 82.1333 5.8 86 9.39999C89.8667 12.8667 92.7333 17 94.6 21.8C96.4667 26.4667 97.4 31.6 97.4 37.2C97.4 42.6667 95.8667 48 92.8 53.2C89.7333 58.2667 85.6 62.1333 80.4 64.8C87.6 67.7333 93.1333 72.1333 97 78C101 83.7333 103 90.6667 103 98.8C103 105.2 101.933 111.133 99.8 116.6C97.6667 121.933 94.3333 126.6 89.8 130.6C85.2667 134.467 79.4667 137.533 72.4 139.8C65.4667 141.933 57.2 143 47.6 143Z" fill="white" />
                    </svg>
                    <svg id="slice" width="104" height="49" viewBox="0 0 104 47" fill="none" className="container__slice">
                        <path d="M47.6 94C44 94 40.2 93.7333 36.2 93.2C32.2 92.8 28.3333 92.2 24.6 91.4C20.8667 90.6 17.4667 89.7333 14.4 88.8C11.3333 87.8667 8.93333 87 7.2 86.2L13 61.4C16.4667 62.8667 20.8667 64.4667 26.2 66.2C31.6667 67.8 38.4 68.6 46.4 68.6C55.6 68.6 62.3333 66.8667 66.6 63.4C70.8667 59.9333 73 55.2667 73 49.4C73 45.8 72.2 42.8 70.6 40.4C69.1333 37.8667 67.0667 35.8667 64.4 34.4C61.7333 32.8 58.5333 31.7333 54.8 31.2C51.2 30.5333 47.3333 30.2 43.2 30.2H31.6V6.2H44.8C47.7333 6.2 50.5333 5.93333 53.2 5.39999C56 4.86666 58.4667 4 60.6 2.8C62.7333 1.46666 64.4 -0.266672 65.6 -2.4C66.9333 -4.66667 67.6 -7.46667 67.6 -10.8C67.6 -13.3333 67.0667 -15.5333 66 -17.4C64.9333 -19.2667 63.5333 -20.8 61.8 -22C60.2 -23.2 58.2667 -24.0667 56 -24.6C53.8667 -25.2667 51.6667 -25.6 49.4 -25.6C43.6667 -25.6 38.3333 -24.7333 33.4 -23C28.6 -21.2667 24.2 -19.1333 20.2 -16.6L9.6 -38.4C11.7333 -39.7333 14.2 -41.1333 17 -42.6C19.9333 -44.0667 23.1333 -45.4 26.6 -46.6C30.0667 -47.8 33.7333 -48.8 37.6 -49.6C41.6 -50.4 45.8 -50.8 50.2 -50.8C58.3333 -50.8 65.3333 -49.8 71.2 -47.8C77.2 -45.9333 82.1333 -43.2 86 -39.6C89.8667 -36.1333 92.7333 -32 94.6 -27.2C96.4667 -22.5333 97.4 -17.4 97.4 -11.8C97.4 -6.33334 95.8667 -1 92.8 4.2C89.7333 9.26666 85.6 13.1333 80.4 15.8C87.6 18.7333 93.1333 23.1333 97 29C101 34.7333 103 41.6667 103 49.8C103 56.2 101.933 62.1333 99.8 67.6C97.6667 72.9333 94.3333 77.6 89.8 81.6C85.2667 85.4667 79.4667 88.5333 72.4 90.8C65.4667 92.9333 57.2 94 47.6 94Z" fill="white" />
                    </svg>
                    <svg id="slice" width="104" height="47" viewBox="0 0 104 47" fill="none" className="container__slice">
                        <path d="M47.6 45C44 45 40.2 44.7333 36.2 44.2C32.2 43.8 28.3333 43.2 24.6 42.4C20.8667 41.6 17.4667 40.7333 14.4 39.8C11.3333 38.8667 8.93333 38 7.2 37.2L13 12.4C16.4667 13.8667 20.8667 15.4667 26.2 17.2C31.6667 18.8 38.4 19.6 46.4 19.6C55.6 19.6 62.3333 17.8667 66.6 14.4C70.8667 10.9333 73 6.26667 73 0.399999C73 -3.2 72.2 -6.2 70.6 -8.6C69.1333 -11.1333 67.0667 -13.1333 64.4 -14.6C61.7333 -16.2 58.5333 -17.2667 54.8 -17.8C51.2 -18.4667 47.3333 -18.8 43.2 -18.8H31.6V-42.8H44.8C47.7333 -42.8 50.5333 -43.0667 53.2 -43.6C56 -44.1333 58.4667 -45 60.6 -46.2C62.7333 -47.5333 64.4 -49.2667 65.6 -51.4C66.9333 -53.6667 67.6 -56.4667 67.6 -59.8C67.6 -62.3333 67.0667 -64.5333 66 -66.4C64.9333 -68.2667 63.5333 -69.8 61.8 -71C60.2 -72.2 58.2667 -73.0667 56 -73.6C53.8667 -74.2667 51.6667 -74.6 49.4 -74.6C43.6667 -74.6 38.3333 -73.7333 33.4 -72C28.6 -70.2667 24.2 -68.1333 20.2 -65.6L9.6 -87.4C11.7333 -88.7333 14.2 -90.1333 17 -91.6C19.9333 -93.0667 23.1333 -94.4 26.6 -95.6C30.0667 -96.8 33.7333 -97.8 37.6 -98.6C41.6 -99.4 45.8 -99.8 50.2 -99.8C58.3333 -99.8 65.3333 -98.8 71.2 -96.8C77.2 -94.9333 82.1333 -92.2 86 -88.6C89.8667 -85.1333 92.7333 -81 94.6 -76.2C96.4667 -71.5333 97.4 -66.4 97.4 -60.8C97.4 -55.3333 95.8667 -50 92.8 -44.8C89.7333 -39.7333 85.6 -35.8667 80.4 -33.2C87.6 -30.2667 93.1333 -25.8667 97 -20C101 -14.2667 103 -7.33334 103 0.799997C103 7.2 101.933 13.1333 99.8 18.6C97.6667 23.9333 94.3333 28.6 89.8 32.6C85.2667 36.4667 79.4667 39.5333 72.4 41.8C65.4667 43.9333 57.2 45 47.6 45Z" fill="white" />
                    </svg>
                </Slice>
                {/* countdown 2 */}
                <Slice delayIn={1.5} delayOut={2.5} style={{ top: -100 }}>
                    <svg id="slice" width="104" height="53" viewBox="0 0 104 47" className="container__slice">
                        <path d="M96.2 37.8C96.2 42.8667 95.2 47.7333 93.2 52.4C91.2 57.0667 88.6 61.6 85.4 66C82.2 70.2667 78.6 74.4 74.6 78.4C70.6 82.4 66.6667 86.2 62.8 89.8C60.8 91.6667 58.6 93.8 56.2 96.2C53.9333 98.4667 51.7333 100.8 49.6 103.2C47.4667 105.6 45.5333 107.867 43.8 110C42.2 112 41.2 113.667 40.8 115H100.4V140H8C7.73333 138.533 7.6 136.667 7.6 134.4C7.6 132.133 7.6 130.533 7.6 129.6C7.6 123.2 8.6 117.333 10.6 112C12.7333 106.667 15.4667 101.733 18.8 97.2C22.1333 92.5333 25.8667 88.2 30 84.2C34.2667 80.2 38.4667 76.2 42.6 72.2C45.8 69.1333 48.8 66.2667 51.6 63.6C54.4 60.8 56.8667 58.1333 59 55.6C61.1333 52.9333 62.8 50.3333 64 47.8C65.2 45.1333 65.8 42.4667 65.8 39.8C65.8 33.9333 64.1333 29.8 60.8 27.4C57.4667 25 53.3333 23.8 48.4 23.8C44.8 23.8 41.4 24.4 38.2 25.6C35.1333 26.6667 32.2667 28 29.6 29.6C27.0667 31.0667 24.8667 32.6 23 34.2C21.1333 35.6667 19.7333 36.8667 18.8 37.8L4 17C9.86667 11.5333 16.6667 7.06666 24.4 3.59999C32.2667 -9.53674e-06 40.6667 -1.80001 49.6 -1.80001C57.7333 -1.80001 64.7333 -0.866677 70.6 0.99999C76.4667 2.86666 81.2667 5.53332 85 8.99999C88.8667 12.3333 91.6667 16.4667 93.4 21.4C95.2667 26.2 96.2 31.6667 96.2 37.8Z" fill="white" />
                    </svg>
                    <svg id="slice" width="104" height="48" viewBox="0 0 104 47" fill="none" className="container__slice">
                        <path d="M96.2 -10.2C96.2 -5.13334 95.2 -0.266671 93.2 4.4C91.2 9.06666 88.6 13.6 85.4 18C82.2 22.2667 78.6 26.4 74.6 30.4C70.6 34.4 66.6667 38.2 62.8 41.8C60.8 43.6667 58.6 45.8 56.2 48.2C53.9333 50.4667 51.7333 52.8 49.6 55.2C47.4667 57.6 45.5333 59.8667 43.8 62C42.2 64 41.2 65.6667 40.8 67H100.4V92H8C7.73333 90.5333 7.6 88.6667 7.6 86.4C7.6 84.1333 7.6 82.5333 7.6 81.6C7.6 75.2 8.6 69.3333 10.6 64C12.7333 58.6667 15.4667 53.7333 18.8 49.2C22.1333 44.5333 25.8667 40.2 30 36.2C34.2667 32.2 38.4667 28.2 42.6 24.2C45.8 21.1333 48.8 18.2667 51.6 15.6C54.4 12.8 56.8667 10.1333 59 7.6C61.1333 4.93333 62.8 2.33333 64 -0.200005C65.2 -2.86667 65.8 -5.53334 65.8 -8.20001C65.8 -14.0667 64.1333 -18.2 60.8 -20.6C57.4667 -23 53.3333 -24.2 48.4 -24.2C44.8 -24.2 41.4 -23.6 38.2 -22.4C35.1333 -21.3333 32.2667 -20 29.6 -18.4C27.0667 -16.9333 24.8667 -15.4 23 -13.8C21.1333 -12.3333 19.7333 -11.1333 18.8 -10.2L4 -31C9.86667 -36.4667 16.6667 -40.9333 24.4 -44.4C32.2667 -48 40.6667 -49.8 49.6 -49.8C57.7333 -49.8 64.7333 -48.8667 70.6 -47C76.4667 -45.1333 81.2667 -42.4667 85 -39C88.8667 -35.6667 91.6667 -31.5333 93.4 -26.6C95.2667 -21.8 96.2 -16.3333 96.2 -10.2Z" fill="white" />
                    </svg>
                    <svg id="slice" width="104" height="47" viewBox="0 0 104 47" fill="none" className="container__slice">
                        <path d="M96.2 -58.2C96.2 -53.1333 95.2 -48.2667 93.2 -43.6C91.2 -38.9333 88.6 -34.4 85.4 -30C82.2 -25.7333 78.6 -21.6 74.6 -17.6C70.6 -13.6 66.6667 -9.8 62.8 -6.2C60.8 -4.33334 58.6 -2.2 56.2 0.199998C53.9333 2.46666 51.7333 4.8 49.6 7.2C47.4667 9.6 45.5333 11.8667 43.8 14C42.2 16 41.2 17.6667 40.8 19H100.4V44H8C7.73333 42.5333 7.6 40.6667 7.6 38.4C7.6 36.1333 7.6 34.5333 7.6 33.6C7.6 27.2 8.6 21.3333 10.6 16C12.7333 10.6667 15.4667 5.73333 18.8 1.2C22.1333 -3.46667 25.8667 -7.8 30 -11.8C34.2667 -15.8 38.4667 -19.8 42.6 -23.8C45.8 -26.8667 48.8 -29.7333 51.6 -32.4C54.4 -35.2 56.8667 -37.8667 59 -40.4C61.1333 -43.0667 62.8 -45.6667 64 -48.2C65.2 -50.8667 65.8 -53.5333 65.8 -56.2C65.8 -62.0667 64.1333 -66.2 60.8 -68.6C57.4667 -71 53.3333 -72.2 48.4 -72.2C44.8 -72.2 41.4 -71.6 38.2 -70.4C35.1333 -69.3333 32.2667 -68 29.6 -66.4C27.0667 -64.9333 24.8667 -63.4 23 -61.8C21.1333 -60.3333 19.7333 -59.1333 18.8 -58.2L4 -79C9.86667 -84.4667 16.6667 -88.9333 24.4 -92.4C32.2667 -96 40.6667 -97.8 49.6 -97.8C57.7333 -97.8 64.7333 -96.8667 70.6 -95C76.4667 -93.1333 81.2667 -90.4667 85 -87C88.8667 -83.6667 91.6667 -79.5333 93.4 -74.6C95.2667 -69.8 96.2 -64.3333 96.2 -58.2Z" fill="white" />
                    </svg>
                </Slice>
                {/* countdown 1 */}
                <Slice delayIn={3} delayOut={4} style={{ top: -100 }}>
                    <svg id="slice" width="96" height="47" viewBox="0 0 96 47" fill="none" className="container__slice">
                        <path d="M11 35.2C14.8667 33.6 18.8667 31.8 23 29.8C27.2667 27.6667 31.4 25.4 35.4 23C39.4 20.4667 43.2 17.8667 46.8 15.2C50.5333 12.4 53.8667 9.46666 56.8 6.4H77.6V145H47.8V45.2C43.8 47.8667 39.3333 50.3333 34.4 52.6C29.4667 54.7333 24.6667 56.6 20 58.2L11 35.2Z" fill="white" />
                    </svg>
                    <svg id="slice" width="96" height="52" viewBox="0 0 96 53" fill="none" className="container__slice">
                        <path d="M11 -11.8C14.8667 -13.4 18.8667 -15.2 23 -17.2C27.2667 -19.3333 31.4 -21.6 35.4 -24C39.4 -26.5333 43.2 -29.1333 46.8 -31.8C50.5333 -34.6 53.8667 -37.5333 56.8 -40.6H77.6V98H47.8V-1.8C43.8 0.866662 39.3333 3.33333 34.4 5.6C29.4667 7.73333 24.6667 9.6 20 11.2L11 -11.8Z" fill="white" />
                    </svg>
                    <svg id="slice" width="96" height="45" viewBox="0 0 96 45" fill="none" className="container__slice">
                        <path d="M11 -64.8C14.8667 -66.4 18.8667 -68.2 23 -70.2C27.2667 -72.3333 31.4 -74.6 35.4 -77C39.4 -79.5333 43.2 -82.1333 46.8 -84.8C50.5333 -87.6 53.8667 -90.5333 56.8 -93.6H77.6V45H47.8V-54.8C43.8 -52.1333 39.3333 -49.6667 34.4 -47.4C29.4667 -45.2667 24.6667 -43.4 20 -41.8L11 -64.8Z" fill="white"/>
                    </svg>
                </Slice>
            </div>
        </Layout>
    )
}
