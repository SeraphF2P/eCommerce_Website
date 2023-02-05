import React from "react";
export default ({ openMenu, setOpenMenu, setOpenCart, openCart }) => {
    return (
        <>
            <button
                type="button"
                className={`${openMenu && "rotate-90"}  ${
                    openCart ? "z-0" : "z-50"
                }
                relative h-6 w-10 p-1 transition-transform delay-500 duration-500 `}
                onClick={() => {
                    setOpenMenu((pre) => !pre);
                    setOpenCart(false);
                }}
            >
                <div>
                    <span
                        className={`${
                            openMenu
                                ? "translate-y-2 rotate-45 scale-x-100"
                                : "translate-y-0 rotate-0 scale-x-100"
                        } btn_line absolute top-0 left-0 -z-10 h-1 w-full origin-center rounded-sm bg-white transition-[width,transform,background] duration-1000`}
                    />
                    <span
                        className={`${
                            openMenu
                                ? "translate-y-2 rotate-0 scale-x-0"
                                : "translate-y-[12.8px] scale-x-100"
                        } btn_line absolute top-0 left-0 -z-10 h-1 w-full origin-center rounded-sm bg-white transition-[width,transform,background] duration-1000 `}
                    />
                    <span
                        className={`${
                            openMenu
                                ? "translate-y-2 -rotate-45 scale-x-100"
                                : "translate-y-[25.6px]"
                        } btn_line absolute top-0 left-0 -z-10 h-1 w-full origin-center rounded-sm bg-white transition-[width,transform,background] duration-1000`}
                    />
                </div>
                <span className=" sr-only">Menu</span>
            </button>
        </>
    );
};
