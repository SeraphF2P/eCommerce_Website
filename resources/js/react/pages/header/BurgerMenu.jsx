import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { burgerMenuAnimation } from "../../components/animate";
import  useClickOutside  from "../../hooks/useClickOutside";
import  useScrollLock  from "../../hooks/useScrollLock";
export default ({ openMenu, setOpenMenu }) => {
    const ele = useRef(null);
    let clickOutsideHandeler = () => {
        if (openMenu) {
            setOpenMenu(false);
        }
    };
    useClickOutside(ele, clickOutsideHandeler, {}, [openMenu]);
    useScrollLock(openMenu);
    return (
        <>
            <motion.section
                variants={burgerMenuAnimation}
                initial="close"
                animate="open"
                exit="close"
                transition={{ duration: 1, ease: "linear" }}
                ref={ele}
                className=" fixed  top-0  left-0 h-screen w-full max-w-[400px] divide-y-2 divide-x-0 divide-solid divide-slate-300 bg-white/20 text-inverted shadow backdrop-blur-[40px]"
            >
                <div className="  flex h-2/5 w-full flex-col items-center justify-center   ">
                    <div className=" h-40 w-40 overflow-hidden rounded-full shadow">
                        <img
                            className=" h-full w-full object-cover"
                            src="https://picsum.photos/300/300/"
                            alt="user profile photo"
                        />
                    </div>
                    <h2>name</h2>
                </div>
                <h3 className=" divide-y-0 text-center">email</h3>
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
            </motion.section>
        </>
    );
};
