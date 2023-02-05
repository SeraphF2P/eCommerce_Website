import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useScrollSensore } from "/my/my";
import CartList from "./CartList";

import SearchSec from "./SearchSec";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Context from "../ListsContext";
import Footer from "../footer/Footer";
import BurgerMenu from "./BurgerMenu";
import BurgerMenuBtn from "./BurgerMenuBtn";
export default () => {
    const elementRef = useScrollSensore({
        from: "transform:translateY(0);",
        to: "transform:translateY(-100%);",
        onHold: "transform:translateY(0);",
    });
    const [openCart, setOpenCart] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("cart")) == undefined) {
            setCartItem([]);
        }
        if (JSON.parse(localStorage.getItem("fav")) == undefined) {
            setCartItem([]);
        }
    }, []);
    return (
        <>
            <header
                ref={elementRef}
                className="fixed top-0 left-0 z-50 flex  h-20 w-full bg-black/90 text-regular transition-transform duration-1000"
            >
                <Context>
                    <nav className=" flex h-full  w-full flex-row-reverse items-center justify-between gap-2 px-4">
                        <button
                            type="button"
                            className={`${
                                openMenu ? "z-0" : "z-50"
                            } relative cursor-pointer`}
                            onClick={() => {
                                setOpenCart((pre) => !pre);
                                setOpenMenu(false);
                            }}
                        >
                            <AiOutlineShoppingCart size={36} />
                        </button>
                        <SearchSec />
                        <BurgerMenuBtn
                            openCart={openCart}
                            openMenu={openMenu}
                            setOpenMenu={setOpenMenu}
                            setOpenCart={setOpenCart}
                        />
                    </nav>
                    <CartList openCart={openCart} setOpenCart={setOpenCart} />
                    <BurgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
                </Context>
            </header>
            <Outlet />
            <Footer />
        </>
    );
};
