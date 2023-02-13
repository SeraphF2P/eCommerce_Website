import { useRef, useEffect } from 'react';
import { debounce, throttle } from '../performance';
import useCssRulesInserter from './useCssRulesInserter';

export default function useScrollSensore(options, ...conditionly) {
    const { forward, inReverse, onHold, holdFor = 1000, throttleDelay = 100, scrollOnX = false,
        condition = [], selector = null } = { ...options };
    const scrollForwards = inReverse ? useCssRulesInserter("scrollForwards", inReverse) : "";
    const scrollInRevers = forward ? useCssRulesInserter("scrollInRevers", forward) : ""
    const scrollOnHold = onHold ? useCssRulesInserter("scrollOnHold", onHold) : "";
    const condetionsClasses = condition ? condition.map((con, ind) => {
        return useCssRulesInserter(`scrollCondition-${ind}`, con);
    }) : [];

    const elementRef = useRef(null);
    const scrollEle = useRef(null);
    const scrollVal = useRef(0);
    let scrollMode;
    let scrollHandler = () => {
        if (elementRef.current == undefined) return;
        scrollOnHold ? elementRef.current.classList.remove(scrollOnHold) : "";
        if (selector != null) {
            scrollMode = document.querySelector(selector).scrollTop;
        } else {
            scrollMode = (scrollOnX ? scrollX : scrollY);
        }
        if (scrollVal.current < scrollMode) {
            scrollVal.current = scrollMode;
            elementRef.current.classList.add(scrollForwards, (scrollVal.current < scrollMode))
            elementRef.current.classList.remove(scrollInRevers, (scrollVal.current > scrollMode))
        } else if (scrollVal.current > scrollMode) {
            scrollVal.current = scrollMode;
            elementRef.current.classList.add(scrollInRevers, (scrollVal.current > scrollMode))
            elementRef.current.classList.remove(scrollForwards, (scrollVal.current < scrollMode))
        }
        if (condetionsClasses == []) return
        conditionly.map((cb, ind) => {
            if (typeof cb == "function") {
                elementRef.current.classList.toggle(condetionsClasses[ind], cb());
                console.log(typeof cb)
            } else if (typeof cb == "boolean") {
                elementRef.current.classList.toggle(condetionsClasses[ind], cb);
            }
        })
    };
    function scrollStop() {
        if (elementRef.current == undefined) return;
        if (elementRef.current.classList.contains(scrollOnHold) == false) {
            elementRef.current.classList.remove(scrollForwards)
            elementRef.current.classList.remove(scrollInRevers)
            elementRef.current.classList.add(scrollOnHold)
        }
    }
    useEffect(() => {
        scrollEle.current = (document.querySelector(selector) ? document.querySelector(selector) : window);
        scrollEle.current.addEventListener("scroll", throttle(scrollHandler, throttleDelay));
        return () => {
            scrollEle.current.removeEventListener("scroll", throttle(scrollHandler, throttleDelay));
        };
    }, [...conditionly]);
    useEffect(() => {
        (onHold != "") && scrollEle.current.addEventListener("scroll", debounce(scrollStop, holdFor));
        return () => {
            (onHold != "") && scrollEle.current.removeEventListener("scroll", debounce(scrollStop, holdFor));
        };
    }, [onHold]);

    return elementRef;
}