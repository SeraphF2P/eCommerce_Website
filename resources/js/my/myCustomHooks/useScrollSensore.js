import { useRef, useEffect } from 'react';
import { throttle } from '../performance';

export default function useScrollSensore(options, ...conditionly) {
    const { throttleDelay = 200, scrollOnX = false } = { ...options };
    const elementRef = useRef();
    const scrollVal = useRef(0);
    const transforming = useRef({
        from: '', to: '', condition: []
    });

    let scrollMode;
    let scrollHandler = () => {
        scrollMode = (scrollOnX ? scrollX : scrollY);
        if (scrollVal.current < scrollMode) {
            elementRef.current.style = transforming.current.to;
            scrollVal.current = scrollMode;
        } else {
            scrollVal.current = scrollMode;
            elementRef.current.style = transforming.current.from;
        }
        conditionly.map((con, ind) => {
            if (con()) {
                elementRef.current.style = transforming.current.condition[ind];
            }

        })
    };

    useEffect(() => {
        window.addEventListener("scroll", throttle(scrollHandler, throttleDelay));
        return () => {
            window.removeEventListener("scroll", throttle(scrollHandler, throttleDelay));
        };
    }, [scrollMode]);

    return [elementRef, transforming];
}