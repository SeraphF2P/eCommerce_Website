import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../Global-Files/Btn";
import { BsTrash } from "react-icons/bs";
export default ({ info, index, setCartItem }) => {
    const ele = useRef(null);
    const [numOfitems, setnumOfitems] = useState(1);

    const { product_image_url, product_name, seller_name, price, id } = info;
    return (
        <>
            <div
                onClick={() => {
                    return ele.current.click();
                }}
                key={index}
                className={` 
                  flex  h-24 w-full animate-fade-up cursor-pointer items-center justify-between  gap-2 overflow-hidden rounded bg-white/80 text-black shadow  hover:scale-105`}
            >
                <Link ref={ele} className=" sr-only" to={`product/${id}`} />
                <div className="h-24 w-24 overflow-hidden   ">
                    <img
                        src={product_image_url}
                        alt="in cart product"
                        className=" h-full w-full"
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
                                }
                            }}
                            className=" flex  h-8 w-8 cursor-pointer items-center justify-center rounded text-2xl shadow hover:scale-105 hover:bg-rose-400"
                        >
                            -
                        </Btn>
                    </div>
                    <Btn
                        onClick={() => {
                            const localVals = JSON.parse(
                                localStorage.getItem("cart")
                            );
                            const index = localVals.findIndex((item) => {
                                return item.id == id;
                            });
                            setCartItem((prev) => {
                                return [
                                    ...prev.slice(0, index),
                                    ...prev.slice(index + 1),
                                ];
                            });
                        }}
                        shape="outlined"
                        className=" px-3 py-3"
                    >
                        <BsTrash size={24} />
                        <span className=" sr-only">remove from cart</span>
                    </Btn>
                </div>
            </div>
        </>
    );
};
