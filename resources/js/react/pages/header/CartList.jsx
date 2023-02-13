import React, { useEffect, useRef, useState } from "react";
import useScrollLock from "../../hooks/useScrollLock";
import { useCartItemsState } from "../../context/CartListContext";
import InCartItem from "./InCartItem";
import data from "../../data.json";
import { motion } from "framer-motion";
import { cartAnimation } from "../../components/animate";
import useClickOutside from "../../hooks/useClickOutside";

export default ({ openCart, setOpenCart }) => {
    const clickOutSideHandeler = () => {
        if (openCart) {
            setOpenCart(false);
        }
    };
    const ele = useRef(null);
    const cardContainer = useRef(null);
    const { cartItem, setCartItem } = useCartItemsState();
    useClickOutside(ele, clickOutSideHandeler, {}, [openCart]);
    useScrollLock(openCart);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        data.map((item) => {
            return cartItem.map((inCart) => {
                const id = inCart.split("-")[0];
                const themeId = inCart.split("-")[1];
                const theme = item.themes.find((t) => {
                    return t.theme == themeId;
                });
                if (item.id == id && theme) {
                    setTotalPrice((prev) => {
                        return prev + +theme.price;
                    });
                }
            });
        });
    }, [cartItem]);
    return (
        <>
            <motion.section
                variants={cartAnimation}
                initial="close"
                animate="open"
                exit="close"
                ref={ele}
                className={`
                 
     fixed  top-0  right-0 h-screen w-full max-w-[400px]
      divide-y-2 divide-x-0 divide-solid divide-slate-300 bg-white/20 shadow backdrop-blur-[40px]  `}
            >
                <h2 className=" bg- w-full p-4 capitalize shadow  ">
                    shopping cart
                </h2>

                <motion.div
                    layout
                    ref={cardContainer}
                    className=" remove_scroll_bar  h-2/3 w-full space-y-2 overflow-y-scroll p-4 "
                >
                    {cartItem &&
                        data.map((item) => {
                            return cartItem.map((inCart, index) => {
                                const id = inCart.split("-")[0];
                                const themeId = inCart.split("-")[1];
                                const theme = item.themes.find((t) => {
                                    return t.theme == themeId;
                                });
                                if (item.id == id && theme) {
                                    return (
                                        <>
                                            <InCartItem
                                                {...item}
                                                {...theme}
                                                setTotalPrice={setTotalPrice}
                                                key={index}
                                                setCartItem={setCartItem}
                                            />
                                        </>
                                    );
                                }
                            });
                        })}
                </motion.div>

                <div className=" h-full w-full bg-slate-400/30 backdrop-blur-[40px]">
                    <h3 className=" capitalize">
                        total price :<span>{totalPrice}</span>
                    </h3>
                </div>
            </motion.section>
        </>
    );
};
