import React from "react";
import PaymentForm from "./PaymentForm";
import Btn from "../../components/Btn";
import { useCartItemsState } from "../../context/CartListContext";
import { formatCurrency } from "../../utility_function/formatters";
import { useNavigate } from "react-router";
import { motion as m } from "framer-motion";
import { pageTransition } from "../../components/animate";
export default () => {
    const { cartItem, setCartItem } = useCartItemsState();
    const nav = useNavigate();
    return (
        <>
            <m.main
                variants={pageTransition}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="relative  flex w-screen items-center justify-center  bg-white lg:h-screen"
            >
                <div className="m-2 grid w-full  max-w-screen-lg grid-cols-10 overflow-hidden rounded-sm  shadow-xl xxsm:m-4 lg:mx-auto">
                    <div className="col-span-full p-4 px-4 md:col-span-6 ">
                        <div className="mx-auto w-full max-w-lg">
                            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                                Secure Checkout
                                <span className="mt-2 block h-1 w-10 bg-primary sm:w-20"></span>
                            </h1>
                            <PaymentForm />

                            <p className="mt-10 text-center text-sm font-semibold text-gray-500">
                                By placing this order you agree to the
                                <a
                                    href="#"
                                    className="whitespace-nowrap text-teal-500 underline hover:text-teal-400"
                                >
                                    Terms and Conditions
                                </a>
                            </p>
                            <Btn
                                type="submit"
                                shape="filled"
                                className="mt-4 inline-flex w-full items-center justify-center rounded py-2 px-4
                                 text-base font-semibold tracking-wide text-white  
                                   sm:text-lg"
                            >
                                Place Order
                            </Btn>
                        </div>
                    </div>
                    <div className="relative col-span-full flex flex-col  p-4 pl-8 pr-4 md:col-span-4 ">
                        <h2 className="sr-only">Order summary</h2>
                        <div>
                            <img
                                src="https://images.pexels.com/photos/7438545/pexels-photo-7438545.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
                        </div>
                        <div className=" relative">
                            <div className="remove_scroll_bar relative  h-56  w-full   overflow-y-scroll p-2">
                                <ul className=" flex flex-col items-center justify-center gap-2">
                                    {cartItem.map(
                                        ({
                                            uniqueId,
                                            title,
                                            user,
                                            count,
                                            price,
                                        }) => {
                                            return (
                                                <>
                                                    <div
                                                        key={uniqueId}
                                                        onClick={() => {
                                                            nav(
                                                                "product/" +
                                                                    uniqueId
                                                            );
                                                        }}
                                                        className="flex h-24  w-full cursor-pointer items-center justify-between overflow-hidden rounded bg-white/80 text-black shadow"
                                                    >
                                                        <div className="h-24 w-24  overflow-hidden   ">
                                                            <img
                                                                src="https://source.unsplash.com/random/160x160"
                                                                alt="in cart product"
                                                                className="  m-0 h-full w-full  object-cover"
                                                            />
                                                        </div>
                                                        <div className=" flex h-full flex-col   justify-center overflow-hidden   capitalize prose-p:m-0 ">
                                                            <p>
                                                                {formatCurrency(
                                                                    price
                                                                )}
                                                            </p>
                                                            <p>{title}</p>
                                                            <p>
                                                                {user
                                                                    ? user.name
                                                                    : ""}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center justify-center p-4 text-xl ">
                                                            {count}
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                            <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                            <div className="space-y-2">
                                <p className="flex justify-between text-lg font-bold text-white">
                                    <span>Total price:</span>
                                    <span>
                                        {formatCurrency(
                                            JSON.parse(
                                                localStorage.getItem(
                                                    "totalPrice"
                                                )
                                            )
                                        )}
                                    </span>
                                </p>
                                <p className="flex justify-between text-sm font-medium text-white">
                                    <span>+ delevary fee: 10%</span>
                                    <span>
                                        {formatCurrency(
                                            JSON.parse(
                                                localStorage.getItem(
                                                    "totalPrice"
                                                )
                                            ) * 1.1
                                        )}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="relative mt-10 text-white">
                            <h3 className="mb-5 text-lg font-bold">Support</h3>
                            <p className="text-sm font-semibold">
                                +01 653 235 211
                                <span className="font-light">
                                    (International)
                                </span>
                            </p>
                            <p className="mt-1 text-sm font-semibold">
                                support@nanohair.com
                                <span className="font-light">(Email)</span>
                            </p>
                            <p className="mt-2 text-xs font-medium">
                                Call us now for payment related issues
                            </p>
                        </div>
                        <div className="relative mt-10 flex">
                            <p className="flex flex-col">
                                <span className="text-sm font-bold text-white">
                                    Money Back Guarantee
                                </span>
                                <span className="text-xs font-medium text-white">
                                    within 30 days of purchase
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </m.main>
        </>
    );
};
