import { createContext, useContext, useReducer } from "react";
import update from "react-addons-update";

const globalData = {
    getOut: false,
    choosed: [],
    questions: [],
    quizObserver: 0,
    skipOutro: true,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_GETOUT':
            return {
                ...state,
                getOut: action.getOut
            }
        case 'SET_ANSWEAR':
            return {
                ...state,
                choosed: [
                    ...state.choosed,
                    {
                        answear: action.answear,
                        bgColor: action.bgColor,
                        position: action.position,
                        size: action.size
                    }
                ]
            }
        case 'SET_QUESTIONS':
            return {
                ...state,
                questions: [...action.questions]
            }
        case 'SET_SKIPOUTRO':
            return {
                ...state,
                skipOutro: action.skipOutro
            }
        case 'UPDATE_OBSERVER':
            return {
                ...state,
                quizObserver: action.quizObserver
            }
        case 'RESET_ANSWER':
            return {
                ...state,
                choosed: []
            }
        case 'RESET_REDUCER':
            return {
                getOut: false,
                choosed: [],
                questions: [],
                quizObserver: 0,
                skipOutro: true,
            }
        default:
            return state;
    }
}
const dispatcherContext = createContext({});
export const useTranstionReducer = () => useContext(dispatcherContext);

export default function TransitionDispatcher({ children }) {
    return (
        <dispatcherContext.Provider value={useReducer(reducer, globalData)}>
            {children}
        </dispatcherContext.Provider>
    )
}