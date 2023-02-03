import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

import { useWindowSize } from "../../my/my";
import { tP } from "../../my/ui";

const StyledSection = styled(Box)`
    color: ${tP("text")};
    border-radius: 5px;
    position: relative;
    width: min(992px, 100%);
    .splide {
        .splide__arrow svg {
            display: none;
        }
        .splideSlide {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 16px;
        }
    }
    .sec_title {
        margin-inline: auto;
        padding: 8px;
        width: fit-content;
        text-align: center;
        background: transparent;
        backdrop-filter: blur(3px);
        font-family: "Euclid Circular A", sans-serif;
    }
`;
export default ({ track, setsongIndexs }) => {
    const sec = useRef();
    const windowSize = useWindowSize();
    const [numofcards, setnumofcards] = useState(1);
    useEffect(() => {
        setnumofcards(Math.floor(sec.current.offsetWidth / 330));
    }, [windowSize]);
    return (
        <>
            <StyledSection component={"section"} ref={sec}>
                <h2 className="sec_title">
                    {`Track ${track[0].subArray_index + 1}`}
                </h2>
                <Splide
                    className="splide"
                    key={`Track :${track[0].subArray_index}`}
                    options={{
                        rewind: true,
                        width: "100%",
                        gap: "0px",
                        perPage: `${numofcards}`,
                        type: "loop",
                        pagination: false,
                        overflow: "visible",
                    }}
                >
                    {track.map((song) => {
                        return (
                            <>
                                <SplideSlide
                                    key={`card num :${song.preview_url}`}
                                    className="splideSlide"
                                >
                                    <Card
                                        song={song}
                                        size={1}
                                        setsongIndexs={setsongIndexs}
                                    />
                                </SplideSlide>
                            </>
                        );
                    })}
                </Splide>
            </StyledSection>
        </>
    );
};
