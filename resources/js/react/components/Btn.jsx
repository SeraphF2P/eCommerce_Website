import React, { forwardRef, useEffect, useRef } from "react";

export default forwardRef(
    (
        {
            onClick,
            onToggle = [[], undefined],
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
            const classToggler = () => {
                onToggle[0].map((str) => {
                    ele.current.classList.toggle(str, onToggle[1]);
                });
            };
            if (onToggle[0]) {
                ele.current.addEventListener("click", classToggler);
            }
            return () => {
                if (onToggle[0] && ele.current) {
                    ele.current.removeEventListener("click", classToggler);
                }
            };
        }, []);

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
                            ? " rounded-full bg-teal-500 text-regular shadow-lg active:bg-teal-400 disabled:!bg-gray-300 disabled:text-gray-500"
                            : shape == "outlined"
                            ? " rounded-full border-4 border-solid border-teal-500 text-inverted shadow-lg active:bg-teal-400  disabled:border-4 disabled:border-solid disabled:border-gray-400"
                            : "active:shadow-inner"
                    } 
                    ${className} 
                    duration-400  transition-transform hover:scale-105 
                    `}
                    {...props}
                >
                    {children}
                </button>
            </>
        );
    }
);
