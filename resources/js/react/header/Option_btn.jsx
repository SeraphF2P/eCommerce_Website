import React from "react";

import { styled, keyframes } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useThemeUpdate } from "../DataProvider";
const appear = keyframes`
    100%{
    transform: scale(1);
    opacity: 1;
    }

`;

const StyledBtn = styled(Button)`
    &.styledBtn {
        background: ${({ theme_op }) => {
            return theme_op.theme_btn;
        }};
        box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.3);
        background-repeat: no-repeat;
        background-size: 25px;
        background-position: center;
        min-width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        /* transform: scale(0.1);
        opacity: 0.1;
        animation: ${appear} 1.5s linear forwards; */
    }
`;
export default ({ theme_op }) => {
    const setcurrent_theme = useThemeUpdate();
    return (
        <>
            {theme_op.primary && (
                <StyledBtn
                    className="styledBtn"
                    theme_op={theme_op}
                    onClick={() => {
                        setcurrent_theme(theme_op);
                    }}
                >
                    <span className="v_hidden" >
                        button for
                        {theme_op.theme_btn}
                        theme
                    </span>
                </StyledBtn>
            )}
        </>
    );
};
