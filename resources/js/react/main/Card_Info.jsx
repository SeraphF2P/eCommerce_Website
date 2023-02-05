import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Info = styled(Box)`
    position: absolute;
    left: 0;
    top: 160px;
    color: ${({ theme }) => {
        return theme.text;
    }};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 1rem;
    width: 100%;
    max-height: 60px;
    background: ${({ theme }) => {
        return theme.card;
    }};
    &:hover {
        height: 100%;
        p {
           
            overflow: visible;
            -webkit-line-clamp: inherit;
            -webkit-box-orient: vertical;
        }
    }
    p {
        transition: all 1s linear;
        display: box;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 0;
    }
`;
export default ({ song_name, singer }) => {
    return (
        <>
            <Info className="info">
                <p>{song_name}</p>
                <p>{singer}</p>
            </Info>
        </>
    );
};
