import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const Styles = styled(Box)`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: ${({ width }) => {
        return width + "px";
    }};
    max-width: 100%;
    transition: width 1s linear;
    background: red;
    border-radius: 3px;
`;
export default ({ isplaying, duration, isWorking }) => {
    const [width, setWidth] = useState(0);
    const timelineContainer = useRef();
    const percent = 300 / duration;

    useEffect(() => {
        setTimeout(() => {
            if (width < 300 && isplaying) {
                setWidth((prevState) => prevState + percent);
            } else {
                isWorking(false);
            }
        }, 1000);
    }, [isplaying, width]);
    useEffect(() => {
        setWidth(0);
    }, [duration]);
    return (
        <>
            <Styles
                width={width}
                ref={timelineContainer}
                key={"Progress_line"}
            ></Styles>
        </>
    );
};
