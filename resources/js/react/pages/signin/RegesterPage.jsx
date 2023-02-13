import React, { useState } from "react";
import LoginPage from "./LoginPage";
import { motion as m, AnimatePresence } from "framer-motion";
import SignUp from "./SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewPage from "../../components/NewPage";
import {
    fadeInItem,
    loginSlide,
    overlayer,
    signUpSlide,
} from "../../components/animate";

export default () => {
    const [haveAnAccount, setHaveAnAccount] = useState(true);

    return (
        <>
            <NewPage className=" flex items-center  ">
                <ToastContainer />
                <div
                    className={`relative flex   h-[480px] w-full overflow-hidden  rounded  shadow-lg xxsm:mx-4 xsm:mx-auto xsm:w-full xsm:max-w-screen-md  md:mx-auto`}
                >
                    <img
                        className=" absolute top-0 left-0 h-full w-full object-cover"
                        src="images/signUpBg.jpg"
                        alt=""
                    />
                    <div className=" absolute top-0 left-0 flex h-full w-full  ">
                        <div className=" h-full w-1/2  ">
                            <AnimatePresence>
                                {haveAnAccount == false && (
                                    <>
                                        <m.div
                                            key="sing up"
                                            initial="hidden"
                                            animate="show"
                                            exit="hidden"
                                            variants={overlayer}
                                            className="hidden h-full w-full flex-col  items-center justify-center bg-gray-800/40  p-4    xsm:flex"
                                        >
                                            <div className="overflow-hidden">
                                                <m.h2
                                                    variants={fadeInItem}
                                                    className=" text-white "
                                                >
                                                    join us
                                                </m.h2>
                                            </div>
                                            <div className="overflow-hidden">
                                                <m.p
                                                    variants={fadeInItem}
                                                    className=" text-white"
                                                >
                                                    all you need and more in one
                                                    place
                                                </m.p>
                                            </div>
                                        </m.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className=" h-full w-1/2     ">
                            <AnimatePresence>
                                {haveAnAccount && (
                                    <>
                                        <m.div
                                            key="log in"
                                            initial="hidden"
                                            animate="show"
                                            exit="hidden"
                                            variants={overlayer}
                                            className="hidden h-full w-full flex-col  items-center justify-center bg-gray-800/40  p-4    xsm:flex"
                                        >
                                            <div className="overflow-hidden">
                                                <m.h2
                                                    variants={fadeInItem}
                                                    className=" text-white "
                                                >
                                                    welcome
                                                </m.h2>
                                            </div>
                                            <div className="overflow-hidden">
                                                <m.p
                                                    variants={fadeInItem}
                                                    className=" text-white"
                                                >
                                                    all you need and more in one
                                                    place
                                                </m.p>
                                            </div>
                                        </m.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    <AnimatePresence initial={false}>
                        {haveAnAccount ? (
                            <m.section
                                variants={loginSlide}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                transition={{ duration: 1 }}
                                key="LoginPage"
                                className="  absolute top-0  left-0 flex h-full w-full flex-col   items-center justify-center bg-slate-100/80  p-4   shadow-md xsm:w-1/2"
                            >
                                <LoginPage
                                    setHaveAnAccount={setHaveAnAccount}
                                />
                            </m.section>
                        ) : (
                            <m.section
                                variants={signUpSlide}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                transition={{ duration: 1 }}
                                key="SignUp"
                                className="  absolute top-0 left-[-100%] flex h-full w-full flex-col items-center   justify-center bg-slate-100/80 p-4  shadow-md  xsm:left-0  xsm:w-1/2"
                            >
                                <SignUp setHaveAnAccount={setHaveAnAccount} />
                            </m.section>
                        )}
                    </AnimatePresence>
                </div>
            </NewPage>
        </>
    );
};
