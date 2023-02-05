import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useScrollLock from "../../../../my/myCustomHooks/useScrollLock";
import { useUserInfo } from "../signin/LoginPage";
export default ({ openMenu, setOpenMenu }) => {
    const userInfo = useUserInfo();
    const ele = useRef(null);
    const outsideClickListener = (e) => {
        if (!ele.current.contains(e.target)) {
            setOpenMenu(false);
            document.body.removeEventListener("click", outsideClickListener);
        }
    };
    useEffect(() => {
        if (openMenu) {
            setTimeout(() => {
                document.body.addEventListener("click", outsideClickListener);
            }, 10);
        }
    }, [openMenu]);
    useScrollLock(openMenu);
    return (
        <>
            <section
                ref={ele}
                className={`${
                    openMenu
                        ? "clipMenuEnd pointer-events-auto"
                        : "clipMenuStart pointer-events-none"
                }  
     fixed  top-0  left-0 h-screen w-full max-w-[400px] divide-y-2
      divide-x-0 divide-solid divide-slate-300 bg-white/20 text-inverted shadow backdrop-blur-[40px] transition-[clip-path] duration-1000 `}
            >
                <div className="  flex h-2/5 w-full flex-col items-center justify-center   ">
                    <div className=" h-40 w-40 overflow-hidden rounded-full shadow">
                        <img
                            className=" h-full w-full object-cover"
                            src="https://picsum.photos/300/300/"
                            alt="user profile photo"
                        />
                    </div>
                    <h2>{userInfo.name}</h2>
                </div>
                <h3 className=" text-center divide-y-0">{userInfo.email}</h3>
                <ul className=" flex h-3/5 flex-col items-center bg-teal-400/30 p-4 ">
                    <li className=" text-3xl capitalize">
                        <Link to="/">wishlist</Link>
                    </li>
                    <li className=" text-3xl capitalize">
                        <Link to="/">placeholder</Link>
                    </li>
                    <li className=" text-3xl capitalize">
                        <Link to="/">placeholder</Link>
                    </li>
                    <li className=" text-3xl capitalize">
                        <Link to="/">placeholder</Link>
                    </li>
                    <li className=" text-3xl capitalize">
                        <Link to="/">placeholder</Link>
                    </li>
                </ul>
            </section>
        </>
    );
};
