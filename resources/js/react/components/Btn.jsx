import React, { forwardRef, useEffect, useRef } from "react";

export default forwardRef(
    (
        {
            onClick,
            onToggle,
            isToggled = undefined,
            toggleDependencies,
            children,
            shape,
            className,
            ...props
        },
        ref
    ) => {
        const ele = ref ? ref : useRef(null);
        useEffect(() => {
            if (onToggle == undefined) return;

            const classes = onToggle.split(" ").filter((item) => {
                return item != "";
            });
            const classToggler = () => {
                classes.map((str) => {
                    ele.current.classList.toggle(str);
                });
            };
            classes.map((str) => {
                ele.current.classList.toggle(str, isToggled);
            });

            ele.current.addEventListener("click", classToggler);

            return () => {
                if (ele.current) {
                    ele.current.removeEventListener("click", classToggler);
                }
            };
        }, [toggleDependencies]);

        return (
            <>
                <button
                    ref={ele}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (typeof onClick == "function") {
                            onClick();
                        }
                    }}
                    className={`
                    ${
                        shape == "filled"
                            ? " rounded-full bg-btn-fill  text-inverted shadow-sm shadow-btn-accent hover:bg-btn-hover active:bg-btn-active disabled:bg-btn-muted disabled:text-muted"
                            : shape == "outlined"
                            ? " rounded-full border-4 border-solid bg-slate-50/80  border-btn-fill shadow-sm shadow-btn-fill active:bg-btn-active  disabled:border-4  disabled:border-solid disabled:border-btn-muted  disabled:text-muted"
                            : "active:shadow-inner"
                    } 
                    ${className} 
                    duration-400  transition-transform hover:scale-105 active:scale-100 disabled:hover:scale-100
                    `}
                    {...props}
                >
                    {children}
                </button>
            </>
        );
    }
);
