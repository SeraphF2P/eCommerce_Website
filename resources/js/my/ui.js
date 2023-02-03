import { lazy } from "react";


export function intersecObserveToggler(className, toggledClass, options) {
    const { root, rootMargin, threshold } = options;
    const entries = [...document.querySelectorAll(`${className}`)];
    const observer = new IntersectionObserver(
        (elements) => {
            elements.forEach((element) => {
                element.target.classList.toggle(
                    toggledClass,
                    element.isIntersecting
                );
            });
        },
        { root, rootMargin, threshold }
    );

    entries.map((el) => observer.observe(el));


    return entries;
}
export function lazyLoading(path, namedExport) {
    return lazy(() => {
        const promise = import(path)
        if (namedExport == null) {
            return promise;
        } else {
            return promise.then(module => ({ default: module[namedExport] }))
        }
    })
}

export function createThemesArray(arrayOfObjects, callBack) {
    let subArray = [];
    arrayOfObjects.map(obj => {
        const item = callBack(obj);
        subArray.push({ ...item })
    })
    return subArray;
}
export function tP(prop) {
    return ({ theme }) => {
        return theme[prop];
    };
}