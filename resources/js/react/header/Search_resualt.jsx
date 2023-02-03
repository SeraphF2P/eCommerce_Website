import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Search_card from "./Search_card";
const Styles = styled(Box)`
    position: absolute;
    top: 64px;
    z-index: 10;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
export default ({ resualt, albums, setsongIndexs }) => {
    
    return (
        <>
            {resualt && (
                <Styles key={"Search_resualt"}>
                    {resualt.map((info, ind) => {
                        const { track_ind, song_ind } = info;
                        return (
                            <>
                                <div
                                    className="search_card"
                                    key={`searchcard num :${track_ind} ${song_ind}`}
                                >
                                    <Search_card
                                        song={albums[track_ind][song_ind]}
                                        index={ind}
                                        size={0}
                                        track_ind={track_ind}
                                        song_ind={song_ind}
                                        setsongIndexs={setsongIndexs}
                                    />
                                </div>
                            </>
                        );
                    })}
                </Styles>
            )}
        </>
    );
};
