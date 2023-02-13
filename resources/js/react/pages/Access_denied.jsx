import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import NewPage from "../components/NewPage";
export default () => {
    const nav = useNavigate();
    useEffect(() => {
        toast.warn(
            <>
                <h2 className=" capitalize  ">access denied </h2>
                <p className=" capitalize  ">
                    you are not allowed to enter this page you're gonna be
                    redirected to register page
                </p>
            </>
        );
        setTimeout(() => {
            nav("/");
        }, 6000);
    }, []);
    return (
        <>
            <ToastContainer
                position={"top-center"}
                style={{ width: "320px" }}
            />
            <NewPage className=" flex flex-col items-center">
                <img
                    className=" absolute top-0 left-0 -z-10 h-full w-full object-cover"
                    src="images/access_denied.jpg"
                    alt="access denied"
                />
            </NewPage>
        </>
    );
};
