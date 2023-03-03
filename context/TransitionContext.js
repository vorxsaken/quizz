import { createContext, useReducer } from "react";
import { gsap } from "gsap";

export const TransitionContext = createContext({});

const globalData = {
    getOut: false,
    timeline: gsap.timeline({ paused: true }),
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

export default function TransitionProvider({ children }) {
    return (
        <TransitionContext.Provider value={useReducer(reducer, globalData)}>
            {children}
        </TransitionContext.Provider>
    )
}