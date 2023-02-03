import React, { useMemo } from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Box } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";

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
    background: linear-gradient(
        170deg,
        rgba(58, 56, 56) 0%,
        rgb(31, 31, 31) 100%
    );
    color: ${({ theme }) => {
        return theme.text;
    }};

    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    box-shadow: 4px 4px 8px -2px rgba(0, 0, 0, 0.4);
    animation: ${appear} 0.4s linear forwards
        ${({ list_index }) => {
            return list_index * 0.4;
        }}s;

    img {
        width: 64px;
        height: 64px;
    }
    .info {
        text-align: end;
        padding: 8px;
        p {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 0;
            &:hover {
            }
        }
    }
    .remove_from_fav_btn {
        background: lightblue;
        height: 100%;
    }
    &:hover {
        scale: 1.05;
        box-shadow: 5px 5px 9px #7d7d7d, -5px -5px 9px #ffffff;
        z-index: 11;
    }
`;
export default ({
    removeFromFavorite,
    list_index,
    song,
    setsongIndexs,
    size,
}) => {
    const {
        name: singer,
        images,
        song: song_name,
        subArray_index,
        index,
    } = song;
    const download_img = useMemo(() => {
        return <img src={images[size].url} alt="placeholder" loading="lazy" />;
    }, []);
    return (
        <Div
            list_index={list_index}
            onClick={() => {
                setsongIndexs({ subArray_index, index });
            }}
        >
            {download_img}
            <div className="info">
                <p>{song_name}</p>
                <p>{singer}</p>
            </div>
            <button
                className="remove_from_fav_btn"
                onClick={() => {
                    removeFromFavorite();
                }}
            >
                <AiOutlineDelete size={24} />
            </button>
        </Div>
    );
};
