import React, { useEffect, useMemo, useRef, useState } from "react";
import Card from "./Card";
import data from "../../data.json";
import { AnimatePresence, motion as m } from "framer-motion";

import Btn from "../../components/Btn";
import ColorPaletteBtn from "./ColorPaletteBtn";
import useScrollSensore from "../../hooks/useScrollSensore";
import ProductsOptionsBtns from "./ProductsOptionsBtns";

export default () => {
    const elementRef = useScrollSensore({
        forward: "transform:translateY(0);",
        inReverse: "transform:translateY(-120px);",
        onHold: "transform:translateY(0);",
    });

    const [appliedColor, setAppliedColor] = useState("");
    const [appliedType, setAppliedType] = useState("");
    const filteredByType = useMemo(() => {
        if (appliedType) {
            return data.filter((data) => {
                return data.type == appliedType;
            });
        } else {
            return data;
        }
    }, [appliedType]);
    const innerCarousel = useRef(null);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(
            innerCarousel.current.scrollWidth -
                innerCarousel.current.offsetWidth
        );
    }, []);
    return (
        <>
            <main className="  relative min-h-screen bg-slate-200 pt-20">
                <section
                    ref={elementRef}
                    className={`remove_scroll_bar fixed z-10 flex h-10 w-full items-center justify-center  bg-neutral-400 p-4 transition-transform  duration-1000`}
                >
                    <m.div
                        ref={innerCarousel}
                        drag="x"
                        dragConstraints={{
                            right: width + 80,
                            left: -width - 80,
                        }}
                        className=" relative z-10 flex items-center justify-center gap-2"
                    >
                        <ProductsOptionsBtns setAppliedType={setAppliedType} />
                        <ColorPaletteBtn
                            appliedColor={appliedColor}
                            setAppliedColor={setAppliedColor}
                        />
                    </m.div>
                </section>
                <AnimatePresence>
                    <m.section
                        layout
                        initial={{ opacity: 0 }}
                        transition={{ ease: "linear" }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key="cardContainer"
                        className=" mx-auto  flex max-w-screen-lg flex-wrap justify-center gap-x-8 gap-y-4   pt-16  sm:gap-8  "
                    >
                        {filteredByType &&
                            filteredByType.map((info, ind) => {
                                return info.themes.map((product, index) => {
                                    return (
                                        <>
                                            {appliedColor == "" ||
                                            appliedColor == product.color ? (
                                                <AnimatePresence
                                                    key={
                                                        "ap" + ind + "-" + index
                                                    }
                                                >
                                                    <Card
                                                        {...info}
                                                        {...product}
                                                        key={ind + "-" + index}
                                                    />
                                                </AnimatePresence>
                                            ) : (
                                                ""
                                            )}
                                        </>
                                    );
                                });
                            })}
                    </m.section>
                </AnimatePresence>
            </main>
        </>
    );
};
