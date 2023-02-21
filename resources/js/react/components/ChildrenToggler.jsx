import React, { useId, useState } from "react";
import Btn from "./Btn";
export default ({
    BtnContent = "click",
    forceOpen = false,
    children,
    ...props
}) => {
    const [open, setOpen] = useState(forceOpen ? true : false);
    const id = useId();
    return (
        <>
            <Btn
                {...props}
                onClick={() => {
                    setOpen((prev) => {
                        return !prev;
                    });
                }}
                aria-controls={"#childrenToggler" + id}
            >
                <>{BtnContent}</>
            </Btn>
            <div
                id={"childrenToggler" + id}
                aria-expanded={open}
                aria-hidden={!open}
            >
                {open && children({ setOpen, open })}
            </div>
        </>
    );
};
