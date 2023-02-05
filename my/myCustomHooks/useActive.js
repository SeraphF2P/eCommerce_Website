
import { useEffect, useRef } from "react";
export default function useActive({elementsClass, addClass = "active", eventType = "click"}) {
    const elements = useRef([])
    function fun(e) {
        elements.current.map(ele => {
            ele.classList.remove(addClass);
        })
        e.target.classList.add(addClass);
    }
    useEffect(() => {
    elements.current = [...document.querySelectorAll(elementsClass)] 
     
        if (elements.current == null) return
        elements.current.map(ele => {
            ele.addEventListener(eventType, fun)
        })
        return (() => {
            elements.current.map(ele => {
                ele.removeEventListener(eventType, fun)
            })
        })

    }, [])

}