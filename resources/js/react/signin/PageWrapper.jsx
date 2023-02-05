import React from "react";
import { Outlet } from "react-router-dom";
export default () => {
    return (
        <>
            <section className="flex h-screen w-screen items-center justify-center ">
                <Outlet />
            </section>
        </>
    );
};
