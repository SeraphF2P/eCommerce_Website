import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Modal, Box } from "@mui/material";
import Favorite_card from "./Favorite_card";
import { HiMusicalNote } from "react-icons/hi2";

const Styles = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
    .modale_body {
        position: relative;
        border-radius: 16px;
        width: min(400px, 100%);
        height: 500px;
        background: linear-gradient(
            170deg,
            rgb(56, 56, 56) 35%,
            transparent 55%,
            ${({ theme }) => {
                    return theme.second;
                }}
                100%
        );
        padding: 32px 8px;
        .cards_container {
            position: relative;
            display: grid;
            grid-template-rows: repeat(auto-fill, 64px);
            background: linear-gradient(0deg, transparent, #ffffffe8);
            height: 100%;
            gap: 8px;
            width: calc(100% - 32px);
            margin-inline: auto;
            padding: 40px 8px;
            overflow: scroll;
        }
        .list_header {
            background: whitesmoke;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
            .icon_header {
                fill: ${({ theme }) => {
                    return theme.second;
                }};
                width: 60px;
                height: 60px;
            }
            &::before {
                content: "";
                border: 25px solid
                    ${({ theme }) => {
                        return theme.second;
                    }};
                width: 150px;
                height: 150px;
                border-radius: 50%;
                position: absolute;
                top: -25px;
                left: 50%;
                transform: translateX(-50%);
                box-shadow: 0 0 0.6rem 3px rgb(0, 0, 0, 0.2),
                    0 0 0.6rem -3px rgb(0, 0, 0, 0.2);
            }
        }
    }
`;
export default ({ handleOpen, handleClose, albums, setsongIndexs }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites(
            Object.entries(window.localStorage).map((val) => {
                if (val[0].slice(0, 3) == "fav") {
                    return { key: val[0], ...JSON.parse(val[1]) };
                }
            })
        );
    }, [window.localStorage.length]);
    return (
        <>
            <Styles
                component={"section"}
                key={"favorite list"}
                open={handleOpen}
                onClose={() => handleClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modale_body ">
                    <div className="list_header">
                        <HiMusicalNote className="icon_header" />
                    </div>
                    <div className="cards_container remove_scroll_bar">
                        {favorites &&
                            favorites.map((item, ind) => {
                                return (
                                    <>
                                        {
                                            <Favorite_card
                                                removeFromFavorite={() => {
                                                    window.localStorage.removeItem(
                                                        item.key
                                                    );

                                                    setFavorites(
                                                        (prevState) => {
                                                            let subArray =
                                                                prevState.splice(
                                                                    ind,
                                                                    1
                                                                );
                                                            return subArray;
                                                        }
                                                    );
                                                }}
                                                list_index={ind}
                                                song={
                                                    albums[item.subArray_index][
                                                        item.index
                                                    ]
                                                }
                                                setsongIndexs={setsongIndexs}
                                                size={0}
                                                key={
                                                    item.subArray_index +
                                                    "" +
                                                    item.index
                                                }
                                            />
                                        }
                                    </>
                                );
                            })}
                    </div>
                </Box>
            </Styles>
        </>
    );
};
