import React, { useEffect, useId, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocalStorage } from "../../my/customHooks/useStorage";

const Card_op = styled(Box)`
    position: absolute;
    top: 2%;
    left: 160px;
    height: 96%;
    width: 80px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    z-index: 0;
    background: linear-gradient(
        170deg,
        rgba(58, 56, 56) 0%,
        rgb(31, 31, 31) 100%
    );
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    transition: transform 0.5s linear;
    transform: translateX(-100%);
    .iconWrapper {
        cursor: pointer;
        img {
            width: 48px;
            height: 48px;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
    .play_btn {
        position: relative;
        width: 48px;
        height: 48px;
        overflow: hidden;
        border-radius: 50%;
        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 48px;
            height: 48px;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
    .add_to_favorites {
        transition: scale 0.6s linear;
        &:hover {
            scale: 1.2;
            .favoriteIcon {
                fill: red;
            }
        }
        &.active {
            .favoriteIcon {
                fill: red;
                scale: 1.2;
            }
        }
        .favoriteIcon {
            fill: white;
            z-index: -1;
        }
    }
`;

export default ({ subArray_index, index, setsongIndexs }) => {
    const ele = useRef();
    const id = useId();
    const [value, setValue, remove] = useLocalStorage("fav" + id, undefined);
    useEffect(() => {
        if (value != null) {
            ele.current.classList.add("active");
        } else {
            ele.current.classList.remove("active");
        }
    }, [window.localStorage.length, value]);
    return (
        <>
            <Card_op className="card_options">
                <span className="iconWrapper">
                    <img src="images\svg\kapap.svg" alt="see more" />
                </span>
                <button
                    className="play_btn"
                    onClick={() => {
                        setsongIndexs({
                            subArray_index,
                            index,
                        });
                    }}
                >
                    <img
                        src="https://th.bing.com/th/id/OIP.1edra2uOTcjw1nk2uCWA_wHaHU?pid=ImgDet&rs=1"
                        alt="play button"
                    />
                </button>
                <IconButton
                    className="add_to_favorites"
                    aria-label="add to favorites"
                    ref={ele}
                    onClick={(e) => {
                        e.target.classList.toggle("active");
                        if (value == undefined) {
                            setValue({ subArray_index, index });
                        } else {
                            remove(id);
                        }
                    }}
                >
                    <FavoriteIcon
                        className="favoriteIcon"
                        style={{ pointerEvents: "none" }}
                    />
                </IconButton>
            </Card_op>
        </>
    );
};
