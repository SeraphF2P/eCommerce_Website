import { useEffect, useRef } from "react";





export default function useClickOutSide(ref, cb, options = {}, dependencies = []) {
    const { selector = document.body } = { ...options }
    const container = selector == document.body ? document.body : document.querySelector(selector);

    const outsideClickListener = (e) => {
        if (ref.current.contains(e.target) == false) {
            cb()
            container.removeEventListener("click", outsideClickListener);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            container.addEventListener("click", outsideClickListener);
        }, 0);
        return (() => {
            if (container.removeEventListener("click", outsideClickListener)) {
                container.removeEventListener("click", outsideClickListener);
            }
        })
    }, dependencies);


}