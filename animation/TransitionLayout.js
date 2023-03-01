import { useTransitionContext } from "@/context/TransitionProvider";
import { useState } from "react"
import { useIsomorphicEffect } from "./useIsomophicEffect"

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const { timeline } = useTransitionContext();

    useIsomorphicEffect(() => {
        if (children !== displayChildren) {
            if (timeline.duration() === 0) {
                setDisplayChildren(children);
            } else {
                timeline.play().then(() => {
                    timeline.seek(0).clear();
                    setDisplayChildren(children);
                })
            }
        }
    }, [children])

    return (
        <>
            {displayChildren}
        </>
    )
}