import React, { useEffect } from "react";
import Card from "./Card";
import data from "../dataBase.json";
export default () => {
    useEffect(() => {
        const newUrl = window.location.href.split("?")[0];
        history.pushState({}, "", newUrl);
    }, []);
    return (
        <>
            <main className="  relative bg-slate-200 pt-20">
                <section className="   mx-auto flex max-w-screen-lg flex-wrap justify-center gap-4  p-4  sm:gap-8  ">
                    {data &&
                        data.map((info, index) => {
                            return (
                                <>
                                    <Card index={index} info={info} />
                                </>
                            );
                        })}
                </section>
            </main>
        </>
    );
};
