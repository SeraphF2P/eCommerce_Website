import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Btn from "../components/Btn";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserInfo = React.createContext();
export function useUserInfo() {
    return useContext(UserInfo);
}

let fun = () => {
    const params = new URLSearchParams(new URL(window.location.href).search);
    if (params.get("name") != "") {
        const name = params.get("name") ? params.get("name") : "admin";
        const email = params.get("email")
            ? params.get("email")
            : "admin@gmail.com";
        const password = params.get("password")
            ? params.get("password")
            : "admin";
        return { name, email, password };
    }
};
export default ({ setIsLogedIn }) => {
    const name = useRef("");
    const password = useRef("");
    useEffect(() => {
        toast.info("you can use admin as user name and password", {
            position: toast.POSITION.TOP_RIGHT,
            delay: 1000,
        });
       
    }, []);

    return (
        <>
            <ToastContainer />
            <div className=" flex w-60 animate-fade-up flex-col items-center justify-center gap-4 rounded-lg bg-slate-200 p-4 py-8 shadow-md">
                <h2 className=" capitalize">login</h2>
                <form
                    className=" flex flex-col gap-4 p-2"
                    action="/"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div>
                        <input
                            onChange={(e) => {
                                name.current = e.target.value;
                            }}
                            autoComplete="true"
                            type="text"
                            className=" rounded  placeholder-gray-700 shadow"
                            placeholder="userName or email"
                        />
                    </div>
                    <div>
                        <input
                            onChange={(e) => {
                                password.current = e.target.value;
                            }}
                            autoComplete="true"
                            type="password"
                            className=" rounded placeholder-gray-700 shadow"
                            placeholder="password"
                        />
                    </div>
                    <div className="flex w-full justify-between px-4">
                        <Btn
                            onClick={() => {
                                if (
                                    fun().name == name.current &&
                                    fun().password == password.current
                                ) {
                                    setIsLogedIn(true);
                                } else if (
                                    name.current == "admin" &&
                                    password.current == "admin"
                                ) {
                                    setIsLogedIn(true);
                                } else {
                                    console.log(name.current, password.current);
                                    console.log(fun().name, fun().password);

                                    toast.info(
                                        "you can use admin as user name and password",
                                        {
                                            position: toast.POSITION.TOP_RIGHT,
                                        }
                                    );
                                }
                            }}
                            className="py-2 px-4"
                        >
                            login
                        </Btn>
                        <Link to="/signup">
                            <Btn type="primary" className="py-2 px-4">
                                sign up
                            </Btn>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};
export function Data({ children }) {
    return (
        <>
            <UserInfo.Provider value={fun()}>{children}</UserInfo.Provider>
        </>
    );
}
