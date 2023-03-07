import { createContext, useContext, useReducer } from "react";

const globalData = {
    getOut: false,
    choosed: [],
    questions: []
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