import React, { useMemo, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Background_animation from "./Background_animation";
import Section from "./Section";
import Music_Player from "./Music_Player";
import { useCurrentSong, useCurrentSongUpdate, useData } from "../DataProvider";

const Styles = styled(Box)`
    background: ${({ theme }) => {
        return theme.primary;
    }};
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 64px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
   
`;
export default () => {
    const albums = useData();
    const songIndexs = useCurrentSong();
    const setsongIndexs = useCurrentSongUpdate();
    return (
        <>
            <Styles component="main" key="main">
                <Background_animation />
                {albums &&
                    albums.map((album) => {
                        return (
                            <>
                                <Section
                                    setsongIndexs={setsongIndexs}
                                    key={`Track : ${album.subArray_index + 1}`}
                                    track={album}
                                />
                            </>
                        );
                    })}

                <Music_Player albums={albums} songIndexs={songIndexs} />
            </Styles>
        </>
    );
};
