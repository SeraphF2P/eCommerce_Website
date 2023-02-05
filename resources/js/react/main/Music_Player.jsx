import React, { useState, useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import {
    FaRegPlayCircle,
    FaRegPauseCircle,
    FaFastForward,
    FaFastBackward,
} from "react-icons/fa";
import { styled, keyframes } from "@mui/material/styles";
import { Box } from "@mui/material";
import Player_progress from "./Player_progress";
import { tP } from "../../my/ui";
import useEventListener from "../../my/customHooks/useEventListener";
import { qsa } from "../../my/domUtils";

const slideOut = keyframes`
to{
        translate: 0 100%;
        opacity: 0;
}
`;
const slideIn = keyframes`
from{
    translate: -100% 0;
    top: 0;
    left: 0;
    bottom: auto;
  
}
to{
    top: 0;
    left: 0;
    translate:0 0;
    opacity: 1;
    bottom: auto;
}
`;
const Styles = styled(Box)`
    position: fixed;
    bottom: 0;
    margin-inline: auto;
    &.pageEnd_anim {
        animation: ${slideOut} 0.6s linear, ${slideIn} 1s linear 0.6s forwards;
    }

    z-index: 999;
    width: min(500px, 100%);

    .player {
        height: 220px;
        padding: 16px;
        border-top: 1px solid rgb(141, 141, 141);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background: ${tP("player")};
        color: white;
        background: hsl(0, 0%, 0%, 0.6);
        backdrop-filter: blur(40px);
        .title {
            font-size: inherit;
            text-align: center;
        }
        .controls {
            display: flex;
            align-items: center;
            gap: 8px;
            .btn {
                font-size: 40px;
                cursor: pointer;
                fill: ${tP("player_icon")};
                &:hover {
                    fill: ${tP("text")};
                }
            }
            .pp {
                font-size: 80px;
            }
        }
    }
`;
function condition() {

    return scrollY + 1000 >= document.body.scrollHeight;
}
export default ({ albums, songIndexs }) => {
    const player = useRef();

    const [isplaying, setisplaying] = useState(false);
    const [songobj, setSongoObj] = useState(albums[0][0]);
    const [duration, setDuration] = useState(0);
    const audioElem = useRef();
    useEventListener("scroll", () => {
        player.current.classList.toggle("pageEnd_anim", condition());
    });
    const next = () => {
        if (songobj.index == albums[songobj.subArray_index].length - 1) {
            setSongoObj(albums[songobj.subArray_index + 1][0]);
        } else {
            setSongoObj(albums[songobj.subArray_index][songobj.index + 1]);
        }
    };
    const preview = () => {
        if (songobj.index == 0 && songobj.subArray_index === 0) {
            setSongoObj(
                albums[albums.length - 1][albums[albums.length - 1].length - 1]
            );
        } else if (songobj.index == 0) {
            setSongoObj(
                albums[songobj.subArray_index - 1][
                    songobj.subArray_index.length - 1
                ]
            );
        } else {
            setSongoObj(albums[songobj.subArray_index][songobj.index - 1]);
        }
    };
    useEffect(() => {
        audioElem.current.currentTime = 0;
        setDuration(audioElem.current.duration);
        setisplaying(false);
    }, [songobj]);
    useEffect(() => {
        setSongoObj(albums[songIndexs.subArray_index][songIndexs.index]);
    }, [songIndexs]);


    return (
        <>
            <Styles ref={player} key={"Music player"}>
                <audio ref={audioElem} src={songobj.preview_url} />
                <div className="player">
                    <div className="title">
                        <p>{songobj.name}</p>
                        <p>{songobj.song}</p>
                    </div>
                    <Player_progress
                        isplaying={isplaying}
                        duration={duration}
                        isWorking={(value) => {
                            setisplaying(value);
                        }}
                    />
                    <IconContext.Provider value={{ className: "btn" }}>
                        <div className="controls">
                            <FaFastBackward onClick={() => preview()} />
                            {isplaying ? (
                                <FaRegPauseCircle
                                    className="pp"
                                    onClick={() => {
                                        audioElem.current.pause();
                                        setisplaying(false);
                                    }}
                                />
                            ) : (
                                <FaRegPlayCircle
                                    className=" pp"
                                    onClick={() => {
                                        audioElem.current.play();
                                        setDuration(audioElem.current.duration);
                                        setisplaying(true);
                                    }}
                                />
                            )}
                            <FaFastForward onClick={() => next()} />
                        </div>
                    </IconContext.Provider>
                </div>
            </Styles>
        </>
    );
};
