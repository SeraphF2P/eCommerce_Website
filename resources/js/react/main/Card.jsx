import React, { useEffect, useId, useRef } from "react";
import Btn from "../Global-Files/Btn";
import { RiAddLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { useOnScreen } from "../../../../my/my";
import { Link } from "react-router-dom";
import { useCartItemsState, useFavItemsState } from "../ListsContext";
import { itemAddRemoveToggler } from "../../../../my/formatters";
import { motion as m } from "framer-motion";

export default ({ product, index, seller_name, id }) => {
    const ele = useRef(null);
    const isOpenScreen = useOnScreen(ele);
    const { setFavItem } = useFavItemsState();
    const { setCartItem } = useCartItemsState();
    const addToCart = useRef(null);
    const addToFav = useRef(null);

    const { product_name, product_image_url, price, theme } = product;

    useEffect(() => {
        if (
            JSON.parse(localStorage.getItem("cart")).some((item) => {
                return item.id == id + "-" + theme;
            }) &&
            isOpenScreen
        ) {
            addToCart.current.classList.add("bg-teal-400");
            addToCart.current.classList.add("active");
        }
        if (
            JSON.parse(localStorage.getItem("fav")).some((item) => {
                return item.id == id + "-" + theme;
            }) &&
            isOpenScreen
        ) {
            addToFav.current.classList.add("bg-teal-400");
            addToFav.current.classList.add("active");
        }
    }, [isOpenScreen]);
    function openProductInfoPage() {
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
                onClick={openProductInfoPage}
                className=" relative  h-96 w-64 cursor-pointer  rounded-lg bg-emerald-500/10   shadow "
            >
                <>
                    <Link
                        className=" sr-only"
                        ref={ele}
                        to={"/product/" + id + "-" + theme}
                    ></Link>
                    <div className=" relative h-3/5 max-w-full overflow-hidden rounded-tr-lg  rounded-tl-lg ">
                        <img
                            className="duration-400 h-full w-full object-cover transition-transform hover:scale-105"
                            src={product_image_url}
                            alt="product"
                        />
                    </div>

                    <div className="  flex  h-2/5 w-full  flex-col gap-4 p-4     ">
                        <div className="   w-4/5 truncate capitalize ">
                            {product_name}
                        </div>
                        <div className="   w-3/5 truncate text-sm capitalize text-gray-500  ">
                            {seller_name}
                        </div>

                        <div
                            className=" absolute -left-6 bottom-4 w-24 
                                rounded-tr rounded-br rounded-tl-full  rounded-bl-full bg-emerald-400 
                        px-4 py-2 text-right  capitalize before:absolute
                        before:left-0 before:bottom-0 before:z-10
                        before:block before:h-12 before:w-6 before:rounded-tl-full 
                         before:rounded-bl-full  before:bg-gradient-to-l  before:from-emerald-400/90
                          before:to-emerald-500 "
                        >
                            {price}$
                        </div>
                        <div className=" absolute bottom-0 right-0 grid h-32 w-32 grid-cols-2 grid-rows-2 p-2 ">
                            <Btn
                                onToggle={[["active", "bg-teal-400"]]}
                                ref={addToCart}
                                onClick={() => {
                                    itemAddRemoveToggler(
                                        "cart",
                                        setCartItem,
                                        id + "-" + theme
                                    );
                                }}
                                shape="outlined"
                                className="group row-start-2  flex h-14 w-14 items-center justify-center bg-white/70    "
                            >
                                <RiAddLine
                                    className="pointer-events-none fill-black group-hover:fill-blue-400 group-[.active]:fill-blue-400 "
                                    size={24}
                                />
                                <span className=" sr-only">add to cart</span>
                            </Btn>
                            <Btn
                                ref={addToFav}
                                onToggle={[["active", "bg-teal-400"]]}
                                onClick={() => {
                                    itemAddRemoveToggler(
                                        "fav",
                                        setFavItem,
                                        id + "-" + theme
                                    );
                                }}
                                shape="outlined"
                                className=" group  col-start-2 flex h-14 w-14 items-center justify-center bg-white/70  "
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
