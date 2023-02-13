

export function debounce(callBack, delay = 1000) {
    let timeout

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callBack(...args)
        }, delay)
    }
}

export function throttle(callBack, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false
        } else {
            callBack(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }
    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
            return
        }

        callBack(...args)
        shouldWait = true

        setTimeout(timeoutFunc, delay)
    }
}

