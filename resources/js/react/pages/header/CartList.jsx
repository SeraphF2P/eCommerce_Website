import React, { useEffect, useRef, useState } from "react";
import useScrollLock from "../../hooks/useScrollLock";
import { useCartItemsState } from "../../context/CartListContext";
import InCartItem from "./InCartItem";
import { AnimatePresence, motion } from "framer-motion";
import { cartAnimation, slideIn } from "../../components/animate";
import useClickOutside from "../../hooks/useClickOutside";
import { formatCurrency } from "../../utility_function/formatters";
import Btn from "../../components/Btn";
import { useNavigate } from "react-router";

export default ({ openCart, setOpenCart }) => {
    const nav = useNavigate()
    const clickOutSideHandeler = () => {
        if (openCart) {
            setOpenCart(false);
        }
    };
    const ele = useRef(null);
    const [totalPrice, setTotalPrice] = useState(0);

    const { cartItem, setCartItem } = useCartItemsState();
    useClickOutside(ele, clickOutSideHandeler, {}, [openCart]);
    useScrollLock(openCart);
    useEffect(() => {
        let prices = cartItem.map((item) => {
            return item.price * item.count;
        });
        setTotalPrice(
            prices.reduce((prev, current) => {
                return prev + current;
            }, 0)
        );
    }, [cartItem]);

    return (
        <>
            <motion.section
                variants={cartAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                ref={ele}
                className={`
                prose prose-slate 
                fixed top-0
     right-0  flex   h-screen w-full max-w-[400px] flex-col
       bg-white/20 shadow backdrop-blur-[40px]  `}
            >
                <h2 className=" bg- m-0 w-full p-6 text-3xl  capitalize backdrop-blur-[40px] ">
                    shopping cart
                </h2>

                <motion.div
                    drag="y"
                    dragConstraints={{
                        top: 10,
                        bottom: 80,
                    }}
                    className=" remove_scroll_bar h-full  w-full   overflow-y-scroll p-4 "
                >
                    <div className=" flex flex-col items-center justify-center gap-2">
                        <AnimatePresence>
                            {cartItem &&
                                cartItem
                                    .sort((a, b) =>
                                        b.uniqueId.localeCompare(a.uniqueId)
                                    )
                                    .map((item) => {
                                        return (
                                            <motion.div
                                                variants={slideIn}
                                                key={item.uniqueId}
                                                transition={{
                                                    duration: 0.5,
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    transition: {
                                                        duration: 0.5,
                                                    },
                                                }}
                                            >
                                                <InCartItem {...item} />
                                            </motion.div>
                                        );
                                    })}
                        </AnimatePresence>
                    </div>
                </motion.div>

                <div className=" flex h-52  flex-col gap-2  p-4 backdrop-blur-[40px]">
                    <p className=" m-0 capitalize">
                        total price :{formatCurrency(totalPrice)}
                    </p>
                    <Btn
                        onClick={() => {
                            window.localStorage.setItem("totalPrice",totalPrice)
                            nav("/CheckOut");
                        }}
                        shape="filled"
                        className="rounded p-4 capitalize"
                    >
                        check out
                    </Btn>
                    <Btn
                        onClick={() => {
                            setCartItem([]);
                        }}
                        shape="outlined"
                        className="rounded p-4 capitalize"
                    >
                        clear cart
                    </Btn>
                </div>
            </motion.section>
        </>
    );
};
