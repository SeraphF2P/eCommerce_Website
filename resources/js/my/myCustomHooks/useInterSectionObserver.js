
import { useState, useRef, useEffect } from "react";


export default function useInterSectionObserver(defaultValues) {
    const { root, rootMargin, threshold, once = false } = defaultValues;
    const ele = useRef()
    const [isInterSecting, setIsInterSecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([element]) => {
                if (element.isIntersecting) {
                    if (once) {
                        setIsInterSecting(true)
                        observer.unobserve(element.target)
                    } else {
                        setIsInterSecting(element.isIntersecting)
                    }
                }

            }
            ,
            {
                root, rootMargin, threshold
            }

        );
        observer.observe(ele.current)
        return (() => {
            observer.unobserve(ele.current)

        })
    }, [ele.current]);
    return [ele, isInterSecting]
}
