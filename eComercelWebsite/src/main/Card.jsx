import React, { useEffect, useId, useRef } from "react";
import Btn from "../components/Btn";
import { RiAddLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { useOnScreen } from "/my/my";
import { Link } from "react-router-dom";
import { useCartItemsState, useFavItemsState } from "../ListsContext";
import { itemAddRemoveToggler } from "/my/formatters";

export default ({ info, index }) => {
    const ele = useRef(null);
    const isOpenScreen = useOnScreen(ele);
    const { setFavItem } = useFavItemsState();
    const { setCartItem } = useCartItemsState();
    const addToCart = useRef(null);
    const addToFav = useRef(null);
    const { product_image_url, product_name, seller_name, price, id } = info;
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
            <Link className=" sr-only" ref={ele} to={"/product/" + id}></Link>
            <div
                key={index}
                onClick={clickHandler}
                className="  h-80  w-64 overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-2"
            >
                <>
                    <div className=" relative h-3/4 max-w-full  overflow-hidden ">
                        <img
                            className="duration-400 h-full w-full object-cover transition-transform hover:scale-105"
                            src={product_image_url}
                            alt="product"
                        />
                        <div className=" absolute left-0 bottom-0 w-full truncate bg-gradient-to-r from-teal-500/90 to-teal-300/10 py-2  px-4 text-2xl  ">
                            {product_name}
                        </div>
                    </div>
                    <div className="  flex h-1/4 w-full items-center  justify-between gap-2 bg-white   px-2 ">
                        <div>
                            <div className=" w-32 truncate text-2xl capitalize  ">
                                {seller_name}
                            </div>
                            <div>{price}$</div>
                        </div>
                        <div className=" flex gap-2">
                            <Btn
                                ref={addToCart}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.target.classList.toggle("active");
                                    e.target.classList.toggle("bg-teal-400");
                                    itemAddRemoveToggler(
                                        "cart",
                                        setCartItem,
                                        id
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
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.target.classList.toggle("active");
                                    e.target.classList.toggle("bg-teal-400");
                                    itemAddRemoveToggler("fav", setFavItem, id);
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
            </div>
        </>
    );
};
