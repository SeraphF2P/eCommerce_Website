import React, { forwardRef, useEffect, useRef } from "react";

export default forwardRef(
    (
        {
            onClick,
            onToggle = [],
            children,
            shape,
            className,
            ...props
        },
        ref
    ) => {
        const ele = ref ? ref : useRef(null);
        useEffect(() => {
            const classToggler = () => {
                onToggle.map((str) => {
                    ele.current.classList.toggle(str);
                });
            };
            if (onToggle) {
                ele.current.addEventListener("click", classToggler);
            }
            return () => {
                if (onToggle && ele.current) {
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
                        onClick()
                    }}
                    className={`
                    ${
                        shape == "filled"
                            ? " bg-teal-500 text-regular active:bg-teal-400  disabled:!bg-gray-300 "
                            : shape == "outlined"
                            ? " border-4 border-solid border-teal-500 text-inverted  active:bg-teal-400"
                            : ""
                    } 
                    ${className} 
                    duration-400 rounded-full shadow-lg transition-transform hover:scale-105 
                    disabled:border-4 disabled:border-solid disabled:border-gray-400 disabled:text-gray-500`}
                    {...props}
                >
                    {children}
                </button>
            </>
        );
    }
);
