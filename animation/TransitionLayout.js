import { TransitionContext } from "@/context/TransitionContext";
import { useContext, useState } from "react"
import { useIsomorphicEffect } from "./useIsomophicEffect"

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [data, dispatch] = useContext(TransitionContext);

    useIsomorphicEffect(() => {
        if (children !== displayChildren) {
            if (data.timeline.duration() === 0) {
                setDisplayChildren(children);
            } else {
                data.timeline.play().then(() => {
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