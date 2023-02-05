import React, { forwardRef } from "react";

export default forwardRef(({ children, shape = "filled", className, ...props }, ref) => {
    return (
        <>
            <button
            ref={ref}
                {...props}
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
            >
                {children}
            </button>
        </>
    );
});
