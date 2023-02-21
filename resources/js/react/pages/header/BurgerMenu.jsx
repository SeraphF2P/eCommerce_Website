import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { burgerMenuAnimation } from "../../components/animate";
import useClickOutside from "../../hooks/useClickOutside";
import useScrollLock from "../../hooks/useScrollLock";
import { toast } from "react-toastify";
import axios from "axios";
import Btn from "../../components/Btn";
import AddProductSec from "./AddProductSec";
import AddCategores from "./AddCategores";
import { Host } from "../../host";

export default ({ openMenu, setOpenMenu }) => {
    const ele = useRef(null);
    let clickOutsideHandeler = () => {
        if (openMenu) {
            setOpenMenu(false);
        }
    };
    // useClickOutside(ele, clickOutsideHandeler, {}, [openMenu]);
    useScrollLock(openMenu);
    const [isAdmain, setIsAdmain] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("role") == "admin") {
            setIsAdmain(true);
        }
    }, []);
    const viewData = async () => {
        try {
            const res = await axios.get(
                `${Host}api/cat/view-all`,
                {
                    params: {
                        uniqueId: 2,
                    },
                    headers: {
                        Accept: "application/json",
                        Authorization:
                            "Bearer " + localStorage.getItem("token"),
                    },
                }
            );
            console.log(res.data.Categories);
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <>
            <motion.section
                variants={burgerMenuAnimation}
                initial="close"
                animate="open"
                exit="close"
                transition={{ duration: 1, ease: "linear" }}
                ref={ele}
                className=" fixed  top-0  left-0 h-screen w-full max-w-[400px] divide-y-2 divide-x-0 divide-solid divide-slate-300 bg-white/20 text-regular shadow backdrop-blur-[40px]"
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
                {isAdmain ? <AddCategores /> : ""}
                <div className=" flex items-center justify-center">
                    <AddProductSec />
                </div>
              
                <ul className=" flex h-3/5 flex-col items-center p-4 ">
                    <li key="list item 1" className=" text-3xl capitalize">
                        <Link to="/">wishlist</Link>
                    </li>
                    <li key="list item 2" className=" text-3xl capitalize">
                        <Link to="/">placeholder</Link>
                    </li>
                    <li key="list item 3" className=" text-3xl capitalize">
                        <Link to="/">placeholder</Link>
                    </li>
                    <li key="list item 4" className=" text-3xl capitalize">
                        <Link to="/">placeholder</Link>
                    </li>
                    <li key="list item 5" className=" text-3xl capitalize">
                        <Link to="/">placeholder</Link>
                    </li>
                </ul>
            </motion.section>
        </>
    );
};
