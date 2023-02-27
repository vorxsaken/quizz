import { createContext, useContext, useReducer } from "react";
import { reducer, data } from "./context";


const stateProvider = createContext();

export const useProvider = () => useContext(stateProvider);

export default function Provider({ children }) {
    return (
        <stateProvider.Provider value={useReducer(reducer, data)}>
            { children }
        </stateProvider.Provider>
    )
}