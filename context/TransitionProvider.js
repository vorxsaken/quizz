import { createContext, useContext, useState } from "react";
import { gsap } from "gsap";

const stateProvider = createContext({});
const useTransitionContext = () => useContext(stateProvider);

export default function TransitionProvider({ children }) {
    const [timeline, setTimeline] = useState(() =>
        gsap.timeline({ paused: true })
    )
    return (
        <stateProvider.Provider value={{ timeline, setTimeline }}>
            {children}
        </stateProvider.Provider>
    )
}

export { useTransitionContext }