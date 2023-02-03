import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Option_btn from "./Option_btn";
import { themes } from "../DataProvider";

const Options_board = styled(Box)`
    position: relative;
    padding: 16px;
    height: 40px;
    max-width: 50%;
    width: 100%;
    min-width: fit-content;
    border-radius: 5px;
    background: rgb(255, 255, 255, 0.9);
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    margin-inline: auto;
    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        width: 300px;
        height: 100%;
        transform: translateX(-50%);
        background: rgb(255, 255, 255, 0.2);
        box-shadow: 4px 0 1rem -1px rgb(0, 0, 0, 0.2);
    }
`;
export default () => {
    return (
        <>
            <Options_board component="ul" key={"theme options"}>
                {themes &&
                    themes.map((theme, ind) => {
                        return (
                            <>
                                <Option_btn
                                    theme_op={theme}
                                    key={theme.theme_color + ind}
                                />
                            </>
                        );
                    })}
            </Options_board>
        </>
    );
};
