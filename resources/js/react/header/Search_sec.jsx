import React, { useContext, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { BsTrash } from "react-icons/bs";
import Search_resualt from "./Search_resualt";
import { useData } from "../DataProvider";
const Search_bar = styled(Box)`
    position: relative;
    height: 24px;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    border-radius: 5px;
    border: 0.5px solid
        ${({ theme }) => {
            return theme.text;
        }};
    color: ${({ theme }) => {
        return theme.text;
    }};
    input {
        color: inherit;
        background: ${({ theme }) => {
            return `${theme.primary}11`;
        }};
        padding-inline: 16px;
    }
    .clear_btn {
        position: absolute;
        right: 0;
        top: 0;
        .trash_icon {
            background: transparent;
            fill: ${({ theme }) => {
                return theme.text;
            }};
        }
    }
`;
export default ({ setsongIndexs }) => {
    const albums = useData();
    const [resualt, setresualt] = useState([]);
    const [input, setInput] = useState([]);
    const input_bar = useRef();
    function inputChangeHandler(e) {
        let input = input_bar.current.value;
        setInput(input);
        let subArray = [];
        if (input != "") {
            loop: for (
                let track_ind = 0;
                track_ind < albums.length;
                track_ind++
            ) {
                const track = albums[track_ind];
                for (let song_ind = 0; song_ind < track.length; song_ind++) {
                    if (subArray.length == 5) {
                        break loop;
                    }
                    const song = track[song_ind];
                    let singer = song.name.toLowerCase();
                    let song_name = song.song.toLowerCase();
                    if (song_name.match(input) || singer.match(input)) {
                        subArray.push({
                            track_ind,
                            song_ind,
                        });
                    }
                }
            }
        }
        setresualt(subArray);
    }
    // console.log("search_sec");
    return (
        <>
            <Search_bar key={"search sec"}>
                <input
                    ref={input_bar}
                    value={input}
                    placeholder="Search"
                    onChange={() => {
                        inputChangeHandler();
                    }}
                />
                {input != "" && (
                    <button
                        classinput="clear_btn"
                        onClick={() => {
                            setInput("");
                            setresualt([]);
                        }}
                    >
                        <BsTrash size={24} className="trash_icon" />
                    </button>
                )}
            </Search_bar>
            <Search_resualt
                albums={albums}
                setsongIndexs={setsongIndexs}
                resualt={resualt}
            />
        </>
    );
};
