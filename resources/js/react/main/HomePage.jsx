import React from "react";
import Card from "./Card";
import data from "../data.json";
import { motion as m } from "framer-motion";
import { randomNumBetween } from "../../../../my/other";
export default () => {
    // let asd = () => {
    //     return data.map((item) => {
    //         let num1 = randomNumBetween(1, 9);
    //         let num2 = randomNumBetween(0, 9);
    //         return { ...item, in_stock: num1 + "" + num2 };
    //     });
    // };
    // console.log(asd());
    return (
        <>
            <main className="  relative bg-slate-200 pt-20">
                <m.section
                    layout
                    initial={{ opacity: 0 }}
                    transition={{ delayChildren: 10, ease: "linear" }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="   mx-auto flex max-w-screen-lg flex-wrap justify-center gap-4  p-4  sm:gap-8  "
                >
                    {data &&
                        data.map((info, index) => {
                            return (
                                <>
                                    <Card index={index} info={info} />
                                </>
                            );
                        })}
                </m.section>
            </main>
        </>
    );
};
