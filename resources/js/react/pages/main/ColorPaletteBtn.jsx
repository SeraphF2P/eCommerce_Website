import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";
import useActive from "../../hooks/useActive";
import useOnScreen from "../../hooks/useOnScreen";
import Btn from "../../components/Btn";
import data from "../../data.json";

export default ({ setAppliedColor, appliedColor }) => {
    const colorFilters = useMemo(() => {
        let subArray = [];
        data.map((item) => {
            return item.themes.map((theme) => {
                if (subArray.includes(theme.color) == false) {
                    subArray.push(theme.color);
                }
            });
        });
        return subArray;
    }, []);
    const btnsRefs = useRef([]);
    const [open, setOpen] = useState(false);
    const openBtn = useRef(null);
    const isBtnOnScreen = useOnScreen(openBtn);
    useEffect(() => {
        if (isBtnOnScreen == false) {
            setOpen(false);
        }
    }, [isBtnOnScreen]);
    useEffect(() => {
        if (open && appliedColor) {
            let activeBtn = btnsRefs.current.find((btn) => {
                return btn.style.backgroundColor == appliedColor;
            });
            activeBtn.classList.add("ring-4");
        }
    }, [open]);
    const reset = useActive({ refs: btnsRefs, addClass: "ring-4" }, [open]);
    return (
        <>
            <div className=" relative">
                <Btn
                    ref={openBtn}
                    onClick={() => {
                        setOpen((prev) => {
                            return !prev;
                        });
                    }}
                >
                    <IoColorPaletteOutline
                        className=" text-red-500 "
                        size={32}
                    />
                </Btn>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: "-100%",
                                pointerEvents: "none",
                            }}
                            animate={{
                                opacity: 1,
                                y: "0",
                                pointerEvents: "auto",
                            }}
                            exit={{
                                opacity: 0,
                                y: "-100%",
                                pointerEvents: "none",
                            }}
                            transition={{ duration: 0.6 }}
                            key="color pallete options"
                            className={` absolute top-12  -left-[86px] -z-10 flex w-52 flex-wrap gap-4  rounded bg-white  p-4`}
                        >
                            {colorFilters &&
                                colorFilters.map((color, index) => {
                                    return (
                                        <>
                                            <button
                                                ref={(el) =>
                                                    (btnsRefs.current[index] =
                                                        el)
                                                }
                                                key={color}
                                                onClick={() => {
                                                    setAppliedColor((prev) => {
                                                        return prev == color
                                                            ? ""
                                                            : color;
                                                    });
                                                }}
                                                className="  relative rounded-full bg-white p-4  shadow shadow-black/60 ring-teal-300  transition-transform hover:scale-110 "
                                                style={{
                                                    background: color,
                                                }}
                                            ></button>
                                        </>
                                    );
                                })}
                            <Btn
                                className=" h-8 w-16 rounded shadow  "
                                onClick={() => {
                                    reset();
                                    setAppliedColor("");
                                }}
                            >
                                reset
                            </Btn>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};
