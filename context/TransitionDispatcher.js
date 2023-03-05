import { createContext, useReducer } from "react";

const globalData = {
    getOut: false,
    choosed: []
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
        default:
            return state;
    }
}
export const dispatcherContext = createContext({});

export default function TransitionDispatcher({ children }) {
    return (
        <dispatcherContext.Provider value={useReducer(reducer, globalData)}>
            {children}
        </dispatcherContext.Provider>
    )
}