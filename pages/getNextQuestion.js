import { useIsomorphicEffect } from "@/animation/useIsomophicEffect"
import { useTranstionReducer } from "@/context/TransitionDispatcher"
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import { saveAnswerToLocalStorage } from "@/utils";

function GetNextQuestion() {
    const [data, dispatch] = useTranstionReducer();
    const router = useRouter();
    const [isMounted, setisMounted] = useState(false);

    useIsomorphicEffect(() => {
        setisMounted(true)
    }, [])

    useLayoutEffect(() => {
        if (isMounted) {
            const quizObserver = data?.quizObserver + 1;
            dispatch({ type: 'SET_SKIPOUTRO', skipOutro: true });
            const dispatchBlankAnswear = {
                answear: 'ngalamun kah bro ? 😂',
                position: [0, 0],
                size: [0, 0],
                bgColor: null
            }

            dispatch({
                type: 'SET_ANSWEAR',
                ...dispatchBlankAnswear
            })

            saveAnswerToLocalStorage([...data?.choosed, dispatchBlankAnswear]);
            setTimeout(() => {
                if (data?.quizObserver === data?.questions?.length - 1) {
                    router.replace('/result')
                } else {
                    dispatch({ type: 'UPDATE_OBSERVER', quizObserver: quizObserver });
                    localStorage.setItem('quizObserver', quizObserver);
                    router.replace('/quiz')
                }

            }, 100)

        }

    }, [isMounted])

    return (
        <></>
    )
}

export default GetNextQuestion