export const fadeUp = {
    hidden: { opacity: 0, y: "16px" },
    show: {
        opacity: 1, y: "0"
        , transition: {
            duration: 1,
            ease: "linear"
        }
    },
}
export const cartAnimation = {
    close: { clipPath: "circle(0% at 90% 40px)", pointerEvents: "none", transition: { duration: 1, ease: "linear", delayChildren: 0.3, staggerChildren: 0.2 } },
    open: { clipPath: "circle(200% at 90% 40px)", pointerEvents: "auto", transition: { duration: 1, ease: "linear", staggerChildren: 0.2 } },

}
export const cartListItem = {
    close: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: "0" }
}
export const burgerMenuAnimation = {
    close: { clipPath: "circle(0% at 40px 40px)", pointerEvents: "none" },
    open: { clipPath: "circle(200% at 40px 40px)", pointerEvents: "auto" },
}
export const overlayer = {
    hidden: {
        opacity: 0, transition: {
            duration: 1,
            ease: "linear",
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    },
    show: {
        opacity: 1
        , transition: {
            duration: 1,
            ease: "linear",
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    },
}
export const fadeInItem = {
    hidden: { opacity: 0, y: "100%" },
    show: {
        opacity: 1
        , y: "0"
        , transition: {
            ease: "linear",
            duration: .7
        }
    },
}
export const loginSlide = {
    hidden: { x: "100%", opacity: 0, transition: { duration: 1 } },
    show: {
        x: "0", opacity: 1, transition: { duration: 1 }
    }

}
export const signUpSlide = {
    hidden: { x: "0", opacity: 0, transition: { duration: 1 } },
    show: {
        x: "100%", opacity: 1, transition: { duration: 1 }
    }
    ,

}