import { useEffect, useRef, useState } from "react"

export default function usePlayer(defaultArray, defaultIndex) {
    const [array, setArray] = useState(defaultArray)
    const [index, setIndex] = useState(defaultIndex)
    const element = useRef(array[index]);

    const next = () => {
        if (array[index + 1] !== undefined) {
            setIndex(index + 1)
            console.log('sdfdsf')
        }
    };
    const preview = () => {
        if (array[index - 1] !== undefined) {
            setIndex(index - 1)
        };
    }
    function filter(callback) {
        setArray(a => a.filter(callback))
    }
    useEffect(() => {
        element.current = array[index];
    }, [index])
    return { set: setArray, filter, next, preview, element };
}
