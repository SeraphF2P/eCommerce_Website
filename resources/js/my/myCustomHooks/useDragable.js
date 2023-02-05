
import { useEffect, useRef } from "react";
import { throttle } from "../performance";

export default (ref, throttleValue = 150) => {
    const ele = ref ? ref : useRef();

    const loc = useRef({});
    function dragStart(e) {
        loc.current = {
            translateX: (e.target.style.translate.valueOf().split(" ")[0] = 0),
            translateY: (e.target.style.translate.valueOf().split(" ")[1] = 0),
            width: e.target.getBoundingClientRect().width,
            height: e.target.getBoundingClientRect().height,
        };
        ele.current.style.transition = "translate 0.15s";
    }
    function dragEnd(e) {
        const { translateX, translateY, width, height } = loc.current;
        ele.current.style.translate = `${e.clientX + translateX - width / 2
            }px ${e.clientY + translateY - height / 2}px`;
        ele.current.style.transition = "translate 0s";
    }
    function dragOver(e) {
        e.preventDefault();
        const { translateX, translateY, width, height } = loc.current;
        ele.current.style.translate = `${e.clientX + translateX - width / 2
            }px ${e.clientY + translateY - height / 2}px`;
    }
    useEffect(() => {
        if (ele.current == undefined) return
        ele.current.addEventListener("dragstart", dragStart);
        ele.current.addEventListener("dragend", dragEnd);
        ele.current.addEventListener("dragover", throttle(dragOver, throttleValue));
        ele.current.setAttribute("draggable", true);
        return () => {
            ele.current.removeEventListener("dragstart", dragStart);
            ele.current.removeEventListener("dragend", dragEnd);
            ele.current.removeEventListener("dragover", dragOver);
            ele.current.setAttribute("draggable", false);
        };
    }, []);
    return ref ? null : ele

} 