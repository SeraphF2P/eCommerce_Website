import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../components/Btn";
import { AnimatePresence, motion as m } from "framer-motion";
import { BsTrash } from "react-icons/bs";
import { itemAddRemoveToggler } from "../../utility_function/formatters";
import { cartListItem } from "../../components/animate";
export default ({
    product_name,
    seller_name,
    price,
    id,
    theme,
    product_image_url,
    setCartItem,
    setTotalPrice,
}) => {
    const nav = useNavigate();
    const [numOfitems, setnumOfitems] = useState(1);

    useEffect(() => {
        return () => {
            console.log(numOfitems);
            setTotalPrice((prev) => {
                return prev - +price * numOfitems;
            });
        };
    }, []);
    return (
        <>
            <AnimatePresence>
                <m.div
                    variants={cartListItem}
                    whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                    key={product_image_url}
                    onClick={() => {
                        nav("product/" + id + "-" + theme);
                    }}
                    className={` 
                  flex  h-24 w-full  cursor-pointer items-center justify-between  gap-2 overflow-hidden rounded bg-white/80 text-black shadow  `}
                >
                    <div className="h-24 w-24 overflow-hidden   ">
                        <img
                            src={product_image_url}
                            alt="in cart product"
                            className=" h-full w-full object-cover"
                        />
                    </div>
                    <div className=" flex  h-full w-28 flex-col overflow-hidden p-2">
                        <div className=" text-clip capitalize  text-inverted line-clamp-1  ">
                            {product_name}
                        </div>
                        <div className=" text-clip capitalize  text-inverted line-clamp-1 ">
                            {price}$
                        </div>
                        <div className=" text-clip capitalize  text-inverted line-clamp-1 ">
                            {seller_name}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-2">
                        <div className=" p-1">{numOfitems}</div>
                        <div className=" flex  w-9 flex-col justify-between gap-y-2 py-2">
                            <Btn
                                onClick={() => {
                                    setnumOfitems((prev) => {
                                        return prev + 1;
                                    });
                                    setTotalPrice((prev) => {
                                        return prev + +price;
                                    });
                                }}
                                className=" flex  h-8 w-8 cursor-pointer items-center justify-center rounded text-2xl shadow hover:scale-105 hover:bg-teal-400"
                            >
                                +
                            </Btn>
                            <Btn
                                onClick={() => {
                                    if (numOfitems > 0) {
                                        setnumOfitems((prev) => {
                                            return prev - 1;
                                        });
                                        setTotalPrice((prev) => {
                                            return prev - +price;
                                        });
                                    }
                                }}
                                className=" flex  h-8 w-8 cursor-pointer items-center justify-center rounded text-2xl shadow hover:scale-105 hover:bg-rose-400"
                            >
                                -
                            </Btn>
                        </div>
                        <Btn
                            onClick={() => {
                                itemAddRemoveToggler(
                                    "cart",
                                    setCartItem,
                                    id + "-" + theme
                                );
                            }}
                            shape="outlined"
                            className=" px-3 py-3"
                        >
                            <BsTrash size={24} />
                            <span className=" sr-only">remove from cart</span>
                        </Btn>
                    </div>
                </m.div>
            </AnimatePresence>
        </>
    );
};
