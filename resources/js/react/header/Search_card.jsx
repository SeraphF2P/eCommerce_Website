import React, { useMemo } from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Box } from "@mui/material";
const transform = (translateY, scale = 1) => {
    return `transform:translateY(${translateY}) scale(${scale});`;
};
const appear = keyframes`
    0%{
        
        ${transform("-100%")}
        z-index: 20;
    }
    100%{
        ${transform("0")}
        opacity: 1;
    }
    99%{
        z-index: 10;
    }
`;

const Div = styled(Box)`
    background: ${({ theme }) => {
        return theme.primary;
    }};
    background: linear-gradient(
        170deg,
        rgba(58, 56, 56) 0%,
        rgb(31, 31, 31) 100%
    );
    color: ${({ theme }) => {
        return theme.text;
    }};

    position: relative;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    box-shadow: 4px 4px 8px -2px rgba(0, 0, 0, 0.4);
    animation: ${appear} 0.4s linear forwards
        ${({ index }) => {
            return index * 0.4;
        }}s;
    img {
        width: 64px;
        height: 64px;
    }
    .info {
        text-align: end;
        padding: 16px;
    }
    &:hover {
        scale: 1.05;
        box-shadow: 5px 5px 9px #7d7d7d, -5px -5px 9px #ffffff;
        z-index: 11;
    }
`;
export default ({ song, setsongIndexs, size, index, track_ind, song_ind }) => {
    const { name: singer, images, song: song_name } = song;
    const download_img = useMemo(() => {
        return <img src={images[size].url} alt="placeholder" loading="lazy" />;
    }, []);
    return (
        <>
            <Div
                index={index}
                onClick={() => {
                    setsongIndexs({
                        subArray_index: track_ind,
                        index: song_ind,
                    });
                }}
            >
                {download_img}
                <div className="info">
                    {song_name}
                    <br />
                    {singer}
                </div>
            </Div>
        </>
    );
};
