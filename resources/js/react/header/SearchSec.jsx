import React from "react";

import { BiSearchAlt } from "react-icons/bi";
export default () => {
    return (
        <>
            <div className="  flex w-48 items-center justify-between xsm:w-64 sm:w-72">
                <input
                    placeholder="search"
                    type="text"
                    className=" w-full rounded-tl-sm rounded-bl-sm"
                />
                <button className=" bg-black  shadow-white/25 rounded-tr-sm rounded-br-sm shadow-inner" >
                    <BiSearchAlt color="white" size={40} />
                </button>
            </div>
        </>
    );
};
