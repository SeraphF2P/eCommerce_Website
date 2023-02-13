import React from "react";
export default ({ children, className, ...props }) => {
    return (
        <>
            <main
                {...props}
                className={`${className}  fixed h-screen w-screen overflow-hidden`}
            >
                {children}
            </main>
        </>
    );
};
