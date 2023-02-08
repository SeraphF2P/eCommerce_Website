import React, { useEffect, useId, useRef } from "react";
import Btn from "../components/Btn";
import { RiAddLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { useOnScreen } from "../../../../my/my";
import { Link } from "react-router-dom";
import { useCartItemsState, useFavItemsState } from "../ListsContext";
import { itemAddRemoveToggler } from "../../../../my/formatters";
import { motion as m } from "framer-motion";

export default ({ info, index }) => {
    const ele = useRef(null);
    const isOpenScreen = useOnScreen(ele);
    const { setFavItem } = useFavItemsState();
    const { setCartItem } = useCartItemsState();
    const addToCart = useRef(null);
    const addToFav = useRef(null);

    const { product_name, product_image_url, seller_name, themes } = info;
    useEffect(() => {
        if (
            JSON.parse(localStorage.getItem("cart")).some((item) => {
                return item.id == id;
            }) &&
            isOpenScreen
        ) {
            addToCart.current.classList.add("bg-teal-400");
            addToCart.current.classList.add("active");
        }
        if (
            JSON.parse(localStorage.getItem("fav")).some((item) => {
                return item.id == id;
            }) &&
            isOpenScreen
        ) {
            addToFav.current.classList.add("bg-teal-400");
            addToFav.current.classList.add("active");
        }
    }, [isOpenScreen]);
    function clickHandler() {
        ele.current.click();
    }
    return (
        <>
            <m.div
                layout
                initial={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                whileHover={{ y: -16, transition: { ease: "linear" } }}
                key={index}
                onClick={clickHandler}
                className=" h-80  w-64  cursor-pointer overflow-hidden rounded-lg shadow "
            >
                <>
                    <Link
                        className=" sr-only"
                        ref={ele}
                        to={"/product/" + id}
                    ></Link>
                    <div className=" relative h-3/4 max-w-full  overflow-hidden ">
                        <img
                            className="duration-400 h-full w-full object-cover transition-transform hover:scale-105"
                            src={themes[0].product_image_url}
                            alt="product"
                        />
                        <div className=" absolute left-0 bottom-0 w-full truncate bg-gradient-to-tr from-teal-500/90 to-transparent py-2  px-4 text-2xl  ">
                            {themes[0].product_name}
                        </div>
                    </div>
                    <div className="  flex h-1/4 w-full items-center  justify-between gap-2 bg-white   px-2 ">
                        <div>
                            <div className=" w-32 truncate text-2xl capitalize  ">
                                {seller_name}
                            </div>
                            <div>{themes[0].price}$</div>
                        </div>
                        <div className=" flex gap-2">
                            <Btn
                                onToggle={["active", "bg-teal-400"]}
                                ref={addToCart}
                                onClick={() => {
                                    itemAddRemoveToggler(
                                        "cart",
                                        setCartItem,
                                        themes[0].id
                                    );
                                }}
                                shape="outlined"
                                className="group p-2  "
                            >
                                <RiAddLine
                                    className="pointer-events-none fill-black group-hover:fill-blue-400 group-[.active]:fill-blue-400 "
                                    size={24}
                                />
                                <span className=" sr-only">add to cart</span>
                            </Btn>
                            <Btn
                                ref={addToFav}
                                onToggle={["active", "bg-teal-400"]}
                                onClick={() => {
                                    itemAddRemoveToggler("fav", setFavItem, themes[0].id);
                                }}
                                shape="outlined"
                                className=" group p-2 group-[.active]:bg-teal-400 "
                            >
                                <AiOutlineHeart
                                    className=" pointer-events-none group-hover:fill-red-600  group-[.active]:fill-red-600"
                                    size={24}
                                />
                                <span className=" sr-only">
                                    add to favorite
                                </span>
                            </Btn>
                        </div>
                    </div>
                </>
            </m.div>
        </>
    );
};
