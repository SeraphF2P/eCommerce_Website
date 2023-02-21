import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Btn from "../../components/Btn";
import dataBase from "../../data.json";
import { motion as m, AnimatePresence } from "framer-motion";
import { fadeUp } from "../../components/animate";
import tinycolor from "tinycolor2";

function colorIntoHex(color) {
    if ((color.startsWith("#") && color.length == 7) || color.length == 9) {
        return color;
    } else {
        return tinycolor(color).toHexString();
    }
}

export default () => {
    const nav = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token") == undefined) {
            nav("/access-denied");
        }
    }, []);
    const uniqePath = useParams();
    const id = +uniqePath.id.split("-")[0];
    const theme = +uniqePath.id.split("-")[1];
    const product = useMemo(() => {
        return dataBase.find((item) => {
            return item.id == id;
        });
    }, []);
    const [currentTheme, setCurrentTheme] = useState(product.themes[theme - 1]);
    const { price, product_name, description, seller_name } = product;
    const { product_image_url, color, in_stock } = currentTheme;
    return (
        <>
            <section
                style={{
                    background:
                        colorIntoHex(color).length == 7
                            ? colorIntoHex(color) + "22"
                            : colorIntoHex(color),
                }}
                className={`flex   h-screen  w-screen items-center justify-center bg-opacity-20`}
            >
                <m.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className={` mx-5 flex h-[540px]  w-full max-w-screen-sm flex-col  rounded-md   bg-white/90 shadow-lg sm:flex-row md:mx-auto`}
                >
                    <div className="  relative h-2/5 w-full overflow-hidden rounded-tr rounded-tl  sm:h-full sm:w-1/2 sm:rounded-bl sm:rounded-tr-none">
                        <AnimatePresence>
                            <m.img
                                key={product_image_url + color}
                                initial={{ opacity: 0, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{
                                    opacity: 0,
                                    x: "-100%",
                                }}
                                transition={{ duration: 1 }}
                                className=" absolute top-0 left-0 h-full w-full object-cover"
                                src={product_image_url}
                                alt="product image"
                            />
                        </AnimatePresence>
                    </div>
                    <div className="   flex h-3/5 flex-col p-4 sm:h-full sm:w-1/2 sm:justify-center sm:gap-4 ">
                        <div className=" flex w-full items-center  justify-between p-2">
                            <div className=" max-w-[50%]   capitalize ">
                                {seller_name}
                            </div>

                            <Btn
                                shape="filled"
                                className={`px-4 py-2  capitalize `}
                            >
                                order now
                            </Btn>
                        </div>
                        <div className=" p-2 capitalize">
                            on stack :
                            <span className=" text-zinc-500"> {in_stock} </span>
                        </div>
                        <div className=" relative flex gap-2 p-2">
                            {product.themes &&
                                product.themes.map((theme, ind) => {
                                    return (
                                        <>
                                            <Btn
                                                key={theme.product_image_url}
                                                style={{
                                                    background: theme.color,
                                                }}
                                                onClick={() => {
                                                    setCurrentTheme(
                                                        product.themes[ind]
                                                    );
                                                }}
                                                className=" h-8 w-8 rounded-full shadow shadow-github"
                                            >
                                                <span className=" sr-only">
                                                    product theme {theme.color}
                                                </span>
                                            </Btn>
                                        </>
                                    );
                                })}
                            <div
                                className=" absolute -right-10 top-4 w-24 
                                rounded-tl rounded-bl rounded-tr-full  rounded-br-full bg-emerald-400 
                        px-4 py-2 capitalize  before:absolute before:right-0
                        before:bottom-0 before:z-10 before:block
                        before:h-12 before:w-6 before:rounded-tr-full before:rounded-br-full 
                         before:bg-gradient-to-r  before:from-emerald-400/90  before:to-emerald-500 "
                            >
                                {price}$
                            </div>
                        </div>
                        <div className=" overflow-hidden p-2">
                            <h3>descriptions</h3>
                            <section className=" remove_scroll_bar h-full max-h-60 overflow-scroll rounded bg-gray-200/90 p-2 leading-8 ">
                                <h4 className=" font-mono font-bold capitalize">
                                    {product_name}
                                </h4>
                                <p>{description}</p>
                            </section>
                        </div>
                    </div>
                </m.div>
            </section>
        </>
    );
};
