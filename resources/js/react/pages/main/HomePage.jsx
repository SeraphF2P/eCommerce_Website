import React, { useEffect, useMemo, useRef, useState } from "react";
import Card from "./Card";
import { AnimatePresence, motion as m } from "framer-motion";
import useScrollSensore from "../../hooks/useScrollSensore";
import ProductsOptionsBtns from "./ProductsOptionsBtns";
import { toast } from "react-toastify";
import axios from "axios";
import { Host } from "../../host";
import { pageTransition } from "../../components/animate";

export default () => {
    const elementRef = useScrollSensore({
        forward: "transform:translateY(0);",
        inReverse: "transform:translateY(-120px);",
        onHold: "transform:translateY(0);",
    });
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get(`${Host}api/post/view-all`, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            if (res.status === 200) {
                if (res.data.success === 1) {
                    setData(res.data.posts);
                    setAppliedType("");
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
    };
    const [appliedType, setAppliedType] = useState(null);
    const filteredByType = useMemo(() => {
        if (appliedType) {
            return data.filter((data) => {
                return data.category.name == appliedType;
            });
        } else {
            return data;
        }
    }, [appliedType]);
    const innerCarousel = useRef(null);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        getData();

        setWidth(
            innerCarousel.current.scrollWidth -
                innerCarousel.current.offsetWidth
        );
    }, []);
    return (
        <>
            <m.main className="  relative min-h-screen bg-slate-200 p-8 pt-20">
                <section
                    ref={elementRef}
                    className={`remove_scroll_bar fixed left-0 z-10 flex h-10 w-full items-center justify-center  bg-gray-700/90 p-4 transition-transform  duration-1000`}
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
                    </m.div>
                </section>

                <m.section
                    layout
                    initial={{ opacity: 0 }}
                    transition={{ ease: "linear" }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="cardContainer"
                    className=" mx-auto  flex flex-wrap justify-center gap-x-8 gap-y-4 pt-16   sm:gap-8  sm:px-12  "
                >
                    <AnimatePresence>
                        {filteredByType &&
                            filteredByType.map((info) => {
                                return <Card {...info} key={info.uniqueId} />;
                            })}
                    </AnimatePresence>
                </m.section>
            </m.main>
        </>
    );
};
