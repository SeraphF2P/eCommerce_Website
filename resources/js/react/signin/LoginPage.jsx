import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Btn from "../Global-Files/Btn";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserInfo = React.createContext();
export function useUserInfo() {
    return useContext(UserInfo);
}
let defaultInfo = {
    name: "admin",
    email: "admin@gmail.com",
    password: "admin",
};
export function Data({ children }) {
    return (
        <>
            <UserInfo.Provider value={defaultInfo}>
                {children}
            </UserInfo.Provider>
        </>
    );
}
export default ({ setIsLogedIn }) => {
    const name = useRef("");
    const password = useRef("");
    useEffect(() => {
        const params = new URLSearchParams(
            new URL(window.location.href).search
        );
        if (params.get("name")) {
            const name = params.get("name");
            const email = params.get("email");
            const password = params.get("password");
            defaultInfo = { name, email, password };

            const newUrl = window.location.href.split("?")[0];
            history.pushState({}, "", newUrl);
        } else {
            defaultInfo = {
                name: "admin",
                email: "admin@gmail.com",
                password: "admin",
            };
        }
        toast.info("you can use admain as user name and password", {
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
                                    defaultInfo.name == name.current &&
                                    defaultInfo.password == password.current
                                ) {
                                    setIsLogedIn(true);
                                } else {
                                    toast.info(
                                        "you can use admain as user name and password",
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
