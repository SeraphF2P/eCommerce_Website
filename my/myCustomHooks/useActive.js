
import { useEffect } from "react";
export default function useActive({ refs, addClass = "active", eventType = "click" }, dependencyArray = []) {
    // const { refs, addClass = "active", eventType = "click" } = defaultValues;
    function fun(e) {
        refs.current.map(ele => {
            ele.classList.remove(addClass);
        })
        e.target.classList.add(addClass);
    }
    function reset(e) {
        refs.current.map(ele => {
            ele.classList.remove(addClass);
        })
    }
    useEffect(() => {
        if (refs.current == undefined) return
        refs.current.map(ele => {
            ele.addEventListener(eventType, fun)
        })
        return (() => {
            refs.current.map(ele => {
                if (ele) {
                    ele.removeEventListener(eventType, fun)
                }
            })
        })
    }, dependencyArray)
    return reset
}