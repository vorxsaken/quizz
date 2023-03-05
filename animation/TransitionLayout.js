import { TransitionContext } from "@/context/TransitionContext";
import { useContext, useState } from "react"
import { useIsomorphicEffect } from "./useIsomophicEffect"

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const { timeline } = useContext(TransitionContext);

    useIsomorphicEffect(() => {
        if (children !== displayChildren) {
            if (timeline.duration() === 0) {
                setDisplayChildren(children);
            } else {
                timeline.play().then(() => {
                    timeline.seek(0).pause().clear();
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