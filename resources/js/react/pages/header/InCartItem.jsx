import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../components/Btn";
import { BsTrash } from "react-icons/bs";
import {
    formatCurrency,
    itemAddRemoveToggler,
    itemUpdater,
} from "../../utility_function/formatters";
import { useCartItemsState } from "../../context/CartListContext";

export default ({ uniqueId, title, price, user, count }) => {
    const nav = useNavigate();
    const { setCartItem } = useCartItemsState();

    return (
        <div
            onClick={() => {
                nav("product/" + uniqueId);
            }}
            className={` 
                  flex  h-24 w-full cursor-pointer items-center justify-between   gap-2 overflow-hidden rounded bg-white/80 text-black shadow  `}
        >
            <div className="h-24 w-24  overflow-hidden   ">
                <img
                    src="https://source.unsplash.com/random/160x160"
                    alt="in cart product"
                    className=" max-w-full m-0 aspect-w-1 aspect-h-1 object-cover"
                />
            </div>
            <div className=" flex h-full w-28 prose-p:m-0  flex-col  overflow-hidden p-2 capitalize prose-p:text-clip prose-p:line-clamp-1">
                <p>{formatCurrency(price)}</p>
                <p>{title}</p>
                <p>{(user ?? name).name}</p>
            </div>
            <div className="flex items-center gap-2 p-2">
                <div className=" p-1">{count}</div>
                <div className=" flex  w-9 flex-col justify-between gap-y-2 py-2">
                    <Btn
                        onClick={() => {
                            itemUpdater(
                                "cart",
                                setCartItem,
                                { uniqueId },
                                "uniqueId",
                                { count: count + 1 }
                            );
                        }}
                        className=" flex  h-8 w-8 cursor-pointer items-center justify-center rounded text-2xl shadow hover:scale-105 hover:bg-teal-400"
                    >
                        +
                    </Btn>
                    <Btn
                        onClick={() => {
                            if (count > 0) {
                                itemUpdater(
                                    "cart",
                                    setCartItem,
                                    { uniqueId },
                                    "uniqueId",
                                    { count: count - 1 }
                                );
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
                            { uniqueId },
                            "uniqueId"
                        );
                    }}
                    shape="outlined"
                    className=" px-3 py-3"
                >
                    <BsTrash size={24} />
                    <span className=" sr-only">remove from cart</span>
                </Btn>
            </div>
        </div>
    );
};
