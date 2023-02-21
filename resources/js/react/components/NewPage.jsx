import React, { useEffect, useRef } from "react";
export default ({ children, className, clickOutSide, ...props }) => {
    const ele = useRef(null);
    useEffect(() => {
        document.body.style = " overflow: hidden;";
        return () => {
            document.body.style = "";
        };
    }, []);
    return (
        <>
            <main
                ref={ele}
                onClick={(e) => {
                    e.stopPropagation();
                    if (
                        e.target.contains(ele.current) &&
                        typeof clickOutSide == "function"
                    ) {
                        clickOutSide(false);
                    }
                }}
                {...props}
                className={`${className} fixed top-0 left-0  isolate z-50 h-screen w-screen `}
            >
                {children}
            </main>
        </>
    );
};
