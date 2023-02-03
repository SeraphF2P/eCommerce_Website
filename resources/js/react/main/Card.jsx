import React, { useEffect, useMemo } from "react";
import Card_op from "./Card_op";
import Card_Info from "./Card_Info";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useInterSectionObserver } from "../../my/my";
const Div = styled(Box)`
    position: relative;
    width: 320px;
    height: 240px;
    .main_body {
        position: relative;
        width: 240px;
        height: 240px;
        transition: transform 0.4s linear, box-shadow 0.4s linear;
        box-shadow: 2px 2px 16px -1px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        z-index: 1;
        img {
            max-width: 100%;
            border-radius: 10px;
            width: 240px;
            height: 240px;
            z-index: 10;
        }
        &:hover {
            transform: scale(1.05);
            box-shadow: 4px 4px 8px -2px rgba(0, 0, 0, 0.4);
        }
    }
    &:hover {
        .card_options {
            transform: translateX(80px);
            opacity: 1;
        }
    }
`;
export default ({ song, setsongIndexs, size }) => {
    const { name: singer, images, song: song_name } = song;
    const download_img = useMemo(() => {
        return <img src={images[size].url} alt="placeholder" loading="lazy" />;
    }, []);
    return (
        <>
            <Div  className="my_card">
                <>
                    <div className="main_body">
                        {download_img}
                        <Card_Info singer={singer} song_name={song_name} />
                    </div>
                    <Card_op
                        subArray_index={song.subArray_index}
                        index={song.index}
                        setsongIndexs={setsongIndexs}
                    />
                </>
            </Div>
        </>
    );
};
