import Timer from "@/components/Timer"
import { randomColor } from "@/utils"

export default function quiz() {
    return (
        <div className="container">
            <div className="container container--title container__block text-white text-medium">
                Gabut Quizz
            </div>
            <div className="container container--row container__block text-white text-base">
                what is the fastest animal in the world ?
            </div>
            <div className="container container--row container__block text-white text-base">
                <Timer />
            </div>
            <div className="container container--row container__block">
                <div className="container__block__rect">
                    <div className="container container__block text-small">
                        <div className="container__block__multiple-choice" style={{backgroundColor: randomColor()}}>A</div>
                        <span>Turtle</span>
                    </div>
                </div>
                <div className="container__block__rect">
                    <div className="container container__block text-small">
                        <div className="container__block__multiple-choice" style={{backgroundColor: randomColor()}}>B</div>
                        <span>Leopard </span>
                    </div>
                </div>
                <div className="container__block__rect">
                    <div className="container container__block text-small">
                        <div className="container__block__multiple-choice" style={{backgroundColor: randomColor()}}>C</div>
                        <span>Cheetah</span>
                    </div>
                </div>
                <div className="container__block__rect">
                    <div className="container container__block text-small">
                        <div className="container__block__multiple-choice" style={{backgroundColor: randomColor()}}>D</div>
                        <span>Lion</span>
                    </div>
                </div>
            </div>
        </div>
    )
}