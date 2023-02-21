import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useScrollSensore from "../../hooks/useScrollSensore";
import CartList from "./CartList";
import { AnimatePresence } from "framer-motion";
import SearchSec from "./SearchSec";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Footer from "../footer/Footer";
import BurgerMenu from "./BurgerMenu";
import BurgerMenuBtn from "./BurgerMenuBtn";
import Btn from "../../components/Btn";

import { useCartItemsState } from "../../context/CartListContext";
import { ToastContainer } from "react-toastify";

export default () => {
    const nav = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token") == undefined) {
            nav("/access-denied");
        }
    }, []);
    const elementRef = useScrollSensore({
        forward: "transform:translateY(0);",
        inReverse: "transform:translateY(-100%);",
        onHold: "transform:translateY(0);",
    });

    const [openCart, setOpenCart] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => {
        if (openCart && openMenu) {
            setOpenCart(false);
        }
    }, [openMenu]);
    useEffect(() => {
        if (openCart && openMenu) {
            setOpenMenu(false);
        }
    }, [openCart]);
    const { cartItem } = useCartItemsState();

    return (
        <>
            <ToastContainer />
            <header
                ref={elementRef}
                className=" fixed top-0 left-0  z-50 flex   h-20 w-full bg-black/90 text-inverted transition-transform duration-1000"
            >
                <nav className="  flex h-full  w-full flex-row-reverse items-center justify-between gap-2 px-4">
                    <Btn
                        type="button"
                        className={`${
                            openMenu ? "z-0" : "z-50"
                        } relative cursor-pointer`}
                        onClick={() => {
                            setOpenCart((pre) => !pre);
                        }}
                    >
                        <AiOutlineShoppingCart size={36} />
                        {cartItem.length > 0 && (
                            <span className="  absolute -left-2 -bottom-2 flex items-center justify-center rounded-full bg-red-600 px-2 py-px">
                                {cartItem.length}
                            </span>
                        )}
                    </Btn>
                    <SearchSec />
                    <BurgerMenuBtn
                        openMenu={openMenu}
                        setOpenMenu={setOpenMenu}
                        className={`${openCart ? "z-0" : "z-50"} ${
                            openMenu && "rotate-90"
                        }`}
                    />
                </nav>
                <AnimatePresence>
                    {openCart && (
                        <CartList
                            key="CartList"
                            openCart={openCart}
                            setOpenCart={setOpenCart}
                        />
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {openMenu && (
                        <BurgerMenu
                            key="BurgerMenu"
                            openMenu={openMenu}
                            setOpenMenu={setOpenMenu}
                        />
                    )}
                </AnimatePresence>
            </header>
            <Outlet />
            <Footer />
        </>
    );
};
