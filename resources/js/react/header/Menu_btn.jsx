import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const transform = (transY = 0, rot = 0, scalex = 1) => {
    return `transform:translateY(${transY}px) rotate(${rot}deg) scaleX(${scalex});`;
};
const Styles = styled(Box)`
    position: fixed;
    top: 1rem;
    right: 2rem;
    width: 2.5rem;
    height: 1.5rem;
    padding: 1rem;
    background-color: transparent;
    z-index: 40;
    span {
        z-index: -1;
        background: ${({ theme }) => {
            return theme.text;
        }};
        width: 100%;
        height: 4px;
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: center center;
        transition: transform 1s linear, width 1s linear, rotate 1s linear 1s,
            background 1s;
        &:first-child {
        }
        &:nth-child(2) {
            ${transform(12.8)};
        }
        &:last-child {
            ${transform(12.8 * 2)}
        }
    }
    &[data-anim="true"] {
        span:first-child {
            ${transform(8, 45)}
        }
        span:nth-child(2) {
            ${transform(8, 0, 0)}
        }
        span:last-child {
            ${transform(8, -45)}
        }
    }
`;
export default ({ setvisiabality, data_anim }) => {
    useEffect(() => {
        if (data_anim == true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [data_anim]);
    return (
        <>
            <Styles
                key={"menu_btn"}
                component="button"
                aria-controls="primary_navigation"
                aria-label="menu_btn"
                data-anim={data_anim.toString()}
                onClick={() => {
                    setvisiabality(data_anim == "true" ? "false" : "true");
                }}
            >
                <div>
                    <span key={"span_1"} />
                    <span key={"span_2"} />
                    <span key={"span_3"} />
                </div>
                <span className="v_hidden">Menu</span>
            </Styles>
        </>
    );
};
