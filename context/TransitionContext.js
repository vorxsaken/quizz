import { createContext, useState } from "react";
import { gsap } from "gsap";

export const TransitionContext = createContext({});

export default function TransitionProvider({ children }) {
    const [timeline, setTimeline] = useState(() => gsap.timeline({paused: true}));

    return (
        <TransitionContext.Provider value={{ timeline, setTimeline }}>
            {children}
        </TransitionContext.Provider>
    )
}