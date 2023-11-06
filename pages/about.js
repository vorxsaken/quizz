import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'
import FlyUpInOut from '@/animation/FlyUpInOut'
import Scale from '@/animation/ScaleIn'

function About() {
    return (
        <div className="container text-white">
            <FlyUpInOut delayOut={0.9} className="container container--max-width-md container--title container__card text-base">
                About
            </FlyUpInOut>
            <FlyUpInOut delayIn={0.2} delayOut={0.7} className="container container--max-width-md container__card text-center">
                {`This application was created using Next JS and Greensock JavaScript library, the quiz data source for this application
                comes from an external API that I found on the internet, you can see the source code for this application on my GitHub account
                if you are curious about how all these animations are created and work.`}
            </FlyUpInOut>
            <FlyUpInOut delayIn={0.4} delayOut={0.5} className="container container--max-width-md container__card text-center">
                {`I would really appreciate if you contributed to the development of this application, in particular
                I really want this application to have its own API for generating quizzes, and there is a categorization of 
                topics that users can choose`}
            </FlyUpInOut>
            <FlyUpInOut delayOut={0.3} delayIn={0.6} className="container container--max-width-md container--row container__card">
                <Scale delayOut={0.1} delayIn={0.9} className='text-xl'>
                    <AiFillTwitterCircle></AiFillTwitterCircle>
                </Scale>
                <a href='https://github.com/vorxsaken/' target='_blank'>
                    <Scale delayOut={0.1} delayIn={0.9} className='text-xl'>
                        <AiFillGithub></AiFillGithub>
                    </Scale>
                </a>
            </FlyUpInOut>
            <FlyUpInOut delayIn={0.8} className="container container--max-width-md container__card text-small">
                vorxsaken&#169; 2023
            </FlyUpInOut>
        </div>
    )
}

export default About
