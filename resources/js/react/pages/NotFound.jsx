import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import NewPage from "../components/NewPage";
export default () => {
    const nav = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            nav("/");
        }, 5000);
    }, []);
    return (
        <>
            <NewPage className={"flex flex-col items-center justify-center"}>
                <img
                    className=" absolute top-0 left-0 -z-10 h-full w-full object-cover"
                    src="images/not_found.jpg"
                    alt=""
                />

                <h1 className=" text-white">Error 404</h1>
                <p className=" max-w-xs text-center capitalize text-white">
                    the page you are tring to reach dose not exest make sure you
                    spelled the name correctly or try again later
                </p>
            </NewPage>
        </>
    );
};
