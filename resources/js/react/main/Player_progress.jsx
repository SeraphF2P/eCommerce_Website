import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Progress_line from "./Progress_line";
const Styles = styled(Box)`
    position: relative;
    width: 300px;
    height: 6px;
    border-radius: 3px;
    background: gray;
`;

export default ({ isplaying, duration, isWorking }) => {
    return (
        <>
            <Styles key={"Player_progress"}>
                <Progress_line
                    isWorking={isWorking}
                    isplaying={isplaying}
                    duration={duration}
                />
            </Styles>
        </>
    );
};
