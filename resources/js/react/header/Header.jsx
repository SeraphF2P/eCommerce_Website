import React, { useMemo, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useScrollSensore } from "../../my/my";
import Nav from "./Nav";
import Search_sec from "./Search_sec";
import { useCurrentSongUpdate } from "../DataProvider";

const Div = styled(Box)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 64px;
    width: 100%;
    background: ${({ theme }) => {
        return theme.header;
    }};
    color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 1rem 3px rgb(0, 0, 0, 0.1), 0 0 1rem -3px rgb(0, 0, 0, 0.1);
    transition: transform 0.8s linear;
`;
export default () => {
    const elementRef = useScrollSensore({
        from: "transform :translateY(0px)",
        to: "transform :translateY(-64px)",
    });

    const setsongIndexs = useCurrentSongUpdate();
    return (
        <>
            <Div component="header" ref={elementRef}>
                <Nav setsongIndexs={setsongIndexs} />
                <Search_sec setsongIndexs={setsongIndexs} />
            </Div>
        </>
    );
};
