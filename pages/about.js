import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'
import FlyUpInOut from '@/animation/FlyUpInOut'
import Scale from '@/animation/ScaleIn'

function about() {
    return (
        <div className="container text-white">
            <FlyUpInOut delayOut={0.9} className="container container--max-width-md container--title container__card text-base">
                About
            </FlyUpInOut>
            <FlyUpInOut delayIn={0.2} delayOut={0.7} className="container container--max-width-md container__card text-center">
                Welcome to my Quiz App! my app is designed to provide users with an engaging and enjoyable experience.
                i offer a wide range of quizzes that cover different topics, from general knowledge to pop culture, so
                there's something for everyone.
            </FlyUpInOut>
            <FlyUpInOut delayIn={0.4} delayOut={0.5} className="container container--max-width-md container__card text-center">
                At this Quiz App, i committed to providing high-quality content that is both informative and entertaining.
                this quizzes are created by quiz api i found on internet, that i adjust to personal taste.
                heve fun while learning new things
            </FlyUpInOut>
            <FlyUpInOut delayOut={0.3} delayIn={0.6} className="container container--max-width-md container--row container__card">
                <Scale delayOut={0.1} delayIn={0.9} className='text-xl'>
                    <AiFillTwitterCircle></AiFillTwitterCircle>
                </Scale>
                <Scale delayOut={0.1} delayIn={0.9} className='text-xl'>
                    <AiFillGithub></AiFillGithub>
                </Scale>
            </FlyUpInOut>
            <FlyUpInOut delayIn={0.8} className="container container--max-width-md container__card text-small">
                vorxsaken&#169; 2023
            </FlyUpInOut>
        </div>
    )
}

export default about