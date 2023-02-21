import React, { useEffect, useState } from "react";
import Btn from "../../components/Btn";
import { RiAddLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { useCartItemsState } from "../../context/CartListContext";
import {
    formatCurrency,
    itemAddRemoveToggler,
} from "../../utility_function/formatters";
import { motion as m } from "framer-motion";
import { useWishListItemsState } from "../../context/WishListContext";
import { randomNumBetween } from "../../utility_function/other";

export default (data) => {
    const {
        title: product_name,
        price,
        uniqueId: id,
        user,
        category,
        files,
    } = data;

    const seller_name = user ? user.name : "";
    const nav = useNavigate();
    const { wishListItems, setWishListItem } = useWishListItemsState();
    const { cartItem, setCartItem } = useCartItemsState();
    const getProductImageUrl = (category) => {
        return `https://source.unsplash.com/400x400/?${category}&random=${randomNumBetween(
            0,
            1000
        )}`;
    };
 
    const [productImageUrl, setProductImageUrl] = useState("");

    useEffect(() => {
        const imageUrl = getProductImageUrl(category.name);
        setProductImageUrl(imageUrl);
    }, []);
    return (
        <m.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ y: -16, transition: { ease: "linear" } }}
            onClick={() => {
                nav("/product/" + id);
            }}
            className={`
              relative  h-96 w-64 cursor-pointer  rounded-lg bg-white   shadow`}
        >
            <>
                <div className=" relative h-3/5 max-w-full overflow-hidden rounded-tr-lg  rounded-tl-lg ">
                    <img
                        className="duration-400 h-full w-full object-cover transition-transform hover:scale-[1.025]"
                        src={productImageUrl}
                        alt="product"
                    />
                </div>

                <div className="  flex  h-2/5 w-full  flex-col gap-4 p-4     ">
                    <div className="   w-4/5 truncate capitalize ">
                        {product_name}
                    </div>
                    <div className="   w-3/5 truncate text-sm capitalize   ">
                        {seller_name}
                    </div>

                    <div
                        className=" absolute -left-6 bottom-4 w-24 
                                rounded-tr rounded-br rounded-tl-full  rounded-bl-full bg-emerald-400 
                        px-4 py-2 text-right  capitalize before:absolute
                        before:left-0 before:bottom-0 before:z-0
                        before:block before:h-12 before:w-6 before:rounded-tl-full 
                         before:rounded-bl-full  before:bg-gradient-to-l  before:from-emerald-400/90
                          before:to-emerald-500 "
                    >
                        {formatCurrency(+price)}
                    </div>
                    <div className=" absolute bottom-0 right-0 grid h-32 w-32 grid-cols-2 grid-rows-2 p-2 ">
                        <Btn
                            onToggle="active bg-teal-300 "
                            isToggled={cartItem.some((item) => {
                                return item.uniqueId == id;
                            })}
                            toggleDependencies={cartItem}
                            onClick={() => {
                                itemAddRemoveToggler(
                                    "cart",
                                    setCartItem,
                                    { ...data, count: 1 },
                                    "uniqueId"
                                );
                            }}
                            shape="outlined"
                            className="group row-start-2  flex h-14 w-14 items-center justify-center bg-white/70    "
                        >
                            <RiAddLine
                                className="pointer-events-none fill-black group-hover:fill-blue-400 group-disabled:fill-black group-[.active]:fill-blue-400 "
                                size={24}
                            />
                            <span className=" sr-only">add to cart</span>
                        </Btn>
                        <Btn
                            onToggle="active bg-teal-300 "
                            isToggled={wishListItems.some((item) => {
                                return item.uniqueId == id;
                            })}
                            toggleDependencies={wishListItems}
                            onClick={() => {
                                itemAddRemoveToggler(
                                    "wish",
                                    setWishListItem,
                                    data,
                                    "uniqueId"
                                );
                            }}
                            shape="outlined"
                            className=" group  col-start-2 flex h-14 w-14 items-center justify-center  bg-white/70  "
                        >
                            <AiOutlineHeart
                                className=" pointer-events-none group-hover:fill-red-600  group-disabled:fill-black  group-[.active]:fill-red-600"
                                size={24}
                            />
                            <span className=" sr-only">add to favorite</span>
                        </Btn>
                    </div>
                </div>
            </>
        </m.div>
    );
};
